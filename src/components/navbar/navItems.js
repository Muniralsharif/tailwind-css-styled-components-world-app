import React from "react";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { screens } from "../responsive";
import menuStyle from "./menuStyle";
const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `};
`;
const NavItem = styled.li(({ menu }) => [
    menu
        ? tw`
    text-white
    text-xl
    mb-3
    font-bold
    focus:text-white
    `
        : tw`
    text-sm
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
    `,
]);
const NavLink = styled(Link)`
    ${tw`

    `};
`;
const NavItems = () => {
    const isMobile = useMediaQuery({ maxWidth: screens.sm });
    if (isMobile) {
        return (
            <Menu right styles={menuStyle}>
                <ListContainer>
                    <NavItem menu>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem menu>
                        <NavLink href="/cars">Cars</NavLink>
                    </NavItem>
                    <NavItem menu>
                        <NavLink href="/services">Services</NavLink>
                    </NavItem>
                    <NavItem menu>
                        <NavLink href="/contact">Contact Us</NavLink>
                    </NavItem>
                </ListContainer>
            </Menu>
        );
    }
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
