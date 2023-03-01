import React, {useState} from 'react';
import {Button} from './Button';

type PropsType = {

}

export function Counter({}: PropsType) {
    const [value, setValue] = useState<number>(0)


    function incValue(): void {
        setValue(value + 1)
    }
    function resetValue(): void {
        setValue(0)
    }

    return (
        <div className={'counter'}>
            <div className={'display'}>
                <h1 className={''}>{value}</h1>
            </div>
            <div className={'buttons'}>
                <Button className={'button default'} onClick={incValue}>inc</Button>
                <Button className={'button default'} onClick={resetValue}>reset</Button>
            </div>
        </div>
    );
}

