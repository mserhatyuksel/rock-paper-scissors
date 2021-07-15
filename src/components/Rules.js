import React from "react";

const Rules = ({onClick}) => {
    const rulesToggleHandler =()=>{
        onClick();
    }
    return (
        <React.Fragment>
            <div onClick={rulesToggleHandler} className="bg-black bg-opacity-60 w-screen h-screen absolute z-40" />
            <div className="flex flex-col items-center bg-white absolute m-auto top-1/4 rounded-lg z-50">
                <div className="flex flex-row w-full justify-between px-4 py-5 h-1/5 items-center">
                    <span className="text-xl font-bold text-gray-600">
                        RULES
                    </span>
                    <button onClick={rulesToggleHandler} className="text-md font-bold text-gray-300">
                        X
                    </button>
                </div>
                <div>
                    <img
                        src="/images/image-rules.svg"
                        alt="rules"
                        className="h-4/5 p-4"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Rules;
