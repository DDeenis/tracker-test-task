import { createSelector } from "reselect";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    trackers: []
};

const SET_TRACKERS = 'SET_TRACKERS';
const UPDATE_TRACKER = 'UPDATE_TRACKER';
const ADD_TRACKER = 'ADD_TRACKER';
const REMOVE_TRACKER = 'REMOVE_TRACKER';

export default function trackerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TRACKERS:
            return { ...state, trackers: [...action.payload.trackers] };
        
        case ADD_TRACKER:
            return { ...state, trackers: [...state.trackers, { ...action.payload }] };
        
        case REMOVE_TRACKER:
            return { ...state, trackers: state.trackers.filter(t => t.id != action.payload.trackerId) };
        
        case UPDATE_TRACKER:
            return { ...state, trackers: state.trackers.map(t => t.id === action.payload.id ? { ...action.payload } : t) }

        default:
            return state;
    }
}

export const trackersSelector = (state) => state.tracker.trackers;
export const runningTrackersSelector = createSelector(trackersSelector, trackers => trackers.filter(t => t.isRunning));
export const pausedTrackersSelector = createSelector(trackersSelector, trackers => trackers.filter(t => !t.isRunning));

export const setTrackersAC = (trackers) => ({ type: SET_TRACKERS, trackers });
export const addTrackerAC = ({ name }) => ({
    type: ADD_TRACKER,
    payload: {
        id: uuidv4(),
        name: name || new Date().toUTCString(),
        duration: 0,
        isRunning: true
    }
});
export const removeTrackerAC = (trackerId) => ({ type: REMOVE_TRACKER, payload: { trackerId } });
export const updateTrackerAC = ({ id, name, duration, isRunning }) => ({
    type: UPDATE_TRACKER,
    payload: { id, name, duration, isRunning }
});
