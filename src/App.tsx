import React from 'react';
import './App.css';
import {Counter} from './shared/Counter';
import {Setupper} from './shared/Setupper';


function App() {

    return (
        <div className="App">
            <Setupper/>
            <Counter/>
        </div>
    )
}

export default App;
