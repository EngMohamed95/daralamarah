import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { COMPANY_CONFIG } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const { lang, theme } = useSite();
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  const phoneNumber = COMPANY_CONFIG.whatsappNumber || '971568116203';
  const displayPhone = COMPANY_CONFIG.phoneDisplay || '+971 56 811 6203';

  const defaultMessage = lang === 'ar'
    ? 'مرحباً دار العمارة، أود الاستفسار عن تصميم وتنفيذ المسابح والحدائق وعروض الأسعار.'
    : 'Hello Dar Al Amarah, I would like to inquire about swimming pool and landscape design & construction.';

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      id="floating-whatsapp-root"
      aria-label={lang === 'ar' ? 'محادثة واتساب فورية' : 'Instant WhatsApp Chat'}
      style={{
        position: 'fixed',
        bottom: 'clamp(18px, 4vw, 26px)',
        left: 'clamp(16px, 3.5vw, 24px)',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '0.65rem',
        direction: 'ltr',
        pointerEvents: 'auto',
      }}
    >
      {/* Floating Greeting Pill / Tooltip */}
      {showTooltip && (
        <div
          id="whatsapp-floating-bubble"
          style={{
            backgroundColor: theme === 'dark' ? '#1F2224' : '#FFFFFF',
            color: 'var(--color-text-primary)',
            border: '1.5px solid var(--color-copper)',
            paddingBlock: '0.65rem',
            paddingInline: '0.95rem',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            maxWidth: '280px',
            direction: lang === 'ar' ? 'rtl' : 'ltr',
            textAlign: lang === 'ar' ? 'right' : 'left',
            animation: 'fadeInUp 0.3s ease-out',
            position: 'relative',
          }}
        >
          {/* Close tiny button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="إغلاق التلميح"
            style={{
              position: 'absolute',
              top: '4px',
              left: lang === 'ar' ? '6px' : 'auto',
              right: lang === 'ar' ? 'auto' : '6px',
              background: 'none',
              border: 'none',
              color: 'var(--color-text-muted)',
              cursor: 'pointer',
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.7,
            }}
          >
            <X size={13} />
          </button>

          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              boxShadow: '0 0 8px #25D366',
              flexShrink: 0,
            }}
          />

          <div style={{ paddingInlineEnd: '14px' }}>
            <div
              style={{
                fontFamily: 'var(--font-brand-arabic)',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: 1.2,
                marginBlockEnd: '2px',
              }}
            >
              {lang === 'ar' ? 'دار العمارة — استشارة فورية' : 'Dar Al Amarah — Live Chat'}
            </div>
            <div
              style={{
                fontSize: '0.74rem',
                color: 'var(--color-copper)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
              }}
            >
              {displayPhone}
            </div>
          </div>
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="btn-floating-whatsapp"
        aria-label={lang === 'ar' ? `تواصل عبر واتساب ${displayPhone}` : `Chat on WhatsApp ${displayPhone}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#FFFFFF',
          textDecoration: 'none',
          boxShadow: '0 6px 24px rgba(37, 211, 102, 0.45)',
          border: '2.5px solid #FFFFFF',
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease',
          position: 'relative',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 24px rgba(37, 211, 102, 0.45)';
        }}
      >
        {/* Pulsating green ring */}
        <span
          style={{
            position: 'absolute',
            inset: '-5px',
            borderRadius: '50%',
            border: '2px solid #25D366',
            animation: 'whatsappPulse 2.2s infinite',
            pointerEvents: 'none',
          }}
        />

        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16C2 18.72 2.78 21.27 4.14 23.44L2.5 29.5L8.76 27.89C10.87 29.17 13.35 29.91 16 29.91C23.72 29.91 30 23.63 30 16C30 8.28 23.72 2 16 2ZM23.47 21.28C23.16 22.15 21.94 22.88 21 22.95C20.36 23 19.53 23.04 16.71 21.87C13.11 20.37 10.79 16.72 10.61 16.48C10.43 16.24 9.15 14.54 9.15 12.78C9.15 11.02 10.04 10.16 10.4 9.8C10.7 9.5 11.12 9.4 11.54 9.4C11.68 9.4 11.8 9.41 11.91 9.41C12.22 9.42 12.38 9.44 12.58 9.93C12.83 10.53 13.44 12.02 13.51 12.18C13.59 12.34 13.66 12.55 13.55 12.77C13.44 12.99 13.36 13.08 13.2 13.27C13.04 13.46 12.89 13.6 12.73 13.81C12.55 14 12.37 14.2 12.58 14.56C12.79 14.92 13.52 16.11 14.59 17.06C15.98 18.29 17.11 18.69 17.51 18.86C17.83 18.99 18.06 18.96 18.28 18.71C18.53 18.42 18.84 17.98 19.16 17.53C19.39 17.21 19.67 17.17 19.98 17.29C20.29 17.4 21.95 18.22 22.29 18.39C22.63 18.56 22.86 18.64 22.94 18.77C23.02 18.9 23.02 19.53 22.71 20.4L23.47 21.28Z" />
        </svg>

        {/* Small Active Badge Dot */}
        <span
          style={{
            position: 'absolute',
            top: '2px',
            right: '2px',
            width: '13px',
            height: '13px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              width: '9px',
              height: '9px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
            }}
          />
        </span>
      </a>

      <style>{`
        @keyframes whatsappPulse {
          0% {
            transform: scale(1);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.24);
            opacity: 0;
          }
          100% {
            transform: scale(1.24);
            opacity: 0;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 480px) {
          #btn-floating-whatsapp {
            width: 50px !important;
            height: 50px !important;
          }
          #btn-floating-whatsapp svg {
            width: 28px !important;
            height: 28px !important;
          }
          #whatsapp-floating-bubble {
            max-width: 240px !important;
            padding-block: 0.5rem !important;
            padding-inline: 0.75rem !important;
          }
        }
      `}</style>
    </aside>
  );
};
