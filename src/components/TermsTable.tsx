
import React from 'react';
import { Term } from '@/types';

interface TermsTableProps {
  terms: Term[];
}

const truncateDescription = (description: string): string => {
  const sentences = description.split(/(?<=[.!?])\s+/);
  if (sentences.length > 2) {
    return sentences.slice(0, 2).join(' ') + '...';
  }
  return description;
};

export default function TermsTable({ terms }: TermsTableProps): React.ReactNode {
  return (
    <div className="overflow-x-auto">
      <ul className="divide-y divide-gray-200">
        {terms.map((term) => (
          <li key={term.term} className="py-4">
            <p className="font-medium">{term.term}</p>
            <p className="text-sm text-gray-500 mt-1">{truncateDescription(term.description)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
