import React from 'react';
import { SectionedListItem } from '@/types';
import Link from 'next/link';

interface SectionedListProps {
  items: SectionedListItem[];
}

const SectionedList: React.FC<SectionedListProps> = ({ items }) => {
  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = [];
    }
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, SectionedListItem[]>);

  return (
    <div>
      {Object.entries(groupedItems).map(([section, sectionItems]) => (
        <div key={section} className="mb-8">
          <h2 className="section-heading text-2xl font-bold mb-4">{section}</h2>
          <ul>
            {sectionItems.map((item, index) => (
              <li key={index} className="mb-4">
                <Link href={item.href} className="text-lg font-semibold">
                  {item.link}
                </Link>
                <p className="text-base">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SectionedList;
