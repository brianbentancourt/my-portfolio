import { WhatsApp } from "@mui/icons-material";
import {
    Box,
    Fab,
    Tooltip,
    Zoom
} from "@mui/material";
import { green } from '@mui/material/colors';

export default function WhatsappFloatingButton({ phoneNumber }) {

    const handleOpenWhatsapp = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hello!')}`
        window.open(url)
    }

    return (
        <Box sx={{ '& > :not(style)': { position: 'fixed', bottom: 50, right: 50, } }}>
            <Zoom
                in={true}
                timeout={500}
                style={{
                    transitionDelay: `20ms`,
                }}
                unmountOnExit
            >
                <Tooltip placement="top" title="Let's chat!">
                    <Fab
                        onClick={handleOpenWhatsapp}
                        variant="circular"
                        color='inherit'
                        sx={{
                            bgcolor: green[500],
                            '&:hover': {
                                bgcolor: green[700],
                            },
                        }}
                    >
                        <WhatsApp sx={{ width: 66, height: 66, marginTop: -0.1, }} />
                    </Fab>
                </Tooltip>
            </Zoom>
        </Box>
    )
}
