import React from 'react';

interface DarAlAmarahLogoProps {
  /**
   * Layout format:
   * - 'horizontal-brand': Full official brand layout as in the identity guide (English on left, Emblem in center, Arabic on right)
   * - 'navbar': Compact lockup suitable for the sticky navigation bar (Emblem + Arabic Title & Subtitle + English Title)
   * - 'vertical': Circular emblem on top, typography below (as in the top row & bottom-right of identity guide)
   * - 'emblem-only': Just the circular badge
   */
  variant?: 'horizontal-brand' | 'navbar' | 'vertical' | 'emblem-only';
  /**
   * Color theme:
   * - 'camel': The signature camel/ochre gold (#BA9263)
   * - 'white': Pure white (#FFFFFF)
   * - 'charcoal': Deep slate charcoal (#2A2C2D)
   * - 'auto': Uses currentColor
   */
  colorMode?: 'camel' | 'gold' | 'white' | 'charcoal' | 'graphite' | 'auto';
  size?: number;
  className?: string;
  showEnglish?: boolean;
}

/**
 * The official circular emblem of Dar Al Amarah:
 * Top half: Stylized tree with branches, olive/almond leaves, and seeds/berries.
 * Bottom half: 4 undulating pool water waves / ripples.
 * Enclosed in an architectural circular border.
 */
export const EmblemSVG: React.FC<{
  size?: number;
  color?: string;
  className?: string;
}> = ({ size = 64, color = '#BA9368', className }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      {/* Outer circular ring */}
      <circle
        cx="80"
        cy="80"
        r="75"
        stroke={color}
        strokeWidth="3.5"
      />

      {/* ============================================================
          TOP HALF: THE LANDSCAPING TREE (نخيل/شجرة اللاندسكيب المعمارية)
          ============================================================ */}
      <g stroke={color} fill={color}>
        {/* Main Trunk */}
        <path
          d="M80 102 V68"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Lower Left Branch */}
        <path
          d="M80 88 C74 84 62 82 54 75"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Lower Right Branch */}
        <path
          d="M80 88 C86 84 98 82 106 75"
          strokeWidth="3.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Mid Left Branch */}
        <path
          d="M80 77 C73 70 63 67 59 55"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Mid Right Branch */}
        <path
          d="M80 77 C87 70 97 67 101 55"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Upper Left Branch */}
        <path
          d="M80 68 C75 58 71 50 67 38"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Upper Right Branch */}
        <path
          d="M80 68 C85 58 89 50 93 38"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Central Vertical Leader Branch */}
        <path
          d="M80 68 V32"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* ----------------------------------------------------
            LEAVES (Almond/Teardrop architectural foliage)
            ---------------------------------------------------- */}
        {/* Central Top Leaf */}
        <path
          d="M80 20 C76 25 76 32 80 34 C84 32 84 25 80 20 Z"
        />

        {/* Upper Left Pair */}
        <path
          d="M65 34 C61 31 55 35 56 40 C61 42 66 38 65 34 Z"
        />
        <path
          d="M74 38 C70 33 65 36 67 41 C71 43 75 41 74 38 Z"
        />

        {/* Upper Right Pair */}
        <path
          d="M95 34 C99 31 105 35 104 40 C99 42 94 38 95 34 Z"
        />
        <path
          d="M86 38 C90 33 95 36 93 41 C89 43 85 41 86 38 Z"
        />

        {/* Mid Left Leaves */}
        <path
          d="M57 52 C52 48 45 52 47 57 C52 60 58 56 57 52 Z"
        />
        <path
          d="M69 57 C64 53 58 56 60 61 C64 63 70 60 69 57 Z"
        />

        {/* Mid Right Leaves */}
        <path
          d="M103 52 C108 48 115 52 113 57 C108 60 102 56 103 52 Z"
        />
        <path
          d="M91 57 C96 53 102 56 100 61 C96 63 90 60 91 57 Z"
        />

        {/* Lower Left Leaves */}
        <path
          d="M51 72 C46 68 39 71 41 77 C46 80 52 76 51 72 Z"
        />
        <path
          d="M66 75 C60 72 55 76 57 80 C62 82 67 79 66 75 Z"
        />

        {/* Lower Right Leaves */}
        <path
          d="M109 72 C114 68 121 71 119 77 C114 80 108 76 109 72 Z"
        />
        <path
          d="M94 75 C100 72 105 76 103 80 C98 82 93 79 94 75 Z"
        />

        {/* ----------------------------------------------------
            SEEDS / BERRIES (Small geometric circles)
            ---------------------------------------------------- */}
        <circle cx="72" cy="48" r="2.75" />
        <circle cx="88" cy="48" r="2.75" />
        <circle cx="68" cy="67" r="2.75" />
        <circle cx="92" cy="67" r="2.75" />
        <circle cx="80" cy="54" r="3" />
      </g>

      {/* ============================================================
          BOTTOM HALF: THE POOL WATER WAVES (أمواج مسابح دار العمارة)
          5 horizontal undulating water ripple lines
          ============================================================ */}
      <g stroke={color} strokeWidth="3.2" strokeLinecap="round" fill="none">
        {/* Wave 1 (Top Wave / Ground Horizon) */}
        <path
          d="M18 103 C28 98 42 108 56 103 C70 98 90 108 104 103 C118 98 132 108 142 103"
        />

        {/* Wave 2 */}
        <path
          d="M23 114 C33 109 47 119 61 114 C75 109 85 119 99 114 C113 109 127 119 137 114"
        />

        {/* Wave 3 */}
        <path
          d="M30 125 C40 120 54 130 68 125 C82 120 92 130 106 125 C120 120 126 127 130 125"
        />

        {/* Wave 4 */}
        <path
          d="M40 135 C50 131 64 139 78 135 C92 131 100 139 110 135 C116 132 118 135 120 135"
        />

        {/* Wave 5 (Deepest Ripple) */}
        <path
          d="M55 144 C65 141 75 146 85 144 C95 142 100 145 105 144"
        />
      </g>
    </svg>
  );
};

