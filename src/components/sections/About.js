import {
    Grid, Typography
} from "@mui/material";
import { TypeAnimation } from 'react-type-animation';


export default function About() {
    return (
        <Grid container spacing={2} style={{ paddingLeft: 200, paddingTop: 70 }}>
            <Grid item xs={12}>
                <TypeAnimation
                    sequence={[
                        'Hi, my name is', // Types 'One'
                        1000, // Waits 1s
                        () => { },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={1}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2" style={{ fontWeight: 'bold' }}>Brian Bentancourt</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2" >I build things for the web.</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <TypeAnimation
                    sequence={[
                        'As a passionate software developer, I am constantly striving to create innovative and efficient solutions for my clients. With a strong focus on coding best practices and user experience, I am dedicated to delivering top-quality products that meet the needs of end-users and exceed their expectations. My drive to constantly learn and improve has helped me stay ahead of industry trends and develop cutting-edge software applications. I am eager to bring my passion and expertise to your organization and contribute to its success.',
                        1000, // Waits 1s
                        () => { },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={1}
                    speed={70}
                    style={{ fontSize: '20px', display: 'inline-block', color: 'gray' }}
                />
            </Grid>
        </Grid>
    )
}
