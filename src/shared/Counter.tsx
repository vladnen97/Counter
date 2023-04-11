import React, {useEffect, useState} from 'react';
import {Button} from './Button';
import {useSelector} from 'react-redux';
import {RootStateType} from '../redux/store';
import {ModeType} from '../redux/counter-reducer';



export function Counter() {
    const mode       = useSelector<RootStateType, ModeType>(state => state.counter.mode)
    const startValue = useSelector<RootStateType, number>(state => state.counter.startValue)
    const maxValue   = useSelector<RootStateType, number>(state => state.counter.maxValue)
    const [value, setValue] = useState<number>(startValue)

    useEffect(() => {
        setValue(startValue)
    }, [startValue])

    function incValue(): void {
        (value !== maxValue) && setValue(value => value + 1)
    }
    function resetValue(): void {
        setValue(startValue)
    }


    return (
        <div className={'counter'}>
            <div className={'display'}>
                {
                    mode === 'view'
                        ? <h1 className={value === maxValue ? 'max' : ''}>{value}</h1>
                        : mode === 'edit'
                            ? <div className={'warning'}>Enter value and press 'set'</div>
                            : <div className={'error'}>Incorrect value!</div>
                }
            </div>
            <div className={'buttons'}>
                <Button onClick={incValue} disabled={mode !== 'view' || (value === maxValue)}>inc</Button>
                <Button onClick={resetValue} disabled={value === startValue || mode !== 'view'}>reset</Button>
            </div>
        </div>
    );
}

