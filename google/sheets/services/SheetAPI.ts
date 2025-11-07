// google/sheets/services/SheetAPI.ts
// The Treasurer's Commands. A set of functions for manipulating the cells of the great ledger.

export const SheetAPI = {
    getCellValue: (sheetId: string, cell: string): Promise<string | number> => {
        return new Promise(resolve => {
            console.log(`Getting value for ${sheetId}:${cell}`);
            setTimeout(() => resolve(123.45), 300);
        });
    },
    setCellValue: (sheetId: string, cell: string, value: string | number): Promise<{ success: boolean }> => {
        console.log(`Setting value for ${sheetId}:${cell} to ${value}`);
        return new Promise(resolve => {
            setTimeout(() => resolve({ success: true }), 500);
        });
    }
};
