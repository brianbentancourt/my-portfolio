import {
    Backdrop,
    Box,
    Modal,
    Fade,
    IconButton
} from '@mui/material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '90vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

export default function CourseModal({ open, setOpen, course }) {
    const handleClose = () => setOpen(false);

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
                            width: 'auto',
                            height: '100%',
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
