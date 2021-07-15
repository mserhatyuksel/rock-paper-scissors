import React from "react";

const Main = ({ children }) => {
    return (
        <div className="flex h-52 min-w-full justify-center mt-32">
            <img
                className="z-0 absolute w-36 h-36 min-h-36 mt-7"
                src="/images/bg-triangle.svg"
                alt=""
            />
            {children}
        </div>
    );
};

export default Main;
