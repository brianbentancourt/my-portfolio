import React, { useState } from 'react';
import { Typography, Collapse } from '@mui/material';

const TextWithCollapse = ({ text, maxLength }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const displayText = expanded ? text : (text.slice(0, maxLength) + '...')

    return (
        <>
            <Typography
                variant="body1"
                sx={{ wordBreak: 'break-word' }}
            >
                {displayText}
            </Typography>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography
                    variant="body1"
                    sx={{ wordBreak: 'break-word' }}
                >
                    {expanded ? '' : text.slice(maxLength)}
                </Typography>
            </Collapse>
            <Typography
                variant="body1"
                color="primary"
                onClick={toggleExpanded}
                sx={{ cursor: 'pointer' }}
            >
                {expanded ? 'Read less' : 'Read more'}
            </Typography>
        </>
    );
};

export default TextWithCollapse;