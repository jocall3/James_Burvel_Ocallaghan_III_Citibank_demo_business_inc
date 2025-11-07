// google/sheets/components/Spreadsheet.tsx
// The Grid of Calculation. The sovereign's ledger, rendered as a universe of cells.

import React from 'react';
import Cell from './Cell';

const COLS = 26; // A-Z
const ROWS = 100;

const Spreadsheet: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans p-4">
            <h1 className="text-xl font-bold mb-4">Sheets</h1>
            <div className="overflow-auto">
                <table className="table-fixed border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-gray-700 w-12"></th>
                            {Array.from({ length: COLS }).map((_, i) => (
                                <th key={i} className="border border-gray-700 w-24 text-center">{String.fromCharCode(65 + i)}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: ROWS }).map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                <td className="border border-gray-700 text-center text-xs">{rowIndex + 1}</td>
                                {Array.from({ length: COLS }).map((_, colIndex) => (
                                    <td key={colIndex} className="border border-gray-700 p-0">
                                        <Cell row={rowIndex} col={colIndex} />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Spreadsheet;
