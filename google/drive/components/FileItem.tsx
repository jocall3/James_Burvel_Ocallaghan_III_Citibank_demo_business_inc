// google/drive/components/FileItem.tsx
// A Single Scroll. Represents one piece of knowledge within the Great Library.

import React from 'react';
import { DriveFile } from '../types';

interface FileItemProps {
    file: DriveFile;
}

const FileIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A1 1 0 0111.293 2.707l4 4A1 1 0 0115.707 7.5H12a2 2 0 01-2-2V4H6zm2 6a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H9z" clipRule="evenodd" /></svg>;
const FolderIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /></svg>;


const FileItem: React.FC<FileItemProps> = ({ file }) => {
    const isFolder = file.mimeType === 'application/vnd.google-apps.folder';

    return (
        <div className="flex items-center p-2 bg-gray-800 hover:bg-gray-700 rounded-lg cursor-pointer">
            <div className="mr-3 text-cyan-400">
                {isFolder ? <FolderIcon /> : <FileIcon />}
            </div>
            <div className="flex-grow">
                <p className="font-medium text-white">{file.name}</p>
            </div>
            <div className="text-sm text-gray-400">
                {new Date(file.modifiedTime).toLocaleDateString()}
            </div>
        </div>
    );
};

export default FileItem;
