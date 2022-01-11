import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles/globalStyle.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
const AppContainer = styled.div`
    ${tw`
        w-full
        h-full
        flex
        flex-col
    `};
`;
function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <AppContainer>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>
                <Component {...pageProps} />
            </AppContainer>
        </Provider>
    );
}

export default MyApp;
