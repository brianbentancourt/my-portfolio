import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Typography
} from "@mui/material"


export default function CommentCard({ item }) {
    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{
                        width: 60,
                        height: 60,
                        bgcolor: 'red',
                        marginLeft: -4,
                        marginTop: -5,
                        position: 'absolute'
                    }}
                        aria-label="recipe"
                    >
                        R
                    </Avatar>
                }
            />
            <CardContent>
                <Typography variant='h5' component='div' style={{ marginBottom: 20 }}>{item.name}</Typography>
                <Typography variant="body2">
                    {item.comment}
                </Typography>
            </CardContent>
        </Card>
    )
}
