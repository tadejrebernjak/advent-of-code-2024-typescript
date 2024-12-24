export type LogicalOperator = 'XOR' | 'OR' | 'AND';

export interface Operation {
  register1: string;
  register2: string;
  operator: LogicalOperator;
  target: string;
}

export interface Register {
  register: string;
  value: number;
}
