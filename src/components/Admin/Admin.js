import SideBarNav from "./Side-Bar"
import "./Admin.scss"
import { FaBars } from "react-icons/fa"
import { useState } from "react"
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Admin = (props) => {

    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBarNav collapsed={collapsed}></SideBarNav>
            </div>

            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={() => setCollapsed(!collapsed)} />
                </div>
                <div className="admin-main">
                    <Outlet></Outlet>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}
export default Admin