import { Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React, { useState } from 'react';

const useStyles = makeStyles({
    track: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40vw',
        padding: '25px 10px',
        borderTop: '1px solid gray',
        borderBottom: '1px solid gray'
    },
    trackInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    trackControls: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '20%'
    },
    controlIcon: {
        fontSize: '30px',
        color: '#000',
        cursor: 'pointer'
    },
    deleteIcon: {
        fontSize: '30px',
        cursor: 'pointer'
    },
    textBold: {
        fontWeight: 600,
        fontSize: '1.1rem'
    },
});

export default function TrackerEntry({ track }) {
    const styles = useStyles();
    const [isActive, setIsActive] = useState(false);
    const [duration, setDuration] = useState(track.duration);
    
    if (isActive) {
        setTimeout(() => {
            setDuration(duration + 1);
        }, 1000);
    }

    return (
        <Grid item spacing={3} classes={{ root: styles.track }}>
            <Container classes={{ root: styles.trackInfo }}>
                <Typography classes={{ root: styles.textBold }}>{track.title}</Typography>
                <Typography classes={{ root: styles.textBold }}>{new Date(duration * 1000).toISOString().substr(11, 8)}</Typography>
            </Container>
            <Container disableGutters={true} classes={{ root: styles.trackControls }}>
                {
                    !isActive
                        ? <IconButton size='small' onClick={() => setIsActive(true)}>
                            <PlayCircleOutlineIcon classes={{ root: styles.controlIcon }} />
                        </IconButton>
                        : <IconButton size='small' onClick={() => setIsActive(false)}>
                            <PauseCircleOutlineIcon color='secondary' classes={{ root: styles.controlIcon }} />
                        </IconButton>
                }
                <IconButton size='small'>
                    <HighlightOffIcon color='secondary' classes={{ root: styles.deleteIcon }} />
                </IconButton>
            </Container>
        </Grid>
    );   
}