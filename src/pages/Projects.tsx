import React, { useState } from 'react';
import { SheetHeader } from '../components/SheetHeader';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { CropMarks } from '../components/CropMarks';
import { Button } from '../components/Button';
import {
  BEFORE_AFTER_PROJECTS,
  BeforeAfterProject,
  ComparisonPair,
} from '../data/beforeAfterData';
import { COMPANY_CONFIG, PROJECTS_DATA } from '../data/companyData';
import {
  Layers,
  MapPin,
  Clock,
  Maximize2,
  Calendar,
  CheckCircle2,
  Sliders,
  Camera,
  Film,
  X,
  Eye,
  MessageSquare,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Compass,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const Projects: React.FC = () => {
  const { lang, theme, t } = useSite();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  // Active selected project in detailed view
  const [selectedProjectId, setSelectedProjectId] = useState<string>('project-1');
  // Selected angle for Project 1
  const [p1AngleId, setP1AngleId] = useState<string>('p1-angle-1');
  // Selected angle for Project 2
  const [p2AngleId, setP2AngleId] = useState<string>('p2-angle-1');
  // Active gallery tabs for each project
  const [p1GalleryTab, setP1GalleryTab] = useState<'after' | 'before' | 'videos'>('after');
  const [p2GalleryTab, setP2GalleryTab] = useState<'after' | 'before'>('after');
  // Lightbox modal state
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  const project1 = BEFORE_AFTER_PROJECTS.find((p) => p.id === 'project-1')!;
  const project2 = BEFORE_AFTER_PROJECTS.find((p) => p.id === 'project-2')!;

  // Current active pairs
  const p1ActivePair =
    project1.comparisonPairs.find((pair) => pair.id === p1AngleId) || project1.comparisonPairs[0];
  const p2ActivePair =
    project2.comparisonPairs.find((pair) => pair.id === p2AngleId) || project2.comparisonPairs[0];

  const openLightbox = (src: string, caption: string) => {
    setLightboxImage({ src, caption });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const whatsappInquiryUrl = `https://wa.me/971568116203?text=${encodeURIComponent(
    lang === 'ar'
      ? `مرحباً دار العمارة، اطلعت على مشاريعكم المنفذة (قبل وبعد) في الموقع وأرغب في استشارة هندسية وعرض سعر لمشروعي الخاص.`
      : `Hello Dar Al Amarah, I saw your turnkey projects on the website and would like to request an engineering consultation and quote.`
  )}`;

  return (
    <div className="projects-page" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
      <div className="app-container">
        {/* Architectural Sheet Header */}
        <SheetHeader
          sheetCode="A—04"
          title={t.projectsPageTitle}
          subtitle={t.projectsPageDesc}
        />

        {/* Quick Project Navigation Bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBlockEnd: '2.5rem',
            paddingBlockEnd: '1.25rem',
            borderBlockEnd: '1px solid var(--color-border-subtle)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '0.85rem',
                color: 'var(--color-copper-light)',
                fontFamily: 'var(--font-display)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginInlineEnd: '0.4rem',
              }}
            >
              <Layers size={15} />
              <span>{lang === 'ar' ? 'المشاريع المنجزة:' : 'Featured Projects:'}</span>
            </span>

            <a
              href="#project-1"
              onClick={() => setSelectedProjectId('project-1')}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.88rem',
                paddingBlock: '0.45rem',
                paddingInline: '1rem',
                backgroundColor:
                  selectedProjectId === 'project-1' ? 'var(--color-copper)' : 'var(--color-bg-surface)',
                color: selectedProjectId === 'project-1' ? '#FFFFFF' : 'var(--color-text-primary)',
                border: `1px solid ${selectedProjectId === 'project-1' ? 'var(--color-copper)' : 'var(--color-border-subtle)'}`,
                textDecoration: 'none',
                fontWeight: selectedProjectId === 'project-1' ? 700 : 400,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all var(--transition-standard)',
              }}
            >
              <span
                style={{
                  fontSize: '0.72rem',
                  paddingBlock: '0.1rem',
                  paddingInline: '0.4rem',
                  backgroundColor: selectedProjectId === 'project-1' ? '#FFFFFF' : 'rgba(186, 147, 104, 0.15)',
                  color: selectedProjectId === 'project-1' ? '#BA9368' : 'var(--color-text-primary)',
                  fontWeight: 700,
                }}
              >
                01
              </span>
              <span>{lang === 'ar' ? 'مسبح إنفينيتي ند الشبا' : 'Nad Al Sheba Infinity Pool'}</span>
            </a>

            <a
              href="#project-2"
              onClick={() => setSelectedProjectId('project-2')}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.88rem',
                paddingBlock: '0.45rem',
                paddingInline: '1rem',
                backgroundColor:
                  selectedProjectId === 'project-2' ? 'var(--color-copper)' : 'var(--color-bg-surface)',
                color: selectedProjectId === 'project-2' ? '#FFFFFF' : 'var(--color-text-primary)',
                border: `1px solid ${selectedProjectId === 'project-2' ? 'var(--color-copper)' : 'var(--color-border-subtle)'}`,
                textDecoration: 'none',
                fontWeight: selectedProjectId === 'project-2' ? 700 : 400,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all var(--transition-standard)',
              }}
            >
              <span
                style={{
                  fontSize: '0.72rem',
                  paddingBlock: '0.1rem',
                  paddingInline: '0.4rem',
                  backgroundColor: selectedProjectId === 'project-2' ? '#FFFFFF' : 'rgba(186, 147, 104, 0.15)',
                  color: selectedProjectId === 'project-2' ? '#BA9368' : 'var(--color-text-primary)',
                  fontWeight: 700,
                }}
              >
                02
              </span>
              <span>{lang === 'ar' ? 'فناء وحديقة المرابع العربية' : 'Arabian Ranches Backyard'}</span>
            </a>

            <a
              href="#other-blueprints"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                paddingBlock: '0.45rem',
                paddingInline: '0.9rem',
                backgroundColor: 'transparent',
                color: 'var(--color-text-muted)',
                border: '1px dashed var(--color-border-subtle)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Compass size={14} />
              <span>{lang === 'ar' ? 'مخططات ومشاريع إضافية' : 'More Blueprints & Works'}</span>
            </a>
          </div>

          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--color-copper-light)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.45rem',
            }}
          >
            <Sparkles size={14} />
            <span>{lang === 'ar' ? 'اسحب السلايدر التفاعلي على أي مشروع لمشاهدة قبل وبعد' : 'Drag the interactive slider on any project to view before & after'}</span>
          </div>
        </div>

        {/* ====================================================================
            PROJECT 01: PALM JUMEIRAH INFINITY POOL
            ==================================================================== */}
        <section id="project-1" style={{ marginBlockEnd: '5.5rem' }}>
          {/* Project Title & Specs Header Card */}
          <div
            className="crop-box"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-bright)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              marginBlockEnd: '2rem',
              position: 'relative',
            }}
          >
            <CropMarks size={12} />

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                borderBlockEnd: '1px dashed var(--color-border-subtle)',
                paddingBlockEnd: '1.25rem',
                marginBlockEnd: '1.25rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--color-copper)',
                    fontFamily: 'var(--font-display)',
                    marginBlockEnd: '0.25rem',
                  }}
                >
                  {lang === 'ar' ? `المشروع الأول • كود ${project1.code}` : `Project 01 • Code ${project1.code}`}
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(1.35rem, 2.8vw, 2rem)',
                    color: 'var(--color-text-primary)',
                    margin: 0,
                  }}
                >
                  {lang === 'ar' ? project1.title : t.p1Title}
                </h2>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={15} style={{ color: 'var(--color-copper)' }} />
                  <span>{lang === 'ar' ? project1.location : 'Nad Al Sheba, Dubai'}</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Maximize2 size={15} style={{ color: 'var(--color-copper)' }} />
                  <span>{project1.area}</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={15} style={{ color: 'var(--color-copper)' }} />
                  <span>{lang === 'ar' ? `مدة التنفيذ: ${project1.duration}` : `Timeline: ${project1.duration}`}</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={15} style={{ color: 'var(--color-copper)' }} />
                  <span>{lang === 'ar' ? `سنة الإنجاز: ${project1.year}` : `Year: ${project1.year}`}</span>
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: '1.8',
                color: 'var(--color-text-secondary)',
                marginBlockEnd: '1.5rem',
                maxWidth: '85ch',
              }}
            >
              {lang === 'ar' ? project1.summary : t.p1Desc}
            </p>

            {/* Features Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {project1.features.map((feat, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.8rem',
                    paddingBlock: '0.2rem',
                    paddingInline: '0.6rem',
                    backgroundColor: 'rgba(186, 147, 104, 0.12)',
                    border: '1px solid rgba(186, 147, 104, 0.3)',
                    color: 'var(--color-copper-light)',
                  }}
                >
                  ✓ {feat}
                </span>
              ))}
            </div>

            {/* Direct WhatsApp Project 1 Inquiry */}
            <div style={{ marginBlockStart: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  lang === 'ar'
                    ? `مرحباً دار العمارة، أود الاستفسار عن تنفيذ مشروع مسبح مشابه لـ: (${project1.title} - كود ${project1.code}).`
                    : `Hello Dar Al Amarah, I would like to inquire about executing a pool project similar to: (${project1.title} - Code ${project1.code}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-whatsapp"
                style={{ paddingBlock: '0.55rem', paddingInline: '1.15rem', fontSize: '0.86rem' }}
              >
                <MessageCircle size={16} />
                <span>{lang === 'ar' ? 'طلب معاينة واستشارة لمسبح مماثل عبر واتساب' : 'Inquire About Similar Pool on WhatsApp'}</span>
              </a>
            </div>
          </div>

          {/* Project 1: Interactive Comparison Section */}
          <div style={{ marginBlockEnd: '3rem' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                marginBlockEnd: '1.25rem',
              }}
            >
              <div className="sheet-tag">
                <Sparkles size={14} />
                <span>{lang === 'ar' ? 'المقارنة التفاعلية قبل وبعد' : 'Interactive Before & After Comparison'}</span>
                <span style={{ opacity: 0.5 }}>|</span>
                <span>{project1.code}</span>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                {t.sliderInstruction}
              </div>
            </div>

            {/* Angle Selection Tabs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.5rem',
                marginBlockEnd: '1rem',
              }}
            >
              <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                {lang === 'ar' ? 'زوايا المقارنة التفاعلية:' : 'Camera Angles:'}
              </span>
              {project1.comparisonPairs.map((pair, idx) => {
                const isActive = pair.id === p1ActivePair.id;
                return (
                  <button
                    key={pair.id}
                    type="button"
                    onClick={() => setP1AngleId(pair.id)}
                    style={{
                      paddingBlock: '0.35rem',
                      paddingInline: '0.85rem',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-display)',
                      backgroundColor: isActive ? 'var(--color-copper)' : 'var(--color-bg-surface)',
                      color: isActive ? '#FFFFFF' : 'var(--color-text-primary)',
                      border: `1px solid ${isActive ? 'var(--color-copper)' : 'var(--color-border-subtle)'}`,
                      cursor: 'pointer',
                      fontWeight: isActive ? 600 : 400,
                      transition: 'all var(--transition-standard)',
                    }}
                  >
                    {idx + 1}. {pair.title.split(':')[1] || pair.title}
                  </button>
                );
              })}
            </div>

            <BeforeAfterSlider pair={p1ActivePair} onOpenLightbox={openLightbox} />
          </div>

          {/* Project 1: Transformation Breakdown (Before vs After) */}
          <div
            className="crop-box"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-subtle)',
              padding: '1.5rem',
              marginBlockEnd: '2.5rem',
            }}
          >
            <CropMarks size={10} />
            <h3
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-copper-light)',
                marginBlockEnd: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <ShieldCheck size={18} />
              <span>
                {lang === 'ar'
                  ? 'نطاق التحول الهندسي لمسبح نخلة جميرا: قبل البدء مقابل الإنجاز النهائي'
                  : 'Engineering Transformation Scope: Palm Jumeirah Pool (Before vs After)'}
              </span>
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '1rem',
              }}
            >
              {project1.transformationScope.map((scope, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border-subtle)',
                    padding: '1rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-primary)',
                      fontWeight: 700,
                      marginBlockEnd: '0.65rem',
                      borderBlockEnd: '1px solid rgba(186, 147, 104, 0.2)',
                      paddingBlockEnd: '0.4rem',
                    }}
                  >
                    {scope.title}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem' }}>
                    <div style={{ borderInlineStart: '3px solid #BA9368', padding: '0.35rem 0.6rem', color: 'var(--color-text-secondary)', backgroundColor: 'var(--color-bg-surface)' }}>
                      <span style={{ color: '#BA9368', fontWeight: 600 }}>{lang === 'ar' ? 'قبل: ' : 'Before: '}</span>
                      {scope.before}
                    </div>
                    <div style={{ borderInlineStart: '3px solid var(--color-copper)', padding: '0.35rem 0.6rem', color: 'var(--color-text-primary)', backgroundColor: 'var(--color-bg-surface)' }}>
                      <span style={{ color: 'var(--color-copper)', fontWeight: 600 }}>{lang === 'ar' ? 'بعد: ' : 'After: '}</span>
                      {scope.after}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project 1: Media Gallery & Video Clips */}
          <div
            className="crop-box"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-subtle)',
              padding: '1.5rem',
            }}
          >
            <CropMarks size={10} />
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBlockEnd: '1.5rem',
                borderBlockEnd: '1px solid var(--color-border-subtle)',
                paddingBlockEnd: '1rem',
              }}
            >
              <div>
                <h3 style={{ color: 'var(--color-text-primary)', margin: 0, fontSize: '1.2rem' }}>
                  {lang === 'ar' ? 'معرض صور وفيديوهات مسبح نخلة جميرا' : 'Palm Jumeirah Pool Media Gallery'}
                </h3>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                  {lang === 'ar'
                    ? 'تصفح صور مراحل التنفيذ، الصور النهائية، ومقاطع الفيديو المسجلة في الموقع'
                    : 'Browse construction phases, completed architectural photos, and live site videos'}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setP1GalleryTab('after')}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    paddingBlock: '0.4rem',
                    paddingInline: '0.85rem',
                    backgroundColor: p1GalleryTab === 'after' ? 'var(--color-copper)' : 'var(--color-bg-surface)',
                    color: p1GalleryTab === 'after' ? '#FFFFFF' : 'var(--color-text-primary)',
                    border: `1px solid ${p1GalleryTab === 'after' ? 'var(--color-copper)' : 'var(--color-border-subtle)'}`,
                    cursor: 'pointer',
                    fontWeight: p1GalleryTab === 'after' ? 600 : 400,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'all var(--transition-standard)',
                  }}
                >
                  <Camera size={13} />
                  <span>{lang === 'ar' ? `صور بعد التسليم (${project1.afterGallery.length})` : `After Photos (${project1.afterGallery.length})`}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setP1GalleryTab('before')}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    paddingBlock: '0.4rem',
                    paddingInline: '0.85rem',
                    backgroundColor: p1GalleryTab === 'before' ? 'var(--color-copper)' : 'var(--color-bg-surface)',
                    color: p1GalleryTab === 'before' ? '#FFFFFF' : 'var(--color-text-primary)',
                    border: `1px solid ${p1GalleryTab === 'before' ? 'var(--color-copper)' : 'var(--color-border-subtle)'}`,
                    cursor: 'pointer',
                    fontWeight: p1GalleryTab === 'before' ? 600 : 400,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'all var(--transition-standard)',
                  }}
                >
                  <Layers size={13} />
                  <span>{lang === 'ar' ? `صور قبل وأثناء الصب (${project1.beforeGallery.length})` : `Before & Casting (${project1.beforeGallery.length})`}</span>
                </button>

                {project1.videos && (
                  <button
                    type="button"
                    onClick={() => setP1GalleryTab('videos')}
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.82rem',
                      paddingBlock: '0.4rem',
                      paddingInline: '0.85rem',
                      backgroundColor: p1GalleryTab === 'videos' ? 'var(--color-copper)' : 'var(--color-bg-surface)',
                      color: p1GalleryTab === 'videos' ? '#FFFFFF' : 'var(--color-text-primary)',
                      border: `1px solid ${p1GalleryTab === 'videos' ? 'var(--color-copper)' : 'var(--color-border-subtle)'}`,
                      cursor: 'pointer',
                      fontWeight: p1GalleryTab === 'videos' ? 600 : 400,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'all var(--transition-standard)',
                    }}
                  >
                    <Film size={13} />
                    <span>{lang === 'ar' ? `فيديوهات حية (${project1.videos.length})` : `Site Videos (${project1.videos.length})`}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Photos */}
            {p1GalleryTab !== 'videos' && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))',
                  gap: '1rem',
                }}
              >
                {(p1GalleryTab === 'after' ? project1.afterGallery : project1.beforeGallery).map((src, i) => (
                  <div
                    key={i}
                    onClick={() =>
                      openLightbox(src, `${project1.title} — ${p1GalleryTab === 'after' ? (lang === 'ar' ? 'بعد' : 'After') : (lang === 'ar' ? 'قبل' : 'Before')} (${i + 1})`)
                    }
                    style={{
                      position: 'relative',
                      height: '180px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <img
                      src={src}
                      alt={`صورة ${i + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                      loading="lazy"
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '0.4rem',
                        left: '0.4rem',
                        backgroundColor: 'rgba(0,0,0,0.65)',
                        color: '#fff',
                        padding: '0.2rem 0.5rem',
                        fontSize: '0.7rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                      }}
                    >
                      <Eye size={11} />
                      <span>{lang === 'ar' ? 'تكبير' : 'Zoom'}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Videos */}
            {p1GalleryTab === 'videos' && project1.videos && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                  gap: '1.5rem',
                }}
              >
                {project1.videos.map((vid, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(20, 22, 23, 0.9)',
                      border: '1px solid var(--color-border-bright)',
                      padding: '0.85rem',
                    }}
                  >
                    <div style={{ aspectRatio: '16/9', backgroundColor: '#000', marginBlockEnd: '0.65rem' }}>
                      <video controls preload="metadata" style={{ width: '100%', height: '100%' }}>
                        <source src={vid.src} type="video/mp4" />
                        متصفحك لا يدعم تشغيل هذا الفيديو.
                      </video>
                    </div>
                    <div style={{ color: 'var(--color-text-primary)', fontSize: '0.9rem', fontWeight: 600 }}>
                      {vid.title}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-copper-light)', marginBlockStart: '0.2rem' }}>
                      {vid.duration}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ====================================================================
            PROJECT 02: ARABIAN RANCHES INTEGRATED BACKYARD & POOL
            ==================================================================== */}
        <section id="project-2" style={{ marginBlockEnd: '5.5rem' }}>
          {/* Project Title & Specs Header Card */}
          <div
            className="crop-box"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-bright)',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              marginBlockEnd: '2rem',
              position: 'relative',
            }}
          >
            <CropMarks size={12} />

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                borderBlockEnd: '1px dashed var(--color-border-subtle)',
                paddingBlockEnd: '1.25rem',
                marginBlockEnd: '1.25rem',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--color-copper)',
                    fontFamily: 'var(--font-display)',
                    marginBlockEnd: '0.25rem',
                  }}
                >
                  {lang === 'ar' ? `المشروع الثاني • كود ${project2.code}` : `Project 02 • Code ${project2.code}`}
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(1.35rem, 2.8vw, 2rem)',
                    color: 'var(--color-text-primary)',
                    margin: 0,
                  }}
                >
                  {lang === 'ar' ? project2.title : t.p2Title}
                </h2>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={15} style={{ color: 'var(--color-copper)' }} />
                  <span>{lang === 'ar' ? project2.location : 'Arabian Ranches, Dubai'}</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Maximize2 size={15} style={{ color: 'var(--color-copper)' }} />
                  <span>{project2.area}</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Clock size={15} style={{ color: 'var(--color-copper)' }} />
                  <span>{lang === 'ar' ? `مدة التنفيذ: ${project2.duration}` : `Timeline: ${project2.duration}`}</span>
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={15} style={{ color: 'var(--color-copper)' }} />
                  <span>{lang === 'ar' ? `سنة الإنجاز: ${project2.year}` : `Year: ${project2.year}`}</span>
                </span>
              </div>
            </div>

            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: '1.8',
                color: 'var(--color-text-secondary)',
                marginBlockEnd: '1.5rem',
                maxWidth: '85ch',
              }}
            >
              {lang === 'ar' ? project2.summary : t.p2Desc}
            </p>

            {/* Features Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {project2.features.map((feat, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '0.8rem',
                    paddingBlock: '0.25rem',
                    paddingInline: '0.65rem',
                    backgroundColor: 'rgba(186, 146, 99, 0.1)',
                    border: '1px solid rgba(186, 146, 99, 0.25)',
                    color: 'var(--color-text-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <CheckCircle2 size={13} style={{ color: 'var(--color-copper)' }} />
                  <span>{feat}</span>
                </span>
              ))}
            </div>

            {/* Direct WhatsApp Project 2 Inquiry */}
            <div style={{ marginBlockStart: '1.25rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <a
                href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  lang === 'ar'
                    ? `مرحباً دار العمارة، أود الاستفسار عن تصميم وتنفيذ حديقة ولاندسكيب مشابه لـ: (${project2.title} - كود ${project2.code}).`
                    : `Hello Dar Al Amarah, I would like to inquire about landscape design similar to: (${project2.title} - Code ${project2.code}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-whatsapp"
                style={{ paddingBlock: '0.55rem', paddingInline: '1.15rem', fontSize: '0.86rem' }}
              >
                <MessageCircle size={16} />
                <span>{lang === 'ar' ? 'طلب دراسة وتصميم حديقة مماثلة عبر واتساب' : 'Inquire About Similar Landscape on WhatsApp'}</span>
              </a>
            </div>
          </div>

          {/* Project 2: Interactive Before & After Comparison Station */}
          <div style={{ marginBlockEnd: '2.5rem' }}>
            {/* Angle Selection Tabs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.5rem',
                marginBlockEnd: '1rem',
              }}
            >
              <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                {lang === 'ar' ? 'زوايا المقارنة التفاعلية:' : 'Camera Angles:'}
              </span>
              {project2.comparisonPairs.map((pair, idx) => {
                const isActive = pair.id === p2ActivePair.id;
                return (
                  <button
                    key={pair.id}
                    type="button"
                    onClick={() => setP2AngleId(pair.id)}
                    style={{
                      paddingBlock: '0.35rem',
                      paddingInline: '0.85rem',
                      fontSize: '0.82rem',
                      fontFamily: 'var(--font-display)',
                      backgroundColor: isActive ? 'var(--color-copper)' : 'var(--color-bg-surface)',
                      color: isActive ? '#FFFFFF' : 'var(--color-text-primary)',
                      border: `1px solid ${isActive ? 'var(--color-copper)' : 'var(--color-border-subtle)'}`,
                      cursor: 'pointer',
                      fontWeight: isActive ? 600 : 400,
                      transition: 'all var(--transition-standard)',
                    }}
                  >
                    {idx + 1}. {pair.title.split(':')[1] || pair.title}
                  </button>
                );
              })}
            </div>

            <BeforeAfterSlider pair={p2ActivePair} onOpenLightbox={openLightbox} />
          </div>

          {/* Project 2: Transformation Breakdown (Before vs After) */}
          <div
            className="crop-box"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-subtle)',
              padding: '1.5rem',
              marginBlockEnd: '2.5rem',
            }}
          >
            <CropMarks size={10} />
            <h3
              style={{
                fontSize: '1.1rem',
                color: 'var(--color-copper-light)',
                marginBlockEnd: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <ShieldCheck size={18} />
              <span>
                {lang === 'ar'
                  ? 'نطاق التحول الهندسي لمشروع المرابع العربية: قبل البدء مقابل الإنجاز النهائي'
                  : 'Engineering Transformation Scope: Arabian Ranches (Before vs After)'}
              </span>
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                gap: '1rem',
              }}
            >
              {project2.transformationScope.map((scope, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border-subtle)',
                    padding: '1rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-primary)',
                      fontWeight: 700,
                      marginBlockEnd: '0.65rem',
                      borderBlockEnd: '1px solid rgba(186, 147, 104, 0.2)',
                      paddingBlockEnd: '0.4rem',
                    }}
                  >
                    {scope.title}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.82rem' }}>
                    <div style={{ borderInlineStart: '3px solid #BA9368', padding: '0.35rem 0.6rem', color: 'var(--color-text-secondary)', backgroundColor: 'var(--color-bg-surface)' }}>
                      <span style={{ color: '#BA9368', fontWeight: 600 }}>{lang === 'ar' ? 'قبل: ' : 'Before: '}</span>
                      {scope.before}
                    </div>
                    <div style={{ borderInlineStart: '3px solid var(--color-copper)', padding: '0.35rem 0.6rem', color: 'var(--color-text-primary)', backgroundColor: 'var(--color-bg-surface)' }}>
                      <span style={{ color: 'var(--color-copper)', fontWeight: 600 }}>{lang === 'ar' ? 'بعد: ' : 'After: '}</span>
                      {scope.after}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project 2: Media Gallery */}
          <div
            className="crop-box"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-subtle)',
              padding: '1.5rem',
            }}
          >
            <CropMarks size={10} />
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBlockEnd: '1.5rem',
                borderBlockEnd: '1px solid var(--color-border-subtle)',
                paddingBlockEnd: '1rem',
              }}
            >
              <div>
                <h3 style={{ color: 'var(--color-text-primary)', margin: 0, fontSize: '1.2rem' }}>
                  {lang === 'ar' ? 'معرض صور حديقة وجلسة المرابع العربية' : 'Arabian Ranches Backyard Media Gallery'}
                </h3>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                  {lang === 'ar'
                    ? 'تصفح صور مراحل الحفر والتسوية، والصور الفوتوغرافية المسائية للحديقة والمسبح'
                    : 'Browse excavation stages, leveling, and evening architectural photography of the backyard'}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setP2GalleryTab('after')}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    paddingBlock: '0.4rem',
                    paddingInline: '0.85rem',
                    backgroundColor: p2GalleryTab === 'after' ? 'var(--color-copper)' : 'var(--color-bg-surface)',
                    color: p2GalleryTab === 'after' ? '#FFFFFF' : 'var(--color-text-primary)',
                    border: `1px solid ${p2GalleryTab === 'after' ? 'var(--color-copper)' : 'var(--color-border-subtle)'}`,
                    cursor: 'pointer',
                    fontWeight: p2GalleryTab === 'after' ? 600 : 400,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'all var(--transition-standard)',
                  }}
                >
                  <Camera size={13} />
                  <span>{lang === 'ar' ? `صور بعد التسليم (${project2.afterGallery.length})` : `After Photos (${project2.afterGallery.length})`}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setP2GalleryTab('before')}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.82rem',
                    paddingBlock: '0.4rem',
                    paddingInline: '0.85rem',
                    backgroundColor: p2GalleryTab === 'before' ? 'var(--color-copper)' : 'var(--color-bg-surface)',
                    color: p2GalleryTab === 'before' ? '#FFFFFF' : 'var(--color-text-primary)',
                    border: `1px solid ${p2GalleryTab === 'before' ? 'var(--color-copper)' : 'var(--color-border-subtle)'}`,
                    cursor: 'pointer',
                    fontWeight: p2GalleryTab === 'before' ? 600 : 400,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    transition: 'all var(--transition-standard)',
                  }}
                >
                  <Layers size={13} />
                  <span>{lang === 'ar' ? `صور قبل وأثناء التسوية (${project2.beforeGallery.length})` : `Before & Leveling (${project2.beforeGallery.length})`}</span>
                </button>
              </div>
            </div>

            {/* Photos Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))',
                gap: '1rem',
              }}
            >
              {(p2GalleryTab === 'after' ? project2.afterGallery : project2.beforeGallery).map((src, i) => (
                <div
                  key={i}
                  onClick={() =>
                    openLightbox(src, `${project2.title} — ${p2GalleryTab === 'after' ? (lang === 'ar' ? 'بعد' : 'After') : (lang === 'ar' ? 'قبل' : 'Before')} (${i + 1})`)
                  }
                  style={{
                    position: 'relative',
                    height: '180px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <img
                    src={src}
                    alt={`صورة ${i + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    loading="lazy"
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.4rem',
                      left: '0.4rem',
                      backgroundColor: 'rgba(0,0,0,0.65)',
                      color: '#fff',
                      padding: '0.2rem 0.5rem',
                      fontSize: '0.7rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    <Eye size={11} />
                    <span>{lang === 'ar' ? 'تكبير' : 'Zoom'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            OTHER ARCHITECTURAL PLANS & UPCOMING PROJECTS
            ==================================================================== */}
        <section id="other-blueprints" style={{ marginBlockEnd: '4.5rem' }}>
          <div
            style={{
              borderBlockEnd: '1px solid var(--color-border-subtle)',
              paddingBlockEnd: '1.25rem',
              marginBlockEnd: '2.5rem',
            }}
          >
            <div className="sheet-tag" style={{ marginBlockEnd: '0.5rem' }}>
              <Compass size={13} />
              <span>{lang === 'ar' ? 'مخططات ومشاريع معمارية قادمة' : 'Upcoming Architectural Blueprints'}</span>
            </div>
            <h2>{lang === 'ar' ? 'نماذج ومخططات إضافية من أعمالنا' : 'Additional Architectural Works & Blueprints'}</h2>
            <p style={{ marginBlockStart: '0.4rem' }}>
              {lang === 'ar'
                ? 'مشاريع النوافير والمنتجعات والمساحات الخارجية في مختلف إمارات الدولة'
                : 'Water features, private resorts, and outdoor luxury living across the UAE'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
            }}
          >
            {PROJECTS_DATA.slice(2).map((item) => (
              <div
                key={item.id}
                className="crop-box"
                style={{
                  border: '1px solid var(--color-border-bright)',
                  padding: '1.5rem',
                  backgroundColor: 'var(--color-bg-surface)',
                }}
              >
                <CropMarks size={10} />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBlockEnd: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.75rem',
                      color: 'var(--color-copper-light)',
                      backgroundColor: 'rgba(186, 146, 99, 0.15)',
                      paddingBlock: '0.2rem',
                      paddingInline: '0.5rem',
                    }}
                  >
                    {item.code}
                  </span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                    {item.location}
                  </span>
                </div>
                <h3 style={{ color: 'var(--color-text-primary)', marginBlockEnd: '0.5rem', fontSize: '1.25rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', marginBlockEnd: '1.25rem', color: 'var(--color-text-secondary)' }}>
                  {item.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {item.features.map((f, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.75rem',
                        padding: '0.2rem 0.5rem',
                        backgroundColor: 'var(--color-bg-primary)',
                        border: '1px solid rgba(186, 147, 104, 0.25)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      • {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.94)',
              backdropFilter: 'blur(10px)',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
          >
            <button
              type="button"
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                padding: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="إغلاق الصورة"
            >
              <X size={24} />
            </button>

            <img
              src={lightboxImage.src}
              alt={lightboxImage.caption}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '92vw',
                maxHeight: '82vh',
                objectFit: 'contain',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                border: '1px solid var(--color-border-bright)',
              }}
            />

            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                marginBlockStart: '1rem',
                color: 'var(--color-copper-light)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.95rem',
                textAlign: 'center',
              }}
            >
              {lightboxImage.caption}
            </div>
          </div>
        )}

        {/* Custom Project Request & Consultation Box */}
        <div
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border-bright)',
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            textAlign: 'center',
          }}
          className="crop-box"
        >
          <CropMarks size={12} />

          <div className="sheet-tag" style={{ marginInline: 'auto', marginBlockEnd: '1rem' }}>
            <span>{lang === 'ar' ? 'تطوير مشروعك الخاص' : 'Custom Project Development'}</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>{lang === 'ar' ? 'استشارة ميدانية ومعاينة مجانية' : 'Complimentary Site Survey & Consultation'}</span>
          </div>

          <h2 style={{ marginBlockEnd: '0.85rem', color: 'var(--color-text-primary)' }}>
            {lang === 'ar'
              ? 'هل ترغب في تحويل فناء منزلك أو مشروعك إلى تحفة معمارية مماثلة؟'
              : 'Ready to Transform Your Space into an Architectural Masterpiece?'}
          </h2>

          <p style={{ marginInline: 'auto', marginBlockEnd: '2rem', maxWidth: '68ch', color: 'var(--color-text-secondary)' }}>
            {lang === 'ar'
              ? 'نقدم استشارات هندسية ودراسة للموقع مع إعداد المخططات التنفيذية والإنشائية وجداول الكميات والضمانات الممتدة.'
              : 'We provide site surveys, engineering blueprints, structural execution drawings, and comprehensive 10-year warranties.'}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <a
              href={`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                lang === 'ar'
                  ? 'مرحباً دار العمارة، أود الاستفسار عن استشارة معمارية لمشروعي الخاص وعرض سعر.'
                  : 'Hello Dar Al Amarah, I would like to consult your engineers about my custom project and get a quote.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-whatsapp"
              style={{
                paddingBlock: '0.85rem',
                paddingInline: '1.75rem',
                fontSize: '0.95rem',
              }}
            >
              <MessageCircle size={18} />
              <span>{lang === 'ar' ? 'استشر مهندسينا مباشرة عبر واتساب' : 'Consult Our Engineers via WhatsApp'}</span>
            </a>

            <Button to="/contact" variant="secondary" icon={<ArrowIcon size={16} />}>
              {lang === 'ar' ? 'اطلب عرض سعر لمشروعك' : 'Request a Project Quote'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
