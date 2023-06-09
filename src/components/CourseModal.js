import {
    useTheme,
    useMediaQuery,
    Backdrop,
    Box,
    Modal,
    Fade,
    IconButton
} from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';


export default function CourseModal({ open, setOpen, course }) {
    const theme = useTheme();
    const isSmallerThanSm = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: isSmallerThanSm ? '20%' : '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: isSmallerThanSm ? 0 : '90vh',
        boxShadow: 24,
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            color: '#d80101',
                            margin: 2
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Image
                        src={`${course.url}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${course.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={course.name}
                        loading="lazy"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                            width: isSmallerThanSm ? '90vw' : 'auto',
                            height: isSmallerThanSm ? 'auto' : '100%',
                            padding: 5,
                            objectFit: 'cover',
                            cursor: 'pointer'
                        }}
                    />
                </Box>
            </Fade>
        </Modal>
    );
}
