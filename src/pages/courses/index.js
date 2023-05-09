import Title from "@/components/Title";
import {
    Grid,
} from "@mui/material";


export default function index() {
    return (
        <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            style={{ padding: '5vw 15vw' }}
        >
            <Grid item xs={12}>
                <Title>Courses</Title>
            </Grid>
            <Grid item xs={12}>

            </Grid>
        </Grid>
    )
}
