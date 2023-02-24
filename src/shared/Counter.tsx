import React from 'react';
import {Button} from './Button';

type PropsType = {
    value: number
    incValue: () => void
    resetValue: () => void
}

export function  Counter({value, incValue, resetValue}:PropsType) {
    return (
        <div className={'counter'}>
            <h1 className={'display' + (value === 5 ? ' max' : '')}>{value}</h1>
            <div className={'buttons'}>
                <Button className={'button' + (value === 5 ? ' disabled' : ' default')} disabled={value === 5} onClick={incValue}>inc</Button>
                <Button className={'button' + (value === 0 ? ' disabled' : ' default')} disabled={value === 0} onClick={resetValue}>reset</Button>
            </div>
        </div>
    );
}

