import { useState } from "react";
import {
    Grid,
    Button,
    TextField,
    Typography,
    Box,
    Divider
} from "@mui/material";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import Title from "../Title";


export default function Contact({ isBiggerThanMd }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCityRef = doc(collection(db, "clientsRequests"));
        await setDoc(newCityRef, {
            name,
            email,
            message
        });

    }

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={5}

        >
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
                    <form onSubmit={handleSubmit}>
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
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    margin="normal"
                                    required
                                    type="email"
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
                                />
                                <Button variant="contained" type="submit" sx={{ mt: 2 }}>
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                {/* <Grid item xs={12} style={{ marginTop: 20, marginBottom: 20 }}>
                    <Divider>Or</Divider>
                </Grid> */}
            </Grid>
        </Grid>
    )
}
