const calcHouseValue = () => {
    let random = Math.random();
    if (random <= 0.33) {
        return 0;
    } else if (random <= 0.66) {
        return 1;
    } else {
        return 2;
    }
};

export const calculateResult = (choice, home) => {
    if (
        (choice === "paper" && home === 1) ||
        (choice === "rock" && home === 2) ||
        (choice === "scissors" && home === 0)
    ) {
        return "you win";
    } else if (
        (choice === "paper" && home === 0) ||
        (choice === "rock" && home === 1) ||
        (choice === "scissors" && home === 2)
    ) {
        return "equal";
    } else {
        return "you lose";
    }
};
export default calcHouseValue;
