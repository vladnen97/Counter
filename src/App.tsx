import React, {useState} from 'react';
import './App.css';
import {Counter} from './shared/Counter';

function App() {
    const [value, setValue] = useState<number>(0)

    function incValue(): void {
        setValue(value + 1)
    }
    function resetValue(): void {
        setValue(0)
    }
    function setLocalStorage() {
    localStorage.setItem("counterValue", JSON.stringify(value))
    }
    function getLocalStorage() {
        const valueFromStorage = localStorage.getItem("counterValue")
        if (valueFromStorage) {
            setValue(JSON.parse(valueFromStorage))
        }
    }

    return (
        <div className="App">
            <Counter value={value} incValue={incValue} resetValue={resetValue} setLocalStorage={setLocalStorage} getLocalStorage={getLocalStorage}/>
        </div>
    );
}

export default App;
