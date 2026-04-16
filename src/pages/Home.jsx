import React from 'react';
import Button from '../components/Button';
import SectionBadge from '../components/SectionBadge';

/* ──────────────── Decorative Floating Shapes ──────────────── */
export const FloatingShapes = () => (
  // Vertical stack of absolute positioned shapes sticking out on the left edge
  <div className="absolute top-10 -left-12 lg:-left-32 flex flex-col items-center gap-4 z-20 pointer-events-none scale-75 lg:scale-100">
    {/* Blue dotted triangle */}
    <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="transform rotate-[30deg] drop-shadow-md origin-bottom">
      <path d="M10 90L90 90L50 10Z" fill="#2563EB" />
      <circle cx="50" cy="40" r="4" fill="white" />
      <circle cx="40" cy="55" r="3" fill="white" />
      <circle cx="60" cy="55" r="3" fill="white" />
      <circle cx="50" cy="70" r="4" fill="white" />
    </svg>
    
    {/* Deep Blue rounded slice */}
    <svg width="50" height="90" viewBox="0 0 50 90" fill="none" className="transform -rotate-12 drop-shadow-md -ml-8">
      <path d="M25 0 C 50 0 50 40 50 60 C 50 80 40 90 25 90 C 10 90 0 80 0 60 C 0 40 0 0 25 0 Z" fill="#1E3A8A" />
      <path d="M10 20 Q 30 50 40 80" stroke="white" strokeWidth="1" className="opacity-20" />
      <path d="M20 10 Q 40 40 50 70" stroke="white" strokeWidth="1" className="opacity-20" />
    </svg>
    
    {/* Yellow piece */}
    <svg width="40" height="40" viewBox="0 0 80 80" fill="none" className="transform rotate-12 drop-shadow-md ml-4 -mt-10 z-10">
      <path d="M10 10 Q 50 10 70 50 L 10 60 Z" fill="#FBBF24"/>
      <circle cx="40" cy="30" r="3" fill="white" />
      <circle cx="30" cy="40" r="2" fill="white" />
    </svg>

    {/* Red dotted shape */}
    <svg width="70" height="40" viewBox="0 0 100 60" fill="none" className="transform -rotate-[15deg] drop-shadow-md mt-6 -ml-4">
       <path d="M10 30 C 10 10 30 10 50 10 C 70 10 90 10 90 30 C 90 50 70 50 50 50 C 30 50 10 50 10 30 Z" fill="#E8194B" />
       <circle cx="30" cy="25" r="2" fill="white" className="opacity-80" />
       <circle cx="50" cy="35" r="2" fill="white" className="opacity-80" />
       <circle cx="70" cy="25" r="2" fill="white" className="opacity-80" />
       <circle cx="40" cy="20" r="2" fill="white" className="opacity-80" />
       <circle cx="60" cy="30" r="2" fill="white" className="opacity-80" />
    </svg>

    {/* Yellow angular piece */}
    <svg width="50" height="50" viewBox="0 0 80 80" fill="none" className="transform rotate-[20deg] drop-shadow-md -ml-16 mt-8">
      <path d="M10 40 L 70 40 L 70 70 L 40 70 Z" fill="#FBBF24"/>
      <circle cx="40" cy="50" r="2" fill="white" className="opacity-80" />
      <circle cx="60" cy="55" r="2" fill="white" className="opacity-80" />
    </svg>

    {/* Green dotted piece */}
    <svg width="40" height="40" viewBox="0 0 60 60" fill="none" className="transform -rotate-[20deg] drop-shadow-md -ml-4 mt-8">
      <path d="M10 30 C 10 10 50 10 50 30 C 50 50 10 50 10 30 Z" fill="#10B981" />
      <circle cx="20" cy="25" r="2" fill="white" className="opacity-80" />
      <circle cx="35" cy="35" r="2" fill="white" className="opacity-80" />
      <circle cx="40" cy="20" r="2" fill="white" className="opacity-80" />
    </svg>
  </div>
);

