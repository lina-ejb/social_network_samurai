import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {BiMessageSquareDetail, CgProfile, FaRegNewspaper, BiMusic, AiOutlineSetting} from "react-icons/all";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink
                    to='/profile'>
                    <CgProfile/>
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to='/dialogs'
                >
                    <BiMessageSquareDetail/>
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink
                    to='/news'
                >
                    <FaRegNewspaper/>
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'
                >
                    <BiMusic/>
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='settings'
                >
                    <AiOutlineSetting/>
                    Settings
                </NavLink>
            </div>
        </nav>
    )

};

export default Navbar