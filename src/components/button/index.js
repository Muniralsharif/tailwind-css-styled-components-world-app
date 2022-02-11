import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const BaseButton = styled.button`
    ${tw`
        px-5
        py-3
        outline-none
        rounded-md
        text-white
        text-xs
        font-bold
        border-transparent
        border-2
        border-solid
        focus:outline-none
        transition-all
        duration-200
        ease-in-out
        ml-3
    `};
`;
const OutlinedButton = styled(BaseButton)`
    ${tw`
        bg-red-500
        hover:bg-transparent
        hover:text-red-500
        hover:border-red-500
        
    `};
`;
const FilledButton = styled(BaseButton)`
    ${tw`
        border-red-500
        text-red-500
        bg-transparent
        hover:bg-red-500
        hover:text-white
        hover:border-transparent


    `};
`;
const Button = ({ theme, text, ...props }) => {
    if (theme === "filled") {
        return <FilledButton {...props}>{text}</FilledButton>;
    } else {
        return <OutlinedButton {...props}>{text}</OutlinedButton>;
    }
};

export default Button;
