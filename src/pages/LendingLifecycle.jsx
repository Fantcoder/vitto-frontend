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
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight text-text-primary">
            Complete Lending Lifecycle: Lead to Closure
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl">
            Every operational layer—customer acquisition, underwriting, collections, LMS, CRM—unified in one AI-powered platform. Modular APIs or full stack adoption. Your choice.
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

/* ──────────────── Full Lending Lifecycle, Reimagined ──────────────── */
const journeyStages = [
  {
    label: 'Lead Generation',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    sub: 'Capture leads from multiple channels',
  },
  {
    label: 'Onboarding',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" />
      </svg>
    ),
    sub: 'Digital KYC and document collection',
  },
  {
    label: 'Underwriting',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H2v7l6.29 6.29a1 1 0 001.42 0l4.58-4.58a1 1 0 000-1.42L9 5z" /><circle cx="6" cy="9" r="1" />
      </svg>
    ),
    sub: 'AI-driven risk assessment',
  },
  {
    label: 'Disbursement',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    sub: 'E-sign and automated payouts',
  },
  {
    label: 'Servicing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9" />
      </svg>
    ),
    sub: 'EMI & insurance management',
  },
  {
    label: 'Collections',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path d="M12 3v9l6 3" />
      </svg>
    ),
    sub: 'AI-powered recovery',
  },
  {
    label: 'Closure',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    sub: 'Automated NOC & archival',
  },
];

