import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SheetHeader } from '../components/SheetHeader';
import { COMPANY_CONFIG } from '../data/companyData';
import { useSite } from '../context/SiteContext';

interface PolicySection {
  title: string;
  titleEn: string;
  body: string;
  bodyEn: string;
}

const SECTIONS: PolicySection[] = [
  {
    title: 'مقدمة',
    titleEn: 'Introduction',
    body: `تحترم ${COMPANY_CONFIG.legalName} خصوصية زوار موقعها الإلكتروني وعملائها. توضح هذه السياسة نوع البيانات التي نجمعها، وكيفية استخدامها وحمايتها عند تواصلكم معنا عبر الموقع أو واتساب أو وسائل التواصل الاجتماعي.`,
    bodyEn: `${COMPANY_CONFIG.legalNameEn} respects the privacy of our website visitors and clients. This policy explains what data we collect and how it is used and protected when you contact us through the website, WhatsApp, or social media.`,
  },
  {
    title: 'البيانات التي نجمعها',
    titleEn: 'Information We Collect',
    body: 'عند تعبئة نموذج التواصل أو طلب استشارة أو مراسلتنا عبر واتساب، قد نجمع: الاسم، رقم الهاتف، البريد الإلكتروني، وتفاصيل المشروع أو الاستفسار الذي ترغبون بمناقشته. كما نستخدم أدوات تحليل وقياس إعلانات (مثل Google Ads وMeta Pixel) لجمع بيانات غير شخصية حول كيفية استخدام الزوار للموقع، مثل الصفحات التي تمت زيارتها ومصدر الزيارة.',
    bodyEn: 'When you fill out a contact form, request a consultation, or message us on WhatsApp, we may collect: your name, phone number, email address, and details about the project or inquiry you wish to discuss. We also use analytics and ad-measurement tools (such as Google Ads and Meta Pixel) to collect non-personal data about how visitors use the site, such as pages viewed and traffic source.',
  },
  {
    title: 'كيفية استخدام البيانات',
    titleEn: 'How We Use Your Information',
    body: 'نستخدم البيانات المقدمة فقط للرد على استفساراتكم، وتقديم عروض الأسعار ودراسات الموقع، والتواصل بخصوص مشاريعكم. لا نقوم ببيع أو تأجير بياناتكم الشخصية لأي طرف ثالث لأغراض تسويقية.',
    bodyEn: 'We use the information you provide only to respond to your inquiries, prepare quotations and site studies, and communicate about your project. We do not sell or rent your personal data to any third party for marketing purposes.',
  },
  {
    title: 'ملفات تعريف الارتباط والإعلانات',
    titleEn: 'Cookies & Advertising',
    body: 'يستخدم الموقع ملفات تعريف الارتباط (Cookies) وأدوات مثل Google Tag لقياس أداء الحملات الإعلانية وفهم تفاعل الزوار مع الموقع. يمكنكم التحكم في ملفات تعريف الارتباط أو تعطيلها من إعدادات المتصفح الخاص بكم في أي وقت.',
    bodyEn: 'This website uses cookies and tools such as Google Tag to measure advertising campaign performance and understand visitor interaction with the site. You can control or disable cookies at any time through your browser settings.',
  },
  {
    title: 'مشاركة البيانات',
    titleEn: 'Data Sharing',
    body: 'قد نشارك بياناتكم مع مزودي خدمات موثوقين (مثل خدمات الاستضافة أو منصات التواصل مثل واتساب) فقط بالقدر اللازم لتقديم خدماتنا لكم، وهم ملزمون بالحفاظ على سرية هذه البيانات.',
    bodyEn: 'We may share your data with trusted service providers (such as hosting services or messaging platforms like WhatsApp) only to the extent necessary to deliver our services to you, and they are obligated to keep this data confidential.',
  },
  {
    title: 'حقوقكم',
    titleEn: 'Your Rights',
    body: 'يحق لكم طلب الاطلاع على بياناتكم المحفوظة لدينا، أو تصحيحها، أو طلب حذفها، وذلك بمراسلتنا عبر البريد الإلكتروني أو رقم الواتساب الموضحين أدناه.',
    bodyEn: 'You have the right to request access to, correction of, or deletion of your data held by us by contacting us via the email or WhatsApp number listed below.',
  },
  {
    title: 'التواصل معنا',
    titleEn: 'Contact Us',
    body: `لأي استفسار بخصوص سياسة الخصوصية هذه، يرجى التواصل معنا عبر البريد الإلكتروني ${COMPANY_CONFIG.email} أو عبر واتساب على ${COMPANY_CONFIG.phoneDisplay}.`,
    bodyEn: `For any questions regarding this privacy policy, please contact us at ${COMPANY_CONFIG.email} or via WhatsApp at ${COMPANY_CONFIG.phoneDisplay}.`,
  },
];

export const PrivacyPolicy: React.FC = () => {
  const { lang } = useSite();
  const BackArrowIcon = lang === 'ar' ? ArrowRight : ArrowLeft;

  return (
    <div className="privacy-policy-page" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
      <div className="app-container" style={{ maxWidth: '80ch' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontFamily: 'var(--font-display)',
            fontSize: '0.9rem',
            color: 'var(--color-copper-light)',
            marginBlockEnd: '1.5rem',
          }}
        >
          <BackArrowIcon size={16} />
          <span>{lang === 'ar' ? 'العودة إلى الموقع الرئيسي' : 'Back to the main site'}</span>
        </Link>

        <SheetHeader
          sheetCode="L—01"
          title={lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          subtitle={
            lang === 'ar'
              ? 'كيف نجمع بياناتكم ونستخدمها ونحميها عند تواصلكم مع دار العمارة.'
              : 'How we collect, use, and protect your data when you contact Dar Al Amarah.'
          }
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
          {SECTIONS.map((section, idx) => (
            <section key={idx}>
              <h2
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--color-copper-light)',
                  marginBlockEnd: '0.6rem',
                }}
              >
                {lang === 'ar' ? section.title : section.titleEn}
              </h2>
              <p
                style={{
                  fontSize: '0.96rem',
                  lineHeight: '1.75',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {lang === 'ar' ? section.body : section.bodyEn}
              </p>
            </section>
          ))}
        </div>

        <p
          style={{
            marginBlockStart: '3rem',
            paddingBlockStart: '1.5rem',
            borderBlockStart: '1px solid var(--color-border-subtle)',
            fontSize: '0.8rem',
            color: 'var(--color-text-muted)',
          }}
        >
          {lang === 'ar' ? 'آخر تحديث: سبتمبر 2026' : 'Last updated: September 2026'}
        </p>
      </div>
    </div>
  );
};
