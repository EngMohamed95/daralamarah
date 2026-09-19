import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Why } from './pages/Why';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <SiteProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why" element={<Why />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/before-after" element={<Navigate to="/projects" replace />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SiteProvider>
  );
}
