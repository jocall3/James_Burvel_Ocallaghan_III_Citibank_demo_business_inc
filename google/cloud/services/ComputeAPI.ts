// google/cloud/services/ComputeAPI.ts
// The Summoning Glyphs. A set of incantations for commanding the Golems (VMs) of the cloud.

import { VirtualMachine, VMStatus } from '../types';

const MOCK_VMS: VirtualMachine[] = [
    { id: 'vm-1', name: 'web-server-prod-1', status: 'RUNNING', region: 'us-central1', type: 'e2-medium' },
    { id: 'vm-2', name: 'db-server-prod-1', status: 'RUNNING', region: 'us-central1', type: 'n2-standard-4' },
    { id: 'vm-3', name: 'batch-processor-1', status: 'STOPPED', region: 'europe-west1', type: 'c2-standard-8' },
];

export const ComputeAPI = {
    listVMs: (): Promise<VirtualMachine[]> => {
        return new Promise(resolve => {
            setTimeout(() => resolve(MOCK_VMS), 1000);
        });
    },

    stopVM: (id: string): Promise<{ success: boolean }> => {
        return new Promise(resolve => {
            console.log(`Stopping VM with id: ${id}`);
            setTimeout(() => resolve({ success: true }), 500);
        });
    },
};
