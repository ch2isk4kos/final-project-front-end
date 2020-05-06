import React from 'react'
import { connect } from 'react-redux'
import { addCourt } from '../redux/actions/addCourt'

class CourtForm extends React.Component {

    state = {
        name: '',
        address: '',
        imgURL: '',
        floor_type: '',
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(event.target.value)
    }

    render () {
        return(
        <div>
        <form>

            <input
                type="input"
                name="name"
                placeholder="Court Name"
                value={this.state.name}
                onChange={this.handleOnChange}
            /><br></br>

            <input
                type="input"
                name="address"
                placeholder="Address"
                value={this.state.address}
                onChange={this.handleOnChange}
            /><br></br>

            <input
                type="input"
                name="img_url"
                placeholder="Image URL"
                value={this.state.imgURL}
                onChange={this.handleOnChange}
            /><br></br>

            <input
                type="input"
                name="floor_type"
                placeholder="Floor Type"
                value={this.state.floor_type}
                onChange={this.handleOnChange}
            /><br></br>

        <input type="submit" name="Submit" />
        </form>
        </div>
        )
    }
}

export default connect(null, { addCourt })(CourtForm);
