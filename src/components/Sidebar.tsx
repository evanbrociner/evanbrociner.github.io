
import React from 'react';
import Link from 'next/link';
import { Section } from '@/types';

interface SidebarProps {
  sections: Section[];
  homeHref: string;
  homeTitle: string;
}

export default function Sidebar({ sections, homeHref, homeTitle }: SidebarProps): React.ReactNode {
  return (
    <div className="sticky top-8">
      <Link href={homeHref}>
        <h4 className="text-xl font-bold mb-4 text-green-700">{homeTitle}</h4>
      </Link>
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="mb-2">
              <a href={`#${section.id}`} className="text-gray-600 hover:text-gray-900">
                {section.navTitle}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
