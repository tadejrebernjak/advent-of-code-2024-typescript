import { Trailhead } from './types.js';

const solvePart1 = (trailheads: Trailhead[]) => {
  return trailheads.reduce((sum, { score }) => sum + score, 0);
};

export default solvePart1;
