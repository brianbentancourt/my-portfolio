import {
    Grid,
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Typography
} from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledCard = styled((props) => <Card {...props} />)(() => ({
    maxWidth: 500,
    boxShadow: "1px -2px 26px -1px rgba(85,108,214,1)",
    WebkitBoxShadow: "1px -2px 26px -1px rgba(85,108,214,1)",
    MozBoxShadow: "1px -2px 26px -1px rgba(85,108,214,1)"
}))

export default function CommentCard({ item }) {


    return (
        <StyledCard>
            <CardContent>
                <Grid container style={{ marginBottom: 20 }}>
                    <Grid item xs={3} sm={2} md={3} >
                        <Avatar sx={{
                            width: 55,
                            height: 55,
                        }}
                            alt={item.name}
                            src={item.logo.src}
                        >
                        </Avatar>
                    </Grid>
                    <Grid item xs={9} sm={10} md={9} container >
                        <Grid item xs={12}>
                            <Typography variant='h5' color="primary" component='div'>{item.name}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='9' component='div' color="text.secondary" style={{ fontSize: 14 }}>{item.job}</Typography>
                        </Grid>
                    </Grid>
                </Grid>


                <Typography variant="body2">
                    {`"${item.comment}"`}
                </Typography>
            </CardContent>
        </StyledCard>
    )
}
