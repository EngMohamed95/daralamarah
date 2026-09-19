import React from 'react';
import { Link } from 'react-router-dom';
import { HeroBlueprintSVG } from '../components/HeroBlueprintSVG';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { CropMarks } from '../components/CropMarks';
import { SERVICES_DATA, WHY_PILLARS, PROJECTS_DATA } from '../data/companyData';
import { ArrowLeft, ArrowRight, Compass, ShieldCheck, Waves, Sparkles, CheckCircle2, Sliders, Camera } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const Home: React.FC = () => {
  const { lang, theme, t } = useSite();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="home-page" style={{ paddingBlockEnd: '5rem' }}>
      {/* ====================================================================
          HERO SECTION — مخطط هندسي تفاعلي وعناوين واضحة
          ==================================================================== */}
      <section
        style={{
          position: 'relative',
          paddingBlockStart: 'clamp(3rem, 6vw, 5rem)',
          paddingBlockEnd: 'clamp(3.5rem, 7vw, 6rem)',
          borderBlockEnd: '1px solid var(--color-border-bright)',
        }}
      >
        <div className="app-container">
          {/* Architectural Drawing Tag / Sheet Marker */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBlockEnd: '2rem',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <div className="sheet-tag">
              <span>{lang === 'ar' ? 'المخطط العام' : 'MASTER PLAN'}</span>
              <span style={{ opacity: 0.5 }}>|</span>
              <span style={{ fontWeight: 700 }}>A—00</span>
              <span style={{ opacity: 0.5 }}>|</span>
              <span>{lang === 'ar' ? 'دولة الإمارات العربية المتحدة' : 'United Arab Emirates'}</span>
            </div>

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem',
                color: 'var(--color-copper-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Compass size={16} />
              <span>{t.heroBadge}</span>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center',
            }}
          >
            {/* Left Content (Text & CTAs) */}
            <div>
              {/* Category Eyebrow */}
              <div
                style={{
                  color: 'var(--color-copper-light)',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                  marginBlockEnd: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  flexWrap: 'wrap',
                }}
              >
                <span>{lang === 'ar' ? 'المسابح' : 'Swimming Pools'}</span>
                <span>•</span>
                <span>{lang === 'ar' ? 'تنسيق الحدائق' : 'Landscaping'}</span>
                <span>•</span>
                <span>{lang === 'ar' ? 'النوافير والشلالات' : 'Fountains & Cascades'}</span>
                <span>•</span>
                <span>{lang === 'ar' ? 'المساحات الخارجية' : 'Outdoor Living'}</span>
              </div>

              {/* Main Heading */}
              <h1
                style={{
                  marginBlockEnd: '1.25rem',
                  color: 'var(--color-text-primary)',
                  lineHeight: '1.2',
                }}
              >
                <span>{t.heroH1Part1}</span>
                <br />
                <span style={{ color: 'var(--color-copper-light)' }}>{t.heroH1Part2}</span>
              </h1>

              {/* Subtitle / Description */}
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                  lineHeight: '1.75',
                  color: 'var(--color-text-secondary)',
                  marginBlockEnd: '2.25rem',
                }}
              >
                {t.heroDescription}
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <Button to="/contact" variant="primary" id="hero-btn-contact" icon={<ArrowIcon size={17} />}>
                  {t.heroCtaContact}
                </Button>

                <Button to="/projects" variant="secondary" id="hero-btn-projects" icon={<Compass size={17} />}>
                  {t.heroCtaProjects}
                </Button>
              </div>

              {/* Engineering Guarantees bar */}
              <div
                style={{
                  marginBlockStart: '2.5rem',
                  paddingBlockStart: '1.5rem',
                  borderBlockStart: '1px dashed var(--color-border-subtle)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '1rem',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-muted)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-copper)' }} />
                  <span>{lang === 'ar' ? 'ضمانات عزل وإنشاء طويلة' : 'Structural & waterproofing warranties'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <Waves size={18} style={{ color: 'var(--color-copper)' }} />
                  <span>{lang === 'ar' ? 'أنظمة ترشيح وإضاءة متطورة' : 'Advanced filtration & illumination'}</span>
                </div>
              </div>
            </div>

            {/* Right Blueprint Drawing Animation */}
            <div>
              <HeroBlueprintSVG />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SERVICES OVERVIEW — نبذة سريعة عن الخدمات السبعة
          ==================================================================== */}
      <section
        style={{
          paddingBlock: '5rem',
          borderBlockEnd: '1px solid var(--color-border-subtle)',
        }}
      >
        <div className="app-container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1.5rem',
              marginBlockEnd: '3rem',
            }}
          >
            <div>
              <div className="sheet-tag" style={{ marginBlockEnd: '0.75rem' }}>
                <span>{t.homeServicesTag}</span>
                <span style={{ opacity: 0.5 }}>|</span>
                <span>A—02</span>
              </div>
              <h2>{t.homeServicesTitle}</h2>
              <p style={{ marginBlockStart: '0.5rem' }}>
                {t.homeServicesDesc}
              </p>
            </div>

            <Link
              to="/services"
              className="btn-base btn-secondary"
              style={{ fontSize: '0.9rem', paddingBlock: '0.6rem', paddingInline: '1.25rem' }}
            >
              <span>{t.viewAllServicesBtn}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>

          {/* 7 Services Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.75rem',
            }}
          >
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} showFullDetails={false} />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          WARM STONE SECTION — تجربة الخامات الحجرية والهندسية
          ==================================================================== */}
      <section
        className="blueprint-paper-stone"
        style={{
          paddingBlock: '5rem',
          borderBlockEnd: '1px solid rgba(186, 147, 104, 0.4)',
        }}
      >
        <div className="app-container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBlockEnd: '2.5rem',
            }}
          >
            <div>
              <div className="sheet-tag sheet-tag-stone" style={{ marginBlockEnd: '0.65rem' }}>
                <span>{t.homeWhyTag}</span>
                <span style={{ opacity: 0.5 }}>|</span>
                <span>{lang === 'ar' ? 'حجر طبيعي • خرسانة • مياه' : 'Natural Stone • Concrete • MEP'}</span>
              </div>
              <h2 style={{ color: 'var(--color-stone-dark)' }}>
                {t.homeWhyTitle}
              </h2>
            </div>

            <Link
              to="/why"
              className="btn-base btn-stone-primary"
              style={{ fontSize: '0.9rem' }}
            >
              <span>{lang === 'ar' ? 'لماذا تختار دار العمارة؟' : 'Why Choose Us?'}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {WHY_PILLARS.slice(0, 3).map((pillar) => (
              <div
                key={pillar.number}
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border-subtle)',
                  padding: '1.75rem',
                  position: 'relative',
                  boxShadow: theme === 'dark' ? '0 4px 18px rgba(0, 0, 0, 0.3)' : '0 4px 18px rgba(79, 79, 79, 0.05)',
                }}
                className="crop-box"
              >
                <CropMarks size={8} />
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--color-copper)',
                    marginBlockEnd: '0.75rem',
                  }}
                >
                  {pillar.number}
                </div>
                <h3
                  style={{
                    color: 'var(--color-text-primary)',
                    fontSize: '1.2rem',
                    marginBlockEnd: '0.6rem',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    color: 'var(--color-text-secondary)',
                    fontSize: '0.92rem',
                    lineHeight: '1.6',
                    marginBlockEnd: '1rem',
                  }}
                >
                  {pillar.description}
                </p>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-copper-dark)',
                    fontWeight: 600,
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  • {pillar.keyAspect}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          PROJECT PREVIEW TEASER
          ==================================================================== */}
      <section
        style={{
          paddingBlock: '5rem',
          borderBlockEnd: '1px solid var(--color-border-subtle)',
        }}
      >
        <div className="app-container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1.5rem',
              marginBlockEnd: '2.5rem',
            }}
          >
            <div>
              <div className="sheet-tag" style={{ marginBlockEnd: '0.65rem' }}>
                <span>مشاريع منفذة في الدولة</span>
                <span style={{ opacity: 0.5 }}>|</span>
                <span>A—04</span>
              </div>
              <h2>{lang === 'ar' ? 'مخططات واقعية لمشاريع تم تسليمها' : 'Delivered Architectural Project Blueprints'}</h2>
              <p style={{ marginBlockStart: '0.5rem' }}>
                {lang === 'ar'
                  ? 'مسابح إنفينيتي، حدائق سكنية، ونوافير معمارية نفذتها دار العمارة في دبي وأبوظبي ورأس الخيمة.'
                  : 'Infinity pools, private residential landscapes, and architectural water features executed across Dubai, Abu Dhabi, and RAK.'}
              </p>
            </div>

            <Link
              to="/projects"
              className="btn-base btn-secondary"
              style={{ fontSize: '0.9rem' }}
            >
              <span>{lang === 'ar' ? 'عرض جميع المخططات المعمارية (4 مشاريع)' : 'View All Architectural Blueprints (4 Projects)'}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
            }}
          >
            {PROJECTS_DATA.slice(0, 2).map((item) => (
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
                    marginBlockEnd: '0.75rem',
                  }}
                >
                  <span style={{ color: 'var(--color-copper-light)', fontSize: '0.8rem', fontFamily: 'var(--font-display)' }}>
                    {item.code}
                  </span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
                    {lang === 'ar' ? item.location : (item.locationEn || item.location)}
                  </span>
                </div>
                <h3 style={{ color: 'var(--color-text-primary)', marginBlockEnd: '0.5rem', fontSize: '1.25rem' }}>
                  {lang === 'ar' ? item.title : (item.titleEn || item.title)}
                </h3>
                <p style={{ fontSize: '0.9rem', marginBlockEnd: '1.25rem' }}>
                  {lang === 'ar' ? item.description : (item.descriptionEn || item.description)}
                </p>
                <Link
                  to="/projects"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--color-copper-light)',
                    fontSize: '0.88rem',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  <span>{lang === 'ar' ? 'استعراض المخطط والمواصفات الكاملة' : 'Explore Blueprint & Specifications'}</span>
                  <ArrowIcon size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          BEFORE & AFTER TRANSFORMATION SHOWCASE (قبل وبعد التنفيذ)
          ==================================================================== */}
      <section
        style={{
          paddingBlock: '5rem',
          backgroundColor: 'var(--color-bg-primary)',
          borderBlockEnd: '1px solid var(--color-border-subtle)',
          position: 'relative',
        }}
      >
        <div className="app-container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: '1.5rem',
              marginBlockEnd: '3rem',
            }}
          >
            <div>
              <div className="sheet-tag" style={{ marginBlockEnd: '0.65rem' }}>
                <Sparkles size={13} style={{ color: 'var(--color-copper-light)' }} />
                <span>{lang === 'ar' ? 'التحول الحقيقي بالصور والفيديو' : 'Real Transformation via Photos & Videos'}</span>
                <span style={{ opacity: 0.5 }}>|</span>
                <span>{lang === 'ar' ? 'سلايدر تفاعلي بالسحب' : 'Interactive Swipe Slider'}</span>
              </div>
              <h2>{lang === 'ar' ? 'أعمالنا ومشاريعنا: قبل وبعد التنفيذ' : 'Our Work & Projects: Before & After Execution'}</h2>
              <p style={{ marginBlockStart: '0.5rem', maxWidth: '70ch' }}>
                {lang === 'ar'
                  ? 'اكتشف كيف نقوم بتحويل المساحات الرملية ومراحل الحفر والتسليح إلى مسابح إنفينيتي فاخرة وجلسات دائرية وبرجولات ومساحات خضراء متكاملة بأعلى معايير الجودة الهندسية.'
                  : 'Discover how we transform bare sandy yards and excavation pits into luxury infinity pools, circular sunken lounges, pergolas, and lush green sanctuaries conforming to top engineering standards.'}
              </p>
            </div>

            <Link
              to="/projects"
              className="btn-base btn-primary"
              style={{ fontSize: '0.92rem', paddingBlock: '0.75rem', paddingInline: '1.5rem' }}
            >
              <Sliders size={16} />
              <span>{lang === 'ar' ? 'استعراض المشاريع ومقارنات قبل وبعد' : 'Explore Projects & Before/After Comparisons'}</span>
              <ArrowIcon size={16} />
            </Link>
          </div>

          {/* 2 Showcase Cards for Project 1 and Project 2 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
            }}
          >
            {/* Card 1: Palm Jumeirah Pool */}
            <div
              className="crop-box"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
                overflow: 'hidden',
              }}
            >
              <CropMarks size={10} />
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    height: '100%',
                  }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      src="/projects/project-1/before/before-1.jpg"
                      alt={lang === 'ar' ? 'قبل التنفيذ' : 'Before Execution'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        insetBlockStart: '0.5rem',
                        insetInlineStart: '0.5rem',
                        backgroundColor: 'rgba(79,79,79,0.92)',
                        color: '#FFFFFF',
                        padding: '0.2rem 0.5rem',
                        fontSize: '0.72rem',
                      }}
                    >
                      {lang === 'ar' ? 'قبل' : 'Before'}
                    </span>
                  </div>
                  <div style={{ position: 'relative', overflow: 'hidden', borderInlineStart: '2px solid var(--color-copper)' }}>
                    <img
                      src="/projects/project-1/after/after-1.jpg"
                      alt={lang === 'ar' ? 'بعد الإنجاز' : 'After Handover'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        insetBlockStart: '0.5rem',
                        insetInlineEnd: '0.5rem',
                        backgroundColor: '#BA9368',
                        color: '#FFFFFF',
                        padding: '0.2rem 0.5rem',
                        fontSize: '0.72rem',
                      }}
                    >
                      {lang === 'ar' ? 'بعد' : 'After'}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-copper-light)', marginBlockEnd: '0.25rem' }}>
                  {lang === 'ar' ? 'نخلة جميرا، دبي • مسبح إنفينيتي' : 'Palm Jumeirah, Dubai • Infinity Pool'}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBlockEnd: '0.5rem' }}>
                  {lang === 'ar' ? 'مسبح إنفينيتي فاخر وجلسات مائية غاطسة' : 'Luxury Infinity Pool & Submerged Sunken Lounges'}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginBlockEnd: '1rem' }}>
                  {lang === 'ar'
                    ? 'شلالات ثلاثية، كراسي استجمام غاطسة، وأشجار بونساي معمارية وتشطيبات بورسلان راقية.'
                    : 'Triple water cascades, submerged baja shelves, architectural bonsai trees, and imported porcelain finishes.'}
                </p>
                <Link
                  to="/projects"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--color-copper-light)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  <span>{lang === 'ar' ? 'استعراض صور وفيديو المشروع' : 'View Project Photos & Videos'}</span>
                  <ArrowIcon size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: Arabian Ranches Landscaping & Lounge */}
            <div
              className="crop-box"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
                overflow: 'hidden',
              }}
            >
              <CropMarks size={10} />
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    height: '100%',
                  }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      src="/projects/project-2/before/before-1.jpg"
                      alt={lang === 'ar' ? 'قبل التنفيذ' : 'Before Execution'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        insetBlockStart: '0.5rem',
                        insetInlineStart: '0.5rem',
                        backgroundColor: 'rgba(79,79,79,0.92)',
                        color: '#FFFFFF',
                        padding: '0.2rem 0.5rem',
                        fontSize: '0.72rem',
                      }}
                    >
                      {lang === 'ar' ? 'قبل' : 'Before'}
                    </span>
                  </div>
                  <div style={{ position: 'relative', overflow: 'hidden', borderInlineStart: '2px solid var(--color-copper)' }}>
                    <img
                      src="/projects/project-2/after/after-1.jpg"
                      alt={lang === 'ar' ? 'بعد الإنجاز' : 'After Handover'}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        insetBlockStart: '0.5rem',
                        insetInlineEnd: '0.5rem',
                        backgroundColor: '#BA9368',
                        color: '#FFFFFF',
                        padding: '0.2rem 0.5rem',
                        fontSize: '0.72rem',
                      }}
                    >
                      {lang === 'ar' ? 'بعد' : 'After'}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-copper-light)', marginBlockEnd: '0.25rem' }}>
                  {lang === 'ar' ? 'المرابع العربية، دبي • حديقة ومسبح' : 'Arabian Ranches, Dubai • Landscape & Pool'}
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBlockEnd: '0.5rem' }}>
                  {lang === 'ar' ? 'تطوير فناء سكني مع جلسة دائرية وبرجولة' : 'Residential Courtyard Upgrade with Sunken Fire Pit & Pergola'}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', marginBlockEnd: '1rem' }}>
                  {lang === 'ar'
                    ? 'جلسة حجرية دائرية مع شعلة مركزية، مطبخ خارجي مجهز، ومسارات عشبية مضاءة بنظام LED.'
                    : 'Circular natural stone fire lounge, fully fitted outdoor kitchen, and stepping stone lawn pathways with warm LED illumination.'}
                </p>
                <Link
                  to="/projects"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--color-copper-light)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  <span>{lang === 'ar' ? 'استعراض صور وفيديو المشروع' : 'View Project Photos & Videos'}</span>
                  <ArrowIcon size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FINAL CALL TO ACTION — دعوة ختامية تودي لـ /contact
          ==================================================================== */}
      <section
        style={{
          paddingBlock: '4.5rem',
          backgroundColor: 'var(--color-bg-primary)',
          position: 'relative',
        }}
      >
        <div className="app-container">
          <div
            className="crop-box"
            style={{
              padding: 'clamp(2rem, 5vw, 3.5rem)',
              backgroundColor: 'var(--color-bg-surface)',
              border: '1px solid var(--color-border-bright)',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: theme === 'dark' ? '0 8px 30px rgba(0, 0, 0, 0.4)' : '0 8px 30px rgba(79, 79, 79, 0.06)',
            }}
          >
            <CropMarks size={14} />

            <div className="sheet-tag" style={{ marginBlockEnd: '1.25rem' }}>
              <span>{t.homeCtaTag}</span>
              <span style={{ opacity: 0.5 }}>|</span>
              <span>{lang === 'ar' ? 'طلب استشارة معمارية' : 'Architectural Consultation'}</span>
            </div>

            <h2
              style={{
                color: 'var(--color-text-primary)',
                marginBlockEnd: '1rem',
                maxWidth: '32ch',
              }}
            >
              {t.homeCtaTitle}
            </h2>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--color-text-secondary)',
                marginBlockEnd: '2rem',
                maxWidth: '60ch',
              }}
            >
              {t.homeCtaDesc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <Button to="/contact" variant="primary" id="cta-bottom-quote" icon={<ArrowIcon size={17} />}>
                {t.homeCtaBtn}
              </Button>
              <Button to="/services" variant="secondary">
                {t.viewAllServicesBtn}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
