import {
    useTheme,
    useMediaQuery,
    Grid
} from '@mui/material'
import React, { useEffect } from 'react'
import DrawerMenu from './DrawerMenu'

export default function Layout({ children }) {
    const theme = useTheme();
    const isBiggerThanMd = useMediaQuery(theme.breakpoints.up('md'));
    const device = isBiggerThanMd ? 'desktop' : 'mobile'


    return (
        <Grid container direction="column">
            <Grid item xs={12} >
                <DrawerMenu />
            </Grid>
            <Grid item xs={12} style={{ marginLeft: device ? 0 : 65 }}>
                {children}
            </Grid>


        </Grid>

    )
}
