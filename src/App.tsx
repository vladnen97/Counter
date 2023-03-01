import React from 'react';
import './App.css';
import {Counter} from './shared/Counter';
import {Setupper} from './shared/Setupper';

export type SetupType = {maxValue: number, startValue: number }


function App() {


    return (
        <div className="App">

            <Setupper/>
            <Counter/>

        </div>
    );
}

export default App;