/* ──────────────── Section 1: Hero ──────────────── */
const PillBadge = ({ icon, text, className }) => (
  <div className={`absolute bg-primary text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg flex items-center gap-1.5 sm:gap-2 z-20 hover:scale-105 transition-transform cursor-default ${className}`}>
    <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center shrink-0">
      {icon}
    </div>
    {text}
  </div>
);

const HeroSection = () => (
  <section className="relative overflow-hidden pt-24 lg:pt-32 bg-[#FAFBFF] min-h-screen flex flex-col items-center">
    
    <div className="relative text-center max-w-5xl mx-auto z-10 px-4 w-full mt-8">
      
      {/* Floating Pills */}
      <PillBadge 
        icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="white"><rect width="18" height="18" x="3" y="3" rx="4"/></svg>} 
        text="Easy Invoicing" 
        className="-top-12 left-0 sm:left-4 lg:left-0" 
      />
      <PillBadge 
        icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M3 3v18h18M7 14l4-4 4 4 6-6"/></svg>} 
        text="Smart Analytics" 
        className="-top-6 right-0 sm:right-4 lg:-right-8" 
      />
      <PillBadge 
        icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 20V10M18 20V4M6 20v-4"/></svg>} 
        text="Growth Tracking" 
        className="top-24 right-0 sm:-right-12 lg:-right-32" 
      />
      <PillBadge 
        icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>} 
        text="Data Automation" 
        className="bottom-20 left-0 sm:left-12 lg:-left-12" 
      />
      <PillBadge 
        icon={<svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>} 
        text="Automated Reports" 
        className="bottom-20 right-0 sm:right-12 lg:-right-12" 
      />

      <h1 className="text-[40px] sm:text-5xl lg:text-[64px] font-extrabold leading-[1.1] text-[#111] tracking-tight relative z-10 px-4">
        AI-First Infrastructure for<br className="hidden sm:block"/> Modern Financials Services
      </h1>
      
      <p className="mt-6 text-base lg:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto font-medium px-4">
        Purpose-built decisioning and automation for Banks, NBFCs, and MFIs. Not retrofitted.<br className="hidden sm:block"/>
        Not fragmented. AI-native from day one.
      </p>
      
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 relative z-20">
        <Button variant="primary" size="lg" to="/platform" rightArrow className="shadow-[0_8px_20px_rgba(232,25,75,0.25)] hover:shadow-[0_8px_25px_rgba(232,25,75,0.35)]">Get in touch</Button>
        <div className="bg-[#F4F7FE] hover:bg-[#E2E8F0] transition-colors rounded-lg cursor-pointer px-6 py-[14px] font-bold text-[#1E3A8A] border border-[#E2E8F0] flex items-center justify-center text-sm shadow-sm">
          Explore Platform
        </div>
      </div>
    </div>

    {/* Center large card replacing random shapes */}
    <div className="relative w-full max-w-[1000px] mx-auto mt-12 sm:mt-16 px-4 lg:px-8 pb-12 flex-1">
       <FloatingShapes />
       <div className="w-full h-[300px] sm:h-[400px] lg:h-[480px] bg-[#FAFBFF] border-2 border-red-200/60 rounded-[24px] shadow-[0_20px_50px_rgba(232,25,75,0.05)] relative z-10 mx-auto" />
    </div>
  </section>
);

/* ──────────────── Section 2: Our Partners ──────────────── */
// The screenshot showed actual logos or placeholders for specific names
const partners = ['VRSTO', 'Indifi', 'ACCISM', 'Fintech', 'PhonePe', 'LendTech'];

