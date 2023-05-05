import React from 'react'
import {
    Grid,
    Typography
} from "@mui/material";
import { TypeAnimation } from 'react-type-animation';


export default function About({ isBiggerThanMd }) {
    const ref1 = React.createRef();
    const ref2 = React.createRef();
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

    const showCursorAnimation = (show, ref) => {
        if (!ref.current) {
            return;
        }

        const el = ref.current;
        if (show) {
            el.classList.add(CURSOR_CLASS_NAME);
        } else {
            el.classList.remove(CURSOR_CLASS_NAME);
        }
    };

    return (
        <Grid container spacing={2} style={{ paddingLeft: isBiggerThanMd ? 200 : 45, paddingTop: 70, paddingRight: 50 }}>
            <Grid item xs={12}>
                <TypeAnimation
                    ref={ref1}
                    sequence={[
                        'Hi, my name is', // Types 'One'
                        200, // Waits 0s
                        () => showCursorAnimation(false, ref1),
                    ]}
                    className={CURSOR_CLASS_NAME}
                    wrapper="span"
                    cursor={false}
                    repeat={1}
                    style={{ fontSize: (isBiggerThanMd ? '2em' : '7vw'), display: 'inline-block' }}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2" style={{ fontWeight: 'bold', fontSize: (isBiggerThanMd ? 75 : '12vw') }}>Brian Bentancourt</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2" style={{ fontSize: (isBiggerThanMd ? 65 : '10vw') }}>I build things for the web.</Typography>
            </Grid>
            <Grid item xs={11} sm={12} md={10} lg={6}>
                <TypeAnimation
                    ref={ref2}
                    className={CURSOR_CLASS_NAME}
                    sequence={[
                        'As a passionate software developer, I am constantly striving to create innovative and efficient solutions for my clients. With a strong focus on coding best practices and user experience, I am dedicated to delivering top-quality products that meet the needs of end-users and exceed their expectations. My drive to constantly learn and improve has helped me stay ahead of industry trends and develop cutting-edge software applications. I am eager to bring my passion and expertise to your organization and contribute to its success.',
                        500, // Waits 0s
                        () => showCursorAnimation(false, ref2),
                    ]}
                    wrapper="span"
                    cursor={false}
                    repeat={1}
                    speed={70}
                    style={{ fontSize: '20px', display: 'inline-block', color: 'gray', minHeight: 400 }}
                />
            </Grid>
            <style global jsx>{`
                .custom-type-animation-cursor::after {
                    content: '|';
                    animation: cursor 1.1s infinite step-start;
                }
                @keyframes cursor {
                    50% {
                    opacity: 0;
                    }
                }
                `}
            </style>
        </Grid>
    )
}
