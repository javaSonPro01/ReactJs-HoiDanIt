import React from "react";

class DisplayInfor extends React.Component {

    render() {
        const { name, age } = this.props;
        console.log(this.props)
        return (
            <div>
                Hello {name}, your age: {age}
            </div>
        )
    }
}
export default DisplayInfor