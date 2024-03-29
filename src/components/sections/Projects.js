import {
    Grid,
    Avatar,
    Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ProjectCard from '../ProjectCard'
import { red } from '@mui/material/colors';
import { data } from '../../data/projects.js'
import Title from '../Title';

export default function Projects({ isBiggerThanMd }) {
    const theme = useTheme()
    const isBiggerThanSm = useMediaQuery(theme.breakpoints.up('sm'))



    return (
        <Grid
            container
            spacing={5}
            justifyContent="space-around"
            alignItems="center"
            // style={{ paddingLeft: isBiggerThanSm ? 140 : 35, paddingTop: 70, paddingRight: 20 }}
            style={{ padding: `70px 4vw` }}
        >
            <Grid item xs={12}>
                <Title>My Freelance Projects</Title>
            </Grid>
            <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="flex-start"
                style={{ padding: '0 10vw', margin: 0 }}
                // style={{
                //     paddingLeft: (matches ? 0 : 35),

                // }}
                spacing={isBiggerThanSm ? 7 : 3}
            >
                {
                    data?.map((info, index) =>
                        <Grid
                            key={index}
                            item
                            xs={12}
                            md={6}
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

        </Grid>
    )
}