const LifecycleTimeline = () => (
  <section className="py-20 lg:py-28 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <SectionBadge color="red" className="mb-4">THE JOURNEY</SectionBadge>
      <h2 className="text-3xl lg:text-[40px] font-bold tracking-tight text-text-primary mb-16">
         Full Lending Lifecycle, Reimagined
      </h2>

      {/* Desktop Timeline */}
      <div className="hidden lg:block relative mx-auto w-full max-w-6xl">
         {/* The horizontal connection red line */}
         <div className="absolute top-8 left-[4%] right-[4%] h-1 bg-primary z-0" />
         
         <div className="grid grid-cols-7 gap-2 relative z-10">
            {journeyStages.map((stage, i) => (
              <div key={i} className="flex flex-col items-center text-center relative group">
                {/* Specific colored circles matching screenshot */}
                {(() => {
                  const colors = ['bg-teal-400','bg-cyan-400','bg-blue-400','bg-indigo-400','bg-emerald-400','bg-red-500','bg-gray-800'];
                  return (
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-md transition-transform group-hover:scale-110 mb-4 ${colors[i] || 'bg-gray-400'}`}>
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                       {React.cloneElement(stage.icon).props.children}
                       </svg>
                    </div>
                  );
                })()}
                <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">{stage.label}</h4>
                <p className="mt-1 text-[10px] text-text-secondary w-[100px] leading-tight mx-auto">{stage.sub}</p>
              </div>
            ))}
         </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-6 relative z-10 bg-primary rounded-[32px] p-8 text-left">
         {journeyStages.map((stage, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shrink-0 shadow-sm border border-white">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     {React.cloneElement(stage.icon, { stroke: "currentColor" }).props.children}
                   </svg>
                </div>
                {i < journeyStages.length - 1 && <div className="w-0.5 h-10 bg-white/30 my-1" />}
              </div>
              <div className="pt-1.5">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider leading-none">{stage.label}</h4>
                <p className="text-xs text-white/80 mt-1.5">{stage.sub}</p>
              </div>
            </div>
         ))}
      </div>
    </div>
  </section>
);

/* ──────────────── Key Modules by Stage ──────────────── */
const stageModules = [
  {
    title: 'Acquisition',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v10.764a1 1 0 01-1.447.894L15 18M9 6l-4.553 2.276A1 1 0 003 9.171v10.764a1 1 0 001.447.894L9 18M15 10v8M9 6v12M15 10l-6-4" /></svg>,
    items: ['Lead Management System', 'Partner Onboarding Portals', 'Omni-channel Journeys'],
  },
  {
    title: 'Underwriting & LOS',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    items: ['KYC & Document Analyzers', 'UCIC & Dedupe Logic', 'Dynamic Rule Engine'],
  },
  {
    title: 'Disbursement',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    items: ['E-Sign Workflows', 'Automated Payouts', 'Ledger Initialization'],
  },
  {
    title: 'Servicing (LMS)',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    items: ['Insurance Auto-Deduct', 'EMI Management', 'Debt Tagging & Tracking'],
  },
  {
    title: 'Collections',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>,
    items: ['Smart Agent Allotment', 'Propensity to Pay (PTP) Models', 'Omni-Channel Reminders'],
  },
  {
    title: 'Closure',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 mb-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    items: ['Automated Account Closure', 'NOC Generation', 'Archival & Reporting'],
  },
];

const KeyModulesSection = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">Key Modules by Stage</h2>
      <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
        A comprehensive suite of tools built into every phase of the journey.
      </p>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stageModules.map((mod) => (
          <div
            key={mod.title}
            className="bg-white rounded-xl border border-gray-100 p-6 text-left shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-2xl">{mod.icon}</span>
            <h3 className="mt-3 text-lg font-bold text-text-primary">{mod.title}</h3>
            <ul className="mt-3 space-y-2">
              {mod.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-[2px] shrink-0">
                    <circle cx="8" cy="8" r="7" fill="#E8194B" />
                    <path d="M4.5 8L7 10.5L11.5 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────── How It Works ──────────────── */
const HowItWorks = () => (
  <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20 relative">
        <h2 className="text-3xl lg:text-[40px] font-bold text-text-primary tracking-tight">How it works</h2>
        <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
          An AI-native architecture that optimizes flow, logic, and actions automatically.
        </p>
      </div>

      <div className="relative">
         {/* Vertical Central Line */}
         <div className="absolute top-10 bottom-0 left-1/2 w-0.5 bg-red-200 hidden md:block -ml-px" />
         
         {/* Center Top Logo */}
         <div className="relative z-10 flex justify-center mb-16">
            <div className="w-20 h-20 bg-primary shadow-[0_16px_32px_rgba(232,25,75,0.3)] rounded-[20px] flex items-center justify-center text-white border-4 border-white transform rotate-12 transition-transform hover:rotate-0">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
         </div>

         {/* 1. Data Flow */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 relative z-10 p-6 bg-white rounded-[24px] shadow-sm border border-gray-100">
            <div className="order-1 md:order-1 flex justify-center w-full">
               <div className="relative w-full max-w-sm aspect-[4/3] flex items-center justify-center">
                 {/* Vitto Logo Node */}
                 <div className="w-20 h-20 bg-primary/10 rounded-[20px] flex items-center justify-center z-20 absolute top-4 shadow-sm border border-red-100">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                 </div>
                 {/* Lines connecting downwards */}
                 <div className="absolute top-20 w-px h-12 bg-gray-200 z-10" />
                 <div className="absolute top-32 w-48 h-px bg-gray-200 z-10" />
                 <div className="absolute top-32 left-1/2 -ml-24 w-px h-8 bg-gray-200 z-10" />
                 <div className="absolute top-32 left-1/2 ml-24 w-px h-8 bg-gray-200 z-10" />
                 
                 {/* Provider nodes representing AI / DB / Tools */}
                 <div className="absolute top-40 flex w-full max-w-xs justify-between px-4 gap-2">
                    <div className="w-16 h-16 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center font-bold text-xl text-text-primary">AI</div>
                    <div className="w-16 h-16 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center font-bold text-xl text-blue-500">G</div>
                    <div className="w-16 h-16 rounded-xl border border-gray-100 bg-white shadow-sm flex items-center justify-center font-bold text-xl text-green-600">O</div>
                 </div>
                 <div className="absolute top-60 flex w-full max-w-[200px] justify-between">
                    <div className="w-16 h-16 rounded-xl border border-gray-100 bg-white shadow-sm" />
                    <div className="w-16 h-16 rounded-xl border border-gray-100 bg-white shadow-sm bg-blue-600 shadow-[0_4px_16px_rgba(37,99,235,0.4)]" />
                 </div>
               </div>
            </div>
            
            <div className="order-2 md:order-2 pl-0 md:pl-8">
               <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
               </div>
               <h3 className="text-xl font-bold text-text-primary mb-2">Data Flow</h3>
               <p className="text-sm text-text-secondary leading-relaxed">
                 Ingests millions of data points across traditional and alternate sources in real-time, creating a unified profile instantly.
               </p>
            </div>
         </div>

         {/* 2. Decisioning */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 relative z-10 p-6 bg-white rounded-[24px] shadow-sm border border-gray-100">
            <div className="order-2 md:order-1 pr-0 md:pr-8 text-left">
               <h3 className="text-xl font-bold text-text-primary mb-2">Decisioning</h3>
               <p className="text-sm text-text-secondary leading-relaxed">
                 Applies BFSI-trained machine learning models and customizable rule engines to calculate risk instantly.
               </p>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center w-full">
               <div className="w-full max-w-sm aspect-[4/3] flex items-center justify-center relative">
                  <div className="w-48 h-48 rounded-full border border-dashed border-gray-300 relative flex items-center justify-center">
                     <div className="bg-black text-white px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2">
                        Create agent
                     </div>
                     <div className="absolute top-4 right-4 flex gap-1">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full border border-white" />
                        <div className="w-4 h-4 bg-emerald-400 rounded-full border border-white -ml-2" />
                     </div>
                     <div className="absolute bottom-4 right-8 bg-white border border-gray-200 rounded-full px-2 py-1 flex items-center justify-between w-12 shadow-sm">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full translate-x-4" />
                     </div>
                     <div className="absolute bottom-8 left-0 bg-white border border-gray-200 px-3 py-1.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm text-gray-500">
                        <span className="text-xl">✈</span> Deploying agent
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* 3. Intervention */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10 p-6 bg-white rounded-[24px] shadow-sm border border-gray-100">
            <div className="order-1 md:order-1 flex justify-center w-full">
               <div className="w-full max-w-sm aspect-[4/3] flex items-center justify-center relative">
                  <div className="relative flex justify-center items-center">
                     <svg width="180" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-100">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#FFF2F2" />
                     </svg>
                     <div className="absolute bg-gradient-to-br from-black to-gray-800 text-white rounded-t-3xl rounded-b-[40px] px-8 pt-10 pb-16 flex items-center justify-center shadow-2xl flex-col">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        <div className="absolute -bottom-6 w-full text-center">
                           <div className="bg-white rounded-full p-2 inline-flex border border-gray-100 shadow-md">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="order-2 md:order-2 pl-0 md:pl-8">
               <h3 className="text-xl font-bold text-text-primary mb-2">Intervention</h3>
               <p className="text-sm text-text-secondary leading-relaxed">
                 Triggers automated workflows, dispatches tasks to agents, or executes direct communications securely based on exact security thresholds.
               </p>
            </div>
         </div>

      </div>
    </div>
  </section>
);

/* ──────────────── Measurable Results ──────────────── */
const stats = [
  { num: '200+', label: 'ROI%', desc: 'Return on investment starting from the first quarter.' },
  { num: '97%', label: 'Approval Accuracy', desc: 'Reduce false positives and ensure high-quality underwriting.' },
  { num: '34+', label: 'Collections Boost', desc: 'Increase recovery rates and drop NPA creation steadily.' },
  { num: '100+', label: 'Integrations', desc: 'Seamlessly plug into your existing data and core banking setups.' },
];

const ResultsSection = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
        Measurable Results Across the Lifecycle
      </h2>
      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((s) => (
          <div key={s.num} className="bg-white rounded-xl border border-gray-100 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <div className="text-4xl lg:text-5xl font-extrabold text-primary">{s.num}</div>
            <h4 className="mt-2 font-bold text-text-primary">{s.label}</h4>
            <p className="mt-2 text-xs text-text-secondary leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────── Lending Lifecycle Page ──────────────── */
export default function LendingLifecycle() {
  return (
    <>
      <Hero />
      <LifecycleTimeline />
      <KeyModulesSection />
      <HowItWorks />
      <ResultsSection />
      <FooterCTA
        heading="Ready to Unify Your Lending Stack?"
        subtext="See how Vitto replaces your fragmented systems with one AI-powered platform."
      />
    </>
  );
}
