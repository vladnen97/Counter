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

    return (
        <div className="App">
            <Counter value={value} incValue={incValue} resetValue={resetValue}/>
        </div>
    );
}

export default App;
