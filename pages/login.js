"use client";

import "../styles/pages/login.scss";

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { login } from "../src/app/store/slices/userSlice";

export default function Login() {

    const dispatch = useDispatch();
    const router = useRouter();
    const { isLoggedIn } = useSelector((state) => state.user);

    useEffect(() => {
        console.log(isLoggedIn);
    }, [isLoggedIn]);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');    

    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
            setErrorMsg('Please fill in all fields');
            return;
        }

        const isAuthenticated = dispatch(login(username, password));
        if (!isAuthenticated) {
            setErrorMsg('Invalid username or password');
        } else {
            setErrorMsg('');
            window.location.href = '/';
        }
    }

    return (
        <div className="login">
            <h2 className="login__title">Login Page</h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <div className="login__form-group">
                    <label className="login__label" htmlFor="username">Username:</label>
                    <input 
                        className="login__input"
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>
                <div className="login__form-group">
                    <label className="login__label" htmlFor="password">Password:</label>
                    <input 
                        className="login__input"
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button className="login__button" type="submit">Login</button>
            </form>
            {errorMsg && <p className="login__error">{errorMsg}</p>}
        </div>
    )
}