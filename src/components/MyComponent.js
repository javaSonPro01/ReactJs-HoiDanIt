//class components
// function components

import React, { useState } from "react";
import AddUserInfo from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             {
//                 id: 1,
//                 name: "Nguyen The Son",
//                 age: 21
//             },
//             {
//                 id: 2,
//                 name: "Hoai Xuan",
//                 age: 21
//             },
//             {
//                 id: 3,
//                 name: "Trong Dai",
//                 age: 14
//             },
//         ]
//     }
//     //Xu li logic ben component cha- nhan data tu thang con gui ve
//     handleAddNewUser = (user) => {
//         this.setState({
//             listUsers: [...this.state.listUsers, user]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers]
//         listUsersClone = listUsersClone.filter(user => user.id !== userId)
//         this.setState({ listUsers: listUsersClone })
//     }
//     //JSX
//     render() {

//         return (
//             <div className="container">
//                 <AddUserInfo
//                     //Truyen tham chieu
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <hr></hr>
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </div>
//         )
//     }
// }

const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState(
        [
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
    )

    const handleAddNewUser = (user) => {
        setListUsers([user, ...listUsers]);
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers]
        listUsersClone = listUsersClone.filter(user => user.id !== userId)
        setListUsers(listUsersClone)
    }
    return (
        <div className="container">
            <AddUserInfo
                //Truyen tham chieu
                handleAddNewUser={handleAddNewUser}
            />
            <hr></hr>
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    )
}

export default MyComponent