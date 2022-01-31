import React from "react";
import styles from './style.module.scss';

const ArticleCard = ({ thumbnail, author, title, description }) => {
    return (
        <article className={styles.card}>
            <img className={styles.thumbnail}
                 src={thumbnail}
                 alt={''}
            />
            <div className={styles.body}>
                <div className={styles.author}>
                    By {author}
                </div>
                <h3 className={styles.title}>
                    {title}
                </h3>
                <p className={styles.description}>
                    {description}
                </p>
            </div>
        </article>
    );
};

export default ArticleCard;
