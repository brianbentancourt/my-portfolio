import { useEffect, useState } from "react";
import Title from "@/components/Title";
import {
    Grid,
    Snackbar,
    Backdrop,
    CircularProgress
} from "@mui/material";
import { listAll, getDownloadURL, ref } from 'firebase/storage'
import { storage } from "@/firebase/config";
import CoursesImage from "@/components/CoursesImage";
import CourseModal from "@/components/CourseModal";
import Alert from "@/components/Alert";


export default function Courses() {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState({})
    const [courseOpen, setCourseOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [notificationOpen, setNotificationOpen] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState('')
    const [notificationSeverity, setNotificationSeverity] = useState('success')

    useEffect(() => {
        const fetchCourseDataFromFirebaseStorage = async () => {
            try {
                setLoading(true)
                const coursesRef = ref(storage, '/courses')
                const courseList = await listAll(coursesRef);

                const promises = courseList.items.map(async (item) => {
                    const courseUrl = await getDownloadURL(item);
                    return {
                        name: item.name,
                        url: courseUrl,
                    };
                });

                const courseData = await Promise.all(promises);
                setCourses(courseData);
                setLoading(false)
            } catch (error) {
                console.log(error);
                setNotificationSeverity('error')
                setNotificationMessage('An error occurred, please try again')
                setNotificationOpen(true)
                setLoading(false)
            }
        };

        fetchCourseDataFromFirebaseStorage();
    }, [])

    const handleOpenCourse = (course) => {
        setSelectedCourse(course)
        setCourseOpen(true)
    }

    return (
        <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            style={{
                padding: '5vw'
            }}
        >
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={notificationOpen} autoHideDuration={6000} onClose={() => setNotificationOpen(false)}>
                <Alert onClose={() => setNotificationOpen(false)} severity={notificationSeverity} sx={{ width: '100%' }}>
                    {notificationMessage}
                </Alert>
            </Snackbar>
            <CourseModal open={courseOpen} setOpen={setCourseOpen} course={selectedCourse} />
            <Grid item xs={12} style={{ padding: '0 15vw' }}>
                <Title>Courses</Title>
            </Grid>
            <Grid item xs={12} style={{ padding: '0 1vw' }}>
                <CoursesImage courses={courses} openCourse={handleOpenCourse} />
            </Grid>
        </Grid>
    )
}
