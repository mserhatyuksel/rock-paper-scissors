import React from "react";
import { useSelector } from "react-redux";
const Header = () => {
    const score = useSelector((state) => state.score);
    return (
        <div className="flex flex-row w-80 max-w-full justify-between items-center mt-10 border-2 border-header rounded-md">
            <img
                className="h-14 w-24 ml-4 my-3"
                src="./images/logo.svg"
                alt=""
            />
            <div className="flex flex-col h-14 items-center bg-white py-1 px-4 mr-4 my-3 rounded-md">
                <p className="text-xs text-textColor-score font-bold">SCORE</p>
                <span className="text-3xl text-header font-bold">{score}</span>
            </div>
        </div>
    );
};

export default Header;
