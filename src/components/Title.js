import {
    Typography
} from '@mui/material'

export default function Title({ children }) {
    return (
        <Typography
            variant="h4"
            color="primary"
            align="center"
            style={{ margin: 30, textTransform: 'uppercase' }}
        >{children}</Typography>
    )
}
