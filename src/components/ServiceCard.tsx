import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';
import { CropMarks } from './CropMarks';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface ServiceCardProps {
  service: ServiceItem;
  showFullDetails?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  showFullDetails = false,
}) => {
  const { lang, t } = useSite();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const title = lang === 'en' && service.titleEn ? service.titleEn : service.title;
  const shortDesc = lang === 'en' && service.shortDescEn ? service.shortDescEn : service.shortDesc;
  const fullDesc = lang === 'en' && service.fullDescEn ? service.fullDescEn : service.fullDesc;
  const specTag = lang === 'en' && service.specTagEn ? service.specTagEn : service.specTag;
  const scopeItems = lang === 'en' && service.scopeEn ? service.scopeEn : service.scope;

  return (
    <article
      className="card-technical crop-box"
      id={`service-${service.id}`}
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border-bright)',
      }}
    >
      <CropMarks size={10} />

      {/* Header Index & Spec Tag */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBlockEnd: '1.25rem',
          borderBlockEnd: '1px dashed var(--color-border-subtle)',
          paddingBlockEnd: '0.75rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.35rem',
            fontWeight: 700,
            color: 'var(--color-copper-light)',
            letterSpacing: '0.05em',
          }}
        >
          {service.index}
        </div>

        <span
          style={{
            fontSize: '0.75rem',
            paddingBlock: '0.2rem',
            paddingInline: '0.5rem',
            backgroundColor: 'rgba(186, 147, 104, 0.1)',
            border: '1px solid rgba(186, 147, 104, 0.28)',
            color: 'var(--color-copper)',
            fontFamily: 'var(--font-display)',
          }}
        >
          {specTag}
        </span>
      </div>

      {/* Service Title */}
      <h3
        style={{
          color: 'var(--color-text-primary)',
          marginBlockEnd: '0.85rem',
          fontSize: '1.35rem',
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.96rem',
          lineHeight: '1.65',
          marginBlockEnd: '1.5rem',
          color: 'var(--color-text-secondary)',
        }}
      >
        {showFullDetails ? fullDesc : shortDesc}
      </p>

      {/* Scope items if full details */}
      {showFullDetails && scopeItems && (
        <div
          style={{
            marginBlockStart: '1.25rem',
            marginBlockEnd: '1.75rem',
            paddingBlockStart: '1.25rem',
            borderBlockStart: '1px solid var(--color-border-subtle)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              color: 'var(--color-copper-light)',
              marginBlockEnd: '0.75rem',
            }}
          >
            {lang === 'ar' ? 'نطاق الأعمال الهندسية المشمولة:' : 'Scope of Engineering Works:'}
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {scopeItems.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <CheckCircle2
                  size={16}
                  style={{
                    color: 'var(--color-copper)',
                    flexShrink: 0,
                    marginBlockStart: '0.2rem',
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer Link / CTA */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBlockStart: 'auto',
          paddingBlockStart: '1rem',
        }}
      >
        {!showFullDetails ? (
          <Link
            to="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              color: 'var(--color-copper-light)',
              transition: 'gap var(--transition-standard)',
            }}
          >
            <span>{lang === 'ar' ? 'تفاصيل الخدمة والمواصفات' : 'Service Specifications & Scope'}</span>
            <ArrowIcon size={16} />
          </Link>
        ) : (
          <Link
            to={`/contact?service=${encodeURIComponent(title)}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: 'var(--font-display)',
              fontSize: '0.9rem',
              color: 'var(--color-copper-light)',
            }}
          >
            <span>{lang === 'ar' ? 'طلب دراسة وعرض سعر لهذه الخدمة' : 'Request Quote for this Service'}</span>
            <ArrowIcon size={16} />
          </Link>
        )}
      </div>
    </article>
  );
};
