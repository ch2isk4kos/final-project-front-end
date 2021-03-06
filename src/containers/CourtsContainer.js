import React from 'react'
import Courts from '../components/Courts'
import Court from '../components/Court'
import CourtForm from '../components/CourtForm'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchCourts } from '../redux/actions/fetchCourts'

class CourtsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCourts()
    }

    render () {
        return (
        <div>
            <Switch>
                <Route exact path="/courts" render={(props) => <Courts {...props} courts={this.props.courts} />} />
                <Route exact path="/courts/new" render={() => <CourtForm />} />
                <Route path="/courts/:id" render={(props) => <Court {...props} courts={this.props.courts} />} />
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

export default connect(mapStateToProps, { fetchCourts })(CourtsContainer);
