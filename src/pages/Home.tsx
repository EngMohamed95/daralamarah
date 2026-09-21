import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleCheck,
  Play,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';
import { COMPANY_CONFIG, PROCESS_STAGES, PROJECTS_DATA, SERVICES_DATA, WHY_PILLARS } from '../data/companyData';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { LandingLeadForm } from '../components/LandingLeadForm';

// صورة مختلفة لكل خدمة من خدماتنا السبع تعكس طبيعة الخدمة فعليًا
const serviceImages = [
  '/projects/project-1/after/after-1.jpg',  // تصميم وتنفيذ المسابح
  '/projects/project-2/after/after-6.jpg',  // تنسيق الحدائق
  '/projects/project-1/after/after-7.jpg',  // النوافير والعناصر المائية
  '/projects/project-2/after/after-8.jpg',  // أنظمة الري
  '/projects/project-1/after/after-11.jpg', // الأرضيات الخارجية
  '/projects/project-2/after/after-2.jpg',  // البرجولات والمظلات
  '/projects/project-1/after/after-9.jpg',  // أغطية المسابح الأوتوماتيكية
];

// صور منفصلة لبطاقات المشاريع المختارة حتى لا تتكرر مع صور الخدمات
const projectImages = [
  '/projects/project-1/after/after-3.jpg',
  '/projects/project-2/after/after-1.jpg',
  '/projects/project-1/after/after-5.jpg',
  '/projects/project-2/after/after-4.jpg',
];

