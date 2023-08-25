import React, { useState } from "react";
import "./DisplayInfor.scss"
// class DisplayInfor extends React.Component {
//     render() {
//         const { listUsers } = this.props
//         return (
//             <div className="display-infor-container">
//                 {true &&
//                     <>
//                         {
//                             listUsers.map((user) => {
//                                 return (
//                                     <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
//                                         <div>
//                                             <div>My name is {user.name}</div>
//                                             <div>My age: {user.age} </div>
//                                         </div>
//                                         <div>
//                                             <button onClick={() => { this.props.handleDeleteUser(user.id) }}>Deleted</button>
//                                         </div>
//                                         <hr></hr>
//                                     </div>
//                                 )
//                             })
//                         }
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props
    const [isShowHideListUsers, setShowHideListUsers] = useState(true)
    const handleShowHideListUsers = () => {
        setShowHideListUsers(!isShowHideListUsers)
    }
    return (
        <div className="display-infor-container">
            <div><span onClick={() => { handleShowHideListUsers() }}>
                {isShowHideListUsers === true ? "Hide list users" : "Show list users"}
            </span></div>
            {isShowHideListUsers &&
                <>
                    {
                        listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                                    <div>
                                        <div>My name is {user.name}</div>
                                        <div>My age: {user.age} </div>
                                    </div>
                                    <div>
                                        <button onClick={() => { props.handleDeleteUser(user.id) }}>Deleted</button>
                                    </div>
                                    <hr></hr>
                                </div>
                            )
                        })
                    }
                </>
            }
        </div>
    )
}
export default DisplayInfor