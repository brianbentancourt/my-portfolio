import React, { useEffect, useState } from 'react'
import {
    useMediaQuery,
    Drawer,
    Grid,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    IconButton,
    Avatar,
} from '@mui/material';
import { useActiveMenu } from "react-active-menu";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CardTravelOutlinedIcon from '@mui/icons-material/CardTravelOutlined';
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SchoolIcon from '@mui/icons-material/School';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { Link } from "react-scroll"

export function DrawerMenu() {

    const [active, setActive] = useState('')

    const handleSetActive = (id) => setActive(id)

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            open={true}
            onOpen={() => { }}
            onClose={() => { }}
        >
            <Box
                role="presentation"

            >
                <Grid
                    container
                    spacing={4}
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item style={{ margin: 5 }}>
                        <IconButton color="primary">
                            <Avatar sx={{ bgcolor: '#3e53b0' }}>B</Avatar>
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid
                    container
                    spacing={4}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: '90vh' }}
                >
                    <Grid item style={{ margin: 5 }}>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}
                            onSetActive={handleSetActive}

                        >
                            <IconButton color="primary" >
                                {
                                    active == 'home' ? <HomeIcon /> : <HomeOutlinedIcon />
                                }
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}
                            onSetActive={handleSetActive}

                        >
                            <IconButton color="primary" >
                                {
                                    active == 'portfolio' ? <WorkIcon /> : <CardTravelOutlinedIcon />
                                }
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            to="experience"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}
                            onSetActive={handleSetActive}

                        >
                            <IconButton color="primary" >
                                {
                                    active == 'experience' ? <WorkHistoryIcon /> : <WorkHistoryOutlinedIcon />
                                }
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            to="studies"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}
                            onSetActive={handleSetActive}

                        >
                            <IconButton color="primary" >
                                {
                                    active == 'studies' ? <SchoolIcon /> : <SchoolOutlinedIcon />
                                }
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            to="clients"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}
                            onSetActive={handleSetActive}

                        >
                            <IconButton color="primary" >
                                {
                                    active == 'clients' ? <ReviewsIcon /> : <ReviewsOutlinedIcon />
                                }
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-10}
                            duration={500}
                            onSetActive={handleSetActive}

                        >
                            <IconButton color="primary"  >
                                {
                                    active == 'contact' ? <ConnectWithoutContactIcon /> : <ConnectWithoutContactOutlinedIcon />
                                }
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Drawer>

    )
}

export default DrawerMenu

const styles = {
    ListItemIcon
}
