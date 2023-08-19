//class components
// function components

import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'LoThiHoaiXuan',
        address: 'Ho Chi Minh City',
        age: 26
    }
    handleInput = (event) => {
        this.setState({ name: event.target.value })
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input type="text" onChange={(event) => { this.handleInput(event) }} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MyComponent