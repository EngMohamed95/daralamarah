import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { CropMarks } from './CropMarks';
import { HeroBlueprintSVG } from './HeroBlueprintSVG';
import { Camera, Compass, MessageCircle, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/companyData';

interface ShowcaseItem {
  id: string;
  image: string;
  titleAr: string;
  titleEn: string;
  locationAr: string;
  locationEn: string;
  scopeAr: string;
  scopeEn: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: 'p1-1',
    image: '/projects/project-1/after/after-1.jpg',
    titleAr: 'مسبح إنفينيتي فاخر في نخلة جميرا',
    titleEn: 'Luxury Infinity Pool, Palm Jumeirah',
    locationAr: 'نخلة جميرا، دبي',
    locationEn: 'Palm Jumeirah, Dubai',
    scopeAr: 'مسبح خرساني إنفينيتي 14.5م مع شلال رخامي',
    scopeEn: '14.5m Concrete Infinity Pool with Cascade',
  },
  {
    id: 'p2-1',
    image: '/projects/project-2/after/after-1.jpg',
    titleAr: 'لاندسكيب وحديقة فيلا المرابع العربية',
    titleEn: 'Villa Landscape, Arabian Ranches',
    locationAr: 'المرابع العربية، دبي',
    locationEn: 'Arabian Ranches, Dubai',
    scopeAr: 'تنسيق حدائق ناعمة وصلبة + جلسات خارجية',
    scopeEn: 'Full Hardscape & Softscape with Pergola Decks',
  },
  {
    id: 'p1-7',
    image: '/projects/project-1/after/after-7.jpg',
    titleAr: 'ممر مائي وجلسة غاطسة في المسبح',
    titleEn: 'Sunken Lounge & Water Steps',
    locationAr: 'دبي، الإمارات',
    locationEn: 'Dubai, UAE',
    scopeAr: 'جلسة دائرية مائية وسط المسبح مع إضاءة ليلية',
    scopeEn: 'Circular Sunken Pool Lounge with LED Lighting',
  },
  {
    id: 'p1-6',
    image: '/projects/project-1/after/after-6.jpg',
    titleAr: 'شاطئ مسبح مائل مع مقاعد تشميس غاطسة',
    titleEn: 'Baja Shelf & In-Pool Loungers',
    locationAr: 'دبي، الإمارات',
    locationEn: 'Dubai, UAE',
    scopeAr: 'أرضيات بورسلان إسباني مانعة للانزلاق',
    scopeEn: 'Anti-Slip Spanish Porcelain & Mosaic Steps',
  },
];

