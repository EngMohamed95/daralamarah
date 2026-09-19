import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, Sun, Moon, Globe } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';
import { DarAlAmarahLogo } from './DarAlAmarahLogo';
import { useSite } from '../context/SiteContext';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const { lang, toggleLang, theme, toggleTheme, t } = useSite();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: t.navHome, id: 'home' },
    { path: '/projects', label: t.navProjects, id: 'projects' },
    { path: '/services', label: t.navServices, id: 'services' },
    { path: '/why', label: t.navWhy, id: 'why' },
    { path: '/about', label: t.navAbout, id: 'about' },
    { path: '/contact', label: t.navContact, id: 'contact' },
  ];

  return (
    <header
      id="main-header"
      style={{
        position: 'sticky',
        insetBlockStart: 0,
        zIndex: 90,
        backgroundColor: 'var(--color-bg-surface)',
        backdropFilter: 'blur(14px)',
        borderBlockEnd: '1px solid var(--color-border-subtle)',
        boxShadow: theme === 'dark' ? '0 4px 20px rgba(0, 0, 0, 0.35)' : '0 2px 16px rgba(79, 79, 79, 0.05)',
        transition: 'background-color 250ms ease, border-color 250ms ease',
      }}
    >
      <div
        className="app-container header-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 'var(--header-height)',
          gap: '1rem',
        }}
      >
        {/* Official Brand Logo with Tree & Pool Water Emblem */}
        <Link
          to="/"
          id="brand-logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0,
          }}
          aria-label="دار العمارة للحدائق والمسابح - Dar Al Amarah"
        >
          <DarAlAmarahLogo
            variant="navbar"
            colorMode={theme === 'dark' ? 'white' : 'graphite'}
            size={42}
            showEnglish={lang === 'en'}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          id="desktop-nav"
          style={{
            display: 'none',
          }}
          className="lg-nav-wrapper"
          aria-label={lang === 'ar' ? 'القائمة الرئيسية' : 'Main Navigation'}
        >
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item) => (
              <li key={item.path} style={{ display: 'inline-flex' }}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `nav-link-item ${isActive ? 'active' : ''}`
                  }
                  id={`nav-link-${item.id}`}
                  style={{
                    whiteSpace: 'nowrap',
                    wordBreak: 'keep-all',
                    display: 'inline-flex',
                    alignItems: 'center',
                    fontSize: '0.94rem',
                  }}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Controls: Language Switcher + Theme Toggle + Quote Button */}
        <div className="header-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
          {/* Language Switcher Button */}
          <button
            type="button"
            onClick={toggleLang}
            id="lang-toggle-btn"
            title={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            aria-label={lang === 'ar' ? 'Switch to English' : 'التحويل إلى العربية'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.75rem',
              backgroundColor: 'transparent',
              border: '1px solid var(--color-border-bright)',
              borderRadius: '3px',
              color: 'var(--color-copper-light)',
              fontWeight: 600,
              fontSize: '0.82rem',
              cursor: 'pointer',
              transition: 'all var(--transition-standard)',
            }}
          >
            <Globe size={14} />
            <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          {/* Theme Toggle Button (Dark / Light) */}
          <button
            type="button"
            onClick={toggleTheme}
            id="theme-toggle-btn"
            title={theme === 'dark' ? t.themeLight : t.themeDark}
            aria-label={theme === 'dark' ? t.themeLight : t.themeDark}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              backgroundColor: theme === 'dark' ? 'rgba(186, 147, 104, 0.15)' : 'rgba(79, 79, 79, 0.06)',
              border: '1px solid var(--color-border-subtle)',
              borderRadius: '3px',
              color: theme === 'dark' ? '#BA9368' : 'var(--color-graphite)',
              cursor: 'pointer',
              transition: 'all var(--transition-standard)',
            }}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* CTA Quote Button */}
          <Link
            to="/contact"
            className="btn-base btn-primary"
            style={{
              display: 'none',
              paddingBlock: '0.55rem',
              paddingInline: '1.15rem',
              fontSize: '0.86rem',
              whiteSpace: 'nowrap',
            }}
            id="header-cta-quote"
          >
            <PhoneCall size={15} />
            <span>{t.navConsultationBtn}</span>
          </Link>

          {/* Hamburger Button for Mobile */}
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة الرئيسية'}
            style={{
              background: 'none',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-copper-light)',
              padding: '0.45rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="lg-hide-btn"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'ar' ? 'قائمة الموبايل' : 'Mobile Navigation'}
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            borderBlockEnd: '1px solid var(--color-border-subtle)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.8rem',
              color: 'var(--color-copper-light)',
              fontFamily: 'var(--font-display)',
              borderBlockEnd: '1px dashed var(--color-border-subtle)',
              paddingBlockEnd: '0.5rem',
            }}
          >
            <span>{lang === 'ar' ? 'القائمة الرئيسية' : 'Navigation Menu'}</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={toggleLang}
                style={{
                  padding: '0.25rem 0.55rem',
                  border: '1px solid var(--color-border-bright)',
                  background: 'none',
                  color: 'var(--color-copper)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {lang === 'ar' ? 'EN' : 'عربي'}
              </button>
              <button
                type="button"
                onClick={toggleTheme}
                style={{
                  padding: '0.25rem 0.55rem',
                  border: '1px solid var(--color-border-subtle)',
                  background: 'none',
                  color: 'var(--color-copper)',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                }}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>

          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `nav-link-item ${isActive ? 'active' : ''}`
                  }
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    paddingBlock: '0.85rem',
                    borderBlockEnd: '1px solid rgba(186, 147, 104, 0.12)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ fontSize: '1.05rem' }}>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div style={{ marginBlockStart: '0.75rem' }}>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-base btn-primary"
              style={{ width: '100%' }}
            >
              <PhoneCall size={16} />
              <span>{t.navConsultationBtn}</span>
            </Link>

            <div
              style={{
                marginBlockStart: '1rem',
                fontSize: '0.8rem',
                textAlign: 'center',
                color: 'var(--color-text-muted)',
              }}
            >
              {lang === 'ar' ? 'هاتف / واتساب:' : 'Phone / WhatsApp:'} {COMPANY_CONFIG.phoneDisplay}
            </div>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS helper for header desktop/mobile visibility */}
      <style>{`
        @media (min-width: 1024px) {
          .lg-nav-wrapper {
            display: block !important;
          }
          #header-cta-quote {
            display: inline-flex !important;
          }
          .lg-hide-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
