// google/cloud/components/VMList.tsx
// The Roster of Golems. A ledger of the tireless, virtual machines that form the backbone of the creator's power.

import React, { useState, useEffect } from 'react';
import { ComputeAPI } from '../services/ComputeAPI';
import { VirtualMachine } from '../types';

const VMList: React.FC = () => {
    const [vms, setVms] = useState<VirtualMachine[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchVMs = async () => {
            setIsLoading(true);
            const vmList = await ComputeAPI.listVMs();
            setVms(vmList);
            setIsLoading(false);
        };
        fetchVMs();
    }, []);

    if (isLoading) {
        return <div>Loading Compute Instances...</div>;
    }

    return (
        <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Compute Instances</h3>
            <table className="w-full text-left">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Region</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {vms.map(vm => (
                        <tr key={vm.id} className="border-b border-gray-700">
                            <td className="py-2">{vm.name}</td>
                            <td className={vm.status === 'RUNNING' ? 'text-green-400' : 'text-red-400'}>{vm.status}</td>
                            <td>{vm.region}</td>
                            <td>{vm.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VMList;
