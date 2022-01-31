import React from "react";
import styles from './style.module.scss';
import cn from 'classnames';

const Container = ({ children, className, ...props }) => {
    return (
        <div className={cn(styles.container, className)}
             {...props}
        >
            {children}
        </div>
    );
};

export default Container;
