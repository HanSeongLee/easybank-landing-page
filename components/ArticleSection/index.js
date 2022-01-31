import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";
import LatestArticleContainer from "../../containers/LatestArticleContainer";

const ArticleSection = () => {
    return (
        <section className={styles.section}>
            <Container className={styles.header}>
                <h2 className={styles.title}>
                    Latest Articles
                </h2>
            </Container>
            <Container className={styles.latestArticleContainer}>
                <LatestArticleContainer />
            </Container>
        </section>
    );
};

export default ArticleSection;
