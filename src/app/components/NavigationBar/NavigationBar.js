'use client';

import './NavigationBar.scss';
import { useRouter, usePathname } from 'next/navigation';

const NavigationBar = () => {
    const router = useRouter();
    const pathname = usePathname();
    console.log(`Current path: ${pathname}`);
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