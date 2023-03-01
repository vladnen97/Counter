import React, {ChangeEvent, useState} from 'react';
import {Button} from './Button';
import {SetupType} from '../App';

type PropsType = {

}

export const Setupper = ({}: PropsType) => {
    const [inputValue, setInputValue] = useState<SetupType>({maxValue: 5, startValue: 0})


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue({...inputValue, maxValue: +e.currentTarget.value})
    }
    const changeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue({...inputValue, startValue: +e.currentTarget.value});
    }
    return (
        <div className={'counter'}>
            <div className={'display'}>
                <div className={'wrapper'}>
                    <span>max value:</span>
                    <input className={'inputClass'} type="number" value={inputValue.maxValue} onChange={changeMaxValue}/>
                </div>

                <div className={'wrapper'}>
                    <span>start value:</span>
                    <input className={'inputClass'} type="number" value={inputValue.startValue} onChange={changeStartValue}/>
                </div>
            </div>

            <div className={'buttons'}>
                <Button className={'button default'}>
                    set
                </Button>
            </div>
        </div>
    );
};

