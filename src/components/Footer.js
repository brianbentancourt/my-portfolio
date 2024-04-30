import {
    Grid,
    IconButton

} from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ShareIcon from '@mui/icons-material/Share'

export default function Footer() {

    //footer with social media links
    return (
        <footer>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                style={{ paddingLeft: 200, backgroundColor: "#0b0b0ba7", height: 300, marginTop: 100 }}
            >
                <Grid item xs={12}>
                    <IconButton color="#444343">
                        <LinkedInIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <GitHubIcon />
                </Grid>
                <Grid item xs={12}>
                    <AlternateEmailIcon />
                </Grid>
                <Grid item xs={12}>
                    <WhatsAppIcon />
                </Grid>
                <Grid item xs={12}>
                    <ShareIcon />
                </Grid>
            </Grid>

        </footer>
    )


    // return (
    //     <footer>
    //         <Grid
    //             container
    //             justifyContent="space-between"
    //             alignItems="center"
    //             style={{ padding: 200 }}
    //         >
    //             <Grid item xs={6}>

    //             </Grid>
    //             <Grid item xs={6}>

    //             </Grid>
    //         </Grid>

    //     </footer>
    // )
}
