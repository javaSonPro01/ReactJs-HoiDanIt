//class components
// function components

import React from "react";
import UserInfo from "./UserInfor";

class MyComponent extends React.Component {

    //JSX
    render() {
        return (
            <div>
                <UserInfo />
            </div>
        )
    }
}

export default MyComponent