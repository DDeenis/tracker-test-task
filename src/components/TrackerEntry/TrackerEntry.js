import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    track: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40vw'
    },
});

export default function TrackerEntry({ track }) {
    const styles = useStyles();

    return (
        <Grid item direction='row' spacing={3} classes={{ root: styles.track }}>
            <Typography>{track.title}</Typography>
            <Typography>{track.duration}</Typography>
        </Grid>
    );   
}