'use client';

import './NavigationBar.scss';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/userSlice';

const NavigationBar = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    
    //Fetch user data from redux store
    const { isLoggedIn, avatar, email, username } = useSelector((state) => state.user);

    if (isLoggedIn) {
        console.log('User is logged in:', username, email, avatar);
    }
    const handleLogout = () => {
        dispatch(logout());
        alert('You have been logged out successfully!');
        router.push('/login');
    };

    return (
        <nav className="navigation-bar">
            <ul className="container navigation-bar__wrapper">
                <Link href="/" className={`navigation-bar__item ${pathname == '/' ? 'active' : ''}`}> Find Jobs </Link>
                <Link href="/new-job" className={`navigation-bar__item ${pathname == '/new-job' ? 'active' : ''}`}> Post A New Job </Link>
                { isLoggedIn && <div className="navigation-bar__user-details"> 
                    <img className="navigation-bar__user-details--avatar" width="32" src={avatar} />
                    <label title={email} className="navigation-bar__user-details--username"> { username } </label>
                    <a onClick={ () => { handleLogout() } } className="navigation-bar__item navigation-bar__logout"> Logout </a>
                </div> }
                { !isLoggedIn && <div className="navigation-bar__user-details">
                    <Link href="/login" className={`navigation-bar__item ${pathname == '/login' ? 'active' : ''}`}> Login </Link>
                </div>}
            </ul>
        </nav>
    );
};

export default NavigationBar;