import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";
import NavItems from "./navItems";
const NavbarWrapper = styled.div`
    max-height: 68px;
    ${tw`
        w-[100vw]
        flex
        flex-row
        justify-between
        items-center
        text-center
        lg:pl-12
        lg:pr-12

    `};
`;
const LogoContainer = styled.div`
    ${tw``};
`;
const Navbar = () => {
    return (
        <NavbarWrapper>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <NavItems />
        </NavbarWrapper>
    );
};

export default Navbar;
