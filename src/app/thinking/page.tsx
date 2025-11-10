"use client";

import { useEffect } from 'react';
import Link from 'next/link';



export default function ThinkingPage(): JSX.Element {
  useEffect(() => {
    // Dynamically import Bootstrap JS

  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" href="/">Evan Brociner</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/data">Data & Analysis</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mt-5">
        <h1 className="text-center">My Thinking</h1>
        <p className="text-center lead">A collection of my research, evidence, and writing on systemic policy solutions.</p>
        {/* Content will be added here */}
      </main>
    </>
  );
}
