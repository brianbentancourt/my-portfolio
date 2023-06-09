import {
    useTheme,
    useMediaQuery,
    Grid,
    ImageList,
    ImageListItem
} from '@mui/material';
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';


export default function CoursesImage({ courses, openCourse }) {
    const theme = useTheme();
    const isBiggerThanMd = useMediaQuery(theme.breakpoints.up('md'));
    const isSmallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));

    const [dimentions, setDimentions] = useState({ width: '', height: '' })

    useEffect(() => {
        if (isSmallerThanSm)
            return setDimentions({ width: '40vw', height: '50vw' })
        if (isBiggerThanMd)
            return setDimentions({ width: '20vw', height: '20vw' })

        // if between sm and md
        return setDimentions({ width: '40vw', height: '40vw' })
    }, [isBiggerThanMd, isSmallerThanSm])

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ margin: 'auto' }}
        >
            {courses.map((course, index) => (
                <Grid item key={course.name + index}>
                    <Image
                        src={`${course.url}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${course.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={course.name}
                        loading="lazy"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                            width: dimentions.width,
                            height: dimentions.height,
                            padding: 5,
                            objectFit: 'cover',
                            cursor: 'pointer'
                        }}
                        onClick={() => openCourse(course)}
                    />
                </Grid>
            ))}
        </Grid>

    )
}
