import React from 'react';
import Button from '../components/Button';
import SectionBadge from '../components/SectionBadge';
import { FooterCTA, FloatingShapes } from './Home';

/* ──────────────── Hero ──────────────── */
const Hero = () => (
  <section className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-text-secondary mb-2">Collections Intelligence:</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight text-text-primary">
            Work Smarter,<br />Recover More
          </h1>
          <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl">
            Stop splitting everyone. Start calling the right people, at the right time, through the right channel. AI-powered prioritization and omnichannel automation for maximum recovery efficiency.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary" size="lg" rightArrow>Get started</Button>
            <Button variant="outline" size="lg">Learn more</Button>
          </div>
        </div>
        <div className="relative w-full h-[420px] flex items-center justify-center">
          <FloatingShapes />
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────── Traditional Collections Are Broken ──────────────── */
const problemCards = [
  { title: 'Transfer to agency', desc: 'Outsourcing to third-party agents reduces recovery and hurts brand trust.' },
  { title: 'High NPE flow', desc: 'Accounts slip into Non-Performing Assets due to delayed attention.' },
  { title: 'Manual Outreach', desc: 'Agents waste hours dialing unresponsive borrowers, reducing output.' },
  { title: 'Generic strategies', desc: 'One-size-fits-all communication completely ignores borrower preferences.' },
];

const BrokenSection = () => (
  <section className="bg-primary border-y border-red-800 relative overflow-hidden py-24 lg:py-32">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500 opacity-20 blur-3xl rounded-full transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Problem Statement Card */}
        <div className="relative text-white">
          <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center mb-8 border border-white/20">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"/><polyline points="14 2 14 8 20 8"/><path d="M2.97 13.12c-.6.36-.97 1.02-.97 1.74 0 1.11.89 2 2 2h3v3c0 1.11.89 2 2 2h3.5"/><path d="M22 13.12c.6.36.97 1.02.97 1.74 0 1.11-.89 2-2 2h-3v3c0 1.11-.89 2-2 2h-3.5"/></svg>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
            Traditional Collections Are Broken
          </h2>
          <p className="mt-6 text-white/90 leading-relaxed text-lg">
            Your agents are wasting time on borrowers who won't pay while missing those who will pay. It's time for an intelligent upgrade.
          </p>
        </div>
        
        {/* Right Side: Grid of Pain Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12 lg:pb-0 relative z-20">
          {problemCards.map((c, i) => (
            <div 
              key={c.title} 
              className={`rounded-[20px] p-8 shadow-[0_16px_32px_rgba(0,0,0,0.1)] border flex flex-col justify-center min-h-[180px] ${
                i === 0 ? 'bg-gray-900 text-white border-gray-800 transform lg:-translate-y-4' : 'bg-white text-text-secondary border-gray-100'
              }`}
            >
              <h4 className={`font-extrabold text-lg mb-3 leading-snug ${i === 0 ? 'text-white' : 'text-text-primary'}`}>{c.title}</h4>
              <p className="text-sm leading-relaxed opacity-90">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────── AI-Powered Collections Engine ──────────────── */
const featureTags = ['Predictive ML Models', 'Dynamic Segmentation', 'Omni-channel Automation', 'Real-time Analytics'];

const EngineSection = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionBadge color="green">The Solution</SectionBadge>
          <h2 className="mt-4 text-3xl lg:text-4xl font-bold text-text-primary leading-tight">
            AI-Powered Collections Engine
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Replace reactive, rule-based collections with an intelligent engine that predicts, prioritizes, and personalizes every interaction for maximum recovery.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {featureTags.map((t) => (
              <span key={t} className="px-4 py-2 bg-red-50 text-primary text-xs font-semibold rounded-full border border-red-100">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="bg-primary/5 rounded-[32px] p-8 border border-red-50 relative overflow-hidden flex flex-col h-full bg-white shadow-xl isolate">
            <div className="absolute top-4 right-4 flex gap-2 z-10">
               <span className="text-xs bg-red-50 border border-primary text-primary px-3 py-1 rounded-full font-bold">Failed</span>
               <span className="text-xs bg-red-50 border border-primary text-primary px-3 py-1 rounded-full font-bold">Active</span>
            </div>
            {/* Embedded dashboard graphic */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mt-8 shadow-inner flex flex-col pt-10 relative">
               <h4 className="absolute top-4 left-6 text-sm font-black text-text-primary uppercase tracking-widest">Analytics</h4>
               <div className="grid grid-cols-2 gap-6 items-center">
                  <div className="flex justify-center relative">
                     {/* Colorful donut chart */}
                     <svg width="140" height="140" viewBox="0 0 100 100" className="transform -rotate-90 drop-shadow-md">
                        {/* Purple */}
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#8B5CF6" strokeWidth="20" strokeDasharray="251" strokeDashoffset="180" />
                        {/* Red */}
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#E8194B" strokeWidth="20" strokeDasharray="251" strokeDashoffset="200" className="rotate-[120deg] origin-center" />
                        {/* Cyan */}
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#06B6D4" strokeWidth="20" strokeDasharray="251" strokeDashoffset="220" className="rotate-[250deg] origin-center" />
                        {/* Green */}
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="20" strokeDasharray="251" strokeDashoffset="230" className="rotate-[70deg] origin-center" />
                     </svg>
                     <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">86%</div>
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="w-full h-8 bg-white border border-gray-200 rounded flex items-end px-1 gap-1 pb-1 pt-3 shadow-sm">
                        {/* Sparkline */}
                        <div className="w-full h-full relative">
                           <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                             <path d="M0 80 L 20 60 L 40 70 L 60 40 L 80 50 L 100 20" fill="none" stroke="#E8194B" strokeWidth="3" />
                           </svg>
                        </div>
                     </div>
                     <div className="w-full h-12 bg-white rounded border border-gray-200 shadow-sm flex items-center px-3 gap-2">
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"><div className="w-[60%] h-full bg-blue-500" /></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────── Intelligent Collections Modules ──────────────── */
const modules = [
  {
    title: 'AI Prioritization',
    desc: 'Intelligently sort and rank accounts based on agency, balance, and risk, ensuring optimal focus on high impact cases first.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Propensity to Pay Scoring',
    desc: "Calculates the exact probability of payment for each borrower's likelihood to pay, informing the intensity and type of intervention.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
      </svg>
    ),
  },
  {
    title: 'Dynamic PTP Capture',
    desc: 'Captures and manages payment promises with smart nudges and easy payment links embedded in conversations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" />
      </svg>
    ),
  },
  {
    title: 'Best Channel Routing',
    desc: 'Determines the optimal medium (WhatsApp, SMS, Call, Email) and timing for each borrower to maximize response rates.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3h5v5" /><path d="M4 20L21 3" /><path d="M21 16v5h-5" /><path d="M15 15l6 6" /><path d="M4 4l5 5" />
      </svg>
    ),
  },
  {
    title: 'Smart Nudges',
    desc: 'Context-aware prompts for both borrowers (payment reminders) and agents (negotiation tactics and next best actions).',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
  },
  {
    title: 'Automated Workflows',
    desc: 'Trigger multi-step sequences for early delinquencies, reducing manual effort and standardizing the pre-NPA process.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const ModulesSection = () => (
  <section className="py-16 lg:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">Intelligent Collections Modules</h2>
      <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
        A complete toolkit to optimize every touchpoint in the recovery process.
      </p>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod) => (
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

/* ──────────────── From Data to Recovery ──────────────── */
const steps = [
  { num: 1, title: 'Data Integration', desc: 'Aggregates historical repayment data, alternate signals, and current account status.', imgRight: false },
  { num: 2, title: 'Propensity Scoring', desc: 'It calculates the exact probability of payment for the current cycle.', imgRight: true },
  { num: 3, title: 'Dynamic Segmentation', desc: 'Borrowers are grouped into micro-segments based on risk profile and behavior.', imgRight: false },
  { num: 4, title: 'Real-time Monitoring', desc: 'Live dashboards and intervention tools track performance.', imgRight: true },
  { num: 5, title: 'Continuous Learning', desc: 'Models automatically train on new data to improve future predictions.', imgRight: false },
];

const RecoverySection = () => (
  <section className="py-20 lg:py-28 bg-white border-y border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionBadge color="red" className="mb-4 mx-auto block text-center">THE PROCESS</SectionBadge>
      <h2 className="text-3xl lg:text-[40px] font-bold text-center text-text-primary tracking-tight">From Data to Recovery</h2>

      {/* Progress Line */}
      <div className="mt-16 hidden lg:flex flex-col mb-20 items-center justify-center w-full max-w-5xl mx-auto relative px-8">
        <div className="w-full flex justify-between items-center relative z-10">
          {steps.map((s, i) => (
             <div key={s.num} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-[4px] border-white bg-primary text-white flex items-center justify-center text-lg font-bold shadow-lg relative z-20">
                   {s.num}
                </div>
                <div className="text-xs font-bold text-primary text-center mt-3 uppercase tracking-widest leading-tight whitespace-nowrap">{s.title.replace(' ', '\n')}</div>
             </div>
          ))}
        </div>
        {/* Connection line inside */}
        <div className="absolute top-6 left-12 right-12 h-1 bg-red-100 z-0" />
      </div>

      {/* Feature Cards Grid (Two per row like screenshot) */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
        {steps.map((s) => (
          <div key={s.num} className="bg-white">
            <h3 className="text-2xl font-bold text-text-primary flex items-center gap-3">
              {s.num}. {s.title}
            </h3>
            <p className="mt-3 text-text-secondary leading-relaxed text-base min-h-[50px]">{s.desc}</p>
            
            <div className="mt-6 w-full bg-white rounded-t-2xl rounded-b-md shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 h-64 flex flex-col overflow-hidden relative">
               {/* Browser Top bar mock */}
               <div className="h-10 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-2 w-full shrink-0">
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                  <div className="flex-1 ml-4 h-5 bg-white border border-gray-200 rounded text-[10px] text-gray-400 font-medium px-2 flex items-center truncate">app.vitto.com/module</div>
               </div>
               
               {/* Window contents specific to step */}
               <div className="flex-1 p-4 bg-gray-50/50 flex flex-col">
                  {s.num === 1 && (
                     <div className="w-full flex-1 bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
                       <div className="h-6 bg-red-50 border-b border-red-100" />
                       <div className="p-3 space-y-2">
                         <div className="w-full h-3 bg-gray-100 rounded" />
                         <div className="w-full h-3 bg-gray-100 rounded" />
                         <div className="w-3/4 h-3 bg-gray-100 rounded" />
                       </div>
                     </div>
                  )}
                  {s.num === 2 && (
                     <div className="w-full flex-1 bg-primary/5 rounded shadow-sm border border-red-100 overflow-hidden flex flex-col justify-end p-4 items-center">
                       <div className="w-32 h-16 border-t-4 border-l-4 border-r-4 rounded-t-full border-primary relative flex justify-center items-end pb-2">
                          <span className="text-xl font-bold text-primary">82%</span>
                       </div>
                     </div>
                  )}
                  {s.num === 3 && (
                     <div className="w-full flex-1 bg-white rounded shadow-sm border border-gray-100 overflow-hidden grid grid-cols-2 gap-2 p-2">
                         <div className="bg-red-50 rounded" /><div className="bg-blue-50 rounded" />
                         <div className="col-span-2 bg-emerald-50 rounded" />
                     </div>
                  )}
                  {s.num === 4 && (
                     <div className="w-full flex-1 bg-white rounded shadow-sm border border-gray-100 overflow-hidden flex items-end justify-center gap-4 p-4 pb-0">
                         <div className="w-10 h-[60%] bg-blue-400 rounded-t-sm" />
                         <div className="w-10 h-[90%] bg-emerald-400 rounded-t-sm" />
                         <div className="w-10 h-[40%] bg-yellow-400 rounded-t-sm" />
                         <div className="w-10 h-[80%] bg-red-400 rounded-t-sm" />
                     </div>
                  )}
                  {s.num === 5 && (
                     <div className="w-full flex-1 bg-white rounded shadow-sm border border-gray-100 overflow-hidden p-4 space-y-3">
                         <div className="flex gap-2 items-center"><div className="w-4 h-4 rounded-full bg-green-500" /><div className="w-32 h-3 bg-gray-100 rounded" /></div>
                         <div className="flex gap-2 items-center"><div className="w-4 h-4 rounded-full bg-green-500" /><div className="w-32 h-3 bg-gray-100 rounded" /></div>
                         <div className="flex gap-2 items-center"><div className="w-4 h-4 rounded-full bg-green-500" /><div className="w-32 h-3 bg-gray-100 rounded" /></div>
                     </div>
                  )}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────── Testimonials ──────────────── */
const testimonials = [
  {
    quote: "The collections intelligence module revolutionized our recovery process. We saw a 34% increase in recovery rates within the first quarter of implementation.",
    name: 'Priya Kumar',
    title: 'Head of Collections at IndusInd Bank',
  },
  {
    quote: "Vitto's AI-powered prioritization ensures our agents focus on accounts with the highest recovery potential. The efficiency gains have been remarkable.",
    name: 'Saubhik Chosh',
    title: 'VP of Operations at Bajaj Finance',
  },
];

const TestimonialsSection = () => (
  <section className="py-16 lg:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">What our clients have to say</h2>
      <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
        Hear from leading financial institutions who transformed their collections with Vitto.
      </p>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-xl p-8 text-left shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow"
          >
            <div className="mb-4 text-primary text-3xl">"</div>
            <p className="text-text-secondary leading-relaxed text-sm">{t.quote}</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0" />
              <div>
                <p className="font-semibold text-sm text-text-primary">{t.name}</p>
                <p className="text-xs text-text-secondary">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────── Collections Intelligence Page ──────────────── */
export default function CollectionsIntelligence() {
  return (
    <>
      <Hero />
      <BrokenSection />
      <EngineSection />
      <ModulesSection />
      <RecoverySection />
      <TestimonialsSection />
      <FooterCTA
        heading="See AI-driven collections in action."
        subtext="Start recovering smarter, not harder. Discover the Vitto difference today."
      />
    </>
  );
}
