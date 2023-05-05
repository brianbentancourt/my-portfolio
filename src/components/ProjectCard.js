import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
    Grid,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Collapse,
    Avatar,
    IconButton,
    Typography
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const StyledIconButton = styled((props) => <IconButton {...props} />)(() => ({
    color: '#dbdada',
    "&:hover": { backgroundColor: "transparent", color: '#556cd6' }
}))

const StyledCard = styled((props) => <Card {...props} />)(() => ({
    maxWidth: 345,
    boxShadow: "1px -2px 26px -1px rgba(85,108,214,1)",
    WebkitBoxShadow: "1px -2px 26px -1px rgba(85,108,214,1)",
    MozBoxShadow: "1px -2px 26px -1px rgba(85,108,214,1)"
}))

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ProjectCard({ info }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleOpenUrl = (url) => window.open(url, '_blank')

    return (
        <StyledCard>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: info.avatarColor, color: info.avatarTextColor }} >
                        {info.avatarText}
                    </Avatar>
                }
                title={info.name}
                subheader={info.dateText}
            />
            {/* <CardMedia
                component="img"
                height="194"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            /> */}
            <CardContent >
                {
                    info.description.split(/\r\n|\r|\n/g).map(text =>
                        <Typography key={text} variant="body2" color="text.secondary">
                            {text}
                        </Typography>
                    )
                }


                <Grid container disablespacing>
                    {
                        info?.clients &&
                        <Grid item xs={12}>
                            <Typography style={{ marginTop: 15, paddingBottom: 5, }}>Clients</Typography>
                        </Grid>
                    }
                    {
                        info?.clients?.map((c, index) =>
                        (<Grid item xs={12} key={index}>
                            <StyledIconButton onClick={() => handleOpenUrl(c.url)}>
                                <OpenInNewIcon />
                                <Typography style={{ padding: 4 }}>
                                    {c.name}
                                </Typography>
                            </StyledIconButton>

                        </Grid>)
                        )
                    }
                </Grid>
            </CardContent>
            <CardActions disablespacing>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Technologies:</Typography>
                    {
                        info?.technologies?.map(t => <Typography key={t} paragraph variant="body2" color="text.secondary">- {t}</Typography>)
                    }

                </CardContent>
            </Collapse>
        </StyledCard>
    );
}
