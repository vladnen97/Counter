import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from './Button';
import {ModeType, SetupType} from '../App';

type PropsType = {
    setToLocalStorage: (setup: SetupType) => void
    setMode: (value: ModeType) => void
    mode: ModeType
    localSetup: SetupType
}

export const Setupper = (props: PropsType) => {
    const [inputValue, setInputValue] = useState<SetupType>(props.localSetup)

    useEffect(() => {
        const valuesFromStorage = localStorage.getItem('setup')
        valuesFromStorage && setInputValue(JSON.parse(valuesFromStorage))
    }, [])


    const changeValueHandler = (e: ChangeEvent<HTMLInputElement>, from: string) => {
        if (from === 'max') {
            setInputValue({...inputValue, maxValue: +e.currentTarget.value})
            if(+e.currentTarget.value <= inputValue.startValue || inputValue.startValue < 0) {
                props.setMode('error')
            } else {
                props.setMode('edit')

            }
        } else  {
            setInputValue({...inputValue, startValue: +e.currentTarget.value})
            if (+e.currentTarget.value >= inputValue.maxValue || +e.currentTarget.value < 0) {
                props.setMode('error')
            } else {
                props.setMode('edit')

            }
        }
    }


    return (
        <div className={'counter'}>
            <div className={'display'}>
                <div className={'wrapper'}>
                    <span>max value:</span>
                    <input className={'inputClass' + (inputValue.maxValue <= inputValue.startValue ? ' inputError' : '')} type="number" value={inputValue.maxValue}
                           onChange={(e) => changeValueHandler(e, 'max')}/>
                </div>

                <div className={'wrapper'}>
                    <span>start value:</span>
                    <input className={inputValue.maxValue <= inputValue.startValue || inputValue.startValue < 0 ? 'inputClass inputError' : 'inputClass'} type="number" value={inputValue.startValue}
                           onChange={(e) => changeValueHandler(e, 'min')}/>
                </div>
            </div>

            <div className={'buttons'}>
                <Button onClick={() => props.setToLocalStorage(inputValue)}
                        disabled={props.mode !== 'edit'}>set</Button>
            </div>
        </div>
    );
};

