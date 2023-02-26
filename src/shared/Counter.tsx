import React from 'react';
import {Button} from './Button';

type PropsType = {
    value: number
    incValue: () => void
    resetValue: () => void
    setLocalStorage: () => void
    getLocalStorage: () => void
}

export function  Counter({value, incValue, resetValue, setLocalStorage, getLocalStorage, ...restParams}:PropsType) {
    return (
        <div className={'counter'}>
            <h1 className={'display' + (value === 5 ? ' max' : '')}>{value}</h1>
            <div className={'buttons'}>
                <Button className={'button' + (value === 5 ? ' disabled' : ' default')} disabled={value === 5} onClick={incValue}>inc</Button>
                <Button className={'button' + (value === 0 ? ' disabled' : ' default')} disabled={value === 0} onClick={resetValue}>reset</Button>
            </div>

            <div className={'localStorage'}>
                <Button className={'button default'} onClick={setLocalStorage}>set to local storage</Button>
                <Button className={'button default'} onClick={getLocalStorage}>get from local storage</Button>
            </div>
        </div>
    );
}

