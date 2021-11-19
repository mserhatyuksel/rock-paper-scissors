import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sliceAction } from "../store/index";
const ChoiceItem = ({ classes, img, alt }) => {
  const dispatch = useDispatch();
  const selectHandler = () => {
    dispatch(sliceAction.userSelected(alt));
  };
  return (
    <Link onClick={selectHandler} to="/selected">
      <div
        className={`w-160 h-160 border-solid border-18 rounded-full transition transform duration-200 bg-white bg-center bg-no-repeat ${classes}`}
      >
      </div>
    </Link>
  );
};

export default ChoiceItem;
