import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counter-reducer';

const RootState = combineReducers({
    counter: counterReducer
})

export type RootStateType = ReturnType<typeof RootState>

export const store = legacy_createStore(RootState)