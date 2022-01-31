import React from 'react';
import ArticleCard from "../../components/ArticleCard";

const latestArticles = [
    {
        thumbnail: '/img/image-currency.jpg',
        author: 'Claire Robinson',
        title: 'Receive money in any currency with no fees',
        description: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
    },
    {
        thumbnail: '/img/image-restaurant.jpg',
        author: 'Wilson Hutton',
        title: 'Treat yourself without worrying about money',
        description: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
    },
    {
        thumbnail: '/img/image-plane.jpg',
        author: 'Wilson Hutton',
        title: 'ReTake your Easybank card wherever you go',
        description: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
    },
    {
        thumbnail: '/img/image-confetti.jpg',
        author: 'Claire Robinson',
        title: 'Our invite-only Beta accounts are now live!',
        description: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
    },
]

const LatestArticleContainer = () => {
    return (
        <>
            {latestArticles?.map((props, index) => (
                <ArticleCard {...props}
                             key={index}
                />
            ))}
        </>
    );
};

export default LatestArticleContainer;
