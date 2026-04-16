import React from 'react';
import Button from '../components/Button';
import SectionBadge from '../components/SectionBadge';
import { FooterCTA } from './Home';
import HeroCard from '../components/HeroCard';

/* ──────────────── Hero ──────────────── */
const Hero = () => (
  <section className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionBadge color="red">AI-First Platform</SectionBadge>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight text-text-primary">
            The Brain Behind Modern Lending
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl">
            Not AI features. Not AI add-ons. A complete decisioning intelligence layer purpose-built for lending—from risk assessment to fraud detection to agentic automation.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" rightArrow>Get started</Button>
            <Button variant="outline" size="lg">Learn more</Button>
          </div>
        </div>
        <HeroCard />
      </div>
    </div>
  </section>
);

/* ──────────────── Core Intelligence Modules ──────────────── */
const coreModules = [
  {
    title: 'Data-Based Assessment',
    desc: 'Holistic understanding on primary, alternate, and compressed data signals, creating a unified risk profile.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    title: 'ML Model',
    desc: 'Advanced PD prediction and early warning signals trained on deep BFSI data.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 017 7v1a7 7 0 01-14 0V9a7 7 0 017-7z" /><path d="M12 17v5" /><path d="M8 22h8" />
      </svg>
    ),
  },
  {
    title: 'Rule Engine',
    desc: 'Scenario, customizable throttle-like decisions and granular risk categorization.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Fraud Intelligence',
    desc: 'AI-powered detection securing your portfolio. Identifies document tampering, identity mismatches, and collateral duplication in real time.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Collection Intelligence',
    desc: 'Optimize collection recovery strategies driven by propensity to pay and best-channel recommendations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path d="M12 3v9l6 3" />
      </svg>
    ),
  },
  {
    title: 'Agentic AI Layer',
    desc: 'Automate and orchestrate across policies, compliance, and sustainability across operations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" />
        <path d="M12 8v4M8.5 17L10 14M15.5 17L14 14" />
      </svg>
    ),
  },
];

