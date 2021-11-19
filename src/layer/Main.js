import React from "react";

const Main = ({ children }) => {
  return (
    <div className="w-full relative mt-13 flex flex-col">
      <img
        className="absolute self-center mt-17"
        src="/images/bg-triangle.svg"
        alt=""
      />
      <div className="flex justify-center">{children}</div>
    </div>
  );
};

export default Main;
