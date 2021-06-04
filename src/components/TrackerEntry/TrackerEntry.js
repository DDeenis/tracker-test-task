import { Container, Grid, IconButton, makeStyles, Typography } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React from 'react';
import classNames from 'classnames';
import { formatTimeFromSeconds } from '../../utils/time';

const useStyles = makeStyles({
    track: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40vw',
        padding: '25px 10px',
        borderTop: '1px solid lightgray',
        borderBottom: '1px solid lightgray',
        transition: 'background-color .3s ease',
    },
    trackInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '80%'
    },
    trackControls: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        maxWidth: '20%'
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
    },
    textNoOverflow: {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
});

export default function TrackerEntry({ track, updateTrackerState, removeTracker }) {
    const styles = useStyles();

    return (
        <Grid item classes={{ root: styles.track }} style={{ backgroundColor: track.isRunning ? '#faf1e6' : 'transparent' }}>
            <Container classes={{ root: styles.trackInfo }}>
                <Typography classes={{ root: classNames(styles.textBold, styles.textNoOverflow) }}>{track.name}</Typography>
                <Typography classes={{ root: styles.textBold }}>{formatTimeFromSeconds(track.duration)}</Typography>
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
                <IconButton size='small' onClick={() => removeTracker(track.id)}>
                    <HighlightOffIcon color='secondary' classes={{ root: styles.deleteIcon }} />
                </IconButton>
            </Container>
        </Grid>
    );   
}