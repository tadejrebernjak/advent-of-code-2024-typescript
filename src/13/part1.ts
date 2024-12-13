import { Button, ClawMachine, Coordinates } from './types.js';

const isOverPrize = ({ prize }: ClawMachine, { x, y }: Coordinates) => {
  return prize.x < x && prize.y < y;
};

const isOnPrize = ({ prize }: ClawMachine, { x, y }: Coordinates) => {
  return prize.x === x && prize.y === y;
};

const getMaxPresses = ({ prize }: ClawMachine, button: Button) => {
  const enoughX = Math.ceil(prize.x / button.x);
  const enoughY = Math.ceil(prize.y / button.y);

  return Math.max(enoughX, enoughY);
};

const assignButtons = (machine: ClawMachine) => {
  const { buttonA, buttonB, prize } = machine;

  const xWeight = prize.x / prize.x + prize.y;
  const yWeight = prize.y / prize.x + prize.y;

  const valueA = (buttonA.x * xWeight + buttonA.y * yWeight) / buttonA.cost;
  const valueB = (buttonB.x * xWeight + buttonB.y * yWeight) / buttonB.cost;

  const mainButton = valueA > valueB ? buttonA : buttonB;
  const secondaryButton = valueA > valueB ? buttonB : buttonA;

  return [mainButton, secondaryButton];
};

const getMinimumTokens = (machine: ClawMachine) => {
  const [mainButton, secondaryButton] = assignButtons(machine);

  let mainPresses = getMaxPresses(machine, mainButton);
  for (; mainPresses >= 0; mainPresses--) {
    const mainPosition = {
      x: mainButton.x * mainPresses,
      y: mainButton.y * mainPresses,
    };

    if (isOnPrize(machine, mainPosition)) {
      return mainPresses * mainButton.cost;
    }

    let secondaryPresses = 0;
    const currentPosition = { ...mainPosition };

    while (!isOverPrize(machine, currentPosition)) {
      if (isOnPrize(machine, currentPosition)) {
        return mainPresses * mainButton.cost + secondaryPresses * secondaryButton.cost;
      }

      currentPosition.x += secondaryButton.x;
      currentPosition.y += secondaryButton.y;
      secondaryPresses++;
    }
  }

  return 0;
};

const solvePart1 = (clawMachines: ClawMachine[]) => {
  return clawMachines.reduce((sum, machine) => sum + getMinimumTokens(machine), 0);
};

export default solvePart1;
