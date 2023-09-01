import React, { useState } from "react";
import {
    Grid,
    Box,
    Button,
    TextField,
    Snackbar
} from "@mui/material";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import Title from "../Title";
import { emailValidator } from "@/utils";
import Alert from "../Alert";


export default function Contact({ isBiggerThanMd }) {
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

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={5}

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
                <Grid item xs={12} >
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
                                <Button variant="contained" type="submit" sx={{ mt: 2 }} onClick={(e) => handleSubmit(e)}>
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                {/* <Grid item xs={12} style={{ marginTop: 20, marginBottom: 20 }}>
                    <Divider>Or</Divider>
                </Grid> */}
            </Grid>
        </Grid>
    )
}
