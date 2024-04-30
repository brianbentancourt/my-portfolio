import React, { useState } from "react";
import {
    Grid,
    Box,
    Button,
    TextField,
    Snackbar,
    Divider,
    Tooltip
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ShareIcon from '@mui/icons-material/Share'
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import Title from "../Title";
import { emailValidator } from "@/utils";
import Alert from "../Alert";
import { CurrencyBitcoin } from "@mui/icons-material";

const iconsStyle = {
    fontSize: 60,
    margin: 20,
    cursor: 'pointer',
}

const StyledLinkedInIcon = styled(LinkedInIcon)(({ theme }) => ({
    transition: theme.transitions.create('color', {
        duration: 300, // Duración de la transición en milisegundos
    }),
    color: '#343434',
    '&:hover': {
        color: '#556cd6',
        filter: 'drop-shadow(0 0 0.75rem #4d5a95bd)'
    },
}));

const StyledGitHubIcon = styled(GitHubIcon)(({ theme }) => ({
    transition: theme.transitions.create('color', {
        duration: 300, // Duración de la transición en milisegundos
    }),
    color: '#343434',
    '&:hover': {
        color: '#556cd6',
        filter: 'drop-shadow(0 0 0.75rem #4d5a95bd)'
    },
}));

const StyledAlternateEmailIcon = styled(AlternateEmailIcon)(({ theme }) => ({
    transition: theme.transitions.create('color', {
        duration: 300, // Duración de la transición en milisegundos
    }),
    color: '#343434',
    '&:hover': {
        color: '#556cd6',
        filter: 'drop-shadow(0 0 0.75rem #4d5a95bd)'
    },
}));

const StyledWhatsAppIcon = styled(WhatsAppIcon)(({ theme }) => ({
    transition: theme.transitions.create('color', {
        duration: 300, // Duración de la transición en milisegundos
    }),
    color: '#343434',
    '&:hover': {
        color: '#556cd6',
        filter: 'drop-shadow(0 0 0.75rem #4d5a95bd)'
    },
}));

const StyledShareIcon = styled(ShareIcon)(({ theme }) => ({
    transition: theme.transitions.create('color', {
        duration: 300, // Duración de la transición en milisegundos
    }),
    color: '#343434',
    '&:hover': {
        color: '#556cd6',
        filter: 'drop-shadow(0 0 0.75rem #4d5a95bd)'
    },
}));

export default function Contact({ isBiggerThanMd }) {
    const theme = useTheme();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [notificationOpen, setNotificationOpen] = useState(false)
    const [notificationMessage, setNotificationMessage] = useState('')
    const [notificationSeverity, setNotificationSeverity] = useState('success')
    const [formValid, setFormValid] = useState({})

    const validateForm = () => {
        const validation = {
            name: {
                error: false,
            },
            email: {
                error: false,
            },
            message: {
                error: false,
            }
        }
        let result = true
        if (!name) {
            validation.name.error = true
            validation.name.message = 'Name is required'
            result = false
        }
        if (!emailValidator(email)) {
            validation.email.error = true
            validation.email.message = 'Email not valid'
            result = false
        }
        if (!message) {
            validation.message.error = true
            validation.message.message = 'Message is required'
            result = false
        }
        setFormValid(validation)
        return result
    }
    const handleSubmit = async (e) => {
        console.log('handleSubmit')
        e.preventDefault();
        try {
            if (!validateForm())
                return

            const newReq = doc(collection(db, "mail"));
            await setDoc(newReq, {
                to: 'brianbentancourt9@gmail.com',
                message: {
                    subject: `${name} interesado en mis servicios`,
                    html: `
                <p>From: ${email}</p>
                <p>Phone: ${phone}</p>
                <p>Message: ${message}</p>
                </br>
                <a href="mailto:${email}">Respond</a>
                `,
                }
            })
            clearForm()
            setNotificationSeverity('success')
            setNotificationMessage('The request has been sent to Brian!')
            setNotificationOpen(true)
        } catch (error) {
            setNotificationSeverity('error')
            setNotificationMessage('An error occurred, please try again')
            setNotificationOpen(true)
        }

    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    const handleOpenLinkedin = () => {
        window.open('https://www.linkedin.com/in/brianbentancourt/', '_blank')
    }

    const handleOpenGitHub = () => {
        window.open('https://github.com/brianbentancourt/', '_blank')
    }

    const handleSendEmail = () => {
        window.open('mailto:brianbentancourt9@gmail.com', '_blank')
    }

    const handleOpenWhatsApp = () => {
        window.open('https://wa.me/59897313415', '_blank')
    }

    const handleShareLink = () => {
        navigator.clipboard.writeText(window.location.href)
        setNotificationSeverity('success')
        setNotificationMessage('Link copied to clipboard')
        setNotificationOpen(true)
    }

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={5}
            style={{ marginBottom: 200 }}
        >
            <Snackbar open={notificationOpen} autoHideDuration={6000} onClose={() => setNotificationOpen(false)}>
                <Alert onClose={() => setNotificationOpen(false)} severity={notificationSeverity} sx={{ width: '100%' }}>
                    {notificationMessage}
                </Alert>
            </Snackbar>
            <Grid item xs={12}>
                <Title>Contact me</Title>
            </Grid>
            <Grid
                item
                xs={12}
                lg={8}
                container
                justifyContent="center"
                alignItems="center"
                // style={{ paddingLeft: '15vw', paddingRight: '15vw' }}
                style={{ paddingLeft: isBiggerThanMd ? '18vw' : '25vw', paddingRight: '15vw' }}
            >
                <Grid item xs={12}  >
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    fullWidth
                                    label="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    margin="normal"
                                    required
                                    error={formValid?.name?.error}
                                    helperText={formValid?.name?.message}
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    margin="normal"
                                    required
                                    type="email"
                                    error={formValid?.email?.error}
                                    helperText={formValid?.email?.message}
                                />
                                <TextField
                                    fullWidth
                                    label="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    margin="normal"
                                    type="phone"
                                />
                                <TextField
                                    fullWidth
                                    label="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    margin="normal"
                                    required
                                    multiline
                                    rows={4}
                                    error={formValid?.message?.error}
                                    helperText={formValid?.message?.message}
                                />
                                <Button
                                    variant="contained"
                                    type="submit"
                                    sx={{ mt: 2 }}
                                    onClick={(e) => handleSubmit(e)}
                                    fullWidth
                                    size="large"
                                >
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} style={{ marginTop: 50, marginBottom: 50 }}>
                    <Divider orientation='horizontal' ></Divider>
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* list social media icon buttons only icons */}
                    <Grid item >
                        {/* <IconButton size="large"> */}
                        <Tooltip title="Linkedin">
                            <StyledLinkedInIcon fontSize="large" style={iconsStyle} onClick={handleOpenLinkedin} />
                        </Tooltip>
                        {/* </IconButton> */}
                        {/* <Grid item xs={12} md={4}>
                        <Button
                            variant="outlined"
                            fullWidth
                            size="large"
                            href="https://www.linkedin.com/in/brian-bentancourt-3b3b0b1b4/"
                            target="_blank"
                        >
                            LinkedIn
                        </Button>*/}
                    </Grid>
                    <Grid item >
                        <Tooltip title="Look my repo!">
                            <StyledGitHubIcon fontSize="large" style={iconsStyle} onClick={handleOpenGitHub} />
                        </Tooltip>
                    </Grid>
                    <Grid item >
                        <Tooltip title="Send Email">
                            <StyledAlternateEmailIcon fontSize="large" style={iconsStyle} onClick={handleSendEmail} />
                        </Tooltip>
                    </Grid>
                    <Grid item >
                        <Tooltip title="Whatsapp">
                            <StyledWhatsAppIcon fontSize="large" style={iconsStyle} onClick={handleOpenWhatsApp} />
                        </Tooltip>
                    </Grid>
                    <Grid item >
                        <Tooltip title="Share link">
                            <StyledShareIcon fontSize="large" style={iconsStyle} onClick={handleShareLink} />
                        </Tooltip>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
