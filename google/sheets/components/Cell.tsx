// google/sheets/components/Cell.tsx
// The Atom of Calculation. A single point in the grid, holding a value or a formula.

import React, { useState } from 'react';

interface CellProps {
    row: number;
    col: number;
}

const Cell: React.FC<CellProps> = ({ row, col }) => {
    const [value, setValue] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return (
            <input 
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                onBlur={() => setIsEditing(false)}
                autoFocus
                className="w-full h-full bg-gray-600 outline-none p-1"
            />
        );
    }

    return (
        <div 
            onClick={() => setIsEditing(true)} 
            className="w-24 h-6 p-1 truncate"
        >
            {value}
        </div>
    );
};

export default Cell;
