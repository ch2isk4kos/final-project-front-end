import React from 'react';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'

class App extends React.Component {
    render() {
        return (
        <div className="App">
            <Home />
        </div>
        );
    }
}

export default App;
