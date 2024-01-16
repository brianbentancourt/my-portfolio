// BackgroundWithSymbol.js
import {
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";

const BackgroundWithSymbol = () => {
    const theme = useTheme();
    const isBiggerThanMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box sx={{ '& > :not(style)': { position: 'fixed', bottom: isBiggerThanMd ? '-15vh' : '1vh', right: isBiggerThanMd ? '-10vw' : '-20vw', zIndex: -1000, opacity: 0.03, transform: 'rotate(-20deg)' } }}>
            <span
                style={{ fontSize: isBiggerThanMd ? '50vw' : '80vw' }}
            >
                {`</>`}
            </span>
        </Box>
    );
};

export default BackgroundWithSymbol;
