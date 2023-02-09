import React from 'react'
import './App.css'
import {NavLink, Route, Routes} from "react-router-dom";
import {Profile} from "../components/profile/Profile";
import {PageNotFound} from "../components/pageNotFound/PageNotFound";
import {Login} from "../components/login/Login";
import {Registration} from "../components/registration/Registration";
import {ResetPassword} from "../components/resetPassword/ResetPassword";
import {ChangePassword} from "../components/changePassword/ChangePassword";


function App() {


    return (
        <div className="App">
            <div>
                <div><NavLink to={"/profile"}>Profile</NavLink></div>
                <div><NavLink to={"/login"}>Login</NavLink></div>
                <div><NavLink to={"/registration"}>Registration</NavLink></div>
                <div><NavLink to={"/resetPassword"}>Reset password</NavLink></div>
                <div><NavLink to={"/changePassword"}>Change Password</NavLink></div>
            </div>
            <Routes>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='/resetPassword' element={<ResetPassword/>}/>
                <Route path='/changePassword' element={<ChangePassword/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}

export default App
