import SideBarNav from "./Side-Bar"
import "./Admin.scss"
import { FaBars } from "react-icons/fa"
import { useState } from "react"
const Admin = (props) => {

    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBarNav collapsed={collapsed}></SideBarNav>
            </div>

            <div className="admin-content">
                Conten go here
                <FaBars onClick={() => setCollapsed(!collapsed)} />
            </div>
        </div>
    )
}
export default Admin