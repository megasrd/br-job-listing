"use client";

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
        <div className="login-page">
            <h2> Login Page </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
            { errorMsg && <p className="error">{errorMsg}</p> }
        </div>
    )
}