"use client";
import React from 'react';
import Link from 'next/link';

export default function Home(): React.ReactNode {
  return (
    <>
      <nav>
        <a href="#analysis">Analysis</a>
        <div className="logo">Evan Brociner</div>
        <a href="#evidence">Evidence Library</a>
      </nav>

      <main className="hero">
        <div className="floating-card card1">
          <div className="card-image">🏥</div>
        </div>
        <div className="floating-card card2">
          <div className="card-image">🗳️</div>
        </div>
        <div className="floating-card card3">
          <div className="card-image">🎯</div>
        </div>
        <div className="floating-card card4">
          <div className="card-image">🔬</div>
        </div>

        <p className="subtitle-small">This is Evan Brociner</p>
        <h1>Data Scientist &<br />Policy Researcher</h1>
        <p className="tagline">Building evidence-based solutions on how to make communities stronger</p>
        <a href="#data" className="cta-button">Explore the Data →</a>
      </main>

      <section className="work-section">
        <h2 className="section-title">Work in action</h2>
        <p className="section-subtitle">Crafting evidence-based policy solutions for North Carolina.</p>

        <div className="work-grid">
          <Link href="/directory" passHref>
            <div className="work-card">
              <div className="work-image" style={{ background: 'white' }}>
                <div>📚</div>
              </div>
              <h3 className="work-title">Resource Library</h3>
              <p className="work-description">A comprehensive collection of datasets, research papers, and policy briefs providing
                real-time insights into North Carolina's healthcare, education, and economic trends for policymakers and
                researchers.</p>
              <span className="work-tag">Data & Research</span>
            </div>
          </Link>

          <div className="work-card">
            <div className="work-image" style={{ background: 'white' }}>
              <div>📊</div>
            </div>
            <h3 className="work-title">Analysis</h3>
            <p className="work-description">Interactive data visualizations and statistical analyses examining the impact of
              policy decisions across North Carolina counties, helping stakeholders make informed, evidence-based decisions.
            </p>
            <span className="work-tag">Analytics & Insights</span>
          </div>
        </div>
      </section>
    </>
  );
}