import styled from "styled-components";
import tw from "twin.macro";

import React from "react";

const PageWrapper = styled.div`
    ${tw`
    w-full
    h-full
    flex
    flex-col
    items-center
    overflow-x-hidden
    `};
`;
const PageContainer = ({ children }) => {
    return <PageWrapper>{children}</PageWrapper>;
};

export default PageContainer;
