// google/drive/components/FileBrowser.tsx
// The Great Library. An interface to the sovereign's digital memory, organized and instantly accessible.

import React, { useState, useEffect } from 'react';
import { DriveAPI } from '../services/DriveAPI';
import { DriveFile } from '../types';
import FileItem from './FileItem';

const FileBrowser: React.FC = () => {
    const [files, setFiles] = useState<DriveFile[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFiles = async () => {
            setIsLoading(true);
            const fileList = await DriveAPI.listFiles('root');
            setFiles(fileList);
            setIsLoading(false);
        };
        fetchFiles();
    }, []);

    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans">
            <header className="p-4 bg-gray-800 border-b border-gray-700">
                <h1 className="text-xl font-bold">Drive</h1>
            </header>
            <main className="p-6">
                {isLoading ? (
                    <p>Loading files...</p>
                ) : (
                    <div className="space-y-2">
                        {files.map(file => (
                            <FileItem key={file.id} file={file} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default FileBrowser;
