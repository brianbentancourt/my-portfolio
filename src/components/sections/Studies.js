import Link from 'next/link'
import {
    Grid,
    Typography,
    Button
} from "@mui/material";
import Title from '../Title';

export default function Studies() {

    return (
        <Grid
            container
            spacing={5}
            justifyContent="space-around"
            alignItems="center"
            style={{ padding: '0 11vw' }}
        >
            <Grid item xs={12}>
                <Title>Studies</Title>
            </Grid>
            <Grid item xs={12}>
                <Typography paragraph>
                    I am a professional with a solid background in the programming and application development sector. In 2017, I completed my training as a Programmer Analyst at CTC ORT, which allowed me to acquire a solid foundation in programming and software development.
                </Typography>
                <Typography paragraph>
                    In addition, I have taken several online courses through Platzi, a leading online training platform. During these courses, I have learned skills in application development with ASP .NET, Frontend with React.js, Firebase, and multi-platform application development with Xamarin. This wide range of skills has allowed me to have an integral perspective on application development for multiple platforms.
                </Typography>
                <Typography paragraph>
                    {`Before my training as a Programmer Analyst and the completion of these courses, I obtained a Technological Bachelor's Degree in Computer Science from ITSP in 2012. This provided me with a solid foundation in the fundamentals of computer science and prepared me to continue developing my skills in the field of programming and application development.`}
                </Typography>
                <Typography paragraph>
                    In summary, my solid training and skills acquired through online courses enable me to be prepared to face any challenge in application development on different platforms.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Link href="/courses">
                    <Button >See all of my certificates</Button>
                </Link>
            </Grid>
        </Grid>
    )
}
