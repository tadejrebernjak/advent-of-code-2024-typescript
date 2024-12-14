import { Coordinates, Grid, Robot } from './types.js';

const move = (position: number, velocity: number, bound: number, seconds: number) => {
  const result = (position + velocity * seconds) % bound;
  if (result >= 0) {
    return result;
  }

  return bound + result;
};

export const simulateRobots = ({ width, height }: Grid, robots: Robot[], seconds: number) => {
  const endPositions: Coordinates[] = [];
  for (const robot of robots) {
    const x = move(robot.position.x, robot.velocity.x, width, seconds);
    const y = move(robot.position.y, robot.velocity.y, height, seconds);

    endPositions.push({ x, y });
  }

  return endPositions;
};
