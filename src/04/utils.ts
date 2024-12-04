export type Direction = 'up' | 'up_right' | 'right' | 'down_right' | 'down' | 'down_left' | 'left' | 'up_left';

export interface Position {
  x: number;
  y: number;
}

export const updatePosition = ({ x, y }: Position, direction: Direction, offset?: number) => {
  offset = offset || 1;

  if (direction.includes('left')) {
    x -= offset;
  }

  if (direction.includes('right')) {
    x += offset;
  }

  if (direction.includes('down')) {
    y += offset;
  }

  if (direction.includes('up')) {
    y -= offset;
  }

  return { x, y };
};