export const DarAlAmarahLogo: React.FC<DarAlAmarahLogoProps> = ({
  variant = 'navbar',
  colorMode = 'camel',
  size = 46,
  className = '',
  showEnglish = true,
}) => {
  const colorMap: Record<string, string> = {
    camel: '#BA9368',
    gold: '#BA9368',
    white: '#FFFFFF',
    charcoal: '#4F4F4F',
    graphite: '#4F4F4F',
    auto: 'currentColor',
  };

  const isWhite = colorMode === 'white';
  const goldColor = '#BA9368';
  const graphiteColor = isWhite ? '#FFFFFF' : 'var(--color-graphite)';
  const primaryColor = isWhite ? '#FFFFFF' : (colorMap[colorMode] || goldColor);

  // 1. EMBLEM ONLY
  if (variant === 'emblem-only') {
    return <EmblemSVG size={size} color={primaryColor} className={className} />;
  }

  // 2. HORIZONTAL BRAND (English on left, Emblem in center, Arabic on right)
  if (variant === 'horizontal-brand') {
    return (
      <div
        className={`dar-al-amarah-logo-brand ${className}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'clamp(0.75rem, 2.5vw, 2rem)',
          color: primaryColor,
          direction: 'ltr',
          maxWidth: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Left: English Typography */}
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: 'var(--font-slab)',
              fontWeight: 700,
              fontSize: `clamp(1rem, ${size * 0.26}px, 1.7rem)`,
              letterSpacing: '0.04em',
              lineHeight: 1.1,
              color: isWhite ? '#FFFFFF' : graphiteColor,
            }}
          >
            DAR AL AMARAH
          </div>
          <div
            style={{
              fontFamily: 'var(--font-subtitle)',
              fontWeight: 400,
              fontSize: `clamp(0.65rem, ${size * 0.15}px, 0.92rem)`,
              letterSpacing: '0.22em',
              marginBlockStart: '0.25rem',
              color: isWhite ? '#FFFFFF' : goldColor,
            }}
          >
            LANDSCAPING & POOL
          </div>
        </div>

        {/* Center: Circular Emblem */}
        <EmblemSVG size={size} color={primaryColor} className="dar-al-amarah-emblem" />

        {/* Right: Arabic Typography */}
        <div style={{ textAlign: 'center', direction: 'rtl' }}>
          <div
            style={{
              fontFamily: 'var(--font-brand-arabic)',
              fontWeight: 700,
              fontSize: `clamp(1.2rem, ${size * 0.3}px, 2rem)`,
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
              color: isWhite ? '#FFFFFF' : graphiteColor,
            }}
          >
            دار العمــــــــارة
          </div>
          <div
            style={{
              fontFamily: 'var(--font-brand-arabic)',
              fontWeight: 500,
              fontSize: `clamp(0.7rem, ${size * 0.15}px, 0.98rem)`,
              marginBlockStart: '0.25rem',
              color: isWhite ? '#FFFFFF' : goldColor,
            }}
          >
            للحدائق و المسابح
          </div>
        </div>
      </div>
    );
  }

  // 3. VERTICAL LOCKUP
  if (variant === 'vertical') {
    return (
      <div
        className={`dar-al-amarah-logo-vertical ${className}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '0.85rem',
          color: primaryColor,
        }}
      >
        <EmblemSVG size={size} color={primaryColor} />

        <div style={{ direction: 'rtl' }}>
          <div
            style={{
              fontFamily: 'var(--font-brand-arabic)',
              fontWeight: 700,
              fontSize: `clamp(1.2rem, ${size * 0.28}px, 1.7rem)`,
              lineHeight: 1.2,
              color: isWhite ? '#FFFFFF' : graphiteColor,
            }}
          >
            دار العمــــــــارة
          </div>
          <div
            style={{
              fontFamily: 'var(--font-brand-arabic)',
              fontWeight: 500,
              fontSize: `clamp(0.72rem, ${size * 0.15}px, 0.95rem)`,
              marginBlockStart: '0.2rem',
              color: isWhite ? '#FFFFFF' : goldColor,
            }}
          >
            للحدائق و المسابح
          </div>
        </div>

        {showEnglish && (
          <div style={{ direction: 'ltr', marginBlockStart: '-0.2rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-slab)',
                fontWeight: 700,
                fontSize: `clamp(0.85rem, ${size * 0.2}px, 1.15rem)`,
                letterSpacing: '0.04em',
                lineHeight: 1.1,
                color: isWhite ? '#FFFFFF' : graphiteColor,
              }}
            >
              DAR AL AMARAH
            </div>
            <div
              style={{
                fontFamily: 'var(--font-subtitle)',
                fontWeight: 400,
                fontSize: `clamp(0.6rem, ${size * 0.13}px, 0.78rem)`,
                letterSpacing: '0.22em',
                marginBlockStart: '0.15rem',
                color: isWhite ? '#FFFFFF' : goldColor,
              }}
            >
              LANDSCAPING & POOL
            </div>
          </div>
        )}
      </div>
    );
  }

  // 4. NAVBAR COMPACT LOCKUP
  return (
    <div
      className={`dar-al-amarah-logo-navbar ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'clamp(0.45rem, 1.8vw, 0.85rem)',
        color: primaryColor,
        textDecoration: 'none',
        maxWidth: '100%',
      }}
    >
      <EmblemSVG size={size} color={goldColor} className="navbar-logo-emblem" />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          direction: showEnglish ? 'ltr' : 'rtl',
          textAlign: showEnglish ? 'left' : 'right',
          minWidth: 0,
        }}
      >
        <div
          className="navbar-logo-title"
          style={{
            fontFamily: showEnglish ? 'var(--font-slab)' : 'var(--font-brand-arabic)',
            fontWeight: 700,
            fontSize: showEnglish ? 'clamp(0.92rem, 3vw, 1.18rem)' : 'clamp(1.02rem, 3.5vw, 1.38rem)',
            lineHeight: 1.15,
            letterSpacing: showEnglish ? '0.03em' : '-0.02em',
            color: isWhite ? '#FFFFFF' : graphiteColor,
            whiteSpace: 'nowrap',
          }}
        >
          {showEnglish ? 'DAR AL AMARAH' : 'دار العمــــــــارة'}
        </div>

        <div
          className="navbar-logo-subtitle"
          style={{
            fontFamily: showEnglish ? 'var(--font-subtitle)' : 'var(--font-brand-arabic)',
            fontWeight: showEnglish ? 400 : 500,
            fontSize: showEnglish ? 'clamp(0.52rem, 1.8vw, 0.62rem)' : 'clamp(0.6rem, 2vw, 0.74rem)',
            letterSpacing: showEnglish ? '0.18em' : '0.02em',
            color: isWhite ? '#FFFFFF' : goldColor,
            marginBlockStart: '2px',
            whiteSpace: 'nowrap',
          }}
        >
          {showEnglish ? 'LANDSCAPING & POOL' : 'للحدائق و المسابح'}
        </div>
      </div>
    </div>
  );
};
