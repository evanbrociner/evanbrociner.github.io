import Link from 'next/link';

export const metadata = {
  title: 'My Analysis - Evan Brociner',
};

export default function DataPage(): JSX.Element {
  return (
    <>
      <header>
        <div className="container">
          <h1>My Analysis</h1>
          <nav>
            <Link href="/">Home</Link>
          </nav>
        </div>
      </header>
      <main>
        <section className="container">
          <h2>Original Data Analysis and Findings</h2>
          <p>This section will contain Evan's original data analysis and findings on North Carolina policy, organized by topic (Healthcare, Housing, Labor & Wages, Corporate Accountability, etc.). Each topic page will feature data visualizations, investigations, and insights built from his own analysis of North Carolina data.</p>
          <p>Content coming soon!</p>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2025 Evan Brociner. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
