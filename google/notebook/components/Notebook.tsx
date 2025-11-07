// google/notebook/components/Notebook.tsx
// The Scroll Itself. A container for a sequence of thoughts, experiments, and conclusions.

import React, { useState } from 'react';
import { Cell, CellType } from '../types';
import CodeCell from './CodeCell';

const Notebook: React.FC = () => {
    const [cells, setCells] = useState<Cell[]>([
        { id: 'cell-1', type: 'code', content: 'print("Hello, World!")' },
        { id: 'cell-2', type: 'markdown', content: '# My Analysis' },
    ]);

    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans p-4">
            <h1 className="text-xl font-bold mb-4">Notebook</h1>
            <div className="space-y-4">
                {cells.map(cell => {
                    if (cell.type === 'code') {
                        return <CodeCell key={cell.id} cell={cell} />;
                    }
                    // In a real app, a MarkdownCell component would render this
                    return <div key={cell.id} className="p-3 bg-gray-800 rounded-lg"><em>(Markdown)</em> {cell.content}</div>;
                })}
            </div>
        </div>
    );
};

export default Notebook;
