import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
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
                <Route exact path="/about" component={About} />
            </Switch>
        </div>
        );
    }
}

export default App;
