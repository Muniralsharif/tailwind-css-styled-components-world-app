import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
const BlobImage = "/assets/images/blob.svg";
const MclarenCarImage = "/assets/images/mclaren-orange-big.png";
import { screens } from "./../../responsive/index";
const TopSectionWrapper = styled.div`
    min-height: 400px;
    margin-top: 6em;

    ${tw`
        w-full
        flex
        flex-row
        justify-between
        items-center

        px-2
        lg:px-12
    `};
`;
const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        
    `};
`;
const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;
const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        /* leading is like line-high  */
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed

    
    `};
`;
const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `};
`;
const BlobContainer = styled.div`
    width: 21em;
    top: -12em;
    height: 3em;
    position: absolute;
    right: -1em;
    z-index: -1;
    padding-top: 2em;
    transform: rotate(-30deg);
    img {
        width: 100%;
        height: auto;
        max-height: max-content;
    }
    @media (min-width: ${screens.xs}) {
        width: 40em;
        top: -16em;
        max-hight: 10em;
        right: -5em;
    }
    @media (min-width: ${screens.sm}) {
        width: 40em;
        top: -16em;
        max-hight: 10em;
        right: -6em;
    }
    @media (min-width: ${screens.md}) {
        width: 35em;
        top: -15em;
        max-hight: 10em;
        right: -3em;
    }
`;
const StandaloneCar = styled.div`
    width: auto;
    height: 10em;
    right: -6em;
    top: -5em;
    position: absolute;

    img {
        width: 33em;
        hight: 100%;
    }

    @media screen (min-width: ${screens.sm}) {
        height: 16em;
        right: -6em;
        top: -6em;
    }
    @media screen (min-width: ${screens.lg}) {
        height: 16em;
        right: -6em;
        top: -6em;
    }
    @media screen (min-width: ${screens.xl}) {
        height: 16em;
        right: -6em;
        top: -6em;
    }
`;
const TopSection = () => {
    return (
        <TopSectionWrapper>
            <LeftContainer>
                <Slogan>Rent The Best Quality Car's With Us</Slogan>
                <Description>
                    Always choose the best car from our local stores or order it
                    remotely at the best price for you and get the best quality
                    cars for as long as you like
                </Description>
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={BlobImage} alt="blob" />
                </BlobContainer>
                <StandaloneCar>
                    <img src={MclarenCarImage} alt="mclaren" />
                </StandaloneCar>
            </RightContainer>
        </TopSectionWrapper>
    );
};

export default TopSection;
