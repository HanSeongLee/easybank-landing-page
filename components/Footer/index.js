import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";
import Logo from "../Logo";
import Button from "../Button";
import SocialLinkContainer from "../../containers/SocialLinkContainer";
import SitemapContainer from "../../containers/SitemapContainer";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <Logo/>

                <ul className={styles.socialLinkContainer}>
                    <SocialLinkContainer/>
                </ul>

                <ul className={styles.sitemapContainer}>
                    <SitemapContainer />
                </ul>

                <div className={styles.buttonWrapper}>
                    <Button>
                        Request Invite
                    </Button>
                </div>
                <p className={styles.copyright}>
                    © Easybank. All Rights Reserved
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
