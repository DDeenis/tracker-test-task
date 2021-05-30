import React from 'react';
import { InputAdornment, makeStyles, TextField, IconButton, Grid } from '@material-ui/core';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import TrackerEntry from '../TrackerEntry/TrackerEntry';

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

export default function Tracker({ tracks = [{ title: 'aaa', duration: 100 }] }) {
    const styles = useStyles();
    const track = tracks.map(t => <TrackerEntry track={t} key={t.title} />)

    return (
        <Grid container={true} direction='column' alignItems='center' justify='center'>
            <TextField
                classes={{ root: styles.input }}
                variant='outlined'
                placeholder='Enter tracker name'
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton size='small'>
                                <PlayCircleFilledWhiteIcon fontSize='large' classes={{ root: styles.inputIcon }} />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            {
                track
            }
        </Grid>
    );
}