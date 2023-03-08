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


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue({...inputValue, maxValue: +e.currentTarget.value})
        props.setMode('edit')

    }
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue({...inputValue, startValue: +e.currentTarget.value});
        props.setMode('edit')
    }


    if (inputValue.maxValue <= inputValue.startValue || inputValue.startValue < 0) {
        props.setMode('error')
    }



    return (
        <div className={'counter'}>
            <div className={'display'}>
                <div className={'wrapper'}>
                    <span>max value:</span>
                    <input className={'inputClass' + (inputValue.maxValue <= inputValue.startValue ? ' inputError' : '')} type="number" value={inputValue.maxValue}
                           onChange={changeMaxValue}/>
                </div>

                <div className={'wrapper'}>
                    <span>start value:</span>
                    <input className={inputValue.maxValue <= inputValue.startValue || inputValue.startValue < 0 ? 'inputClass inputError' : 'inputClass'} type="number" value={inputValue.startValue}
                           onChange={changeStartValue}/>
                </div>
            </div>

            <div className={'buttons'}>
                <Button onClick={() => props.setToLocalStorage(inputValue)}
                        disabled={props.mode !== 'edit'}>set</Button>
            </div>
        </div>
    );
};

