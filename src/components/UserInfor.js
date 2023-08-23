import React from "react";

class UserInfo extends React.Component {

    state = {
        name: 'Hoc ReactJs qua Project',
        address: 'Ho Chi Minh City',
        age: 26
    }
    handleInputName = (event) => {
        this.setState({ name: event.target.value })
    }
    handleInputAge = (event) => {
        this.setState({ age: event.target.value })
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
    }
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <label>Your name: </label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => { this.handleInputName(event) }}
                    />

                    <label>Age: </label>
                    <input
                        type="text"
                        value={this.state.age}
                        onChange={(event) => { this.handleInputAge(event) }}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo