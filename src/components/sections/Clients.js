import {
    Grid
} from "@mui/material"

import CommentCard from "../CommentCard";
import { clients } from '../../data/clients';
import Title from "../Title";


export default function Clients() {

    return (
        <Grid
            container
            justifyContent={"space-around"}
            alignItems="flex-start"
            style={{ padding: '5vw 15vw' }}
            spacing={5}
        >
            <Grid item xs={12}>
                <Title>Feedback</Title>
            </Grid>
            {clients.map(d =>
                <Grid key={d.id} item xs={12} md={6} lg={4}>
                    <CommentCard item={d} />
                </Grid>
            )}
        </Grid>

    )
}
