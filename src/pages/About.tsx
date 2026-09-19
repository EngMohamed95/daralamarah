import React from 'react';
import { SheetHeader } from '../components/SheetHeader';
import { CropMarks } from '../components/CropMarks';
import { Button } from '../components/Button';
import { DarAlAmarahLogo } from '../components/DarAlAmarahLogo';
import { PROCESS_STAGES, COMPANY_CONFIG } from '../data/companyData';
import {
  Shield,
  Layers,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Compass,
  CheckCircle,
  Building,
  Target,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const About: React.FC = () => {
  const { lang, t } = useSite();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="about-page" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
      <div className="app-container">
        {/* Architectural Sheet Header */}
        <SheetHeader
          sheetCode="A—01"
          title={t.aboutPageTitle}
          subtitle={t.aboutPageDesc}
        />

        {/* ==================================================================
            MAIN COMPANY BIO & PHILOSOPHY
            ================================================================== */}
        <section style={{ marginBlockEnd: '4.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 3rem)',
              alignItems: 'center',
            }}
          >
            {/* Editorial Content */}
            <div>
              <div
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: 'var(--color-text-primary)',
                  marginBlockEnd: '1.5rem',
                  fontWeight: 400,
                  borderInlineStart: '3px solid var(--color-copper)',
                  paddingInlineStart: '1.25rem',
                }}
              >
                {lang === 'ar'
                  ? 'دار العمارة شركة تصميم ومقاولات مقرها دولة الإمارات العربية المتحدة، متخصصة في تنفيذ المسابح، وتنسيق الحدائق، والنوافير والعناصر المائية، والحلول المتكاملة للمساحات الخارجية.'
                  : 'Dar Al Amarah is a premier design & build contracting firm based in the UAE, specializing in luxury swimming pools, architectural landscape, bespoke water features, and outdoor living environments.'}
              </div>

              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'var(--color-text-secondary)',
                  marginBlockEnd: '1.5rem',
                }}
              >
                {lang === 'ar'
                  ? `منذ عام ${COMPANY_CONFIG.establishedYear}، نعمل على تحويل المساحات الخارجية للمشاريع السكنية والتجارية إلى بيئات متكاملة تجمع بين التصميم المدروس، وجودة المواد، ودقة التنفيذ، والاهتمام بالتفاصيل.`
                  : `Established in ${COMPANY_CONFIG.establishedYear}, we transform outdoor spaces of private villas and commercial developments into refined sanctuaries marrying thoughtful architecture, premium materials, and meticulous execution.`}
              </p>

              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.8',
                  color: 'var(--color-text-secondary)',
                  marginBlockEnd: '2rem',
                }}
              >
                {lang === 'ar'
                  ? 'نتولى جميع مراحل المشروع، بدايةً من الفكرة والتخطيط وحتى أعمال الإنشاء والتركيب والاختبار والتسليم النهائي. نؤمن بأن المساحة الخارجية ليست مجرد مسطح إضافي، بل امتداد حيوي يعكس هوية المكان ويوفر الراحة والسكينة لساكنيه.'
                  : 'We manage every project milestone—from conceptual design and municipal approvals to reinforced concrete casting, waterproofing, hydraulic testing, and final handover. We view the outdoor space as a vital architectural continuum of your home.'}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Button to="/contact" variant="primary" icon={<ArrowIcon size={16} />}>
                  {lang === 'ar' ? 'استشر مهندسينا حول مشروعك' : 'Consult Our Engineers'}
                </Button>
                <Button to="/services" variant="secondary">
                  {lang === 'ar' ? 'استعرض خدماتنا' : 'Explore Our Services'}
                </Button>
              </div>
            </div>

            {/* Architectural Spec / Blueprint Profile Box */}
            <div
              className="crop-box"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-bright)',
                padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              }}
            >
              <CropMarks size={12} />

              <div
                style={{
                  borderBlockEnd: '1px dashed var(--color-border-subtle)',
                  paddingBlockEnd: '1rem',
                  marginBlockEnd: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <DarAlAmarahLogo variant="emblem-only" size={32} colorMode="camel" />
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {lang === 'ar' ? 'دار العمـارة للحدائق و المسابح' : 'DAR AL AMARAH'}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                      {lang === 'ar' ? 'DAR AL AMARAH • LANDSCAPING & POOL' : 'LANDSCAPING & POOL L.L.C'}
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-display)', color: 'var(--color-copper-light)' }}>
                  DOC: DA-CORP-2025
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Building size={20} style={{ color: 'var(--color-copper)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      {lang === 'ar' ? 'المقر والامتداد الجغرافي' : 'Headquarters & Operational Reach'}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                      {lang === 'ar'
                        ? 'دبي، مع تنفيذ المشاريع في أبوظبي، الشارقة، عجمان، ورأس الخيمة.'
                        : 'Based in Dubai, executing turnkey projects across Dubai, Abu Dhabi, Sharjah, and Ajman.'}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Layers size={20} style={{ color: 'var(--color-water-cyan)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      {lang === 'ar' ? 'تكامل التخصصات' : 'Multidisciplinary In-House Team'}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                      {lang === 'ar'
                        ? 'هندسة إنشائية، هيدروليكا مسابح، لاندسكيب زراعي وصلب، وأنظمة ري وإضاءة معمارية.'
                        : 'Structural engineering, pool hydraulics, softscape & hardscape, smart irrigation, and architectural lighting.'}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Shield size={20} style={{ color: 'var(--color-copper-light)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      {lang === 'ar' ? 'المعايير والضمان' : 'Codes & 10-Year Warranties'}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                      {lang === 'ar'
                        ? 'التزام كامل بالأكواد والاشتراطات البلدية والهندسية في دولة الإمارات مع اختبارات ضغط وعزل معتمدة.'
                        : 'Full compliance with UAE building regulations, hydrostatic pressure tests, and certified waterproofing warranties.'}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <Target size={20} style={{ color: 'var(--color-botanical-light)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
                      {lang === 'ar' ? 'النهج التنفيذي' : 'Direct Engineering Supervision'}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                      {lang === 'ar'
                        ? 'إشراف هندسي يومي في الموقع دون تسليم الأعمال من الباطن لأطراف غير معتمدة.'
                        : 'Dedicated daily on-site engineering supervision without delegating to unvetted third parties.'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SECTION: من الفكرة إلى الواقع (المراحل الأربعة)
            ================================================================== */}
        <section
          style={{
            marginBlockEnd: '4.5rem',
            paddingBlock: '4rem',
            borderBlockStart: '1px solid var(--color-border-bright)',
            borderBlockEnd: '1px solid var(--color-border-bright)',
          }}
        >
          <div style={{ marginBlockEnd: '2.5rem', textAlign: 'center' }}>
            <div className="sheet-tag" style={{ marginInline: 'auto', marginBlockEnd: '0.75rem' }}>
              <span>{lang === 'ar' ? 'مسار العمل الإنشائي' : 'Construction Roadmap'}</span>
              <span style={{ opacity: 0.5 }}>|</span>
              <span>{lang === 'ar' ? '4 مراحل دقيقة' : '4 Disciplined Stages'}</span>
            </div>
            <h2>{lang === 'ar' ? 'من الفكرة إلى الواقع' : 'From Concept to Reality'}</h2>
            <p style={{ marginInline: 'auto', marginBlockStart: '0.5rem', color: 'var(--color-text-secondary)' }}>
              {lang === 'ar'
                ? 'منهجية هندسية واضحة تضمن سلاسة التنفيذ والالتزام التام بالوقت والميزانية المحددة.'
                : 'A structured engineering workflow guaranteeing seamless turnkey delivery within contractual timeline and budget.'}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {PROCESS_STAGES.map((stage) => {
              const title = lang === 'en' && stage.titleEn ? stage.titleEn : stage.title;
              const description = lang === 'en' && stage.descriptionEn ? stage.descriptionEn : stage.description;
              const deliverables = lang === 'en' && stage.deliverablesEn ? stage.deliverablesEn : stage.deliverables;

              return (
                <div
                  key={stage.step}
                  className="card-technical crop-box"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1.75rem',
                    backgroundColor: 'var(--color-bg-surface)',
                    border: '1px solid var(--color-border-bright)',
                  }}
                >
                  <CropMarks size={8} />

                  {/* Step number badge */}
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: 'var(--color-copper-light)',
                      marginBlockEnd: '0.75rem',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {stage.step}
                  </div>

                  <h3
                    style={{
                      color: 'var(--color-text-primary)',
                      fontSize: '1.25rem',
                      marginBlockEnd: '0.75rem',
                    }}
                  >
                    {title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.92rem',
                      lineHeight: '1.65',
                      color: 'var(--color-text-secondary)',
                      marginBlockEnd: '1.25rem',
                      flex: 1,
                    }}
                  >
                    {description}
                  </p>

                  {/* Deliverables note */}
                  <div
                    style={{
                      borderBlockStart: '1px dashed var(--color-border-subtle)',
                      paddingBlockStart: '0.75rem',
                      fontSize: '0.78rem',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    <span style={{ color: 'var(--color-copper)', fontWeight: 600 }}>
                      {lang === 'ar' ? 'المخرجات: ' : 'Deliverables: '}
                    </span>
                    <span>{deliverables}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================================
            BOTTOM CALL TO ACTION
            ================================================================== */}
        <section style={{ textAlign: 'center', paddingBlock: '2rem' }}>
          <h2 style={{ marginBlockEnd: '1rem', color: 'var(--color-text-primary)' }}>
            {lang === 'ar' ? 'جاهز لتحويل مساحتك الخارجية إلى واقع؟' : 'Ready to Bring Your Outdoor Vision to Life?'}
          </h2>
          <p style={{ marginInline: 'auto', marginBlockEnd: '1.75rem', color: 'var(--color-text-secondary)' }}>
            {lang === 'ar'
              ? 'فريق دار العمارة مستعد لمناقشة مخططات مشروعك القادم وتحديد الميزانية وخيارات التنفيذ.'
              : 'The Dar Al Amarah engineering team is ready to review your blueprints, define budgets, and outline execution schedules.'}
          </p>
          <Button to="/contact" variant="primary" icon={<ArrowIcon size={16} />}>
            {lang === 'ar' ? 'تواصل معنا وابدأ الآن' : 'Contact Us & Get Started'}
          </Button>
        </section>
      </div>
    </div>
  );
};
