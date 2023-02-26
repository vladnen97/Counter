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
    function setLocalStorage(): void {
    localStorage.setItem("counterValue", JSON.stringify(value))
    }
    function getLocalStorage(): void {
        const valueFromStorage = localStorage.getItem("counterValue")
        if (valueFromStorage) {
            setValue(JSON.parse(valueFromStorage))
        }
    }
    function clearLocalStorage(): void {
        localStorage.clear()
        setValue(0)
    }

    return (
        <div className="App">
            <Counter value={value}
                     incValue={incValue}
                     resetValue={resetValue}
                     setLocalStorage={setLocalStorage}
                     getLocalStorage={getLocalStorage}
                     clearLocalStorage={clearLocalStorage}/>
        </div>
    );
}

export default App;
