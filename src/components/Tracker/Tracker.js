import React, { useState } from 'react';
import { InputAdornment, makeStyles, TextField, IconButton, Grid } from '@material-ui/core';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import TrackerEntryContainer from '../TrackerEntry/TrackerEntryContainer';

const useStyles = makeStyles({
    input: {
        margin: '20px',
        '& > div': {
            borderRadius: '30px',
            width: '40vw',
            paddingRight: '0'
        }
    },
    inputIcon: {
        fontSize: '50px',
        color: 'green',
        cursor: 'pointer'
    },
})

export default function Tracker({ tracks, createTracker }) {
    const styles = useStyles();
    const [trackerName, setTrackerName] = useState('');

    const trackEntries = tracks.map(t => <TrackerEntryContainer track={t} key={t.id} />);
    const addTracker = () => {
        createTracker(trackerName);
        setTrackerName('');
    }

    return (
        <Grid container={true} direction='column' alignItems='center' justify='center'>
            <TextField
                classes={{ root: styles.input }}
                variant='outlined'
                label='Tracker name'
                placeholder='Enter tracker name'
                value={trackerName}
                onChange={(e) => setTrackerName(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton size='small' onClick={() => addTracker()}>
                                <PlayCircleFilledWhiteIcon fontSize='large' classes={{ root: styles.inputIcon }} />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            {
                trackEntries
            }
        </Grid>
    );
}