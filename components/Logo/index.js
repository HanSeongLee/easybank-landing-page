import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import LogoImage from '/public/logo.svg';

const Logo = () => {
    return (
        <Link href={'/'}>
            <a>
                <LogoImage />
            </a>
        </Link>
    );
};

export default Logo;
