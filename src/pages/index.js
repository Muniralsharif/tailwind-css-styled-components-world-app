import Head from "next/head";
import tw, { styled } from "twin.macro";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    decrementByAmount,
} from "../redux/reducers/counter";

export default function Home() {
    const mount = 5;
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Home</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
                <div className="flex items-center justify-center ">
                    <StyledHeader>
                        Hello from the styled tailwind component
                    </StyledHeader>
                </div>
                <div className="flex flex-row flex-wrap w-full justify-around  py-4 my-2">
                    <button
                        className="bg-blue-500 p-2 text-xl font-bold text-center text-white"
                        aria-label="Increment value"
                        onClick={() => dispatch(incrementByAmount(mount))}
                    >
                        Increment {mount}
                    </button>
                    <button
                        className="bg-blue-500 p-2 text-xl font-bold text-center text-white"
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    <span className="px-4 w-15 h-15 flex items-center text-xl font-bold bg-red-400 text-white rounded-[50%]">
                        {count}
                    </span>
                    <button
                        className="bg-white p-2 text-center text-xl font-bold  text-red-400"
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                    <button
                        className="bg-white p-2 text-center text-xl font-bold  text-red-400"
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrementByAmount(mount))}
                    >
                        Decrement {mount}
                    </button>
                </div>
            </main>
        </div>
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
