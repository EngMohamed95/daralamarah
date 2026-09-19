import React from 'react';
import { ProjectItem } from '../types';
import { CropMarks } from './CropMarks';
import { MapPin, Maximize2, Calendar } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { lang, theme } = useSite();
  const title = lang === 'en' && project.titleEn ? project.titleEn : project.title;
  const categoryLabel = lang === 'en' && project.categoryLabelEn ? project.categoryLabelEn : project.categoryLabel;
  const location = lang === 'en' && project.locationEn ? project.locationEn : project.location;
  const description = lang === 'en' && project.descriptionEn ? project.descriptionEn : project.description;
  const features = lang === 'en' && project.featuresEn ? project.featuresEn : project.features;

  // Render specific SVG plan view based on blueprintType
  const renderPlanSVG = () => {
    switch (project.blueprintType) {
      case 'villa_pool':
        return (
          <svg viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', backgroundColor: '#FFFFFF' }}>
            <rect width="500" height="280" fill="#FFFFFF" />
            <path d="M 0 0 L 500 280 M 500 0 L 0 280" stroke="rgba(186, 147, 104, 0.08)" strokeWidth="0.5" />
            {/* Terrace Deck Grid */}
            <g stroke="rgba(79, 79, 79, 0.08)" strokeWidth="0.6">
              {[50, 90, 130, 170, 210, 250, 290, 330, 370, 410, 450].map((x) => (
                <line key={`gx-${x}`} x1={x} y1="30" x2={x} y2="250" />
              ))}
              {[50, 90, 130, 170, 210, 250].map((y) => (
                <line key={`gy-${y}`} x1="30" y1={y} x2="470" y2={y} />
              ))}
            </g>
            {/* Pool Basin */}
            <rect x="90" y="60" width="320" height="150" fill="#F7F7F7" stroke="#BA9368" strokeWidth="1.5" />
            <rect x="105" y="75" width="290" height="120" fill="rgba(186, 147, 104, 0.12)" stroke="#BA9368" strokeWidth="1.5" />
            {/* Submerged stairs */}
            <line x1="105" y1="105" x2="160" y2="105" stroke="#BA9368" strokeWidth="1" />
            <line x1="105" y1="135" x2="160" y2="135" stroke="#BA9368" strokeWidth="1" />
            <line x1="105" y1="165" x2="160" y2="165" stroke="#BA9368" strokeWidth="1" />
            {/* Sunken Lounge */}
            <circle cx="330" cy="135" r="30" stroke="#BA9368" strokeWidth="1.2" strokeDasharray="3 2" fill="#FFFFFF" />
            <circle cx="330" cy="135" r="10" fill="#BA9368" />
            {/* Overflow edge */}
            <line x1="105" y1="195" x2="395" y2="195" stroke="#BA9368" strokeWidth="2" strokeDasharray="5 3" />
            {/* Dimension Lines */}
            <g stroke="#BA9368" strokeWidth="0.8">
              <line x1="90" y1="45" x2="410" y2="45" />
              <line x1="90" y1="40" x2="90" y2="50" />
              <line x1="410" y1="40" x2="410" y2="50" />
              <text x="210" y="42" fill="#4F4F4F" fontSize="9" fontFamily="Almarai" fontWeight="600">14.50 M (طول المسبح)</text>
            </g>
            <text x="120" y="240" fill="#4F4F4F" fontSize="8.5" fontFamily="Almarai">مسقط أفقي: مسبح إنفينيتي مع جلسة مائية</text>
          </svg>
        );

      case 'landscape_plan':
        return (
          <svg viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', backgroundColor: '#FFFFFF' }}>
            <rect width="500" height="280" fill="#FFFFFF" />
            {/* Grass and Softscape Zones */}
            <path d="M 40 40 L 460 40 L 460 240 L 40 240 Z" fill="rgba(186, 147, 104, 0.08)" stroke="rgba(186, 147, 104, 0.4)" strokeWidth="1" strokeDasharray="4 2" />
            {/* Organic Walkway */}
            <path d="M 60 140 Q 180 70 260 140 T 440 140" fill="none" stroke="#BA9368" strokeWidth="18" strokeLinecap="round" strokeDasharray="2 1" />
            {/* Stepping stones */}
            <path d="M 60 140 Q 180 70 260 140 T 440 140" fill="none" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 8" />
            {/* Pergola Sitting Zone */}
            <rect x="300" y="55" width="130" height="85" fill="#FFFFFF" stroke="#BA9368" strokeWidth="1.2" strokeDasharray="4 2" />
            <circle cx="365" cy="97" r="22" stroke="#BA9368" strokeWidth="0.8" fill="none" />
            <text x="320" y="100" fill="#4F4F4F" fontSize="8" fontFamily="Almarai">منطقة جلسة وبرجولة</text>
            {/* Tree Symbols */}
            <g transform="translate(110, 80)">
              <circle cx="0" cy="0" r="26" stroke="#BA9368" strokeWidth="1.2" fill="none" strokeDasharray="4 2" />
              <line x1="-24" y1="0" x2="24" y2="0" stroke="#BA9368" strokeWidth="0.8" />
              <line x1="0" y1="-24" x2="0" y2="24" stroke="#BA9368" strokeWidth="0.8" />
              <circle cx="0" cy="0" r="3" fill="#BA9368" />
            </g>
            <g transform="translate(190, 190)">
              <circle cx="0" cy="0" r="22" stroke="#BA9368" strokeWidth="1.2" fill="none" />
              <circle cx="0" cy="0" r="3" fill="#BA9368" />
            </g>
            <g transform="translate(420, 200)">
              <circle cx="0" cy="0" r="20" stroke="#BA9368" strokeWidth="1.2" fill="none" strokeDasharray="3 2" />
              <circle cx="0" cy="0" r="3" fill="#BA9368" />
            </g>
            <text x="140" y="260" fill="#4F4F4F" fontSize="8.5" fontFamily="Almarai">مخطط لاندسكيب زراعي وصلب + شبكة ري ذكية</text>
          </svg>
        );

      case 'fountain_plan':
        return (
          <svg viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', backgroundColor: '#FFFFFF' }}>
            <rect width="500" height="280" fill="#FFFFFF" />
            {/* Reflecting Pool Boundary */}
            <rect x="50" y="60" width="400" height="150" fill="#F7F7F7" stroke="#BA9368" strokeWidth="1.5" />
            <rect x="65" y="75" width="370" height="120" fill="rgba(186, 147, 104, 0.12)" stroke="#BA9368" strokeWidth="1.2" />
            {/* Water jets array */}
            <g>
              {[100, 150, 200, 250, 300, 350, 400].map((x) => (
                <g key={`jet-${x}`} transform={`translate(${x}, 135)`}>
                  <circle cx="0" cy="0" r="14" stroke="#BA9368" strokeWidth="0.8" fill="none" strokeDasharray="2 2" />
                  <circle cx="0" cy="0" r="7" stroke="#BA9368" strokeWidth="0.8" fill="none" />
                  <circle cx="0" cy="0" r="2.5" fill="#4F4F4F" />
                </g>
              ))}
            </g>
            {/* Water Cascade Wall */}
            <line x1="65" y1="75" x2="435" y2="75" stroke="#BA9368" strokeWidth="3" />
            <line x1="65" y1="80" x2="435" y2="80" stroke="#BA9368" strokeWidth="1" strokeDasharray="3 3" />
            <text x="180" y="96" fill="#4F4F4F" fontSize="8.5" fontFamily="Almarai" fontWeight="600">شلال مائي جداري متدفق (Water Cascade)</text>
            <text x="150" y="245" fill="#4F4F4F" fontSize="8.5" fontFamily="Almarai">مسقط أفقي: نافورة معمارية تفاعلية وأنظمة DMX</text>
          </svg>
        );

      case 'resort_outdoor':
        return (
          <svg viewBox="0 0 500 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', backgroundColor: '#FFFFFF' }}>
            <rect width="500" height="280" fill="#FFFFFF" />
            {/* Freeform/Resort Lagoon Pool */}
            <path
              d="M 60 70 C 120 40, 220 50, 300 70 C 390 90, 440 140, 410 200 C 370 240, 270 230, 190 220 C 110 210, 50 170, 60 70 Z"
              fill="rgba(186, 147, 104, 0.12)"
              stroke="#BA9368"
              strokeWidth="2"
            />
            {/* Kids Splash Zone */}
            <circle cx="360" cy="180" r="32" stroke="#BA9368" strokeWidth="1.2" strokeDasharray="3 2" fill="#F7F7F7" />
            <circle cx="360" cy="180" r="8" fill="#BA9368" />
            <text x="330" y="184" fill="#4F4F4F" fontSize="7" fontFamily="Almarai">مسبح أطفال</text>
            {/* Cabanas / Daybeds along edge */}
            {[
              { x: 90, y: 35, angle: 15 },
              { x: 150, y: 25, angle: 5 },
              { x: 210, y: 28, angle: -10 },
              { x: 270, y: 38, angle: -20 },
            ].map((cabana, idx) => (
              <g key={`cabana-${idx}`} transform={`translate(${cabana.x}, ${cabana.y}) rotate(${cabana.angle})`}>
                <rect x="0" y="0" width="22" height="18" fill="#F7F7F7" stroke="#BA9368" strokeWidth="0.8" />
                <line x1="3" y1="0" x2="3" y2="18" stroke="rgba(186, 147, 104, 0.4)" strokeWidth="0.6" />
              </g>
            ))}
            {/* Resort Island Lounge in center */}
            <ellipse cx="220" cy="140" rx="26" ry="18" fill="#FFFFFF" stroke="#BA9368" strokeWidth="1.2" />
            <circle cx="220" cy="140" r="3" fill="#BA9368" />
            <text x="200" y="143" fill="#4F4F4F" fontSize="7" fontFamily="Almarai">جزيرة وسطية</text>
            <text x="130" y="260" fill="#4F4F4F" fontSize="8.5" fontFamily="Almarai">مخطط منتجع ساحلي متكامل ومسابح لاغون</text>
          </svg>
        );
    }
  };

  return (
    <div className="card-technical crop-box" id={project.id} style={{ padding: '1.25rem', backgroundColor: 'var(--color-bg-surface)' }}>
      <CropMarks size={10} />

      {/* Blueprint Visual Box */}
      <div
        style={{
          border: '1px solid var(--color-border-subtle)',
          backgroundColor: theme === 'dark' ? '#141517' : '#FFFFFF',
          overflow: 'hidden',
          marginBlockEnd: '1.25rem',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            insetBlockStart: '0.5rem',
            insetInlineStart: '0.5rem',
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border-subtle)',
            paddingBlock: '0.2rem',
            paddingInline: '0.6rem',
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem',
            color: 'var(--color-copper)',
            fontWeight: 700,
            zIndex: 2,
          }}
        >
          {project.code}
        </div>

        <div
          style={{
            position: 'absolute',
            insetBlockStart: '0.5rem',
            insetInlineEnd: '0.5rem',
            backgroundColor: '#BA9368',
            border: '1px solid #BA9368',
            paddingBlock: '0.2rem',
            paddingInline: '0.6rem',
            fontSize: '0.75rem',
            color: '#FFFFFF',
            fontWeight: 600,
            zIndex: 2,
          }}
        >
          {categoryLabel}
        </div>

        {renderPlanSVG()}
      </div>

      {/* Title & Location */}
      <h3
        style={{
          color: 'var(--color-text-primary)',
          fontSize: '1.3rem',
          marginBlockEnd: '0.5rem',
        }}
      >
        {title}
      </h3>

      {/* Metadata Badges */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBlockEnd: '1rem',
          fontSize: '0.82rem',
          color: 'var(--color-text-secondary)',
          borderBlockEnd: '1px dashed var(--color-border-subtle)',
          paddingBlockEnd: '0.75rem',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          <MapPin size={14} style={{ color: 'var(--color-copper)' }} />
          <span>{location}</span>
        </span>

        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          <Maximize2 size={14} style={{ color: 'var(--color-copper)' }} />
          <span>{project.area}</span>
        </span>

        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          <Calendar size={14} style={{ color: 'var(--color-copper)' }} />
          <span>{project.year}</span>
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: '0.92rem',
          lineHeight: '1.6',
          color: 'var(--color-text-secondary)',
          marginBlockEnd: '1.25rem',
        }}
      >
        {description}
      </p>

      {/* Features List */}
      <div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.82rem',
            color: 'var(--color-copper)',
            fontWeight: 600,
            marginBlockEnd: '0.5rem',
          }}
        >
          {lang === 'ar' ? 'أبرز العناصر الهندسية المنفذة:' : 'Key Executed Engineering Features:'}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {features.map((feat, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.78rem',
                paddingBlock: '0.2rem',
                paddingInline: '0.55rem',
                backgroundColor: 'var(--color-bg-primary)',
                border: '1px solid rgba(186, 147, 104, 0.25)',
                color: 'var(--color-text-primary)',
              }}
            >
              • {feat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
