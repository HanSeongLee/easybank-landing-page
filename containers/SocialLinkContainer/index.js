import React from "react";
import LinkItem from "../../components/LinkItem";
import FacebookIcon from '/public/icons/icon-facebook.svg';
import YoutubeIcon from '/public/icons/icon-youtube.svg';
import TwitterIcon from '/public/icons/icon-twitter.svg';
import PinterestIcon from '/public/icons/icon-pinterest.svg';
import InstagramIcon from '/public/icons/icon-instagram.svg';

const socialLinks = [
    {
        name: "Facebook",
        icon: (<FacebookIcon />),
        href: "#"
    },
    {
        name: "Youtube",
        icon: (<YoutubeIcon />),
        href: "#"
    },
    {
        name: "Twitter",
        icon: (<TwitterIcon />),
        href: "#"
    },{
        name: "Pinterest",
        icon: (<PinterestIcon />),
        href: "#"
    },
    {
        name: "Instagram",
        icon: (<InstagramIcon />),
        href: "#"
    }
];

const SocialLinkContainer = () => {
    return (
        <>
            {socialLinks?.map(({icon, ...props}, index) => (
                <LinkItem {...props}
                          external
                          key={index}
                >
                    {icon}
                </LinkItem>
            ))}
        </>
    );
};

export default SocialLinkContainer;
