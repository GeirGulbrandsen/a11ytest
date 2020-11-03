import React from 'react';
import './App.css';

function App() {
    const clickHandler = (() => {
        const element = document.createElement("div")
        element.textContent = 'Alert, Alert!'
        document.getElementById('alert').append(element)
    });

    return (
        <div className="App">
            <header className="App-header">
                <p>This is an amazing test</p>
                <p id="alert" role={'alert'}></p>
                <button onClick={clickHandler}>Test</button>
            </header>
        </div>
    );
}

export default App;
