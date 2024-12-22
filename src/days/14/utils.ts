import { Position } from '../../types/grid.js';
import { mod } from '../../utils/number.js';
import { Dimension, Robot } from './types.js';

const moveRobot = (position: number, velocity: number, bound: number, seconds: number) => {
  return mod(position + velocity * seconds, bound);
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
