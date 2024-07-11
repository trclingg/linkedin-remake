import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user =useSelector(selectUser);
    const recentItem = (topic) => {
        return (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>)
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/6/blurred_lines.jpeg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fHByZXR0eSUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzE3MTc0NzAxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">1,000</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on posts</p>
                    <p className="sidebar__statNumber">3,345</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("software engineering")}
            </div>
        </div>
    )
}

export default Sidebar
