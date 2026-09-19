import React from 'react';
import { SheetHeader } from '../components/SheetHeader';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { SERVICES_DATA } from '../data/companyData';
import { ArrowLeft, ArrowRight, ShieldCheck, Wrench, FileCheck, Layers } from 'lucide-react';
import { useSite } from '../context/SiteContext';

export const Services: React.FC = () => {
  const { lang, t } = useSite();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="services-page" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
      <div className="app-container">
        {/* Architectural Sheet Header */}
        <SheetHeader
          sheetCode="A—02"
          title={t.servicesPageTitle}
          subtitle={t.servicesPageDesc}
        />

        {/* Technical Specification Banner */}
        <div
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border-bright)',
            padding: '1.25rem 1.5rem',
            marginBlockEnd: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            alignItems: 'center',
          }}
          className="crop-box"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={22} style={{ color: 'var(--color-copper)' }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                {lang === 'ar' ? 'اعتماد المواصفات' : 'Code Compliance'}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                {lang === 'ar' ? 'مطابقة لاشتراطات البلديات والدفاع المدني' : 'UAE Municipality & Civil Defense approved'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Wrench size={22} style={{ color: 'var(--color-water-cyan)' }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                {lang === 'ar' ? 'معدات أصلية معتمدة' : 'Certified Equipment'}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                {lang === 'ar' ? 'مضخات وفلاتر وأنظمة أوروبية وأمريكية' : 'European & US pumps, filters & controls'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Layers size={22} style={{ color: 'var(--color-copper-light)' }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                {lang === 'ar' ? 'تكامل الأعمال' : 'Turnkey Integration'}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                {lang === 'ar' ? 'عقد موحد يجمع المسبح والحديقة والري' : 'Single contract for pool, landscape & MEP'}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileCheck size={22} style={{ color: 'var(--color-botanical-light)' }} />
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
                {lang === 'ar' ? 'مخططات As-Built' : 'As-Built Blueprints'}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                {lang === 'ar' ? 'تسليم رسومات التنفيذ الفعلي عند الانتهاء' : 'Full handover of actual execution drawings'}
              </div>
            </div>
          </div>
        </div>

        {/* 7 Services Detailed List */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBlockEnd: '4.5rem',
          }}
        >
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} showFullDetails={true} />
          ))}
        </div>

        {/* Bottom Consultation Box */}
        <div
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border-bright)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
            position: 'relative',
          }}
          className="crop-box"
        >
          <div className="sheet-tag" style={{ marginInline: 'auto', marginBlockEnd: '1rem' }}>
            <span>{lang === 'ar' ? 'استشارة فنية مجانية' : 'Complimentary Consultation'}</span>
            <span style={{ opacity: 0.5 }}>|</span>
            <span>{lang === 'ar' ? 'فريق دار العمارة الهندسي' : 'Dar Al Amarah Engineering Team'}</span>
          </div>

          <h2 style={{ marginBlockEnd: '0.75rem', color: 'var(--color-text-primary)' }}>
            {lang === 'ar' ? 'هل تحتاج إلى تخصيص حزمة خدمات متكاملة لمشروعك؟' : 'Need a Customized Integrated Service Package for Your Project?'}
          </h2>

          <p style={{ marginInline: 'auto', marginBlockEnd: '1.75rem', maxWidth: '65ch', color: 'var(--color-text-secondary)' }}>
            {lang === 'ar'
              ? 'سواء كنت تبني فيلا جديدة أو تجدد حديقتك الحالية أو تطور مشروع ضيافة، فإن مهندسينا يزودونك بدراسة موقع وحلول متوافقة مع ميزانيتك.'
              : 'Whether you are building a new luxury villa, remodeling your private garden, or developing hospitality grounds, our engineers provide site surveys and budget-aligned solutions.'}
          </p>

          <Button to="/contact" variant="primary" icon={<ArrowIcon size={16} />}>
            {lang === 'ar' ? 'اطلب دراسة وعرض سعر للمشروع' : 'Request a Project Quote & Study'}
          </Button>
        </div>
      </div>
    </div>
  );
};
