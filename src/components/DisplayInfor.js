import React from "react";
import "./DisplayInfor.scss"
class DisplayInfor extends React.Component {
    state = {
        isShowListUsers: true,
    }
    handleShowHide = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers,
        })
    }
    render() {
        const { listUsers } = this.props;
        return (
            <div className="display-infor-container">
                <div><span onClick={() => { this.handleShowHide() }}>{this.state.isShowListUsers ? "Hiden List User" : "Show List Users"}</span></div>
                {this.state.isShowListUsers &&
                    <div>
                        {
                            listUsers.map((user) => {
                                return (
                                    <div key={user.id} className={+user.age > 18 ? "red" : "green"}>
                                        <div>My name is {user.name}</div>
                                        <div>My age: {user.age} </div>
                                        <hr></hr>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}
export default DisplayInfor