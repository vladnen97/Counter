import {InitStateType} from '../redux/counter-reducer';

export const loadState = () => {
    const serializedState = localStorage.getItem('state');
    if (serializedState) {
        return JSON.parse(serializedState);
    }
}

export const saveState = (state: Omit<InitStateType, 'mode'>) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
}