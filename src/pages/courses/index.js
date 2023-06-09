import { useEffect, useState } from "react";
import Title from "@/components/Title";
import {
    Grid,
} from "@mui/material";
import { listAll, getDownloadURL, ref } from 'firebase/storage'
import { storage } from "@/firebase/config";
import CoursesImage from "@/components/CoursesImage";
import CourseModal from "@/components/CourseModal";


export default function Courses() {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState({})
    const [courseOpen, setCourseOpen] = useState(false)

    useEffect(() => {
        const fetchCourseDataFromFirebaseStorage = async () => {
            try {
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
            } catch (error) {
                console.log(error);
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
