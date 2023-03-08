import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './shared/Counter';
import {Setupper} from './shared/Setupper';

export type SetupType = {maxValue: number, startValue: number }
export type ModeType = 'view' | 'edit' | 'error'

function App() {
    const [localSetup, setLocalSetup] = useState<SetupType>({maxValue: 5, startValue: 0})
    const [mode ,setMode] = useState<ModeType>('view')

    useEffect(() => {
        const valuesFromStorage = localStorage.getItem('setup')
        valuesFromStorage && setLocalSetup(JSON.parse(valuesFromStorage));
    }, [])

    function setToLocalStorage(setup: SetupType): void {
        localStorage.setItem('setup', JSON.stringify(setup))
        setLocalSetup(setup)
        setMode('view')
    }


    return (
        <div className="App">

            <Setupper setToLocalStorage={setToLocalStorage} setMode={setMode} mode={mode} localSetup={localSetup}/>
            <Counter mode={mode} localSetup={localSetup}/>

        </div>
    );
}

export default App;
