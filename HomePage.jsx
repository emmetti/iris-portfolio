import React, { useState } from "react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`min-h-screen px-6 py-10 font-sans transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <section className="max-w-4xl mx-auto space-y-10">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mb-4 px-4 py-2 rounded border border-gray-400"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>

        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">Iris Emmett</h1>
          <p className="text-lg">Remote Ops & Compliance Specialist</p>
          <p className="text-sm text-gray-400">Multilingual. Multi-timezone. Precision-focused.</p>
        </header>

        <section id="about" className="space-y-4">
          <h2 className="text-2xl font-semibold">About</h2>
          <p>
            I work with mission-driven teams, startups, and global operations that need systems—not supervision. My background spans
            compliance, logistics, insurance, and documentation. Whether it's building contractor frameworks or auditing onboarding flows,
            I create clarity where there’s chaos.
          </p>
        </section>

        <section id="services" className="space-y-4">
          <h2 className="text-2xl font-semibold">Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Contractor classification & onboarding audits</li>
            <li>Compliance documentation & SOP creation</li>
            <li>Operational workflows for async teams</li>
            <li>Strategic support for cross-border hiring</li>
            <li>Fixed-scope consulting packages</li>
          </ul>
        </section>

        <section id="client-fit" className="space-y-4">
          <h2 className="text-2xl font-semibold">Who I Work With</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Startups scaling across borders</li>
            <li>Nonprofits and collectives needing remote structure</li>
            <li>Leaders tired of micromanaging and craving flow</li>
            <li>Anyone who says "I need someone who just gets it"</li>
          </ul>
        </section>

        <section id="freelancer-cv" className="space-y-4">
          <h2 className="text-2xl font-semibold">Freelancer CV</h2>
          <p><strong>Principal Consultant – Aurelia Collective (2024–Present):</strong> Strategic consulting for startups and nonprofits on ops, staffing, and compliance.</p>
          <p><strong>Ops Manager – Amazon DSP (2022–2024):</strong> Directed delivery logistics, team performance, and remote coordination.</p>
          <p><strong>Owner – Virtual Insurance Brokers (2019–2024):</strong> Managed all aspects of an independent, fully remote insurance agency.</p>
          <p><strong>Security Supervisor – Private Security Firm (2024–2025):</strong> Led safety ops, incident response, and shift team oversight.</p>
        </section>

        <section id="skills" className="space-y-4">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Customer Service & Client Retention</li>
            <li>Business Development Strategy</li>
            <li>Sales Enablement & Prospect Outreach</li>
            <li>Cross-Border Operations</li>
            <li>Compliance Consulting</li>
            <li>Logistics & Delivery Optimization</li>
            <li>Remote Team Leadership</li>
            <li>Contractor Classification</li>
            <li>Insurance Policy Structuring</li>
            <li>Documentation & SOP Development</li>
            <li>Bilingual Communication (English/Spanish)</li>
            <li>Risk-Aware Frameworks & Workflow Auditing</li>
          </ul>
        </section>

        <section id="contact" className="space-y-4">
          <h2 className="text-2xl font-semibold">Get In Touch</h2>
          <p>
            Reach out at <a href="mailto:iriscleary23@gmail.com" className="underline">iriscleary23@gmail.com</a>. Whether it’s a short-term project
            or an ongoing retainer, I’m open to international collaboration across time zones and currencies.
          </p>
        </section>
      </section>
    </main>
  );
}