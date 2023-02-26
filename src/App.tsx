import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './shared/Counter';

function App() {
    const [value, setValue] = useState<number>(0)

    useEffect(() => {
            const valueFromStorage = localStorage.getItem("counterValue")
            if (valueFromStorage) {
                setValue(JSON.parse(valueFromStorage))
            }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    function incValue(): void {
        setValue(value + 1)
    }
    function resetValue(): void {
        setValue(0)
    }

    return (
        <div className="App">
            <Counter value={value}
                     incValue={incValue}
                     resetValue={resetValue}
            />
        </div>
    );
}

export default App;
