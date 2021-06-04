import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrackerAC, pausedTrackersSelector, runningTrackersSelector } from '../../redux/trackerReducer';
import Tracker from './Tracker';

export default function TrackerContainer() {
    const dispatch = useDispatch();
    // const tracks = useSelector(trackersSelector);
    const running = useSelector(runningTrackersSelector);
    const paused = useSelector(pausedTrackersSelector);
    const tracks = [...running, ...paused];

    const createTracker = (name) => dispatch(addTrackerAC({ name }));

    return (
        <Tracker
            tracks={tracks}
            createTracker={createTracker}
        />
    );
}