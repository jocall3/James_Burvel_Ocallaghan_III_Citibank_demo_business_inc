// google/notebook/components/CodeCell.tsx
// An Incantation. A single, executable block of code within the scholar's scroll.

import React, { useState } from 'react';
import { Cell } from '../types';
import { KernelService } from '../services/KernelService';

interface CodeCellProps {
    cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
    const [code, setCode] = useState(cell.content);
    const [output, setOutput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleExecute = async () => {
        setIsLoading(true);
        const result = await KernelService.execute(code);
        setOutput(result);
        setIsLoading(false);
    };

    return (
        <div className="bg-gray-800 rounded-lg">
            <div className="p-3">
                <textarea 
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    className="w-full bg-gray-900 rounded p-2 font-mono text-sm"
                    rows={3}
                />
            </div>
            <div className="p-2 border-t border-gray-700">
                <button onClick={handleExecute} disabled={isLoading} className="text-xs px-3 py-1 bg-cyan-600 rounded">
                    {isLoading ? 'Executing...' : 'Run'}
                </button>
            </div>
            {output && (
                <div className="p-3 border-t border-gray-700 bg-gray-900/50">
                    <pre className="text-sm">{output}</pre>
                </div>
            )}
        </div>
    );
};

export default CodeCell;
