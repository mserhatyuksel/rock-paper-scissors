import React from "react";
import { useSelector } from "react-redux";
const Header = () => {
  const score = useSelector((state) => state.score);
  return (
    <div className="flex w-full max-w-43 justify-between mt-7 border-solid border-3 border-header rounded-2xl p-5">
      {/* <img
                className="h-14 w-24 ml-4 my-3"
                src="./images/logo.svg"
                alt=""
            /> */}
      <div class="text-4xll uppercase flex flex-col items-start leading-8 text-white">
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="py-3 px-10 bg-white text-textColor-score rounded-head flex flex-col leading-tight">
        <span>Score</span>
        <span className="text-score text-scoreRem font-bold">{score}</span>
      </div>
    </div>
  );
};

export default Header;
