import React from "react";
import ChoiceItem from "./ChoiceItem";
import { useSelector } from "react-redux";

const Choice = () => {
    const choices = useSelector((state) => state.choices);
    return choices.map((choice) => (
        <ChoiceItem
            key={choice.alt}
            classes={`${choice.classes} cursor-pointer`}
            img={choice.img}
            alt={choice.alt}
        />
    ));
};

export default Choice;
