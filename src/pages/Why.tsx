import React from 'react';
import { SheetHeader } from '../components/SheetHeader';
import { CropMarks } from '../components/CropMarks';
import { Button } from '../components/Button';
import { WHY_PILLARS } from '../data/companyData';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  Compass,
  Sparkles,
  Maximize2,
  Users,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const Why: React.FC = () => {
  const { lang, t } = useSite();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="why-page" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
      <div className="app-container">
        {/* Architectural Sheet Header */}
        <SheetHeader
          sheetCode="A—03"
          title={t.whyPageTitle}
          subtitle={t.whyPageDesc}
        />

        {/* Lead Intro Banner */}
        <div
          style={{
            borderInlineStart: '4px solid var(--color-copper)',
            paddingInlineStart: '1.5rem',
            marginBlockEnd: '3.5rem',
            maxWidth: '85ch',
          }}
        >
          <p
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.8',
              color: 'var(--color-text-primary)',
              fontWeight: 400,
            }}
          >
            {lang === 'ar'
              ? 'نجمع التصميم والهندسة والإنشاء وتنسيق الحدائق ضمن فريق واحد لإدارة وتنفيذ المشروع بصورة متكاملة. نعتمد في عملنا على أسس هندسية صارمة تجعل من استثمارك في مساحتك الخارجية قيمة دائمة تزيد من جمال وراحة عقارك.'
              : 'We unite design, engineering, construction, and landscaping under a single unified team. Operating on rigorous structural standards, we ensure your outdoor investment adds enduring beauty, value, and sanctuary to your property.'}
          </p>
        </div>

        {/* ==================================================================
            THE 6 PILLARS GRID
            ================================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2rem',
            marginBlockEnd: '4.5rem',
          }}
        >
          {WHY_PILLARS.map((pillar) => {
            const title = lang === 'en' && pillar.titleEn ? pillar.titleEn : pillar.title;
            const description = lang === 'en' && pillar.descriptionEn ? pillar.descriptionEn : pillar.description;
            const keyAspect = lang === 'en' && pillar.keyAspectEn ? pillar.keyAspectEn : pillar.keyAspect;

            return (
              <div
                key={pillar.number}
                className="card-technical crop-box"
                style={{
                  padding: '2rem',
                  backgroundColor: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border-bright)',
                }}
              >
                <CropMarks size={10} />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBlockEnd: '1.25rem',
                    borderBlockEnd: '1px dashed var(--color-border-subtle)',
                    paddingBlockEnd: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      color: 'var(--color-copper-light)',
                    }}
                  >
                    {pillar.number}
                  </span>

                  <span
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--color-copper)',
                      fontFamily: 'var(--font-display)',
                      border: '1px solid rgba(186, 147, 104, 0.3)',
                      paddingBlock: '0.2rem',
                      paddingInline: '0.5rem',
                    }}
                  >
                    {lang === 'ar' ? 'معيار الجودة' : 'Quality Pillar'}
                  </span>
                </div>

                <h3
                  style={{
                    color: 'var(--color-text-primary)',
                    fontSize: '1.35rem',
                    marginBlockEnd: '0.75rem',
                  }}
                >
                  {title}
                </h3>

                <p
                  style={{
                    fontSize: '0.96rem',
                    lineHeight: '1.7',
                    color: 'var(--color-text-secondary)',
                    marginBlockEnd: '1.25rem',
                  }}
                >
                  {description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: 'var(--color-copper-light)',
                    fontFamily: 'var(--font-display)',
                    borderBlockStart: '1px solid var(--color-border-subtle)',
                    paddingBlockStart: '0.85rem',
                  }}
                >
                  <ShieldCheck size={16} style={{ color: 'var(--color-copper)' }} />
                  <span>
                    {lang === 'ar' ? `الركيزة الأساسية: ${keyAspect}` : `Core Focus: ${keyAspect}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================================================================
            COMPARISON ARCHITECTURAL TABLE
            الفرق بين النهج المتجزئ ونهج دار العمارة المتكامل
            ================================================================== */}
        <section
          style={{
            marginBlockEnd: '4.5rem',
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border-bright)',
            padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
          }}
          className="crop-box"
        >
          <CropMarks size={12} />

          <div style={{ marginBlockEnd: '2rem' }}>
            <div className="sheet-tag" style={{ marginBlockEnd: '0.65rem' }}>
              <span>{lang === 'ar' ? 'مقارنة المنهجية التنفيذية' : 'Methodology Comparison'}</span>
              <span style={{ opacity: 0.5 }}>|</span>
              <span>{lang === 'ar' ? 'عقد موحد مقابل التجزئة' : 'Turnkey Unified Contract vs Fragmentation'}</span>
            </div>
            <h2>
              {lang === 'ar'
                ? 'لماذا يفضل العملاء النموذج المتكامل لدار العمارة؟'
                : 'Why Discerning Clients Choose Dar Al Amarah Turnkey Model'}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.75rem',
            }}
          >
            {/* The Integrated Model */}
            <div
              style={{
                backgroundColor: 'var(--color-bg-primary)',
                border: '1.5px solid var(--color-copper)',
                padding: '1.75rem',
              }}
            >
              <div
                style={{
                  color: 'var(--color-copper)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  marginBlockEnd: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <CheckCircle2 size={20} style={{ color: 'var(--color-copper)' }} />
                <span>{lang === 'ar' ? 'نهج دار العمارة المتكامل' : 'Dar Al Amarah Unified Turnkey Approach'}</span>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  fontSize: '0.92rem',
                  color: 'var(--color-text-secondary)',
                  padding: 0,
                  margin: 0,
                }}
              >
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-copper)', fontWeight: 'bold' }}>✓</span>
                  <span>
                    {lang === 'ar'
                      ? 'جهة هندسية واحدة مسؤولة عن كافة أعمال المسبح واللاندسكيب والنوافير.'
                      : 'Single engineering entity responsible for swimming pool, landscape, pergolas & water features.'}
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-copper)', fontWeight: 'bold' }}>✓</span>
                  <span>
                    {lang === 'ar'
                      ? 'تنسيق مسبق بين تمديدات السباكة والكهرباء والري قبل صب الخرسانات.'
                      : 'Prior spatial BIM/MEP coordination between plumbing, power, and irrigation before casting.'}
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-copper)', fontWeight: 'bold' }}>✓</span>
                  <span>
                    {lang === 'ar'
                      ? 'ضمان شامل وموحد دون تنصل أو إلقاء اللوم بين مقاولي الباطن.'
                      : 'Comprehensive 10-year unified warranty without finger-pointing among subcontractors.'}
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-copper)', fontWeight: 'bold' }}>✓</span>
                  <span>
                    {lang === 'ar'
                      ? 'التزام صارم بالجدول الزمني والميزانية التعاقدية الشفافة.'
                      : 'Strict milestone commitments and guaranteed transparent contractual budgets.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* The Traditional Fragmented Approach */}
            <div
              style={{
                backgroundColor: 'var(--color-bg-primary)',
                border: '1px solid var(--color-border-subtle)',
                padding: '1.75rem',
              }}
            >
              <div
                style={{
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  marginBlockEnd: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <XCircle size={20} style={{ color: 'var(--color-text-muted)' }} />
                <span>{lang === 'ar' ? 'التعاقد المجزأ مع مقاولين متعددين' : 'Fragmented Multi-Contractor Model'}</span>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  fontSize: '0.92rem',
                  color: 'var(--color-text-muted)',
                  padding: 0,
                  margin: 0,
                }}
              >
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span>✗</span>
                  <span>
                    {lang === 'ar'
                      ? 'تضارب مستمر بين مقاول المسبح، مقاول الزراعة، وفني العزل.'
                      : 'Constant clashes between the pool builder, gardening crew, and waterproofing technicians.'}
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span>✗</span>
                  <span>
                    {lang === 'ar'
                      ? 'تكسير متكرر في الأرضيات بعد الانتهاء لتمرير أنابيب منسية.'
                      : 'Costly repeated demolition of paved surfaces to install overlooked conduits.'}
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span>✗</span>
                  <span>
                    {lang === 'ar'
                      ? 'ضياع مسؤولية التسريب أو الهبوط بين الأطراف المختلفة.'
                      : 'Disclaimed liability for leaks or settlement between competing independent parties.'}
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span>✗</span>
                  <span>
                    {lang === 'ar'
                      ? 'إهدار وقت العميل ومضاعفة تكاليف التنفيذ غير المحسوبة.'
                      : 'Wasted client time, project delays, and compounding unexpected change orders.'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', paddingBlock: '1.5rem' }}>
          <h3 style={{ marginBlockEnd: '1rem', color: 'var(--color-text-primary)' }}>
            {lang === 'ar' ? 'اختر راحة البال وجودة التنفيذ التي تستحقها' : 'Choose Peace of Mind and the Quality Your Home Deserves'}
          </h3>
          <Button to="/contact" variant="primary" icon={<ArrowIcon size={16} />}>
            {lang === 'ar' ? 'تحدث مع فريقنا الهندسي اليوم' : 'Speak with Our Engineers Today'}
          </Button>
        </div>
      </div>
    </div>
  );
};