const PartnersSection = () => (
  <section className="bg-white py-12 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
      <p className="text-gray-400 font-semibold mb-8 uppercase tracking-widest text-xs">
        Trusted by leading financial institutions
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 grayscale opacity-50">
        {partners.map((name) => (
          <div key={name} className="flex items-center justify-center font-bold text-xl md:text-2xl text-gray-500">
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────── Section 3: Reality of Today's Lending Technology ──────────────── */
const realityCards = [
  { num: '1', title: 'Fragmented\nSystems', desc: 'Disconnected modules create data silos, increasing operational risk.' },
  { num: '2', title: 'Non\nAI-Native', desc: 'Legacy platforms bolt on AI as an afterthought, resulting in poor integration.' },
  { num: '3', title: 'Reactive\nCollections', desc: 'Collections triggered only after delinquency, missing early intervention.' },
  { num: '4', title: 'Static Rule\nEngines', desc: 'Rigid, pre-configured rules cannot adapt to evolving market conditions.' }
];

const RealitySection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-[40px] font-bold text-text-primary tracking-tight mb-4">
        The Reality of Today's Lending Technology
      </h2>
      <p className="text-text-secondary max-w-2xl mx-auto mb-16">
        Existing systems are holding back your operational speed and risk intelligence.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {realityCards.map((card) => (
          <div
            key={card.num}
            className="relative bg-primary text-white rounded-xl p-8 pt-10 pb-16 overflow-hidden text-left min-h-[250px] flex flex-col justify-between"
          >
            {/* The giant white watermark number seen in the screenshot */}
            <span className="absolute bottom-[-10%] right-[-5%] text-[180px] font-black leading-none text-white opacity-20 select-none">
              {card.num}
            </span>
            <div className="relative z-10 w-[90%] overflow-visible">
              <h3 className="text-2xl font-bold mb-4 leading-snug whitespace-pre-line">{card.title}</h3>
              <p className="text-sm text-white/90 leading-relaxed font-medium">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────── Section 4: AI-native decisioning ──────────────── */
const bullets4 = [
  { title: 'Domain Trained Models', desc: 'Our SLMs and NL models are trained specifically on BFSI data and regulatory logic' },
  { title: 'Unified Data Layer', desc: 'A single source of multi-streaming data sits across your organisation' },
  { title: 'Explainable AI', desc: 'Full transparency into every decision, ensuring auditability and compliance' }
];

const AINativeSection = () => (
  <section className="py-20 lg:py-28 bg-white border-t border-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full aspect-square bg-primary rounded-[40px] shadow-2xl p-8 flex items-center justify-center overflow-hidden">
          {/* Inner mocked floating interface representing "Vitto's Loan Management System" */}
          <div className="w-[110%] bg-white rounded-[24px] shadow-2xl p-6 transform translate-x-12 translate-y-8 flex flex-col">
             <div className="flex items-center justify-between mb-8">
               <div className="h-4 w-32 bg-gray-200 rounded" />
               <div className="px-3 py-1 bg-red-100 text-primary text-[10px] font-bold rounded-full">ACTIVE</div>
             </div>
             
             <div className="flex gap-6 relative">
               <div className="w-1/4">
                 <div className="w-full aspect-square rounded-full border-[12px] border-primary flex items-center justify-center relative">
                    <span className="font-bold text-xl absolute">97%</span>
                 </div>
               </div>
               <div className="w-3/4 space-y-4">
                 <div className="w-full h-10 bg-gray-50 rounded-lg flex items-center px-4"><div className="w-1/2 h-2 bg-gray-200 rounded" /></div>
                 <div className="w-full h-10 bg-gray-50 rounded-lg flex items-center px-4"><div className="w-3/4 h-2 bg-gray-200 rounded" /></div>
                 <div className="w-full h-10 bg-gray-50 rounded-lg flex items-center px-4"><div className="w-2/3 h-2 bg-gray-200 rounded" /></div>
               </div>
             </div>
          </div>
          
          <div className="absolute top-12 left-8 bg-black text-white text-sm font-bold px-5 py-3 rounded-full flex items-center gap-2 shadow-2xl z-10">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            Vitto's Loan Management System
          </div>
        </div>
        <div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-text-primary leading-[1.1] tracking-tight">
            AI-native decisioning meets full stack operational automation.
          </h2>
          <div className="mt-10 space-y-8">
            {bullets4.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary">{b.title}</h4>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────── Section 5: The AI Layer of Vitto ──────────────── */
const aiModules = [
  {
    title: 'Data-Based Assessment',
    isRed: true,
    desc: 'Analyze multi-dimensional primary data, alternate data, and behavioral signals to form a comprehensive risk layer for holistic understanding.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    )
  },
  {
    title: 'ML Models',
    isRed: false,
    icon: (
      <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-100 absolute -bottom-10 -right-10 pointer-events-none">
        <path d="M12 2a7 7 0 017 7v1a7 7 0 01-14 0V9a7 7 0 017-7z" /><path d="M12 17v5" /><path d="M8 22h8" />
      </svg>
    )
  },
  {
    title: 'Rule Engine',
    isRed: false,
    icon: (
      <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-100 absolute -bottom-10 -right-10 pointer-events-none">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-2.82 1.18V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15" />
      </svg>
    )
  },
  {
    title: 'Fraud',
    isRed: false,
    icon: (
      <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-100 absolute -bottom-10 -right-10 pointer-events-none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: 'Collections',
    isRed: false,
    icon: (
      <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-100 absolute -bottom-10 -right-10 pointer-events-none">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path d="M12 3v9l6 3" />
      </svg>
    )
  },
  {
    title: 'Agentic AI Layer',
    isRed: false,
    icon: (
      <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-100 absolute -bottom-10 -right-10 pointer-events-none">
        <circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" />
        <path d="M12 8v4M8.5 17L10 14M15.5 17L14 14" />
      </svg>
    )
  }
];

const AILayerSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-[40px] font-bold text-text-primary tracking-tight">The AI Layer of vitto</h2>
        <p className="mt-4 text-text-secondary">
          Modular, powerful, and built to work together. Adopt when you need, or deploy the full stack.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiModules.map((mod, i) => (
          <div
            key={i}
            className={`relative rounded-3xl p-8 overflow-hidden h-64 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] ${
              mod.isRed 
                ? 'bg-primary text-white shadow-xl row-span-2 h-auto' 
                : 'bg-gray-50 border border-gray-100 hover:bg-gray-100'
            }`}
          >
            {mod.isRed ? (
              <>
                <div>
                  <div className="bg-primary px-3 py-1 rounded inline-block text-[10px] font-bold text-white mb-6 uppercase tracking-wider">
                    CORE ASSESSMENT
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4 leading-tight">Analyze multi-<br/>dimensional primary<br/>data, alternate data,<br/>and behavioral<br/>signals to form a<br/>comprehensive risk<br/>layer for holistic<br/>understanding.</h3>
                </div>
                <div className="mt-8 flex items-center justify-between opacity-80">
                  <span className="text-sm font-bold tracking-widest uppercase">Vitto</span>
                  {mod.icon}
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-bold text-text-primary uppercase tracking-wide text-xs">{mod.title}</h3>
                {mod.icon}
                <div className="absolute bottom-6 left-6 text-primary font-medium text-sm flex items-center opacity-0 transition-opacity">
                  Explore <span className="ml-1">→</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ──────────────── Section 6: Certifications ──────────────── */
const CertificationsSection = () => (
  <section className="py-8 bg-gray-50 border-y border-gray-100 flex justify-center gap-12 flex-wrap px-4">
    <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold uppercase">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      Fintech Innovator '24
    </div>
    <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold uppercase">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      ISO 27001 Certified
    </div>
    <div className="flex items-center gap-2 text-sm text-gray-500 font-semibold uppercase">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
      Global AI Excellence
    </div>
  </section>
);

/* ──────────────── Section 7: Measurable business impact ──────────────── */
const impactPoints = [
  { title: "Faster, Consistent Decisions", desc: "Automated decisioning reduces turnaround from days to seconds." },
  { title: "Reduced Portfolio Risk", desc: "Proactively identify at-risk accounts before they become NPAs." },
  { title: "Improved Recovery Rates", desc: "Intelligent collection strategies increase recovery efficiency." },
  { title: "Seamless Integrations", desc: "Plug into your existing stack with APIs and connectors." },
];

const ImpactSection = () => (
  <section className="py-20 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl lg:text-[40px] font-bold text-text-primary tracking-tight leading-tight">
            Measurable business impact from day one.
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Our AI-native infrastructure delivers quantifiable results from the moment you go live.
          </p>
          <div className="mt-8 space-y-6">
            {impactPoints.map(pt => (
              <div key={pt.title} className="flex gap-4">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                   <div className="w-3 h-3 bg-primary transform rotate-45 rounded-sm" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary">{pt.title}</h4>
                  <p className="text-sm text-text-secondary mt-1">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* White CTA Card matching the screenshot */}
        <div className="relative">
           <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-xl" />
           <div className="bg-white rounded-[32px] border border-gray-100 p-10 lg:p-14 shadow-[0_24px_64px_rgba(0,0,0,0.06)] relative z-10 text-center flex flex-col items-center">
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase mb-6 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                 Lending
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-text-primary mb-5 leading-snug">
                 Want an amazing loan management for your company / team?
              </h3>
              <p className="text-text-secondary mb-10 max-w-sm px-4">
                 Get a demo from our experts to see how Vitto can scale your business.
              </p>
              <Button variant="primary" size="lg" className="w-full sm:w-auto" rightArrow>Get in touch</Button>
           </div>
        </div>
      </div>
    </div>
  </section>
);

/* ──────────────── Section 8: Testimonials ──────────────── */
const TestimonialsSection = () => (
  <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-12">
        Trusted by forward-thinking institutions
      </h2>
      <div className="relative">
         {/* Arrow Left */}
         <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow hover:bg-gray-50 z-10 text-gray-500 hidden md:flex cursor-pointer transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 18l-6-6 6-6"/></svg>
         </button>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-left">
               <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
               </div>
               <p className="text-gray-600 mb-6 leading-relaxed italic">"Vitto's AI platform has transformed our lending operations. The speed of decisioning and accuracy of risk assessment has exceeded our expectations."</p>
               <div>
                  <div className="font-bold text-text-primary">Brian Clark</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">VP of Marketing at Snapdeal</div>
               </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-left">
               <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8194B" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
               </div>
               <p className="text-gray-600 mb-6 leading-relaxed italic">"The collections intelligence module alone increased our recovery rates by 34%. The AI-driven prioritization ensures our agents focus intelligently."</p>
               <div>
                  <div className="font-bold text-text-primary">Stephanie Powell</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mt-1">VP of Finance</div>
               </div>
            </div>
         </div>

         {/* Arrow Right */}
         <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 bg-text-primary text-white border border-text-primary rounded-full flex items-center justify-center shadow hover:bg-black z-10 hidden md:flex cursor-pointer transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 18l6-6-6-6"/></svg>
         </button>
      </div>
    </div>
  </section>
);

/* ──────────────── Section 9: Footer CTA ──────────────── */
export const FooterCTA = ({ heading, subtext }) => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-primary rounded-[32px] overflow-hidden relative shadow-2xl">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10">
            <div className="absolute w-[800px] h-[800px] bg-white rounded-full -top-[400px] -right-[200px]" />
         </div>
         <div className="relative z-10 px-8 py-16 md:py-20 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
               <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.1]">
                  {heading || "Discover the key to grow your business"}
               </h2>
               <p className="mt-6 text-white/80 text-lg">
                  {subtext || "Join the top financial institutions scaling their lending operations securely with AI-native infrastructure."}
               </p>
               <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button variant="white" size="lg">Get started →</Button>
                  <Button variant="white-outline" size="lg">Learn more</Button>
               </div>
            </div>
            {/* Minimal Dashboard preview graphic */}
            <div className="hidden lg:block relative w-80 h-56 bg-white rounded-xl shadow-xl overflow-hidden self-end transform translate-y-10 border-4 border-white/20">
               <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
               </div>
               <div className="p-4 grid grid-cols-2 gap-3">
                  <div className="h-20 bg-gray-50 rounded" />
                  <div className="h-20 bg-primary/10 rounded" />
                  <div className="col-span-2 h-16 bg-gray-50 rounded" />
               </div>
            </div>
         </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <RealitySection />
      <AINativeSection />
      <AILayerSection />
      <CertificationsSection />
      <ImpactSection />
      <TestimonialsSection />
      <FooterCTA />
    </>
  );
}
