import {
    Grid,
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Typography
} from "@mui/material"


export default function CommentCard({ item }) {
    return (
        <Card>
            <CardContent>
                <Avatar sx={{
                    width: 90,
                    height: 90,
                    marginLeft: -3.5,
                    marginTop: -3.5,
                    position: 'absolute'
                }}
                    aria-label="recipe"
                    src={item.logo.src}
                >
                </Avatar>
                <Grid container style={{ marginLeft: 70, marginBottom: 20 }}>
                    <Grid item xs={12}>
                        <Typography variant='h5' color="primary" component='div'  >{item.name}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='9' component='div' color="text.secondary" style={{ fontSize: 14 }}>{item.job}</Typography>
                    </Grid>
                </Grid>

                <Typography variant="body2">
                    {item.comment}
                </Typography>
            </CardContent>
        </Card>
    )
}
