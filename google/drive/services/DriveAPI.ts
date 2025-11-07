// google/drive/services/DriveAPI.ts
// The Librarian's Index. A set of commands to find and retrieve scrolls from the Great Library.

import { DriveFile } from '../types';

const MOCK_FILES: DriveFile[] = [
    { id: 'file-1', name: 'Project Phoenix - Plan.docx', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', modifiedTime: '2024-07-26T12:00:00Z' },
    { id: 'folder-1', name: 'Screenplays', mimeType: 'application/vnd.google-apps.folder', modifiedTime: '2024-07-27T10:00:00Z' },
    { id: 'file-2', name: 'The Sovereign\'s Ledger.md', mimeType: 'text/markdown', modifiedTime: '2024-07-27T11:30:00Z' },
    { id: 'file-3', name: 'Q4 Budget.xlsx', mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', modifiedTime: '2024-07-25T15:00:00Z' },
];

export const DriveAPI = {
    listFiles: (folderId: string): Promise<DriveFile[]> => {
        console.log(`Fetching files for folder: ${folderId}`);
        return new Promise(resolve => {
            setTimeout(() => resolve(MOCK_FILES), 800);
        });
    },
};
