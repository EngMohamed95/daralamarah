import React from 'react';
import { useSite } from '../context/SiteContext';

export const HeroBlueprintSVG: React.FC = () => {
  const { lang, theme, t } = useSite();
  const isDark = theme === 'dark';

  const cardBg = isDark ? '#25282B' : '#FFFFFF';
  const svgBg = isDark ? '#1C1E20' : '#FFFFFF';
  const trenchFill = isDark ? '#222528' : '#F7F7F7';
  const textPrimary = isDark ? '#EDEDED' : '#4F4F4F';
  const textMuted = isDark ? '#9A9DA2' : '#6A6A6A';

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '680px',
        marginInline: 'auto',
        backgroundColor: cardBg,
        border: '1px solid var(--color-border-bright)',
        padding: '1rem',
        boxShadow: isDark
          ? '0 16px 40px rgba(0, 0, 0, 0.45)'
          : '0 16px 40px rgba(79, 79, 79, 0.08)',
        transition: 'background-color 250ms ease, box-shadow 250ms ease',
      }}
      className="crop-box"
    >
      {/* Corner Crop Marks */}
      <span className="crop-corner crop-corner-tl" aria-hidden="true" />
      <span className="crop-corner crop-corner-tr" aria-hidden="true" />
      <span className="crop-corner crop-corner-bl" aria-hidden="true" />
      <span className="crop-corner crop-corner-br" aria-hidden="true" />

      {/* Top Drafting Header Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBlockEnd: '1px solid var(--color-border-subtle)',
          paddingBlockEnd: '0.6rem',
          marginBlockEnd: '0.75rem',
          fontSize: '0.75rem',
          fontFamily: lang === 'ar' ? 'var(--font-brand-arabic)' : 'var(--font-subtitle)',
          color: 'var(--color-copper)',
          letterSpacing: '0.05em',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
          <span
            style={{
              width: '7px',
              height: '7px',
              backgroundColor: '#BA9368',
              borderRadius: '50%',
            }}
          />
          {t.blueprintTopTitle}
        </span>
        <span style={{ color: textMuted }}>
          {t.blueprintDwg}
        </span>
      </div>

      {/* SVG Canvas */}
      <svg
        viewBox="0 0 800 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          backgroundColor: svgBg,
          border: '1px solid rgba(186, 147, 104, 0.25)',
          transition: 'background-color 250ms ease',
        }}
        aria-label="Architectural blueprint of luxury swimming pool and landscape"
      >
        <defs>
          {/* Tile Pattern */}
          <pattern id="poolTile" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(186, 147, 104, 0.25)" strokeWidth="0.7" />
          </pattern>
          {/* Deck Paver Pattern */}
          <pattern id="deckPavers" width="30" height="30" patternUnits="userSpaceOnUse">
            <rect
              width="30"
              height="30"
              fill="none"
              stroke={isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(79, 79, 79, 0.08)'}
              strokeWidth="0.5"
            />
          </pattern>
          {/* Softscape Dots */}
          <pattern id="grassPattern" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="1.2" fill="rgba(186, 147, 104, 0.3)" />
          </pattern>
        </defs>

        {/* Outer Property Boundary & Setback Line */}
        <rect
          x="15"
          y="15"
          width="770"
          height="490"
          stroke="rgba(186, 147, 104, 0.45)"
          strokeWidth="1.2"
          strokeDasharray="8 4"
        />

        {/* Terrace Deck Area */}
        <rect x="70" y="55" width="660" height="370" fill="url(#deckPavers)" />

        {/* Landscaping Perimeter Beds (Softscape) */}
        <path
          d="M 25 25 L 775 25 L 775 75 L 710 75 L 710 415 L 775 415 L 775 495 L 25 495 L 25 415 L 90 415 L 90 75 L 25 75 Z"
          fill="url(#grassPattern)"
          stroke="rgba(186, 147, 104, 0.5)"
          strokeWidth="1.2"
          strokeDasharray="4 2"
        />

        {/* Pool Outer Trench / Overflow Channel */}
        <rect
          x="180"
          y="120"
          width="360"
          height="190"
          stroke="#BA9368"
          strokeWidth="2.5"
          className="blueprint-stroke"
          fill={trenchFill}
        />

        {/* Pool Water Volume */}
        <rect
          x="186"
          y="126"
          width="348"
          height="178"
          fill="rgba(186, 147, 104, 0.16)"
          className="blueprint-water-fill"
        />
        <rect
          x="186"
          y="126"
          width="348"
          height="178"
          fill="url(#poolTile)"
        />

        {/* Integrated Jacuzzi */}
        <circle
          cx="245"
          cy="175"
          r="38"
          stroke="#BA9368"
          strokeWidth="2"
          fill="rgba(186, 147, 104, 0.22)"
          className="blueprint-stroke"
        />
        <circle cx="245" cy="175" r="28" stroke="rgba(186, 147, 104, 0.5)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="245" cy="175" r="4" fill="#BA9368" />

        {/* Shallow Sunken Baja Shelf & Stepping Stones */}
        <g stroke="#BA9368" strokeWidth="1.5" fill="none">
          <rect x="430" y="126" width="104" height="70" fill="rgba(186, 147, 104, 0.12)" strokeDasharray="4 2" />
          <text
            x="445"
            y="165"
            fill={textPrimary}
            fontSize="9"
            fontFamily={lang === 'ar' ? 'Almarai' : 'Montserrat'}
            fontWeight="600"
          >
            {t.blueprintBaja}
          </text>
          <rect x="450" y="215" width="28" height="28" fill="rgba(186, 147, 104, 0.25)" />
          <rect x="490" y="215" width="28" height="28" fill="rgba(186, 147, 104, 0.25)" />
          <rect x="450" y="255" width="28" height="28" fill="rgba(186, 147, 104, 0.25)" />
          <rect x="490" y="255" width="28" height="28" fill="rgba(186, 147, 104, 0.25)" />
        </g>

        {/* Architectural Fountain (Wall Water feature) */}
        <g transform="translate(250, 60)">
          <rect x="0" y="0" width="220" height="20" fill="rgba(186, 147, 104, 0.18)" stroke="#BA9368" strokeWidth="1.5" />
          <line x1="20" y1="20" x2="200" y2="20" stroke="#BA9368" strokeWidth="2.5" />
          <text
            x="50"
            y="14"
            fill={textPrimary}
            fontSize="8.5"
            fontFamily={lang === 'ar' ? 'Almarai' : 'Montserrat'}
            fontWeight="600"
          >
            {t.blueprintWaterfall}
          </text>
        </g>

        {/* Pergola / Seating Zone */}
        <g transform="translate(575, 120)">
          <rect
            x="0"
            y="0"
            width="80"
            height="190"
            stroke="#BA9368"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="rgba(186, 147, 104, 0.1)"
          />
          {[...Array(9)].map((_, i) => (
            <line key={`louv-${i}`} x1="0" y1={i * 22 + 10} x2="80" y2={i * 22 + 10} stroke="#BA9368" strokeWidth="1" />
          ))}
          <text
            x="-140"
            y="45"
            transform="rotate(-90)"
            fill={textPrimary}
            fontSize="9"
            fontFamily={lang === 'ar' ? 'Almarai' : 'Montserrat'}
            fontWeight="bold"
          >
            {t.blueprintPergola}
          </text>
        </g>

        {/* Architectural Trees */}
        <g fill="none">
          <circle cx="95" cy="120" r="22" stroke="#BA9368" strokeWidth="1.5" />
          <circle cx="95" cy="120" r="4" fill="#BA9368" />
          <circle cx="95" cy="300" r="22" stroke="#BA9368" strokeWidth="1.5" />
          <circle cx="95" cy="300" r="4" fill="#BA9368" />
          <circle cx="705" cy="80" r="24" stroke="#BA9368" strokeWidth="1.5" />
          <circle cx="705" cy="80" r="4" fill="#BA9368" />
        </g>

        {/* Technical Dimension Lines */}
        <g stroke="#BA9368" strokeWidth="0.8">
          <line x1="180" y1="330" x2="540" y2="330" />
          <line x1="180" y1="323" x2="180" y2="337" />
          <line x1="540" y1="323" x2="540" y2="337" />
          <text
            x="325"
            y="346"
            fill={textPrimary}
            fontSize="10"
            fontFamily={lang === 'ar' ? 'Almarai' : 'Montserrat'}
            fontWeight="bold"
          >
            12.00 M ({lang === 'ar' ? 'الطول' : 'Length'})
          </text>

          <line x1="145" y1="120" x2="145" y2="310" />
          <line x1="138" y1="120" x2="152" y2="120" />
          <line x1="138" y1="310" x2="152" y2="310" />
          <text
            x="-230"
            y="135"
            transform="rotate(-90)"
            fill={textPrimary}
            fontSize="10"
            fontFamily={lang === 'ar' ? 'Almarai' : 'Montserrat'}
            fontWeight="bold"
          >
            6.00 M ({lang === 'ar' ? 'العرض' : 'Width'})
          </text>
        </g>

        {/* North Arrow Symbol */}
        <g transform="translate(720, 360)">
          <circle cx="0" cy="0" r="18" stroke="#BA9368" strokeWidth="1" fill={isDark ? '#25282B' : '#FFFFFF'} />
          <polygon points="0,-14 6,10 0,5 -6,10" fill="#BA9368" />
          <text x="-4" y="-18" fill={textPrimary} fontSize="10" fontWeight="bold" fontFamily="Roboto Slab">N</text>
          <text x="-11" y="28" fill={textPrimary} fontSize="8" fontFamily={lang === 'ar' ? 'Almarai' : 'Montserrat'}>
            {t.blueprintNorth}
          </text>
        </g>

        {/* Engineering Scale Ruler Bar */}
        <g transform="translate(70, 465)">
          <line x1="0" y1="0" x2="150" y2="0" stroke="#BA9368" strokeWidth="2" />
          <rect x="0" y="-3" width="30" height="6" fill="#BA9368" />
          <rect x="60" y="-3" width="30" height="6" fill="#BA9368" />
          <rect x="120" y="-3" width="30" height="6" fill="#BA9368" />
          <text x="0" y="15" fill={textPrimary} fontSize="8" fontFamily="Almarai">0</text>
          <text x="58" y="15" fill={textPrimary} fontSize="8" fontFamily="Almarai">2M</text>
          <text x="116" y="15" fill={textPrimary} fontSize="8" fontFamily="Almarai">4M</text>
          <text x="145" y="15" fill={textPrimary} fontSize="8" fontFamily="Almarai">5M</text>
        </g>

        {/* Architectural Title Block Stamp with Company Brand */}
        <g transform="translate(450, 435)">
          <rect
            x="0"
            y="0"
            width="290"
            height="55"
            fill={isDark ? '#25282B' : '#FFFFFF'}
            stroke="#BA9368"
            strokeWidth="1.2"
          />
          <line x1="175" y1="0" x2="175" y2="55" stroke="rgba(186, 147, 104, 0.4)" />
          <line x1="0" y1="27" x2="290" y2="27" stroke="rgba(186, 147, 104, 0.4)" />
          
          <text
            x="185"
            y="18"
            fill={textPrimary}
            fontSize="10"
            fontFamily={lang === 'ar' ? 'Almarai' : 'Roboto Slab'}
            fontWeight="700"
          >
            {lang === 'ar' ? 'دار العمــــــــارة' : 'DAR AL AMARAH'}
          </text>
          <text
            x="185"
            y="44"
            fill="#BA9368"
            fontSize="8"
            fontFamily={lang === 'ar' ? 'Almarai' : 'Montserrat'}
          >
            {lang === 'ar' ? 'للحدائق و المسابح' : 'LANDSCAPING & POOL'}
          </text>
          
          <text x="15" y="18" fill={textPrimary} fontSize="8" fontFamily={lang === 'ar' ? 'Almarai' : 'Montserrat'}>
            {t.blueprintProjectName}
          </text>
          <text x="15" y="44" fill={textMuted} fontSize="8" fontFamily={lang === 'ar' ? 'Almarai' : 'Montserrat'}>
            {t.blueprintSpecs}
          </text>
        </g>
      </svg>

      {/* Blueprint Footer Note */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBlockStart: '1px solid var(--color-border-subtle)',
          paddingBlockStart: '0.6rem',
          marginBlockStart: '0.75rem',
          fontSize: '0.75rem',
          color: textMuted,
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span>{lang === 'ar' ? 'اعتماد المهندس المعماري المرخص' : 'Licensed Architect Sign-off'}</span>
        <span style={{ color: 'var(--color-copper)' }}>● APPROVED FOR CONSTRUCTION</span>
      </div>
    </div>
  );
};
