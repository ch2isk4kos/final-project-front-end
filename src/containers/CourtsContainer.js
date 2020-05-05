import React from 'react'
import Courts from '../components/Courts'
import { Route, Switch } from 'react-router-dom';

class CourtsContainer extends React.Component {

    render () {
        return (
        <div>
            <Switch>
                <Route exact path="/courts" component={Courts}/>
            </Switch>
        </div>
        )
    }
}

export default CourtsContainer;
