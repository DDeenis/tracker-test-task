import { Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React from 'react';

const useStyles = makeStyles({
    track: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40vw',
        padding: '25px 10px',
        borderTop: '1px solid gray',
        borderBottom: '1px solid gray',
        transition: 'background-color .3s ease',
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
        fontSize: '1.1rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
});

export default function TrackerEntry({ track, updateTrackerState }) {
    const styles = useStyles();

    return (
        <Grid item spacing={3} classes={{ root: styles.track }} style={{ backgroundColor: track.isRunning ? '#faf1e6' : 'transparent' }}>
            <Container classes={{ root: styles.trackInfo }}>
                <Typography classes={{ root: styles.textBold }}>{track.name}</Typography>
                <Typography classes={{ root: styles.textBold }}>{new Date(track.duration * 1000).toISOString().substr(11, 8)}</Typography>
            </Container>
            <Container disableGutters={true} classes={{ root: styles.trackControls }}>
                {
                    !track.isRunning
                        ? <IconButton size='small' onClick={() => updateTrackerState(true)}>
                            <PlayCircleOutlineIcon classes={{ root: styles.controlIcon }} />
                        </IconButton>
                        : <IconButton size='small' onClick={() => updateTrackerState(false)}>
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