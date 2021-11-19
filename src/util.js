const calcHouseValue = () => {
  return Math.floor(Math.random() * 3);
};

export const calculateResult = (choice, home) => {
  if (
    (choice === "paper" && home === 2) ||
    (choice === "rock" && home === 1) ||
    (choice === "scissors" && home === 0)
  ) {
    return "you win";
  } else if (
    (choice === "paper" && home === 0) ||
    (choice === "rock" && home === 2) ||
    (choice === "scissors" && home === 1)
  ) {
    return "draw";
  } else {
    return "you lose";
  }
};
export default calcHouseValue;
