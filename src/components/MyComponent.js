//class components
// function components

import React from "react";
import UserInfo from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            {
                id: 1,
                name: "Nguyen The Son",
                age: 21
            },
            {
                id: 2,
                name: "Hoai Xuan",
                age: 21
            },
            {
                id: 3,
                name: "Trong Dai",
                age: 14
            },
        ]
    }
    //JSX
    render() {

        return (
            <div>
                <UserInfo />
                <hr></hr>
                <DisplayInfor listUsers={this.state.listUsers} />
            </div>
        )
    }
}

export default MyComponent