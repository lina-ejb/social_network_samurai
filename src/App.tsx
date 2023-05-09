import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs"
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Header/>
                <div className={s.main}>
                    <Navbar/>
                    <div className={s.content}>
                        <Routes>
                            <Route path='/dialogs/*' element={<Dialogs/>}/>
                            <Route path='/profile/*' element={<Profile/>}/>
                        </Routes>

                    </div>

                </div>
            </div>
        </BrowserRouter>);
}

export default App;
