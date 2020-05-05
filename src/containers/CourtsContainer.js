import React from 'react'
import Courts from '../components/Courts'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

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

const mapStateToProps = state => {
    return {
        courts: state.courts
    }
}

export default connect(mapStateToProps)(CourtsContainer);
