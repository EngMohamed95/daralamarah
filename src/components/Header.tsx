import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, MessageCircle, Moon, PhoneCall, Sun, X } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { COMPANY_CONFIG } from '../data/companyData';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, theme, toggleTheme, t } = useSite();

  const links = [
    ['#top', t.navHome], ['#services', t.navServices], ['#projects', t.navProjects],
    ['#process', t.navWhy], ['#about', t.navAbout], ['#contact', t.navContact],
  ];

  return (
    <header id="main-header" className="neo-header">
      <div className="neo-announcement">
        <div className="app-container">
          <span>{lang === 'ar' ? 'نحوّل المساحات الخارجية إلى وجهات استثنائية' : 'We turn outdoor spaces into exceptional destinations'}</span>
          <a href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer">{lang === 'ar' ? 'ابدأ مشروعك الآن' : 'Start your project'} →</a>
        </div>
      </div>
      <div className="app-container neo-nav">
        <Link to="/" className="neo-brand" aria-label="Dar Al Amarah">
          <img className="header-brand-logo" src="/logo.png" alt="Dar Al Amarah Landscaping & Pool" />
        </Link>
        <nav className="neo-desktop-nav">
          {links.map(([path, label]) => <a key={path} href={path}>{label}</a>)}
        </nav>
        <div className="neo-nav-actions">
          <button onClick={toggleLang} aria-label="Change language"><Globe size={16} /><span>{lang === 'ar' ? 'EN' : 'عربي'}</span></button>
          <button className="neo-icon-btn" onClick={toggleTheme} aria-label="Change theme">{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="neo-nav-cta" href="#contact"><PhoneCall size={16} />{t.navConsultationBtn}</a>
          <button className="neo-mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav className="neo-mobile-nav">
        {links.map(([path, label]) => <a key={path} href={path} onClick={() => setOpen(false)}>{label}</a>)}
        <a href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> واتساب</a>
      </nav>}
    </header>
  );
};
