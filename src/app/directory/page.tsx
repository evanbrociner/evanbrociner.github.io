import React from 'react';
import SectionedList from '@/components/SectionedList';
import { SectionedListItem } from '@/types';

const DirectoryPage: React.FC = () => {
  const items: SectionedListItem[] = [
    {
      section: 'HEALTHCARE',
      link: 'Single-Payer / Medicare for All',
      href: '/resource-library/healthcare/single-payer',
      description: 'Description for Single-Payer / Medicare for All.',
    },
    {
      section: 'HEALTHCARE',
      link: 'Hospital Pricing & Transparency',
      href: '/resource-library/healthcare/hospital-pricing',
      description: 'Description for Hospital Pricing & Transparency.',
    },
    {
      section: 'HEALTHCARE',
      link: 'Insurance & Coverage',
      href: '/resource-library/healthcare/insurance-coverage',
      description: 'Description for Insurance & Coverage.',
    },
    {
      section: 'HEALTHCARE',
      link: 'Pharmaceutical Policy',
      href: '/resource-library/healthcare/pharmaceutical-policy',
      description: 'Description for Pharmaceutical Policy.',
    },
    {
      section: 'HEALTHCARE',
      link: 'International Comparisons',
      href: '/resource-library/healthcare/international-comparisons',
      description: 'Description for International Comparisons.',
    },
    {
      section: 'HEALTHCARE',
      link: 'Healthcare Outcomes Data',
      href: '/resource-library/healthcare/outcomes-data',
      description: 'Description for Healthcare Outcomes Data.',
    },
    {
      section: 'HOUSING',
      link: 'Public Housing Models',
      href: '/resource-library/housing/public-housing',
      description: 'Description for Public Housing Models.',
    },
    {
      section: 'HOUSING',
      link: 'Rent Control & Tenant Protections',
      href: '/resource-library/housing/rent-control',
      description: 'Description for Rent Control & Tenant Protections.',
    },
    {
      section: 'HOUSING',
      link: 'Zoning & Land Use',
      href: '/resource-library/housing/zoning-land-use',
      description: 'Description for Zoning & Land Use.',
    },
    {
      section: 'HOUSING',
      link: 'Homelessness Solutions',
      href: '/resource-library/housing/homelessness-solutions',
      description: 'Description for Homelessness Solutions.',
    },
    {
      section: 'HOUSING',
      link: 'Affordable Housing Finance',
      href: '/resource-library/housing/affordable-housing-finance',
      description: 'Description for Affordable Housing Finance.',
    },
    {
      section: 'HOUSING',
      link: 'International Examples',
      href: '/resource-library/housing/international-examples',
      description: 'Description for International Examples.',
    },
    {
      section: 'LABOR & WAGES',
      link: 'Minimum Wage Research',
      href: '/resource-library/labor/minimum-wage-research',
      description: 'Description for Minimum Wage Research.',
    },
    {
      section: 'LABOR & WAGES',
      link: 'Worker Cooperatives',
      href: '/resource-library/labor/worker-cooperatives',
      description: 'Description for Worker Cooperatives.',
    },
    {
      section: 'LABOR & WAGES',
      link: 'Union Impact Studies',
      href: '/resource-library/labor/union-impact-studies',
      description: 'Description for Union Impact Studies.',
    },
    {
      section: 'LABOR & WAGES',
      link: 'Wage Theft & Enforcement',
      href: '/resource-library/labor/wage-theft-enforcement',
      description: 'Description for Wage Theft & Enforcement.',
    },
    {
      section: 'LABOR & WAGES',
      link: 'Living Wage Calculations',
      href: '/resource-library/labor/living-wage-calculations',
      description: 'Description for Living Wage Calculations.',
    },
    {
      section: 'CORPORATE ACCOUNTABILITY',
      link: 'Campaign Finance & Voting Patterns',
      href: '/resource-library/corporate-accountability/campaign-finance',
      description: 'Description for Campaign Finance & Voting Patterns.',
    },
    {
      section: 'CORPORATE ACCOUNTABILITY',
      link: 'Tax Policy & Corporate Taxation',
      href: '/resource-library/corporate-accountability/tax-policy',
      description: 'Description for Tax Policy & Corporate Taxation.',
    },
    {
      section: 'CORPORATE ACCOUNTABILITY',
      link: 'Monopoly & Antitrust',
      href: '/resource-library/corporate-accountability/monopoly-antitrust',
      description: 'Description for Monopoly & Antitrust.',
    },
    {
      section: 'CORPORATE ACCOUNTABILITY',
      link: 'Price Gouging & Extraction',
      href: '/resource-library/corporate-accountability/price-gouging',
      description: 'Description for Price Gouging & Extraction.',
    },
    {
      section: 'CORPORATE ACCOUNTABILITY',
      link: 'CEO Compensation',
      href: '/resource-library/corporate-accountability/ceo-compensation',
      description: 'Description for CEO Compensation.',
    },
    {
      section: 'ECONOMIC POLICY',
      link: 'Public Banking',
      href: '/resource-library/economic-policy/public-banking',
      description: 'Description for Public Banking.',
    },
    {
      section: 'ECONOMIC POLICY',
      link: 'Wealth & Income Inequality',
      href: '/resource-library/economic-policy/wealth-inequality',
      description: 'Description for Wealth & Income Inequality.',
    },
    {
      section: 'ECONOMIC POLICY',
      link: 'Tax Policy (Progressive Taxation)',
      href: '/resource-library/economic-policy/progressive-taxation',
      description: 'Description for Tax Policy (Progressive Taxation).',
    },
    {
      section: 'ECONOMIC POLICY',
      link: 'Universal Basic Income / Social Safety Net',
      href: '/resource-library/economic-policy/ubi-safety-net',
      description: 'Description for Universal Basic Income / Social Safety Net.',
    },
    {
      section: 'ECONOMIC POLICY',
      link: 'Economic Models (MMT, etc.)',
      href: '/resource-library/economic-policy/economic-models',
      description: 'Description for Economic Models (MMT, etc.).',
    },
    {
      section: 'DEMOCRATIC SOCIALISM EVIDENCE',
      link: 'Nordic Model',
      href: '/resource-library/democratic-socialism/nordic-model',
      description: 'Description for Nordic Model.',
    },
    {
      section: 'DEMOCRATIC SOCIALISM EVIDENCE',
      link: 'Vienna (Housing, Public Services)',
      href: '/resource-library/democratic-socialism/vienna',
      description: 'Description for Vienna (Housing, Public Services).',
    },
    {
      section: 'DEMOCRATIC SOCIALISM EVIDENCE',
      link: 'Worker Ownership Models',
      href: '/resource-library/democratic-socialism/worker-ownership',
      description: 'Description for Worker Ownership Models.',
    },
    {
      section: 'DEMOCRATIC SOCIALISM EVIDENCE',
      link: 'Public Utilities',
      href: '/resource-library/democratic-socialism/public-utilities',
      description: 'Description for Public Utilities.',
    },
    {
      section: 'DEMOCRATIC SOCIALISM EVIDENCE',
      link: 'Cooperative Economics',
      href: '/resource-library/democratic-socialism/cooperative-economics',
      description: 'Description for Cooperative Economics.',
    },
  ];

  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-center my-8">Resource Directory</h1>
      <SectionedList items={items} />
    </div>
  );
};

export default DirectoryPage;