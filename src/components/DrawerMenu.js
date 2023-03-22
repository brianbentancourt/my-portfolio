import React, { useEffect, useState } from 'react'
import {
    useMediaQuery,
    SwipeableDrawer,
    Grid,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    IconButton,
    Avatar,
    Typography,
} from '@mui/material';

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
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-scroll"
import ProfileImg from '../images/profile.jpg'

export function DrawerMenu({ mobile, open, setOpen }) {
    const [active, setActive] = useState('')

    useEffect(() => {
        console.log('DrawerMenu', mobile)
    }, [mobile])

    const handleSetActive = (id) => setActive(id)

    const handleOptionClick = () => setOpen(false)

    const list = () =>
        <Box
            role="presentation"

        >
            {
                mobile &&
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                    style={{ padding: 5 }}
                >
                    <IconButton color="primary" onClick={() => setOpen(false)}>
                        <CloseIcon />
                    </IconButton>
                </Grid>
            }
            <Grid
                container
                spacing={4}
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
            >

                <Grid item style={{ margin: 5 }}>
                    <IconButton color="primary">
                        <Avatar sx={{ bgcolor: '#3e53b0' }} src={ProfileImg.src}></Avatar>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={4}
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ height: '83vh' }}
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
                        <IconButton color="primary" onClick={handleOptionClick}>
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
                        <IconButton color="primary" onClick={handleOptionClick}>
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
                        <IconButton color="primary" onClick={handleOptionClick} >
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
                        <IconButton color="primary" onClick={handleOptionClick}>
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
                        <IconButton color="primary" onClick={handleOptionClick}>
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
                        <IconButton color="primary" onClick={handleOptionClick} >
                            {
                                active == 'contact' ? <ConnectWithoutContactIcon /> : <ConnectWithoutContactOutlinedIcon />
                            }
                        </IconButton>
                    </Link>
                </Grid>
            </Grid>
        </Box>

    return (
        <Box>
            <Grid container
                justifyContent="flex-start"
                alignItems="flex-start"
                style={{ padding: 5, position: 'fixed' }}
            >
                <IconButton color="primary" onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>
            </Grid>
            <SwipeableDrawer
                variant={mobile ? "temporary" : "permanent"}
                anchor="left"
                open={open}
                onOpen={() => { }}
                onClose={() => setOpen(false)}
            >
                {list()}
            </SwipeableDrawer>
        </Box>

    )
}

export default DrawerMenu

const styles = {
    ListItemIcon
}
