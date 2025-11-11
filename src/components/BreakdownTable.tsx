
import React from 'react';
import { BreakdownRow } from '@/types';

interface BreakdownTableProps {
  rows: BreakdownRow[];
  legend: React.ReactNode;
}

export default function BreakdownTable({ rows, legend }: BreakdownTableProps): React.ReactNode {
  return (
    <>
      <h4 className="text-xl font-bold mt-8 mb-4 text-gray-800">Breakdown (2019)</h4>
      <div className="overflow-x-auto">
        <ul className="divide-y divide-gray-200">
          {rows.map((row) => (
            <li key={row.group} className="py-4">
              <p className="font-medium">{row.group}</p>
              <p className="text-sm text-gray-500 mt-1">Cost: {row.cost}</p>
              <p className="text-sm text-gray-500">Number of People: {row.people}</p>
              <p className="text-sm text-gray-500">Cost Ratio: {row.costRatio}</p>
              <p className="text-sm text-gray-500">Weight of Cost to Population: {row.weight}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        {legend}
      </div>
    </>
  );
}
