import React from 'react';
import { useSite } from '../context/SiteContext';

interface SheetHeaderProps {
  sheetCode: string; // e.g. 'A—00', 'A—01'
  title: string;
  subtitle?: string;
  isStone?: boolean;
  scale?: string;
}

export const SheetHeader: React.FC<SheetHeaderProps> = ({
  sheetCode,
  title,
  subtitle,
  isStone = false,
  scale,
}) => {
  const { lang } = useSite();
  const defaultScale = lang === 'ar' ? 'مقياس 1:100' : 'Scale 1:100';
  const displayScale = scale || defaultScale;

  return (
    <div
      style={{
        borderBlockEnd: '1px solid var(--color-border-subtle)',
        paddingBlockEnd: '1.25rem',
        marginBlockEnd: '2.5rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBlockEnd: '0.75rem',
        }}
      >
        <div className={`sheet-tag ${isStone ? 'sheet-tag-stone' : ''}`}>
          <span>{lang === 'ar' ? 'مخطط هندسي' : 'ARCHITECTURAL BLUEPRINT'}</span>
          <span style={{ opacity: 0.5 }}>|</span>
          <span style={{ fontWeight: 700 }}>{sheetCode}</span>
        </div>

        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.8rem',
            color: isStone ? 'var(--color-copper-light)' : 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <span>{displayScale}</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>{lang === 'ar' ? 'الإمارات العربية المتحدة' : 'United Arab Emirates'}</span>
          <span style={{ opacity: 0.5 }}>•</span>
          <span>{lang === 'ar' ? 'دار العمارة' : 'Dar Al Amarah'}</span>
        </div>
      </div>

      <h1
        style={{
          color: 'var(--color-text-primary)',
          marginBlockEnd: subtitle ? '0.5rem' : '0',
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--color-text-secondary)',
            maxWidth: '80ch',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
