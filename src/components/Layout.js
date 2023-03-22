import { Grid } from '@mui/material'
import React from 'react'
import DrawerMenu from './DrawerMenu'

export default function Layout({ children }) {
    const device = 'desktop'

    const style = {
        desktop: {
            marginLeft: 65
        }
    }

    return (
        <Grid container direction="column">
            <Grid item xs={12} >
                <DrawerMenu />
            </Grid>
            <Grid item xs={12} style={style[device]}>
                {children}
            </Grid>


        </Grid>

    )
}
