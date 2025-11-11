
import React from 'react';
import { Resource } from '@/types';

interface ResourceTableProps {
  resources: Resource[];
}

const truncateDescription = (description: React.ReactNode): React.ReactNode => {
  if (typeof description === 'string') {
    const sentences = description.split(/(?<=[.!?])\s+/);
    if (sentences.length > 2) {
      return sentences.slice(0, 2).join(' ') + '...';
    }
    return description;
  }
  // If description is a ReactNode (e.g., JSX), we cannot easily truncate it by sentence.
  // It will be rendered as is.
  return description;
};

export default function ResourceTable({ resources }: ResourceTableProps): React.ReactNode {
  return (
    <div className="overflow-x-auto">
      <ul className="divide-y divide-gray-200">
        {resources.map((resource) => (
          <li key={resource.title} className="py-4">
            <a href={resource.url} rel="noopener noreferrer" target="_blank" className="text-blue-600 hover:underline font-medium">
              {resource.title}
            </a>
            <p className="text-sm text-gray-500 mt-1">{truncateDescription(resource.description)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