export const HeroShowcase: React.FC = () => {
  const { lang, theme } = useSite();
  const [activeTab, setActiveTab] = useState<'photos' | 'blueprint'>('photos');
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const currentItem = SHOWCASE_ITEMS[selectedIndex];
  const isDark = theme === 'dark';

  const waNumber = COMPANY_CONFIG.whatsappNumber || '971568116203';
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    lang === 'ar'
      ? `مرحباً دار العمارة، أود الاستفسار عن تنفيذ مشروع مشابه لـ: (${currentItem.titleAr} - ${currentItem.locationAr})`
      : `Hello Dar Al Amarah, I would like to inquire about a project similar to: (${currentItem.titleEn} - ${currentItem.locationEn})`
  )}`;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '680px',
        marginInline: 'auto',
      }}
    >
      {/* Top Controls: Switch between Real Photos & Architectural Blueprint */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem',
          marginBlockEnd: '0.85rem',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => setActiveTab('photos')}
            id="hero-tab-photos"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              paddingBlock: '0.4rem',
              paddingInline: '0.85rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-display)',
              backgroundColor: activeTab === 'photos' ? 'var(--color-copper)' : 'var(--color-bg-surface)',
              color: activeTab === 'photos' ? '#FFFFFF' : 'var(--color-text-primary)',
              border: `1px solid ${activeTab === 'photos' ? 'var(--color-copper)' : 'var(--color-border-subtle)'}`,
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all var(--transition-standard)',
            }}
          >
            <Camera size={14} />
            <span>{lang === 'ar' ? 'الصور الحية للمشاريع' : 'Delivered Projects Photos'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('blueprint')}
            id="hero-tab-blueprint"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              paddingBlock: '0.4rem',
              paddingInline: '0.85rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-display)',
              backgroundColor: activeTab === 'blueprint' ? 'var(--color-copper)' : 'var(--color-bg-surface)',
              color: activeTab === 'blueprint' ? '#FFFFFF' : 'var(--color-text-primary)',
              border: `1px solid ${activeTab === 'blueprint' ? 'var(--color-copper)' : 'var(--color-border-subtle)'}`,
              cursor: 'pointer',
              fontWeight: 600,
              transition: 'all var(--transition-standard)',
            }}
          >
            <Compass size={14} />
            <span>{lang === 'ar' ? 'المخطط الهندسي (DWG)' : 'Architectural Plan'}</span>
          </button>
        </div>

        {/* Live Status Badge */}
        <div
          style={{
            fontSize: '0.78rem',
            color: 'var(--color-copper)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontWeight: 600,
            fontFamily: 'var(--font-display)',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10B981',
              boxShadow: '0 0 6px #10B981',
            }}
          />
          <span>{lang === 'ar' ? 'أعمال حية منفذة في دبي' : 'Executed in Dubai'}</span>
        </div>
      </div>

      {activeTab === 'blueprint' ? (
        <HeroBlueprintSVG />
      ) : (
        /* Real Photos Showcase Card */
        <div
          className="crop-box"
          style={{
            position: 'relative',
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border-bright)',
            padding: 'clamp(0.75rem, 2vw, 1rem)',
            boxShadow: isDark
              ? '0 16px 40px rgba(0, 0, 0, 0.45)'
              : '0 16px 40px rgba(79, 79, 79, 0.08)',
          }}
        >
          <CropMarks size={12} />

          {/* Main Selected Image Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(260px, 46vw, 390px)',
              overflow: 'hidden',
              backgroundColor: '#1A1C1E',
              border: '1px solid var(--color-border-subtle)',
            }}
          >
            <img
              src={currentItem.image}
              alt={lang === 'ar' ? currentItem.titleAr : currentItem.titleEn}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
              }}
            />

            {/* Top Floating Badge */}
            <div
              style={{
                position: 'absolute',
                top: '0.75rem',
                insetInlineStart: '0.75rem',
                backgroundColor: 'rgba(20, 22, 24, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(186, 147, 104, 0.6)',
                color: '#FFFFFF',
                paddingBlock: '0.35rem',
                paddingInline: '0.75rem',
                fontSize: '0.76rem',
                fontFamily: 'var(--font-display)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                zIndex: 3,
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
              }}
            >
              <MapPin size={13} style={{ color: '#BA9368' }} />
              <span>{lang === 'ar' ? currentItem.locationAr : currentItem.locationEn}</span>
            </div>

            {/* Direct WhatsApp Action Button on Image */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={lang === 'ar' ? 'استفسر عن هذا المشروع عبر واتساب' : 'Inquire via WhatsApp'}
              style={{
                position: 'absolute',
                top: '0.75rem',
                insetInlineEnd: '0.75rem',
                backgroundColor: '#25D366',
                color: '#FFFFFF',
                paddingBlock: '0.35rem',
                paddingInline: '0.75rem',
                fontSize: '0.76rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                zIndex: 3,
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
                border: '1px solid #FFFFFF',
                transition: 'transform 0.2s ease',
              }}
            >
              <MessageCircle size={14} />
              <span>{lang === 'ar' ? 'استفسر عبر واتساب' : 'Inquire via WhatsApp'}</span>
            </a>

            {/* Bottom Gradient Caption Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                insetInline: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                paddingBlock: '1.25rem 0.85rem',
                paddingInline: '1rem',
                color: '#FFFFFF',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-brand-arabic)',
                  fontWeight: 700,
                  fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
                  lineHeight: 1.2,
                  color: '#FFFFFF',
                  marginBlockEnd: '0.2rem',
                }}
              >
                {lang === 'ar' ? currentItem.titleAr : currentItem.titleEn}
              </div>
              <div
                style={{
                  fontSize: '0.8rem',
                  color: '#BA9368',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {lang === 'ar' ? currentItem.scopeAr : currentItem.scopeEn}
              </div>
            </div>
          </div>

          {/* Thumbnails Row to Switch Photos */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '0.5rem',
              marginBlockStart: '0.75rem',
            }}
          >
            {SHOWCASE_ITEMS.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  style={{
                    position: 'relative',
                    height: 'clamp(54px, 12vw, 76px)',
                    padding: 0,
                    border: isSelected ? '2px solid var(--color-copper)' : '1px solid var(--color-border-subtle)',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    backgroundColor: '#111',
                    opacity: isSelected ? 1 : 0.65,
                    transform: isSelected ? 'scale(1.02)' : 'none',
                    transition: 'all var(--transition-standard)',
                  }}
                  aria-label={lang === 'ar' ? item.titleAr : item.titleEn}
                >
                  <img
                    src={item.image}
                    alt={item.id}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {isSelected && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        border: '2px solid var(--color-copper)',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Footer Note */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBlockStart: '1px solid var(--color-border-subtle)',
              paddingBlockStart: '0.6rem',
              marginBlockStart: '0.75rem',
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <CheckCircle2 size={13} style={{ color: '#10B981' }} />
              <span>{lang === 'ar' ? 'تصوير واقعي لأعمال الشركة المسلّمة' : 'Actual Photos of Delivered Client Projects'}</span>
            </span>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#25D366',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <MessageCircle size={13} />
              <span>{lang === 'ar' ? 'طلب معاينة الموقع عبر واتساب' : 'Book Site Visit via WhatsApp'}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
