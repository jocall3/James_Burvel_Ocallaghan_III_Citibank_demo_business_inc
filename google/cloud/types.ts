// google/cloud/types.ts
// The Laws of Infrastructure Physics. Defines the fundamental particles of the cloud.

export type VMStatus = 'RUNNING' | 'STOPPED' | 'PROVISIONING';

export interface VirtualMachine {
    id: string;
    name: string;
    status: VMStatus;
    region: string;
    type: string; // e.g., e2-medium
}

export interface StorageBucket {
    id: string;
    name: string;
    region: string;
    storageClass: 'Standard' | 'Archive';
}
