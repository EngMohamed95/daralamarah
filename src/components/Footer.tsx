import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_CONFIG, SERVICES_DATA } from '../data/companyData';
import { DarAlAmarahLogo } from './DarAlAmarahLogo';
import { useSite } from '../context/SiteContext';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Instagram,
  Facebook,
  MessageCircle,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { lang, theme, t } = useSite();

  const quickLinks = [
    { path: '/#top', label: t.navHome },
    { path: '/#projects', label: t.navProjects },
    { path: '/#services', label: t.navServices },
    { path: '/#process', label: t.navWhy },
    { path: '/#about', label: t.navAbout },
    { path: '/#contact', label: t.navContact },
  ];

  return (
    <footer
      id="main-footer"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        borderBlockStart: '1px solid var(--color-border-subtle)',
        paddingBlockStart: '4.5rem',
        paddingBlockEnd: '2.5rem',
        position: 'relative',
        transition: 'background-color 250ms ease, border-color 250ms ease',
      }}
    >
      <div className="app-container">
        {/* Full Official Brand Header in Footer */}
        <div
          style={{
            borderBlockEnd: '1px solid var(--color-border-subtle)',
            paddingBlockEnd: '2.5rem',
            marginBlockEnd: '3rem',
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          <DarAlAmarahLogo
            variant="horizontal-brand"
            colorMode={theme === 'dark' ? 'white' : 'camel'}
            size={72}
          />
        </div>

        {/* Top Grid: Company Info, Fast Links, Services, Contact */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '2.5rem',
            marginBlockEnd: '3.5rem',
          }}
        >
          {/* Column 1: Company Profile & Architectural Stamp */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-brand-arabic)',
                fontSize: '1.25rem',
                color: 'var(--color-text-primary)',
                marginBlockEnd: '1rem',
              }}
            >
              {lang === 'ar' ? COMPANY_CONFIG.name : COMPANY_CONFIG.nameEn}
            </h3>

            <p
              style={{
                fontSize: '0.9rem',
                lineHeight: '1.7',
                color: 'var(--color-text-secondary)',
                marginBlockEnd: '1.5rem',
              }}
            >
              {t.footerDesc}
            </p>

            {/* Architectural Engineering Registry Box */}
            <div
              className="footer-license-card"
              style={{
                border: '1px solid var(--color-border-subtle)',
                backgroundColor: 'var(--color-bg-primary)',
                padding: '0.95rem',
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
              }}
            >
              <div style={{ color: 'var(--color-copper)', fontWeight: 600, marginBlockEnd: '0.25rem' }}>
                {lang === 'ar' ? 'ترخيص المقاولات والتصميم الإنشائي' : 'Structural & Contracting License'}
              </div>
              <div>{lang === 'ar' ? 'سجل المقاولات المعتمد — دولة الإمارات' : 'Certified UAE Contractor Registry'}</div>
              <div>
                {lang === 'ar'
                  ? `تأسست عام ${COMPANY_CONFIG.establishedYear} • مشاريع الفلل والضيافة`
                  : `Est. ${COMPANY_CONFIG.establishedYear} • Luxury Residential & Hospitality`}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                color: 'var(--color-copper-light)',
                marginBlockEnd: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>{t.footerQuickLinks}</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>(SHEETS)</span>
            </h4>

            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.9rem',
                      transition: 'color var(--transition-standard)',
                    }}
                    className="hover-copper"
                  >
                    <ArrowUpRight size={14} style={{ opacity: 0.7 }} />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services List */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                color: 'var(--color-copper-light)',
                marginBlockEnd: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>{t.footerServicesList}</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>(SCOPE)</span>
            </h4>

            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              {SERVICES_DATA.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to="/#services"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.88rem',
                      transition: 'color var(--transition-standard)',
                    }}
                    className="hover-copper"
                  >
                    <span style={{ color: 'var(--color-copper)', fontSize: '0.75rem' }}>{srv.sheetCode}</span>
                    <span>{lang === 'ar' ? srv.title : srv.titleEn}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & UAE Branches */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                color: 'var(--color-copper-light)',
                marginBlockEnd: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>{t.footerContactInfo}</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>(UAE)</span>
            </h4>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                fontSize: '0.88rem',
                color: 'var(--color-text-secondary)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={17} style={{ color: 'var(--color-copper)', flexShrink: 0, marginBlockStart: '3px' }} />
                <span>{lang === 'ar' ? COMPANY_CONFIG.address : COMPANY_CONFIG.addressEn}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Phone size={17} style={{ color: 'var(--color-copper)', flexShrink: 0 }} />
                <a href={`tel:${COMPANY_CONFIG.phoneDisplay.replace(/\s+/g, '')}`} style={{ color: 'var(--color-text-primary)' }} dir="ltr">
                  {COMPANY_CONFIG.phoneDisplay}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <MessageCircle size={17} style={{ color: 'var(--color-copper)', flexShrink: 0 }} />
                <a
                  href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-text-primary)' }}
                  dir="ltr"
                >
                  {COMPANY_CONFIG.phoneDisplay}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Mail size={17} style={{ color: 'var(--color-copper)', flexShrink: 0 }} />
                <a href={`mailto:${COMPANY_CONFIG.email}`} style={{ color: 'var(--color-text-primary)' }}>
                  {COMPANY_CONFIG.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Clock size={17} style={{ color: 'var(--color-copper)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.82rem' }}>
                  {lang === 'ar' ? COMPANY_CONFIG.workingHours : COMPANY_CONFIG.workingHoursEn}
                </span>
              </div>

              {/* Direct WhatsApp Action Button */}
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  lang === 'ar'
                    ? 'مرحباً دار العمارة، أود التواصل المباشر للاستفسار عن تصميم وتنفيذ مسبح وحديقة.'
                    : 'Hello Dar Al Amarah, I would like to inquire about pool and landscaping services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                id="footer-whatsapp-btn"
                style={{
                  marginBlockStart: '0.75rem',
                  paddingBlock: '0.65rem',
                  paddingInline: '1.1rem',
                  borderRadius: '6px',
                  fontSize: '0.88rem',
                  width: 'fit-content',
                }}
              >
                <MessageCircle size={17} />
                <span>{lang === 'ar' ? 'تواصل معنا عبر واتساب' : 'Chat on WhatsApp'}</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div
              style={{
                marginBlockStart: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <a
                href={COMPANY_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  border: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-copper)',
                  backgroundColor: 'var(--color-bg-primary)',
                  borderRadius: '3px',
                }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href={COMPANY_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  border: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-copper)',
                  backgroundColor: 'var(--color-bg-primary)',
                  borderRadius: '3px',
                }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  border: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-copper)',
                  backgroundColor: 'var(--color-bg-primary)',
                  borderRadius: '3px',
                }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Title Block Bar / Architectural Copyright */}
        <div
          style={{
            borderBlockStart: '1px solid var(--color-border-subtle)',
            paddingBlockStart: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
            fontFamily: 'var(--font-display)',
          }}
        >
          <div>
            © {currentYear} {lang === 'ar' ? COMPANY_CONFIG.legalName : COMPANY_CONFIG.legalNameEn} • {lang === 'ar' ? 'دولة الإمارات العربية المتحدة' : 'United Arab Emirates'}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.25rem', alignItems: 'center' }}>
            <span>{lang === 'ar' ? 'المسابح' : 'Pools'}</span>
            <span>•</span>
            <span>{lang === 'ar' ? 'تنسيق الحدائق' : 'Landscaping'}</span>
            <span>•</span>
            <span>{lang === 'ar' ? 'النوافير المائية' : 'Water Features'}</span>
            <span>•</span>
            <span>{lang === 'ar' ? 'المساحات الخارجية' : 'Outdoor Living'}</span>
            <span>•</span>
            <Link to="/privacy-policy" style={{ color: 'var(--color-text-muted)' }} className="hover-copper">
              {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .hover-copper:hover {
          color: var(--color-copper-light) !important;
        }
      `}</style>
    </footer>
  );
};
