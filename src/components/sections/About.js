import React, { useState, useEffect } from 'react'
import {
    Grid,
    Typography
} from "@mui/material";
import { TypeAnimation } from 'react-type-animation';
import { useSpring, animated } from '@react-spring/web';

export default function About({ isBiggerThanMd }) {
    const ref1 = React.createRef();
    const ref2 = React.createRef();
    const ref3 = React.createRef();
    // const ref4 = React.createRef();
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';
    const [refNames, setRefNames] = useState({
        ref1: false,
        ref2: false,
        ref3: false,
        // ref4: false
    })
    const [showText, setShowText] = useState(false);

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

    const handleDoneTextAnimation = (show, ref, refName) => {
        showCursorAnimation(show, ref)
        setRefNames({ ...refNames, [refName]: true })
    }

    useEffect(() => {
        // Mostrar el componente después de 5 segundos
        const timeoutId = setTimeout(() => setShowText(true), 5000);

        // Limpieza del temporizador para evitar fugas de memoria
        return () => clearTimeout(timeoutId);
    }, []);

    const springProps = useSpring({
        from: { opacity: 0, transform: 'translateY(20%)' },
        to: { opacity: showText ? 1 : 0, transform: showText ? 'translateY(0%)' : 'translateY(-5%)' },
        config: { duration: 800 },
    });

    return (
        <Grid container spacing={2} style={{ paddingLeft: isBiggerThanMd ? 200 : 45, paddingTop: 70, paddingRight: 50, minHeight: '80vh' }}>
            <Grid item xs={12}>
                <TypeAnimation
                    ref={ref1}
                    sequence={[
                        'Hi, my name is', // Types 'One'
                        200, // Waits 0s
                        () => handleDoneTextAnimation(false, ref1, 'ref1'),
                    ]}
                    className={CURSOR_CLASS_NAME}
                    wrapper="span"
                    cursor={false}
                    repeat={1}
                    style={{ fontSize: (isBiggerThanMd ? '2em' : '7vw'), display: 'inline-block' }}
                />
            </Grid>
            <Grid item xs={12}>
                {
                    refNames.ref1 &&
                    <TypeAnimation
                        ref={ref2}
                        sequence={[
                            'Brian Bentancourt', // Types 'One'
                            200, // Waits 0s
                            () => handleDoneTextAnimation(false, ref2, 'ref2'),
                        ]}
                        className={CURSOR_CLASS_NAME}
                        wrapper="span"
                        cursor={false}
                        repeat={1}
                        style={{ fontWeight: 'bold', fontSize: (isBiggerThanMd ? 75 : '12vw') }}
                    />
                }

                {/* <Typography variant="h2" style={{ fontWeight: 'bold', fontSize: (isBiggerThanMd ? 75 : '12vw') }}>Brian Bentancourt</Typography> */}
            </Grid>
            <Grid item xs={12}>
                {
                    refNames.ref2 &&
                    <TypeAnimation
                        ref={ref3}
                        sequence={[
                            'I build things for the web.', // Types 'One'
                            200, // Waits 0s
                            () => handleDoneTextAnimation(false, ref3, 'ref3'),
                        ]}
                        className={CURSOR_CLASS_NAME}
                        wrapper="span"
                        cursor={false}
                        repeat={1}
                        style={{ fontSize: (isBiggerThanMd ? 65 : '10vw') }}
                    />
                }
                {/* <Typography variant="h2" style={{ fontSize: (isBiggerThanMd ? 65 : '10vw') }}>I build things for the web.</Typography> */}
            </Grid>
            <Grid item xs={11} sm={12} md={10} lg={6} style={{ minHeight: '30vw' }}>
                {/* {
                    refNames.ref3 &&
                    <TypeAnimation
                        ref={ref4}
                        className={CURSOR_CLASS_NAME}
                        sequence={[
                            `As a passionate software developer, I am constantly striving to create innovative and efficient solutions for my clients. 
                            With a strong focus on coding best practices and user experience, I'm dedicated to delivering top-quality products that meet the needs of end-users and exceed their expectations.
                            My impulse to constantly learn and improve has helped me stay ahead of industry trends and develop cutting-edge software applications.
                            I'm eager to bring my passion and expertise to your organization and contribute to its success.`,
                            500, // Waits 0s
                            () => handleDoneTextAnimation(false, ref4, 'ref4'),
                        ]}
                        wrapper="span"
                        cursor={false}
                        repeat={1}
                        speed={70}
                        style={{ fontSize: '20px', display: 'inline-block', color: 'gray', minHeight: 400 }}
                    />
                } */}
                <animated.div style={springProps}>
                    <Typography variant="p" style={{ fontSize: '20px', display: 'inline-block', color: 'gray', minHeight: 400 }}>
                        {
                            `As a passionate software developer, I am constantly striving to create innovative and efficient solutions for my clients. 
                        With a strong focus on coding best practices and user experience, I'm dedicated to delivering top-quality products that meet the needs of end-users and exceed their expectations.
                        My impulse to constantly learn and improve has helped me stay ahead of industry trends and develop cutting-edge software applications.
                        I'm eager to bring my passion and expertise to your organization and contribute to its success.`
                        }
                    </Typography>
                </animated.div>
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
