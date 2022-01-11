import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import CarLogoImage from "../../../public/assets/images/car-logo.png";

const LogoWrapper = styled.div`
    ${tw`
    flex
    items-center
    `};
`;

const LogoText = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1

    `};
`;
const Image = styled.div`
    ${tw`
        h-6 
        md:h-9
    `};
    img {
        width: auto;
        height: 100%;
    }
`;

const Logo = () => {
    return (
        <LogoWrapper>
            <Image>
                <img src={CarLogoImage.src} alt="CarLogo" />
            </Image>
            <LogoText>Yourcar .</LogoText>
        </LogoWrapper>
    );
};

export default Logo;
