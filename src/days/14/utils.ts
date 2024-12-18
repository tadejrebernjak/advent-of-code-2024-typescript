import { Position } from '../../types/grid.js';
import { Dimension, Robot } from './types.js';

const moveRobot = (position: number, velocity: number, bound: number, seconds: number) => {
  const result = (position + velocity * seconds) % bound;
  if (result >= 0) {
    return result;
  }

  return bound + result;
};

export const simulateRobots = ({ width, height }: Dimension, robots: Robot[], seconds: number) => {
  const endPositions: Position[] = [];
  for (const robot of robots) {
    const x = moveRobot(robot.position.x, robot.velocity.x, width, seconds);
    const y = moveRobot(robot.position.y, robot.velocity.y, height, seconds);

    endPositions.push({ x, y });
  }

  return endPositions;
};