export const Home: React.FC = () => {
  const { lang, t } = useSite();
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;
  const typingPhrases = useMemo(() => lang === 'ar'
    ? ['المسابح الفاخرة', 'الحدائق والمساحات الخارجية', 'النوافير والعناصر المائية']
    : ['luxury swimming pools', 'landscapes & outdoor spaces', 'architectural water features'], [lang]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!window.location.hash) return;
    window.requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView({ block: 'start' }));
  }, []);

  useEffect(() => {
    setPhraseIndex(0);
    setTypedText('');
    setDeleting(false);
  }, [lang]);

  useEffect(() => {
    const phrase = typingPhrases[phraseIndex];
    const finishedTyping = !deleting && typedText === phrase;
    const finishedDeleting = deleting && typedText === '';
    const delay = finishedTyping ? 1800 : finishedDeleting ? 320 : deleting ? 42 : 76;

    const timer = window.setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
      } else if (finishedDeleting) {
        setDeleting(false);
        setPhraseIndex((current) => (current + 1) % typingPhrases.length);
      } else {
        setTypedText(phrase.slice(0, typedText.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, phraseIndex, typedText, typingPhrases]);

  return (
    <div className="neo-home">
      <section className="neo-hero" id="top">
        <div className="neo-hero-video-bg" aria-hidden="true">
          <img src="/media/ai-pool-hero-poster.png" alt="" />
        </div>
        <div className="neo-hero-dark-overlay" />
        <div className="app-container neo-hero-grid">
          <div className="neo-hero-copy">
            <Badge variant="outline" className="neo-eyebrow"><Sparkles size={16} /> {t.heroBadge}</Badge>
            <h1 className="neo-typing-heading">
              <span className="neo-heading-static">{lang === 'ar' ? 'نصمّم وننفّذ' : 'We design & build'}</span>
              <span className="neo-typed-line" aria-live="polite">
                {typedText}<i className="neo-type-caret" aria-hidden="true" />
              </span>
              <small>{lang === 'ar' ? 'في دولة الإمارات' : 'across the UAE'}</small>
            </h1>
            <p>{t.heroDescription}</p>
            <div className="neo-actions">
              <a href="#contact" className="neo-btn neo-btn-primary">
                {t.heroCtaContact}<ArrowIcon size={18} />
              </a>
              <a href="#projects" className="neo-text-link">
                <span className="neo-play"><Play size={14} fill="currentColor" /></span>
                {t.heroCtaProjects}
              </a>
            </div>
            <div className="neo-trust-row">
              <span><CircleCheck size={17} /> {lang === 'ar' ? 'ضمانات تنفيذ معتمدة' : 'Certified warranties'}</span>
              <span><CircleCheck size={17} /> {lang === 'ar' ? 'معاينة ميدانية' : 'On-site consultation'}</span>
            </div>
          </div>

        </div>
      </section>

      <div className="neo-marquee" aria-label={lang === 'ar' ? 'خدماتنا' : 'Our services'}>
        <div>
          {[...SERVICES_DATA, ...SERVICES_DATA].map((service, index) => (
            <span key={`${service.id}-${index}`}>✦ {lang === 'ar' ? service.title : service.titleEn}</span>
          ))}
        </div>
      </div>

      <section className="neo-section neo-services" id="services">
        <div className="app-container">
          <div className="neo-section-head">
            <div>
              <Badge variant="soft" className="neo-kicker">{t.homeServicesTag}</Badge>
              <h2>{t.homeServicesTitle}</h2>
              <p>{t.homeServicesDesc}</p>
            </div>
            <a href="#contact" className="neo-outline-btn">{lang === 'ar' ? 'اطلب الخدمة المناسبة' : 'Request the right service'}<ArrowIcon size={17} /></a>
          </div>
          <div className="neo-service-grid">
            {SERVICES_DATA.map((service, index) => (
              <Card className={`neo-service-card neo-card-${index + 1}`} key={service.id}>
                <div className="neo-service-number">0{index + 1}</div>
                <div className="neo-service-image"><img src={serviceImages[index % serviceImages.length]} alt={lang === 'ar' ? service.title : service.titleEn} /></div>
                <h3>{lang === 'ar' ? service.title : service.titleEn}</h3>
                <p>{lang === 'ar' ? service.shortDesc : service.shortDescEn}</p>
                <a href="#contact">{lang === 'ar' ? 'اطلب هذه الخدمة' : 'Request this service'} <ArrowIcon size={16} /></a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="neo-section neo-feature" id="about">
        <div className="app-container neo-feature-grid">
          <div className="neo-feature-collage">
            <img className="neo-feature-main" src="/projects/project-2/after/after-9.jpg" alt="" />
            <img className="neo-feature-small" src="/projects/project-1/after/after-6.jpg" alt="" />
            <div className="neo-years"><strong>+{new Date().getFullYear() - Number(COMPANY_CONFIG.establishedYear)}</strong><span>{lang === 'ar' ? 'سنوات خبرة' : 'years of craft'}</span></div>
          </div>
          <div className="neo-feature-copy">
            <Badge variant="soft" className="neo-kicker">{t.homeWhyTag}</Badge>
            <h2>{t.homeWhyTitle}</h2>
            <p>{t.homeWhyDesc}</p>
            <ul>
              {WHY_PILLARS.slice(0, 4).map((pillar) => (
                <li key={pillar.number}><span><Check size={16} /></span>{lang === 'ar' ? pillar.title : pillar.titleEn}</li>
              ))}
            </ul>
            <a href="#process" className="neo-btn neo-btn-dark">{lang === 'ar' ? 'اكتشف طريقة عملنا' : 'Discover our process'}<ArrowIcon size={18} /></a>
          </div>
        </div>
      </section>

      <section className="neo-section neo-projects" id="projects">
        <div className="app-container">
          <div className="neo-section-head neo-centered-head">
            <div>
              <Badge variant="soft" className="neo-kicker">{lang === 'ar' ? 'مشاريع مختارة' : 'Selected work'}</Badge>
              <h2>{lang === 'ar' ? 'مساحات تحوّلت إلى تجارب استثنائية' : 'Spaces transformed into exceptional experiences'}</h2>
            </div>
          </div>
          <div className="neo-project-grid">
            {PROJECTS_DATA.map((project, index) => (
              <a className="neo-project-card" href="#contact" key={project.id}>
                <img src={projectImages[index % projectImages.length]} alt={lang === 'ar' ? project.title : project.titleEn} />
                <div className="neo-project-overlay">
                  <small>{lang === 'ar' ? project.location : project.locationEn}</small>
                  <h3>{lang === 'ar' ? project.title : project.titleEn}</h3>
                  <span>{lang === 'ar' ? project.categoryLabel : project.categoryLabelEn}<ArrowIcon size={16} /></span>
                </div>
              </a>
            ))}
          </div>
          <div className="neo-center-action"><a href="#contact" className="neo-outline-btn">{lang === 'ar' ? 'نفّذ مشروعًا مشابهًا' : 'Build a similar project'}<ArrowIcon size={17} /></a></div>
        </div>
      </section>

      <section className="neo-section neo-process" id="process">
        <div className="app-container">
          <div className="neo-section-head">
            <div><Badge variant="outline" className="neo-kicker">{lang === 'ar' ? 'طريقة العمل' : 'How it works'}</Badge><h2>{lang === 'ar' ? 'رحلة واضحة من الفكرة إلى التسليم' : 'A clear journey from idea to handover'}</h2></div>
          </div>
          <div className="neo-process-grid">
            {PROCESS_STAGES.map((stage) => (
              <article key={stage.step}>
                <span>{stage.step}</span>
                <h3>{lang === 'ar' ? stage.title : stage.titleEn}</h3>
                <p>{lang === 'ar' ? stage.description : stage.descriptionEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="neo-section neo-transform">
        <div className="app-container neo-transform-grid">
          <div className="neo-transform-copy">
            <Badge variant="soft" className="neo-kicker">{lang === 'ar' ? 'قبل وبعد التنفيذ' : 'Before & after'}</Badge>
            <h2>{lang === 'ar' ? 'النتيجة التي تتحدث عن نفسها' : 'Results that speak for themselves'}</h2>
            <p>{lang === 'ar' ? 'نحوّل المساحات الخام إلى حدائق ومسابح متكاملة بتفاصيل مدروسة وجودة تنفيذ تظهر في كل زاوية.' : 'We transform raw spaces into complete landscapes and pools, with considered details and visible craftsmanship.'}</p>
            <div className="neo-proof"><ShieldCheck size={24} /><span>{lang === 'ar' ? 'إشراف هندسي وجودة موثقة في كل مرحلة' : 'Engineering supervision and documented quality at every stage'}</span></div>
            <a href="#contact" className="neo-btn neo-btn-primary">{lang === 'ar' ? 'اطلب تحولًا مشابهًا' : 'Request a similar transformation'}<ArrowIcon size={18} /></a>
          </div>
          <div className="neo-before-after">
            <div><img src="/projects/project-1/before/before-1.jpg" alt="Before" /><span>{lang === 'ar' ? 'قبل' : 'Before'}</span></div>
            <div><img src="/projects/project-1/after/after-1.jpg" alt="After" /><span>{lang === 'ar' ? 'بعد' : 'After'}</span></div>
          </div>
        </div>
      </section>

      <section className="neo-landing-contact" id="contact">
        <LandingLeadForm />
      </section>
    </div>
  );
};
