// google/sheets/types.ts
// The Mathematics of the Grid. Defines the structures of the spreadsheet world.

export interface Sheet {
    id: string;
    name: string;
}

export interface CellData {
    value?: string | number;
    formula?: string;
    style?: CellStyle;
}

export interface CellStyle {
    bold?: boolean;
    italic?: boolean;
    backgroundColor?: string;
}
