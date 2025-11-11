
import React from 'react';

export interface Term {
  term: string;
  description: string;
}

export interface BreakdownRow {
  group: string;
  cost: string;
  people: string;
  costRatio: string;
  weight: string;
}

export interface Resource {
  title: string;
  url: string;
  description: React.ReactNode;
}

export interface Investor {
  name: string;
  url: string;
  fund: string;
}

export interface Section {
  id: string;
  navTitle: string;
  title: string;
  intro?: React.ReactNode;
  terms?: Term[];
  breakdown?: {
    rows: BreakdownRow[];
    legend: React.ReactNode;
  };
  resources?: Resource[];
  investors?: Investor[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
}

export interface SectionedListItem {
  section: string;
  link: string;
  href: string;
  description: string;
}
