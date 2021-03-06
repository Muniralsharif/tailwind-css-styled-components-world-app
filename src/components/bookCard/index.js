import React, { useState } from "react";
import { FaRegCalendarAlt, FaAngleUp, FaAngleDown } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";
import Button from "../button";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
        flex-1
        justify-around
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
const Name = styled.p`
    ${tw`
        w-full
        text-gray-600
        text-xs
        flex
        justify-center
        items-center
        select-none
        cursor-pointer
    `};
`;

const DateCalender = styled(Calendar)`
    max-width: none;
`;
const CalenderWrapper = styled.div`
    ${tw`
        select-none
        fixed
        z-10
        top-1/2
        left-1/2
        transform
        -translate-x-1/2
        -translate-y-1/2
        flex
        flex-col
        justify-center
        items-center
    `};
`;
const IconSpan = styled.span`
    ${tw`
        text-green-500
    `};
`;
const ButtonWrapper = styled.div`
    ${tw`
        mt-3
        flex
        gap-1
    `};
`;

const BookCard = () => {
    const [DatePicked, setDatePicked] = useState(new Date());

    const [DateReturn, setDateReturn] = useState(new Date());
    const [confirmDatePicked, setConfirmDatePicked] = useState(new Date());
    const [confirmDateReturn, setConfirmDateReturn] = useState(new Date());
    const [OpenPicked, setOpenPicked] = useState(false);
    const [OpenReturn, setOpenReturn] = useState(false);

    const bookingHandler = () => {
        console.log("start", DatePicked.toLocaleDateString());
        console.log("end", DateReturn.toLocaleDateString());
        // Here we calculate the number of days between the two dates
        const oneDay = 24 * 60 * 60 * 1000;
        const days = Math.round(
            Math.abs(DateReturn.getTime() - DatePicked.getTime()) / oneDay
        );
        console.log("duration", days, "days");
    };

    return (
        <BookCardWrapper>
            <CardItem>
                <Icon>
                    <FaRegCalendarAlt size="20px" />
                </Icon>
                <Name
                    onClick={() => {
                        setOpenPicked(!OpenPicked);
                        setOpenReturn(false);
                    }}
                >
                    Pick Up Date
                    {OpenPicked ? (
                        <IconSpan>
                            <FaAngleDown size="20px" />
                        </IconSpan>
                    ) : (
                        <IconSpan>
                            <FaAngleUp size="20px" />
                        </IconSpan>
                    )}
                </Name>
                {OpenPicked && (
                    <CalenderWrapper>
                        <h1 className="font-bold text-center rounded text-white w-full bg-red-600">
                            Pick up Starts Day
                        </h1>
                        <DateCalender
                            calendarType={"Arabic"}
                            onChange={setDatePicked}
                            value={DatePicked}
                        />

                        <ButtonWrapper>
                            <Button
                                onClick={() => {
                                    console.log(DatePicked);
                                    setConfirmDatePicked(DatePicked);
                                    setOpenPicked(false);
                                }}
                                text="Confirm"
                            />
                            <Button
                                onClick={() => {
                                    console.log("hello im working");
                                    setOpenPicked(false);
                                }}
                                theme="filled"
                                text="Cancel"
                            />
                        </ButtonWrapper>
                    </CalenderWrapper>
                )}
            </CardItem>
            <CardItem>
                <Icon>
                    <FaRegCalendarAlt size="20px" />
                </Icon>
                <Name
                    onClick={() => {
                        setOpenReturn(!OpenReturn);
                        setOpenPicked(false);
                    }}
                >
                    Return Date
                    {OpenReturn ? (
                        <IconSpan>
                            <FaAngleDown size="20px" />
                        </IconSpan>
                    ) : (
                        <IconSpan>
                            <FaAngleUp size="20px" />
                        </IconSpan>
                    )}
                </Name>
                {OpenReturn && (
                    <CalenderWrapper calendarType="Arabic">
                        <h1 className="font-bold text-center rounded text-white w-full bg-red-600">
                            Return Day
                        </h1>
                        <DateCalender
                            onChange={setDateReturn}
                            value={DateReturn}
                            calendarType={"Arabic"}
                        />
                        <ButtonWrapper>
                            <Button
                                onClick={() => {
                                    console.log(DateReturn);
                                    setConfirmDateReturn(DateReturn);
                                    setOpenReturn(false);
                                }}
                                text="Confirm"
                            />
                            <Button
                                onClick={() => {
                                    console.log("hello im working");
                                    setOpenReturn(false);
                                }}
                                theme="filled"
                                text="Cancel"
                            />
                        </ButtonWrapper>
                    </CalenderWrapper>
                )}
            </CardItem>
            <Button onClick={bookingHandler} text="Book Your Ride" />
        </BookCardWrapper>
    );
};

export default BookCard;
