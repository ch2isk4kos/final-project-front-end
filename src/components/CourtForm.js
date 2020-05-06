import React from 'react'
import { connect } from 'react-redux'
import { addCourt } from '../redux/actions/addCourt'

class CourtForm extends React.Component {

    state = {
        court: {
            name: '',
            address: '',
            imgURL: '',
            floor_type: '',
        }
    }

    render () {
        return(
        <div>
        <form>
            <input
                type="input"
                name="name"
                placeholder="Court Name"
                value={this.state.court.name}
                onChange={this.handleOnChange}
            /><br></br>
            <input
                type="input"
                name="address"
                placeholder="Address"
                value={this.state.court.address}
                onChange={this.handleOnChange}
            /><br></br>

            <input
                type="input"
                name="img_url"
                placeholder="Image URL"
                value={this.state.court.imgURL}
                onChange={this.handleOnChange}
            /><br></br>

            <input
                type="input"
                name="floor_type"
                placeholder="Floor Type"
                value={this.state.court.floor_type}
                onChange={this.handleOnChange}
            /><br></br>

        <input type="submit" name="Submit" />
        </form>
        </div>
        )
    }
}

export default connect(null, { addCourt })(CourtForm);