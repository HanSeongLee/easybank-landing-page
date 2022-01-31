import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";
import FeatureContainer from "../../containers/FeatureContainer";

const FeatureSection = () => {
    return (
        <section className={styles.section}>
            <Container className={styles.header}>
                <h2 className={styles.title}>
                    Why choose Easybank?
                </h2>
                <p className={styles.description}>
                    We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
                </p>
            </Container>
            <Container className={styles.featureContainer}>
                <FeatureContainer />
            </Container>
        </section>
    );
};

export default FeatureSection;
