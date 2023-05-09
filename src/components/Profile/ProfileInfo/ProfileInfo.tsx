import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return <>
        <div className={s.picture}>
            <img
                src='https://images.unsplash.com/photo-1682547094924-4b198c6c6d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
        </div>
        <div>ava +description
        </div>
    </>


}
export default ProfileInfo