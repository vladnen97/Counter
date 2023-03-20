import React, {useEffect, useState} from 'react';
import {Button} from './Button';
import {ModeType, SetupType} from '../App';

type PropsType = {
    mode: ModeType
    localSetup: SetupType
    setMode: (mode: ModeType) => void
}

export function Counter(props: PropsType) {
    const [value, setValue] = useState<number>(props.localSetup.startValue)

    useEffect(() => {
        setValue(props.localSetup.startValue)
    }, [props.localSetup])


    function incValue(): void {
        (value !== props.localSetup.maxValue) && setValue(value + 1)
    }
    function resetValue(): void {
        setValue(props.localSetup.startValue)
    }
    function changeMode():void {
        props.setMode('edit')
    }


    return (
        <div className={'counter'}>
            <div className={'display'}>
                {
                    props.mode === 'view'
                        ? <h1 className={value === props.localSetup.maxValue ? 'max' : ''}>{value}</h1>
                        : props.mode === 'edit'
                            ? <div className={'warning'}>Enter value and press 'set'</div>
                            : <div className={'error'}>Incorrect value!</div>
                }
            </div>
            <div className={'buttons'}>
                <Button onClick={incValue} disabled={value === props.localSetup.maxValue}>inc</Button>
                <Button onClick={resetValue} disabled={value === props.localSetup.startValue}>reset</Button>
                <Button onClick={changeMode}>set</Button>
            </div>
        </div>
    );
}

