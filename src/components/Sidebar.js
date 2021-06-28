//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiUserPlus, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import {Redirect} from 'react-router-dom';


//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "../styles/Sidebar.css";


const Sidebar = () => {
    const [id, setId] = useState(5);

    const changeHome = (e) => {
        setId(0)
        window.location.href = '/';
    }

    const changeSearch = (e) => {
        setId(1)
        window.location.href = '/search';
    }

    const changeFriend = (e) => {
        setId(2)
        window.location.href = '/friend';
    }

    const changeRequest = (e) => {
        setId(3)
        window.location.href = '/friendrequest';
    }

    const changeEdit = (e) => {
        setId(4)
        window.location.href = '/edit';
    }

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    return (
        <>
            <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            <a className="title" >
                                <span className="badge">RL</span>
                            </a>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <FiArrowRightCircle/>
                            ) : (
                                <FiArrowLeftCircle/>
                            )}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={(id === 0) ? true: false} icon={<FiHome />} onClick={changeHome}>
                                Home
                            </MenuItem>
                            <MenuItem active={(id === 1) ? true: false} icon={<FaList />} onClick={changeSearch}>Search</MenuItem>
                            <MenuItem active={(id === 2) ? true: false} icon={<FaRegHeart />} onClick={changeFriend}>Friends</MenuItem>
                            <MenuItem active={(id === 3) ? true: false} icon={<FiUserPlus />} onClick={changeRequest}>Friend Request</MenuItem>
                            <MenuItem active={(id === 4) ? true: false} icon={<RiPencilLine />} onClick={changeEdit}>Edit Profile</MenuItem>
                        </Menu>
                    </SidebarContent>
                </ProSidebar>
            </div>
        </>
    );
};

export default Sidebar;