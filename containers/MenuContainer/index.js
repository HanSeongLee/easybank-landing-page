import React from 'react';
import Menu from '/data/menu.json';
import LinkItem from "../../components/LinkItem";

const MenuContainer = () => {
    return (
        <>
            {Menu?.map((props, index) => (
                <LinkItem {...props}
                          key={index}
                >
                    {props?.name}
                </LinkItem>
            ))}
        </>
    );
};

export default MenuContainer;
