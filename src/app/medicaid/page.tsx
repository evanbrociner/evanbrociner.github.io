"use client";

import { medicaidData } from './data';
import Sidebar from '@/components/Sidebar';
import ContentSection from '@/components/ContentSection';

export default function MedicaidPage(): JSX.Element {
  return (
    <>
      <div className="flex flex-row gap-8">
        <div className="w-1/4">
          <Sidebar sections={medicaidData} homeHref="/" homeTitle="How Healthcare Works" />
        </div>

        <div className="w-3/4">
          <div>
            {medicaidData.map((section) => (
              <ContentSection key={section.id} section={section} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}