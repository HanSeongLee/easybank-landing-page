import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import Logo from "../Logo";
import Menu from "../Menu";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <h1>
                    <Logo/>
                </h1>
                <Menu/>
            </Container>
        </header>
    );
};

export default Header;
