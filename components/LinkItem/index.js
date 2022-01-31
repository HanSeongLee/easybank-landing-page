import React from "react";
import styles from './style.module.scss';
import Link from 'next/link';

const LinkItem = ({ name, href, external=false, children }) => {
    return (
        <li>
            {!external ? (
                <Link href={href}>
                    <a aria-label={name}>
                        {children}
                    </a>
                </Link>
            ) : (
                <a href={href}
                   aria-label={name}
                   target={'_blank'}
                >
                    {children}
                </a>
            )}
        </li>
    );
};

export default LinkItem;
