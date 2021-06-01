import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrackerAC, trackersSelector } from '../../redux/trackerReducer';
import Tracker from './Tracker';

export default function TrackerContainer() {
    const dispatch = useDispatch();
    const tracks = useSelector(trackersSelector);

    const createTracker = (name) => dispatch(addTrackerAC({ name }));

    return (
        <Tracker
            tracks={tracks}
            createTracker={createTracker}
        />
    );
}