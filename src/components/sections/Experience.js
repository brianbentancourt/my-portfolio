import {
    Grid,
    Avatar,
    Typography
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
    timelineOppositeContentClasses
} from '@mui/lab'
import urudata from '../../images/urudata.png'
import actualred from '../../images/actualred.jpg'
import bantotal from '../../images/bantotal.png'
import sonda from '../../images/sonda.png'

export default function Experience({ isBiggerThanMd }) {

    return (
        <Grid cointainer>
            <Grid item xs={12}>
                <Typography variant="h4" color="#556cd6" style={{ paddingLeft: '10%' }}>Work Experience</Typography>
            </Grid>
            <Grid item xs={12}>
                <Timeline
                    position="right"
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2,
                        },
                        paddingRight: isBiggerThanMd ? '15%' : '10%'
                    }}
                >
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0', width: 100 }}
                            variant="body2"
                            color="text.secondary"
                        >
                            2014 - 2016
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{ padding: 0 }}>
                                <Avatar src={urudata.src} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" color="#556cd6">
                                Urudata
                            </Typography>
                            <Typography>As a member of a highly skilled team, I was responsible for providing comprehensive technical support for various IT infrastructures, such as networks, printers, and user access to platforms. Additionally, I ensured the reliability of data through automated backups and promptly resolved any incidents using a ticketing system.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>

                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            2016 - 2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{ padding: 0 }}>
                                <Avatar src={actualred.src} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" color="#556cd6">
                                Actualred
                            </Typography>
                            <Typography>
                                Developing for a main project while collaborating with other projects within the company.
                            </Typography>
                            <Typography>
                                Engaging in self-training to improve programming skills.
                            </Typography>
                            <Typography>
                                {`Successfully deploying the company's first mobile application for a major client using Xamarin.`}
                            </Typography>
                            <Typography>
                                A customer service specialist with excellent problem-solving skills and the ability to organize effective production systems.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            2020 - 2022
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{ padding: 0 }}>
                                <Avatar src={bantotal.src} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" color="#556cd6">
                                Bantotal
                            </Typography>
                            <Typography>
                                During my work experience at Batotal, I had the opportunity to work on the development of financial systems for banks in Peru and Uruguay. I carried out this work remotely, which allowed me to adapt to the demands and particularities of each project.
                            </Typography>
                            <Typography>
                                In each of these projects, I was responsible for implementing and maintaining the financial systems, as well as conducting testing and error correction.
                            </Typography>
                            <Typography>
                                To achieve good performance in each project, I had to learn to handle specific tools and technologies, such as programming languages and databases. Additionally, I had to work as part of a team with other professionals from different areas, such as designers, analysts, and project managers.
                            </Typography>
                            <Typography>
                                Throughout my trajectory at Batotal, I was able to consolidate my skills in the field of financial technology and develop competencies in project management and effective communication with the team. Without a doubt, this experience has allowed me to grow as a professional and acquire valuable knowledge in the field of financial systems.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            variant="body2"
                            color="text.secondary"
                        >
                            Since 2022
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{ padding: 0 }}>
                                <Avatar src={sonda.src} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" color="#556cd6">
                                SONDA
                            </Typography>
                            <Typography>
                                I started my professional career at Sonda motivated by the opportunity to work with cutting-edge technologies and explore new ways to apply them in innovative projects. Since then, I have had the chance to work on several impactful projects, mostly for state clients, where I have been able to put into practice my skills and knowledge acquired within the company.
                            </Typography>
                            <Typography>
                                My work at Sonda has allowed me to stay at the forefront of technological trends, which has motivated me to continue learning and improving my skills. Additionally, I have had the opportunity to work in multidisciplinary teams, which has enriched my experience and allowed me to develop leadership and communication skills.
                            </Typography>
                            <Typography>
                                {`Recently, I took a step forward in my career by assuming the role of team leader in one of the company's most important projects. This experience has taught me the importance of leading by example, fostering collaboration and teamwork, and maintaining clear and effective communication with team members and project stakeholders.`}
                            </Typography>
                            <Typography>
                                In summary, my experience at Sonda has been very enriching, both professionally and personally. It has allowed me to work on challenging and meaningful projects, and has contributed to the development of my skills and competencies in the field of information technology.
                            </Typography>
                            <Typography>
                                {`I am grateful for the opportunity to work at a leading company in its field, with a talented team committed to excellence in their work. I remain excited to continue growing and developing in this exciting field, and I look forward to continuing to contribute to the company's success in the future.`}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                </Timeline>
            </Grid>
        </Grid>
    );
}
