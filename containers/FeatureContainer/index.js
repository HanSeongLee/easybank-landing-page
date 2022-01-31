import React from "react";
import FeatureCard from "../../components/FeatureCard";

const features = [
    {
        icon: '/icons/icon-online.svg',
        title: 'Online Banking',
        description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    },
    {
        icon: '/icons/icon-budgeting.svg',
        title: 'Simple Budgeting',
        description: 'See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits.',
    },
    {
        icon: '/icons/icon-onboarding.svg',
        title: 'Fast Onboarding',
        description: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
    },
    {
        icon: '/icons/icon-api.svg',
        title: 'Open API',
        description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
    },
];

const FeatureContainer = () => {
    return (
        <>
            {features?.map((feature, index) => (
                <FeatureCard {...feature}
                             key={index}
                />
            ))}
        </>
    );
};

export default FeatureContainer;
