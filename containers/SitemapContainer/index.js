import React from "react";
import Sitemap from '/data/sitemap.json';
import LinkItem from "../../components/LinkItem";

const SitemapContainer = () => {
    return (
        <>
            {Sitemap?.map((props, index) => (
                <LinkItem {...props}
                          key={index}
                >
                    {props?.name}
                </LinkItem>
            ))}
        </>
    );
};

export default SitemapContainer;
