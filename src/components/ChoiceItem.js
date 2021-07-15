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
        <Link
            onClick={selectHandler}
            to="/selected"
            className={`w-24 h-24 min-w-24 min-h-24 rounded-full bg-gray-200 flex justify-center items-center border-8 z-10 cursor-default ${classes}`}
        >
            <div>
                <img className="w-6 h-8" src={img} alt={alt} />
            </div>
        </Link>
    );
};

export default ChoiceItem;
