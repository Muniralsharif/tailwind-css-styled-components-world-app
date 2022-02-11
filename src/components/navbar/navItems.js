import React from "react";
import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { screens } from "../responsive";
import menuStyle from "./menuStyle";
import { useRouter } from "next/router";
const Menu = dynamic(() =>
    import("react-burger-menu").then((slide) => {
        slide;
    })
);
const ListContainer = styled.ul`
    ${tw`
        flex
        list-none
    `};
`;
const NavItem = styled.li(({ menu, isActive }) => [
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
    font-extrabold
    hover:text-red-500
    `,
    isActive
        ? tw`
        text-red-300

    `
        : null,
]);
const NavLink = styled(Link)`
    ${tw`
  
    `};
    a {
        font-weight: bold;
    }
`;
const NavItems = () => {
    const router = useRouter();

    const isMobile = useMediaQuery({ maxWidth: screens.sm });
    if (isMobile) {
        return (
            <Menu right styles={menuStyle}>
                <ListContainer>
                    <NavItem
                        menu
                        isActive={router.pathname == "/" ? true : false}
                    >
                        <NavLink href="/">
                            <a>Home</a>
                        </NavLink>
                    </NavItem>
                    <NavItem
                        menu
                        isActive={router.pathname == "/cars" ? true : false}
                    >
                        <NavLink href="/cars">
                            <a>Cars</a>
                        </NavLink>
                    </NavItem>
                    <NavItem
                        menu
                        isActive={router.pathname == "/services" ? true : false}
                    >
                        <NavLink href="/services">
                            <a>Services</a>
                        </NavLink>
                    </NavItem>
                    <NavItem
                        menu
                        isActive={router.pathname == "/contact" ? true : false}
                    >
                        <NavLink href="/contact">
                            <a>Contact Us</a>
                        </NavLink>
                    </NavItem>
                </ListContainer>
            </Menu>
        );
    }
    return (
        <ListContainer>
            <NavItem isActive={router.pathname == "/" ? true : false}>
                <NavLink href="/">
                    <a>Home</a>
                </NavLink>
            </NavItem>
            <NavItem isActive={router.pathname == "/cars" ? true : false}>
                <NavLink href="/cars">
                    <a>Cars</a>
                </NavLink>
            </NavItem>
            <NavItem isActive={router.pathname == "/services" ? true : false}>
                <NavLink href="/services">
                    <a>Services</a>
                </NavLink>
            </NavItem>
            <NavItem isActive={router.pathname == "/contact" ? true : false}>
                <NavLink href="/contact">
                    <a>Contact Us</a>
                </NavLink>
            </NavItem>
        </ListContainer>
    );
};

export default NavItems;
