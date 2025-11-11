
import React from 'react';
import { Investor } from '@/types';

interface InvestorsTableProps {
  investors: Investor[];
}

export default function InvestorsTable({ investors }: InvestorsTableProps): React.ReactNode {
  return (
    <div className="overflow-x-auto">
      <ul className="divide-y divide-gray-200">
        {investors.map((investor) => (
          <li key={investor.name} className="py-4">
            <a href={investor.url} rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline font-medium">
              {investor.name}
            </a>
            <p className="text-sm text-gray-500 mt-1">{investor.fund}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
