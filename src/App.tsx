import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState<number>(0)

    return (
        <div className="App">
            <div className={'counter'}>
                <h1 className={'display' + (value === 5 ? ' max' : '')}>{value}</h1>
                <div className={'buttons'}>
                    <button className={'button' + (value === 5 ? ' disabled' : ' default')} disabled={value === 5} onClick={() => setValue(value + 1)}>inc</button>
                    <button className={'button' + (value === 0 ? ' disabled' : ' default')} disabled={value === 0} onClick={() => setValue(0)}>reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
