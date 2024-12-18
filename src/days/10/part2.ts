import { Trailhead } from './types.js';

const solvePart2 = (trailheads: Trailhead[]) => {
  return trailheads.reduce((sum, { rating }) => sum + rating, 0);
};

export default solvePart2;