const CoreModulesSection = () => (
  <section className="py-16 lg:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">Core Intelligence Modules</h2>
      <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
        Six distinct layers working in harmony to transform your operational lifecycle.
      </p>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreModules.map((mod) => (
          <div
            key={mod.title}
            className="bg-white rounded-xl border border-gray-100 p-6 text-left shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
              {mod.icon}
            </div>
            <h3 className="mt-4 text-lg font-bold text-text-primary">{mod.title}</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">{mod.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────── Data-Based Assessment (split) ──────────────── */
const DataAssessmentSection = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h4 className="text-xs font-bold text-text-primary mb-6 uppercase tracking-wider text-center">Data Analytics</h4>
            {/* Graph mock */}
            <div className="flex items-end gap-2 h-32 w-full px-4 mb-4 mt-6 relative">
               <div className="absolute left-0 bottom-0 top-0 w-full border-b border-gray-200" />
               <div className="absolute left-0 bottom-1/2 top-0 w-full border-b border-gray-200" />
               <div className="absolute left-0 bottom-full top-0 w-full border-b border-gray-200" />
               
               <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0 80 Q 20 60 40 70 T 80 40 T 100 20" fill="none" stroke="#FCD34D" strokeWidth="4" />
                  <path d="M0 90 Q 30 90 50 60 T 90 50 T 100 30" fill="none" stroke="#E8194B" strokeWidth="4" />
               </svg>
            </div>
            
            {/* Colored document icons overlapping styling */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                 <div className="w-16 h-20 bg-blue-500 text-white rounded shadow-lg transform -rotate-12 flex items-center justify-center font-bold text-xs">PDF</div>
                 <div className="w-16 h-20 bg-orange-500 text-white rounded shadow-lg transform translate-x-4 flex items-center justify-center font-bold text-xs -mt-12">CSV</div>
                 <div className="w-16 h-20 bg-emerald-500 text-white rounded shadow-lg transform rotate-12 flex items-center justify-center font-bold text-xs -mt-12 translate-x-8">TXT</div>
                 <div className="w-16 h-20 bg-purple-500 text-white rounded shadow-lg transform rotate-[20deg] flex items-center justify-center font-bold text-xs -mt-12 translate-x-12">DOC</div>
            </div>
          </div>
        </div>
        <div>
          <SectionBadge color="green">Assessment</SectionBadge>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
            Data-Based Assessment
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Our assessment layer creates a comprehensive risk profile by ingesting and analyzing data across multiple dimensions, providing a holistic understanding of each borrower.
          </p>
          <div className="mt-6 space-y-4">
            {[
              'Multi-dimensional primary data ingestion',
              'Alternate-data integration (device, location)',
              'Behavioral signals analysis.',
            ].map((txt) => (
              <div key={txt} className="flex items-start gap-3">
                <div className="mt-1.5 w-3 h-3 rounded-full bg-primary shrink-0" />
                <p className="text-sm text-text-primary font-medium">{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────── ML Models & Rule Engine ──────────────── */
const MLModelsSection = () => (
  <section className="py-20 lg:py-28 bg-gray-50 border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <SectionBadge color="green" className="mb-4">INTELLIGENCE & CONTROL</SectionBadge>
          <h2 className="text-3xl lg:text-[40px] font-bold text-text-primary leading-tight tracking-tight">
            ML Models & Rule Engine
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Our hybrid intelligence layer combines advanced machine learning with customizable rule engines, giving you power and control over every lending decision.
          </p>
          <div className="mt-8 space-y-5">
            {[
              'Probability of Default (PD) & EMI bounce prediction',
              'Early warning signal generation',
              'Automated Go/No-Go execution.'
            ].map((txt) => (
              <div key={txt} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm text-text-primary font-medium">{txt}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="bg-white rounded-[32px] p-10 shadow-[0_24px_64px_rgba(0,0,0,0.06)] border border-gray-100 w-full max-w-md">
            {/* The 3 tree structure cubes */}
            <div className="flex flex-col items-center">
               <div className="text-[10px] font-bold tracking-widest text-text-secondary uppercase mb-6 bg-gray-50 px-3 py-1 rounded-md border border-gray-100">
                  Data Stream
               </div>
               <div className="flex justify-between w-full relative mb-12 mt-4 px-4">
                  {/* Lines connecting cubes to main */}
                  <div className="absolute top-1/2 left-[15%] right-[15%] h-px bg-gray-200 -z-10" />
                  <div className="absolute top-1/2 right-[50%] w-px h-20 bg-gray-200 -z-10 pt-4" />
                  <div className="absolute top-1/2 left-[15%] w-px h-20 bg-gray-200 -z-10" />
                  <div className="absolute top-1/2 right-[15%] w-px h-20 bg-gray-200 -z-10" />
                  
                  {/* The small 3 cubes */}
                  {/* Isometric box 1 */}
                  <div className="w-12 h-14 relative mt-2">
                     <div className="absolute w-full h-[32px] bg-yellow-300 top-0 transform -skew-y-[-20deg]" />
                     <div className="absolute w-[50%] h-[24px] bg-yellow-400 bottom-0 left-0 transform skew-y-[30deg]" />
                     <div className="absolute w-[50%] h-[24px] bg-yellow-500 bottom-0 right-0 transform -skew-y-[30deg]" />
                  </div>
                  {/* Isometric box 2 */}
                  <div className="w-12 h-14 relative mt-2">
                     <div className="absolute w-full h-[32px] bg-cyan-300 top-0 transform -skew-y-[-20deg]" />
                     <div className="absolute w-[50%] h-[24px] bg-cyan-400 bottom-0 left-0 transform skew-y-[30deg]" />
                     <div className="absolute w-[50%] h-[24px] bg-cyan-500 bottom-0 right-0 transform -skew-y-[30deg]" />
                  </div>
                  {/* Isometric box 3 */}
                  <div className="w-12 h-14 relative mt-2">
                     <div className="absolute w-full h-[32px] bg-purple-300 top-0 transform -skew-y-[-20deg]" />
                     <div className="absolute w-[50%] h-[24px] bg-purple-400 bottom-0 left-0 transform skew-y-[30deg]" />
                     <div className="absolute w-[50%] h-[24px] bg-purple-500 bottom-0 right-0 transform -skew-y-[30deg]" />
                  </div>
               </div>
               
               <div className="mt-12 flex justify-center w-full">
                  {/* Large Black Isometric Box */}
                  <div className="w-32 h-32 relative">
                     <div className="absolute w-full h-[70px] bg-gray-700 top-0 transform -skew-y-[-20deg]" />
                     <div className="absolute w-[50%] h-[60px] bg-gray-800 bottom-0 left-0 transform skew-y-[30deg]" />
                     <div className="absolute w-[50%] h-[60px] bg-gray-900 bottom-0 right-0 transform -skew-y-[30deg]" />
                     <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/50 text-[10px] font-black tracking-widest text-center mt-12 w-full z-20">INFRASTRUCTURE</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────── Fraud & Collection Intelligence ──────────────── */
const FraudSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex justify-center">
          <div className="bg-white rounded-[32px] p-8 pb-10 shadow-[0_24px_64px_rgba(0,0,0,0.08)] border border-gray-100 w-full max-w-sm">
            <h4 className="text-sm text-center font-bold text-text-primary uppercase tracking-widest mb-2 border-b border-gray-100 pb-4">
              Creditworthiness Score
            </h4>
            <div className="flex items-center justify-center h-48 relative my-2">
              <svg width="200" height="120" viewBox="0 0 200 120" className="drop-shadow-md overflow-visible relative">
                {/* Background arc */}
                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#F3F4F6" strokeWidth="20" strokeLinecap="round" />
                {/* Green segment (Low risk) */}
                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#10B981" strokeWidth="20" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="0" />
                {/* Blue segment (Medium risk) */}
                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#3B82F6" strokeWidth="20" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="125" />
                {/* Red segment (High risk) */}
                <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#E8194B" strokeWidth="20" strokeLinecap="round" strokeDasharray="251.2" strokeDashoffset="200" />
                
                {/* Center text score */}
                <text x="100" y="90" textAnchor="middle" fontSize="36" fontWeight="900" fill="#10B981">750</text>
              </svg>
            </div>
            
            <div className="flex justify-between gap-2 mt-8 px-2">
              <div className="flex flex-col items-center gap-1.5"><div className="w-full h-1 rounded flex-1 bg-emerald-500" /><span className="text-[10px] uppercase font-bold text-text-secondary whitespace-nowrap">Low Risk</span></div>
              <div className="flex flex-col items-center gap-1.5"><div className="w-full h-1 rounded flex-1 bg-blue-500" /><span className="text-[10px] uppercase font-bold text-text-secondary whitespace-nowrap">Medium</span></div>
              <div className="flex flex-col items-center gap-1.5"><div className="w-full h-1 rounded flex-1 bg-primary" /><span className="text-[10px] uppercase font-bold text-text-secondary whitespace-nowrap">High</span></div>
            </div>
          </div>
        </div>
        <div>
          <SectionBadge color="red" className="mb-4">SECURITY & RECOVERY</SectionBadge>
          <h2 className="text-3xl lg:text-[40px] font-bold text-text-primary leading-tight tracking-tight">
            Fraud & Collection Intelligence
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Protect your portfolio with AI-driven fraud detection and maximize recovery through intelligent collection strategies.
          </p>
          <div className="mt-8 space-y-5">
            {[
              'Real-time KYC fraud & pixel-level document tampering detection',
              'Identity mismatch and collateral duplication flags.',
              'AI-driven account prioritization.'
            ].map((txt) => (
              <div key={txt} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-sm text-text-primary font-medium">{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────── Institutional Grade Impact ──────────────── */
const impactCards = [
  { title: 'Consistent Decisions', icon: '⚡', desc: 'Eliminate human bias with automated decisions.' },
  { title: 'Reduced Risk', icon: '🛡️', desc: 'Proactively identify and mitigate portfolio risks.' },
  { title: 'Scalable Ops', icon: '📈', desc: 'Handle millions of apps without added headcount.' },
  { title: 'Seamless Integrations', icon: '🔗', desc: 'Plug into existing systems with modular APIs.' },
];

const InstitutionalImpact = () => (
  <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-[40px] font-bold text-text-primary tracking-tight">Institutional Grade Impact</h2>
        <p className="mt-4 text-text-secondary">
          Delivering enterprise-level performance with startup-level agility across your lending operations.
        </p>
      </div>
      
      {/* Diamond / Cross Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 max-w-5xl mx-auto">
        {/* Left Column (2 cards) */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
           <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center transform lg:-translate-x-4">
             <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">{impactCards[0].icon}</div>
             <h4 className="font-bold text-text-primary mb-2">{impactCards[0].title}</h4>
             <p className="text-xs text-gray-500 leading-relaxed">{impactCards[0].desc}</p>
           </div>
           <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center transform lg:translate-x-4">
             <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">{impactCards[1].icon}</div>
             <h4 className="font-bold text-text-primary mb-2">{impactCards[1].title}</h4>
             <p className="text-xs text-gray-500 leading-relaxed">{impactCards[1].desc}</p>
           </div>
        </div>
        
        {/* Center CTA */}
        <div className="w-full lg:w-1/3 z-10 my-8 lg:my-0">
          <div className="bg-primary rounded-3xl p-8 pb-0 text-center text-white shadow-[0_24px_48px_rgba(232,25,75,0.4)] transform lg:scale-105 border-[6px] border-white relative z-20 overflow-hidden">
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Become a<br/>Partner?</h3>
            <div className="bg-transparent h-40 flex items-end justify-center relative translate-y-2">
               {/* Advanced CSS Mockup of two 3d people figures shaking hands */}
               <div className="relative flex justify-center w-full z-10">
                 {/* Left Figure (Red shirt) */}
                 <div className="relative mr-0">
                    <div className="w-12 h-14 bg-red-600 rounded-t-xl" />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#FFD1B3] rounded-full" />
                    {/* Arm extending right */}
                    <div className="absolute top-2 right-0 w-10 h-4 bg-red-600 rounded-r-full origin-left transform rotate-12" />
                    {/* Hair */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-10 h-4 bg-gray-900 rounded-t-full" />
                 </div>
                 {/* Right Figure (Suit) */}
                 <div className="relative ml-4">
                    <div className="w-12 h-14 bg-gray-800 rounded-t-xl flex justify-center pt-2">
                       <div className="w-3 h-8 bg-white"><div className="w-full h-1/2 bg-red-600" /></div>
                    </div>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#FFD1B3] rounded-full" />
                    {/* Arm extending left */}
                    <div className="absolute top-2 left-0 w-10 h-4 bg-gray-800 rounded-l-full origin-right transform -rotate-12 -translate-x-full" />
                    {/* Hair */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-10 h-4 bg-gray-900 rounded-t-full" />
                 </div>
                 {/* Hands shaking */}
                 <div className="absolute top-2 left-1/2 -translate-x-1/2 w-5 h-4 bg-[#FFD1B3] rounded-full z-20 mt-1" />
               </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
               <div className="w-16 h-10 bg-white rounded flex items-center justify-center opacity-90"><span className="text-primary font-black text-lg italic tracking-tighter">vitto</span></div>
            </div>
          </div>
        </div>
        
        {/* Right Column (2 cards) */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
           <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center transform lg:translate-x-4">
             <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">{impactCards[2].icon}</div>
             <h4 className="font-bold text-text-primary mb-2">{impactCards[2].title}</h4>
             <p className="text-xs text-gray-500 leading-relaxed">{impactCards[2].desc}</p>
           </div>
           <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center transform lg:-translate-x-4">
             <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">{impactCards[3].icon}</div>
             <h4 className="font-bold text-text-primary mb-2">{impactCards[3].title}</h4>
             <p className="text-xs text-gray-500 leading-relaxed">{impactCards[3].desc}</p>
           </div>
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────── AI Platform Page ──────────────── */
export default function AIPlatform() {
  return (
    <>
      <Hero />
      <CoreModulesSection />
      <DataAssessmentSection />
      <MLModelsSection />
      <FraudSection />
      <InstitutionalImpact />
      <FooterCTA
        heading="Ready to upgrade your infrastructure?"
        subtext="See how Vitto's AI-first platform can transform your lending operations with intelligent decisioning and automation."
      />
    </>
  );
}
