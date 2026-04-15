import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AIPlatform from './pages/AIPlatform';
import CollectionsIntelligence from './pages/CollectionsIntelligence';
import LendingLifecycle from './pages/LendingLifecycle';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageWrapper({ children }) {
  const [visible, setVisible] = React.useState(false);
  useEffect(() => {
    setVisible(false);
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);
  return (
    <div className={visible ? 'page-fade-active' : 'page-fade-enter'}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16 lg:pt-18">
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/platform" element={<PageWrapper><AIPlatform /></PageWrapper>} />
          <Route path="/collections-intelligence" element={<PageWrapper><CollectionsIntelligence /></PageWrapper>} />
          <Route path="/lending-lifecycle" element={<PageWrapper><LendingLifecycle /></PageWrapper>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
