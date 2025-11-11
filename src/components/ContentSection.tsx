
import React from 'react';
import Image from 'next/image'; // Keep import for now, might be removed later if no other usage
import { Section } from '@/types';
import TermsTable from './TermsTable';
import BreakdownTable from './BreakdownTable';
import ResourceTable from './ResourceTable';
import InvestorsTable from './InvestorsTable';

interface ContentSectionProps {
  section: Section;
}

const truncateDescription = (description: React.ReactNode): React.ReactNode => {
  if (typeof description === 'string') {
    const sentences = description.split(/(?<=[.!?])\s+/);
    if (sentences.length > 2) {
      return sentences.slice(0, 2).join(' ') + '...';
    }
    return description;
  }
  return description;
};

export default function ContentSection({ section }: ContentSectionProps): React.ReactNode {
  return (
    <section id={section.id} className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{section.title}</h2>
      {section.intro && <p className="mb-4 text-gray-600">{truncateDescription(section.intro)}</p>}
      {/* Removed image rendering as per simplification request */}
      {section.terms && <TermsTable terms={section.terms} />}
      {section.breakdown && <BreakdownTable rows={section.breakdown.rows} legend={section.breakdown.legend} />}
      {section.resources && <ResourceTable resources={section.resources} />}
      {section.investors && <InvestorsTable investors={section.investors} />}
    </section>
  );
}
