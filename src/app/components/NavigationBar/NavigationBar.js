'use client';

import './NavigationBar.scss';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const NavigationBar = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    
    //Fetch user data from redux store
    const { isLoggedIn, avatar, email, username } = useSelector((state) => state.user);

    if (isLoggedIn) {
        console.log('User is logged in:', username, email, avatar);
    }

    return (
        <nav className="navigation-bar">
            <ul className="container navigation-bar__wrapper">
                <a href="/" className={`navigation-bar__item ${pathname == '/' ? 'active' : ''}`}> Find Jobs </a>
                <a href="/post-new-job" className="navigation-bar__item"> Post A New Job </a>
            </ul>
        </nav>
    );
};

export default NavigationBar;