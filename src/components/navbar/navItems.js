import React from "react";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `};
`;
const NavItem = styled.li`
    ${tw`
    text-xs
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700

    `};
`;
const NavLink = styled(Link)`
    ${tw`

    `};
`;
const NavItems = () => {
    return (
        <ListContainer>
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/cars">Cars</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/services">Services</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/contact">Contact Us</NavLink>
            </NavItem>
        </ListContainer>
    );
};

export default NavItems;
