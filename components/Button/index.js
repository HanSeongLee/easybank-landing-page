import React from "react";
import styles from './style.module.scss';

const Button = ({ children, ...props }) => {
    return (
        <button className={styles.button}
                {...props}
        >
            {children}
        </button>
    );
};

export default Button;
