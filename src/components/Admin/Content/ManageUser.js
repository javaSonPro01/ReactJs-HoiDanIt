import ModalCreateUser from "./ModalCreateUser"
import './ManageUser.scss'
const MangageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title"></div>
            <div classNameName="users-content">
                <div><button>Add new user</button></div>
                <div>Table users</div>
                <ModalCreateUser />
            </div>
        </div>
    )
}

export default MangageUser