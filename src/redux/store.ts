import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState, saveState} from '../utils/local-storage';

export type RootStateType = ReturnType<typeof RootState>

const RootState = combineReducers({
    counter: counterReducer
})

const preloadedState = loadState()

export const store = legacy_createStore(RootState, {
    counter: {
        ...preloadedState,
        mode: 'view'
    }
})

store.subscribe(() => {
    saveState({
        maxValue: store.getState().counter.maxValue,
        startValue: store.getState().counter.startValue,
    })
})

//@ts-ignore
window.store = store