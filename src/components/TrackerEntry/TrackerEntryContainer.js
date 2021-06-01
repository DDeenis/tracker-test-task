import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTrackerAC } from '../../redux/trackerReducer';
import TrackerEntry from './TrackerEntry';

export default function TrackerEntryContainer({ track }) {
    const dispatch = useDispatch();

    const updateTrackerState = (isRunning) => dispatch(updateTrackerAC({ ...track, isRunning }));
    const updateTrackerTime = (duration) => dispatch(updateTrackerAC({ ...track, duration }));

    useEffect(() => {
        let id = 0;

        if (track.isRunning) {
            id = setTimeout(() => {
                updateTrackerTime(track.duration + 1);
            }, 1000);
        }

        return () => clearTimeout(id);
    }, [track.isRunning, track.duration])

    return (
        <TrackerEntry
            track={track}
            updateTrackerState={updateTrackerState}
        />
    );
}