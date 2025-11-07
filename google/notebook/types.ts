// google/notebook/types.ts
// The Scholar's Grammar. Defines the structure of the notebook's components.

export type CellType = 'code' | 'markdown';

export interface Cell {
    id: string;
    type: CellType;
    content: string;
}
