import {
    Grid,
    Avatar,
    Typography
} from '@mui/material';
import ProjectCard from '../ProjectCard'
import { red } from '@mui/material/colors';
import { data } from '../../data/projects.js'
import Title from '../Title';

export default function Projects({ isBiggerThanMd }) {
    return (
        <Grid
            container
            spacing={5}
            justifyContent="space-around"
            alignItems="center"
        // style={{ paddingLeft: isBiggerThanMd ? 200 : 45, paddingTop: 70, paddingRight: 20 }}
        >
            <Grid item xs={12}>
                <Title>My Freelance Projects</Title>
            </Grid>
            {
                data?.map((info, index) =>
                    <Grid
                        key={index}
                        item
                        xs={12}
                        sm={6}
                        md={5}
                        lg={4}
                        container
                        justifyContent="center"
                        alignItems="center"
                        style={{ marginTop: 50 }}
                    >
                        <ProjectCard info={info} />
                    </Grid>
                )
            }

        </Grid>
    )
}
