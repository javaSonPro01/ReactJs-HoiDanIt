//class components
// function components

import React from "react";
import UserInfo from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    //JSX
    render() {
        const myName = "The Son"
        const myAge = 21
        return (
            <div>
                <UserInfo />

                <br></br>
                <hr></hr>
                <DisplayInfor name={myName} age={myAge} />
            </div>
        )
    }
}

export default MyComponent