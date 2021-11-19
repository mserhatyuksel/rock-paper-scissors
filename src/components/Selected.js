import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sliceAction } from "../store/index";
import { Redirect, Link } from "react-router-dom";

import ChoiceItem from "./ChoiceItem";
let classes = "";
let img = "";
let alt = "";
let homeClasses = "";
let homeImg = "";
let homeAlt = "";
const Selected = () => {
  const dispatch = useDispatch();

  const [visibleHouse, setVisibleHouse] = useState(false);
  const [visibleResult, setVisibleResult] = useState(false);

  const [isPlayerWin, setIsPlayerWin] = useState("");
  const [isHouseWin, setIsHouseWin] = useState("");

  let count;
  const [countDown, setCountDown] = useState(3);

  const houseValue = useSelector((state) => state.houseValue);
  const selected = useSelector((state) => state.selected);
  const choices = useSelector((state) => state.choices);
  const result = useSelector((state) => state.result);

  const updateCountDown = () => {
    count =
      !count &&
      setInterval(() => {
        console.log("object");
        setCountDown((prev) => prev - 1);
      }, 1000);
    if (countDown === 0) {
      clearInterval(count);
    }
  };

  useEffect(() => {
    dispatch(sliceAction.housePicked());
    dispatch(sliceAction.calcResult());
  }, [houseValue, dispatch]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setVisibleHouse(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (result === "you win") {
        dispatch(sliceAction.increment());
        setIsPlayerWin("winner");
      } else if (result === "you lose") {
        dispatch(sliceAction.decrement());
        setIsHouseWin("winner");
      }
      setVisibleResult(true);
    }, 3500);
    return () => {
      clearTimeout(timer);
    };
  }, [result, dispatch]);

  useEffect(() => {
    updateCountDown();
    return () => {
      clearInterval(count);
    };
  }, [countDown]);

  switch (selected) {
    case "":
      return <Redirect to="/" />;
    case "paper":
      classes = choices[0].selectedClasses;
      img = choices[0].img;
      alt = choices[0].alt;
      break;
    case "scissors":
      classes = choices[1].selectedClasses;
      img = choices[1].img;
      alt = choices[1].alt;
      break;
    case "rock":
      classes = choices[2].selectedClasses;
      img = choices[2].img;
      alt = choices[2].alt;
      break;
    default:
      break;
  }
  switch (houseValue) {
    case 0:
      homeClasses = choices[0].selectedClasses;
      homeImg = choices[0].img;
      homeAlt = choices[0].alt;
      break;
    case 1:
      homeClasses = choices[1].selectedClasses;
      homeImg = choices[1].img;
      homeAlt = choices[1].alt;
      break;
    case 2:
      homeClasses = choices[2].selectedClasses;
      homeImg = choices[2].img;
      homeAlt = choices[2].alt;
      break;
    default:
      break;
  }
  const toggleVisible = () => {
    setVisibleHouse(!visibleHouse);
    setVisibleResult(!visibleResult);
  };
  return (
    <div className="flex mt-13 flex-nowrap items-center">
      <div className={`flex flex-col mr-10 ${isPlayerWin}`}>
        <span className="uppercase text-xl font-light mb-10 text-white">
          you picked
        </span>
        <ChoiceItem
          classes={`${classes} w-250 h-250 border-25 bg-50%`}
          img={img}
          alt={alt}
        />
      </div>
      {visibleResult && (
        <div className="flex justify-center items-center flex-col mx-7">
          <span className="uppercase text-white text-4xl">{result}</span>
          <Link
            onClick={toggleVisible}
            to="/"
            className="py-1 px-9 mt-3 text-red-700 border-2 border-header rounded-md bg-white"
          >
            PLAY AGAIN
          </Link>
        </div>
      )}
      <div className={`flex flex-col ml-10 ${isHouseWin}`}>
        <span className="uppercase text-xl font-light mb-10 text-white">
          the house picked
        </span>
        {visibleHouse ? (
          <ChoiceItem
            classes={`${homeClasses} w-250 h-250 border-25 bg-50%`}
            img={homeImg}
            alt={homeAlt}
          />
        ) : (
          <div className="w-250 h-250 rounded-full bg-bg-dark text-9xl flex flex-col justify-center">
            {countDown}
          </div>
        )}
      </div>
    </div>
  );
};

export default Selected;
