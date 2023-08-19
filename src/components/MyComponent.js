//class components
// function components

import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'LoThiHoaiXuan',
        address: 'Ho Chi Minh City',
        age: 26
    }

    handleClick() {
        console.log('>>>>>>Click me hihi')
    }
    handleOnMouserOver = (even) => {
        console.log(even.pageX, even.pageY)
        console.log("My name is: ", this.state.name)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseOver={this.handleOnMouserOver}>Over Me</button>
            </div>
        )
    }
}

export default MyComponent