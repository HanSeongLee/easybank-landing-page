import React from 'react';
import styles from './style.module.scss';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <article className={styles.card}>
            <img className={styles.icon}
                 src={icon}
                 alt={''}
            />
            <h3 className={styles.title}>
                {title}
            </h3>
            <p className={styles.description}>
                {description}
            </p>
        </article>
    );
};

export default FeatureCard;
