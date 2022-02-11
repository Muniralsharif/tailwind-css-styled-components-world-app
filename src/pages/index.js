import Head from "next/head";
import tw, { styled } from "twin.macro";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    decrementByAmount,
} from "../redux/reducers/counter";
import PageContainer from "../components/containers/pageContainers";
import Navbar from "../components/navbar";
import TopSection from "../components/containers/HomePageTopSection";
import BookCard from "../components/bookCard";
export default function Home() {
    const mount = 5;
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <PageContainer>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {/* <Navbar /> */}
                <TopSection />
                <BookCard />
            </main>
        </PageContainer>
    );
}

const StyledHeader = styled.h1`
    ${tw`
    text-green-400
    w-full
    text-center
    text-5xl
    hover:text-6xl hover:text-red-50
    sm:text-red-500
    md:text-indigo-500

    `};
`;
const Text = styled.p`
    ${tw`
    flex
    flex-col
    justify-center
    text-center
    items-center
    `};
`;
// const ConditionalButton = styled.button(({ isRed }) => [
//     isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-500`,
//     tw`
//     text-white
//     font-bold
//     py-2
//     px-4
//     border
//     border-black
//     rounded
//   `,
// ]);
