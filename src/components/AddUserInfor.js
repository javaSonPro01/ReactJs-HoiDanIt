import React from "react";

class AddUserInfo extends React.Component {

    state = {
        name: '',
        address: 'Ho Chi Minh City',
        age: ''
    }
    handleInputName = (event) => {
        this.setState({ name: event.target.value })
    }
    handleInputAge = (event) => {
        this.setState({ age: event.target.value })
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        //goi ra props tu thang cha truyen xuong, xu li va tra ve cho thang cha
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        })
    }
    render() {
        return (
            <>
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
            </>
        )
    }
}

export default AddUserInfo