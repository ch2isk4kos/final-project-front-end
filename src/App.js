import React from 'react';
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'
import CourtsContainer from './containers/CourtsContainer'
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
        <div className="App">
            <NavBar />
            <CourtsContainer />

            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
        );
    }
}

export default App;
