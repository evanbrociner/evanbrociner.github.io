import Link from 'next/link';

export const metadata = {
  title: 'Evidence Library - Evan Brociner',
};

export default function EvidencePage(): JSX.Element {
  return (
    <>
      <header>
        <div className="container">
          <h1>Evidence Library</h1>
          <nav>
            <Link href="/">Home</Link>
          </nav>
        </div>
      </header>
      <main>
        <section className="container">
          <h2>Curated Research and What Works</h2>
          <p>This section serves as Evan's curated "second brain," organizing insights from other sources. It will include evidence from Vienna housing, single-payer research from other countries, worker co-op success data, and more. Organized by similar topics as "My Analysis," this section focuses on synthesizing existing research and proven models.</p>
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
