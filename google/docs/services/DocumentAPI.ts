// google/docs/services/DocumentAPI.ts
// The Royal Archives. A set of commands for saving and retrieving the written histories.

export const DocumentAPI = {
    getDocument: (id: string): Promise<{ id: string, content: string }> => {
        return new Promise(resolve => {
            setTimeout(() => resolve({ id, content: `Content of document ${id}` }), 500);
        });
    },
    saveDocument: (id: string, content: string): Promise<{ success: boolean }> => {
        console.log(`Saving document ${id} with content: ${content.substring(0, 50)}...`);
        return new Promise(resolve => {
            setTimeout(() => resolve({ success: true }), 1000);
        });
    },
};
