import React from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Setupper} from './components/Setupper';


function App() {

    return (
        <div className="App">
            <Setupper/>
            <Counter/>
        </div>
    )
}

export default App;
