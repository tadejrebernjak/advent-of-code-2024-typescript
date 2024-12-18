import { DirectionOrdinal, Grid, Position } from '../../types/grid.js';
import { getGridValue, updatePositionOrdinal } from '../../utils/grid.js';

export const buildWord = (grid: Grid, length: number, position: Position, direction: DirectionOrdinal) => {
  let word = '';
  for (let i = 0; i < length; i++) {
    const character = getGridValue(grid, position);
    word += character;

    position = updatePositionOrdinal(position, direction);
  }

  return word;
};
