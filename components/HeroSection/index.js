import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import Button from "../Button";

const HeroSection = () => {
    return (
        <section className={styles.section}>
            <Container className={styles.mockupsContainer}>
                <img className={styles.mockupsImage}
                     src={'/img/image-mockups.png'}
                     alt={''}
                />
            </Container>
            <Container className={styles.contentContainer}>
                <h2 className={styles.title}>
                    Next generation
                    digital banking
                </h2>
                <p className={styles.description}>
                    Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
                    budgeting, investing, and much more.
                </p>
                <Button>
                    Request Invite
                </Button>
            </Container>
        </section>
    );
};

export default HeroSection;
