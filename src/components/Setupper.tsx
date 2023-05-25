import React, {ChangeEvent, useState} from 'react';
import {Button} from './Button';
import {useDispatch, useSelector} from 'react-redux';
import {ModeType, setModeAC, setValuesAC} from '../redux/counter-reducer';
import {RootStateType} from '../redux/store';



export const Setupper = () => {
    const [inputValue, setInputValue] = useState<{maxValue: number, startValue: number}>({maxValue: 5, startValue: 0})
    const mode = useSelector<RootStateType, ModeType>(state => state.counter.mode)
    const dispatch = useDispatch()

    const changeValueHandler = (e: ChangeEvent<HTMLInputElement>, from: string) => {
        if (from === 'max') {
            setInputValue({...inputValue, maxValue: +e.currentTarget.value})
            if(+e.currentTarget.value <= inputValue.startValue || inputValue.startValue < 0) {
                dispatch(setModeAC('error'))
            } else {
                dispatch(setModeAC('edit'))

            }
        } else  {
            setInputValue({...inputValue, startValue: +e.currentTarget.value})
            if (+e.currentTarget.value >= inputValue.maxValue || +e.currentTarget.value < 0) {
                dispatch(setModeAC('error'))
            } else {
                dispatch(setModeAC('edit'))
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
                <Button onClick={() => dispatch(setValuesAC(inputValue.startValue, inputValue.maxValue))}
                        disabled={mode !== 'edit'}>set</Button>
            </div>
        </div>
    )
}

