import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sliceAction } from "../store/index";
import { Redirect, Link } from "react-router-dom";

import ChoiceItem from "./ChoiceItem";

const Selected = () => {
    const dispatch = useDispatch();

    const houseValue = useSelector((state) => state.houseValue);
    const visibleHouse = useSelector((state) => state.visibleHouse);
    const visibleResult = useSelector((state) => state.visibleResult);
    const selected = useSelector((state) => state.selected);
    const choices = useSelector((state) => state.choices);
    const result = useSelector((state) => state.result);

    useEffect(() => {
        dispatch(sliceAction.housePicked());
        dispatch(sliceAction.calcResult());
    }, [houseValue, dispatch]);

    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(sliceAction.toggleVisibleHouse());
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [dispatch]);

    useEffect(() => {
        let timer = setTimeout(() => {
            if (result === "you win") {
                dispatch(sliceAction.increment());
            } else if (result === "you lose") {
                dispatch(sliceAction.decrement());
            }
            dispatch(sliceAction.toggleVisibleResult());
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [result,dispatch]);

    let classes = "";
    let img = "";
    let alt = "";
    let homeClasses = "";
    let homeImg = "";
    let homeAlt = "";
    switch (selected) {
        case "":
            return <Redirect to="/" />;
        case "paper":
            classes = choices[0].classes;
            img = choices[0].img;
            alt = choices[0].alt;
            break;
        case "rock":
            classes = choices[1].classes;
            img = choices[1].img;
            alt = choices[1].alt;
            break;
        case "scissors":
            classes = choices[2].classes;
            img = choices[2].img;
            alt = choices[2].alt;
            break;
        default:
            break;
    }
    switch (houseValue) {
        case 0:
            homeClasses = choices[0].classes;
            homeImg = choices[0].img;
            homeAlt = choices[0].alt;
            break;
        case 1:
            homeClasses = choices[1].classes;
            homeImg = choices[1].img;
            homeAlt = choices[1].alt;
            break;
        case 2:
            homeClasses = choices[2].classes;
            homeImg = choices[2].img;
            homeAlt = choices[2].alt;
            break;
        default:
            break;
    }
    const toggleVisible = () => {
        dispatch(sliceAction.toggleVisibleHouse());
        dispatch(sliceAction.toggleVisibleResult());
    };
    return (
        <div className="flex mt-32">
            <div>
                <span className="uppercase text-white align-center">
                    you picked
                </span>
                <ChoiceItem classes={`${classes} mr-5`} img={img} alt={alt} />
            </div>
            {visibleResult && (
                <div className="flex justify-center items-center flex-col mx-7">
                    <span className="uppercase text-white text-4xl">
                        {result}
                    </span>
                    <Link
                        onClick={toggleVisible}
                        to="/"
                        className="py-1 px-9 mt-3 text-red-700 border-2 border-header rounded-md bg-white"
                    >
                        PLAY AGAIN
                    </Link>
                </div>
            )}
            <div>
                <span className="uppercase text-white align-center">
                    the house picked
                </span>
                {visibleHouse ? (
                    <ChoiceItem
                        classes={`${homeClasses} ml-5`}
                        img={homeImg}
                        alt={homeAlt}
                    />
                ) : (
                    <div className="w-24 h-24 min-w-24 min-h-24 rounded-full bg-bg-dark ml-5" />
                )}
            </div>
        </div>
    );
};

export default Selected;
