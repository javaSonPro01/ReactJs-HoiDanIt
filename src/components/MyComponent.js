//class components
// function components

import React from "react";
import AddUserInfo from "./AddUserInfor";
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
    //Xu li logic ben component cha- nhan data tu thang con gui ve
    handleAddNewUser = (user) => {
        this.setState({
            listUsers: [...this.state.listUsers, user]
        })
    }
    //JSX
    render() {

        return (
            <div>
                <AddUserInfo
                    //Truyen tham chieu
                    handleAddNewUser={this.handleAddNewUser}
                />
                <hr></hr>
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        )
    }
}

export default MyComponent