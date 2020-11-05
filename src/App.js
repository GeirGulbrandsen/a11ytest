import React from 'react';
import './App.css';

function App() {
    const clickHandler = (() => {
        const element = document.createElement('div')
        element.textContent = 'Alert, Alert!'
        element.setAttribute('role', 'alert')
        document.getElementById('test').append(element)
    });

    return (
        <div className="App">
            <header className="App-header">
                <p id={'test'}>This is an amazing test</p>
                <button onClick={clickHandler}>Test</button>
            </header>
        </div>
    );
}

export default App;
