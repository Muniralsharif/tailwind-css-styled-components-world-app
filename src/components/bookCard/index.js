import React from "react";
import { FaRegCalendarAlt, IconName } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../button";
const BookCardWrapper = styled.div`
    box-shadow: -1px 6px 25px 2px rgba(0, 0, 0, 0.61);
    -webkit-box-shadow: -1px 6px 25px 2px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: -1px 6px 25px 2px rgba(0, 0, 0, 0.61);
    ${tw`
        w-[60%]
        max-w-[400px]
        flex
        flex-wrap
        gap-y-3
        justify-center
        items-center
        rounded-md
        bg-white
        py-1
        px-2
        mx-auto

    `};
`;
const CardItem = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        font-bold
        text-lg
    `};
`;
const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current
        mr-1
    `};
`;
const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
    `};
`;
const LineSeparator = styled.span`
    ${tw`
        w-[2px]
        h-[45%]
        bg-gray-300
        mx-2
    `};
`;
const BookCard = () => {
    return (
        <BookCardWrapper>
            <CardItem>
                <Icon>
                    <FaRegCalendarAlt size="25px" />
                </Icon>
                <Name>Pick Up Date</Name>
            </CardItem>
            <LineSeparator />
            <CardItem>
                <Icon>
                    <FaRegCalendarAlt size="25px" />
                </Icon>
                <Name>Return Date</Name>
            </CardItem>
            <LineSeparator />
            <Button text="Book Your Ride" />
        </BookCardWrapper>
    );
};

export default BookCard;
