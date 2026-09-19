import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SheetHeader } from '../components/SheetHeader';
import { CropMarks } from '../components/CropMarks';
import { Button } from '../components/Button';
import { COMPANY_CONFIG, SERVICES_DATA } from '../data/companyData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  Send,
  Compass,
  CheckCircle,
} from 'lucide-react';
import { useSite } from '../context/SiteContext';

/**
 * =========================================================================
 * متغيرات التواصل الرئيسية القابلة للتعديل بسهولة
 * =========================================================================
 */
const CONTACT_PHONE_DISPLAY = COMPANY_CONFIG.phoneDisplay; // رقم الهاتف للعرض
const WHATSAPP_NUMBER_RAW = COMPANY_CONFIG.whatsappNumber; // رقم الواتساب بدون مسافات أو رموز لـ wa.me
const CONTACT_EMAIL = COMPANY_CONFIG.email;
const INSTAGRAM_URL = COMPANY_CONFIG.instagram;
const FACEBOOK_URL = COMPANY_CONFIG.facebook;

export const Contact: React.FC = () => {
  const { lang, t } = useSite();
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState(
    preselectedService || (lang === 'en' ? SERVICES_DATA[0].titleEn || SERVICES_DATA[0].title : SERVICES_DATA[0].title)
  );
  const [projectNotes, setProjectNotes] = useState('');
  const [cityLocation, setCityLocation] = useState(lang === 'en' ? 'Dubai' : 'دبي');

  // Update selectedService if query parameter changes
  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the WhatsApp message with architectural clarity
    const waMessage =
      lang === 'ar'
        ? `السلام عليكم فريق دار العمارة،
أود طلب دراسة وعرض سعر سريع لمشروعي:

• الاسم: ${fullName || 'غير محدد'}
• رقم الهاتف: ${phoneNumber || 'غير محدد'}
• الإمارة / الموقع: ${cityLocation}
• الخدمة المطلوبة: ${selectedService}
• الملاحظات وتفاصيل المشروع: ${projectNotes ? projectNotes : 'لا توجد ملاحظات إضافية'}

يرجى التواصل معي لمناقشة التفاصيل وتحديد موعد الاستشارة. شكراً لكم.`
        : `Hello Dar Al Amarah Team,
I would like to request an engineering consultation and quote for my project:

• Name: ${fullName || 'Not specified'}
• Phone / WhatsApp: ${phoneNumber || 'Not specified'}
• Location / Emirate: ${cityLocation}
• Scope / Service: ${selectedService}
• Project Details: ${projectNotes ? projectNotes : 'No additional notes provided'}

Please reach out to discuss plans and schedule a site survey. Thank you.`;

    const encodedText = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER_RAW}?text=${encodedText}`;

    // Open WhatsApp directly
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-page" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
      <div className="app-container">
        {/* Architectural Sheet Header */}
        <SheetHeader
          sheetCode="A—05"
          title={t.contactPageTitle}
          subtitle={t.contactPageDesc}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 3rem)',
            alignItems: 'flex-start',
            marginBlockEnd: '4rem',
          }}
        >
          {/* Right Column: WhatsApp Direct Quote Generator Form */}
          <div
            className="crop-box"
            style={{
              backgroundColor: 'var(--color-bg-surface)',
              border: '1.5px solid var(--color-copper)',
              padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            }}
          >
            <CropMarks size={12} />

            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.85rem',
                color: 'var(--color-copper-light)',
                borderBlockEnd: '1px dashed var(--color-border-subtle)',
                paddingBlockEnd: '0.75rem',
                marginBlockEnd: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>{lang === 'ar' ? 'نموذج التسعير الفوري' : 'Instant Quote Generator'}</span>
              <span>FORM: RFQ-DIRECT-WA</span>
            </div>

            <h2
              style={{
                fontSize: '1.5rem',
                color: 'var(--color-text-primary)',
                marginBlockEnd: '0.5rem',
              }}
            >
              {lang === 'ar' ? 'طلب عرض سعر سريع' : 'Direct Project Quote Request'}
            </h2>

            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--color-text-secondary)',
                marginBlockEnd: '1.75rem',
              }}
            >
              {lang === 'ar'
                ? 'املأ البيانات التالية، وسيتم فتح محادثة واتساب رسمية ومباشرة مع مهندس دار العمارة متضمنة كافة تفاصيل طلبك:'
                : 'Fill in your project criteria below to launch a direct WhatsApp discussion with our engineering desk with your request pre-formatted:'}
            </p>

            <form onSubmit={handleSubmit} id="quote-request-form">
              {/* Full Name */}
              <div style={{ marginBlockEnd: '1.25rem' }}>
                <label htmlFor="fullName" className="form-label">
                  {lang === 'ar' ? 'الاسم الكريم *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={lang === 'ar' ? 'مثال: م. أحمد الشامسي' : 'e.g. John Doe / Eng. Al Shamsi'}
                  className="form-input"
                />
              </div>

              {/* Phone Number */}
              <div style={{ marginBlockEnd: '1.25rem' }}>
                <label htmlFor="phoneNumber" className="form-label">
                  {lang === 'ar' ? 'رقم الهاتف / الواتساب للتواصل *' : 'Phone / WhatsApp Number *'}
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder={lang === 'ar' ? 'مثال: 050 123 4567' : 'e.g. +971 50 123 4567'}
                  className="form-input"
                  dir="ltr"
                  style={{ textAlign: lang === 'ar' ? 'end' : 'start' }}
                />
              </div>

              {/* Location (Emirate) */}
              <div style={{ marginBlockEnd: '1.25rem' }}>
                <label htmlFor="cityLocation" className="form-label">
                  {lang === 'ar' ? 'موقع المشروع (الإمارة)' : 'Project Location (Emirate)'}
                </label>
                <select
                  id="cityLocation"
                  value={cityLocation}
                  onChange={(e) => setCityLocation(e.target.value)}
                  className="form-select"
                >
                  {lang === 'ar' ? (
                    <>
                      <option value="دبي">دبي</option>
                      <option value="أبوظبي">أبوظبي</option>
                      <option value="الشارقة">الشارقة</option>
                      <option value="عجمان">عجمان</option>
                      <option value="رأس الخيمة">رأس الخيمة</option>
                      <option value="أم القيوين">أم القيوين</option>
                      <option value="الفجيرة">الفجيرة</option>
                    </>
                  ) : (
                    <>
                      <option value="Dubai">Dubai</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                      <option value="Umm Al Quwain">Umm Al Quwain</option>
                      <option value="Fujairah">Fujairah</option>
                    </>
                  )}
                </select>
              </div>

              {/* Service Selection */}
              <div style={{ marginBlockEnd: '1.25rem' }}>
                <label htmlFor="selectedService" className="form-label">
                  {lang === 'ar' ? 'الخدمة أو نطاق العمل المطلوب *' : 'Required Scope of Service *'}
                </label>
                <select
                  id="selectedService"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="form-select"
                >
                  <option value={lang === 'ar' ? 'مشروع متكامل (مسبح + لاندسكيب + نوافير)' : 'Turnkey Package (Pool + Landscape + Water Features)'}>
                    {lang === 'ar'
                      ? 'مشروع متكامل (مسبح + لاندسكيب + نوافير ومساحات خارجية)'
                      : 'Turnkey Master Package (Pool, Landscape, Pergolas & Water Features)'}
                  </option>
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={lang === 'en' && srv.titleEn ? srv.titleEn : srv.title}>
                      {srv.index} — {lang === 'en' && srv.titleEn ? srv.titleEn : srv.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Notes */}
              <div style={{ marginBlockEnd: '1.75rem' }}>
                <label htmlFor="projectNotes" className="form-label">
                  {lang === 'ar'
                    ? 'ملاحظات أو مواصفات إضافية (المساحة التقريبية، حالة المشروع، إلخ)'
                    : 'Additional Notes & Specs (Approximate area, project stage, etc.)'}
                </label>
                <textarea
                  id="projectNotes"
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  placeholder={
                    lang === 'ar'
                      ? 'مثال: فيلا جديدة قيد الإنشاء في دبي، نرغب بمسبح إنفينيتي 12×5 متر مع منطقة شواء وبرجولة تظليل...'
                      : 'e.g., New villa under construction in Dubai, looking for a 12x5m infinity pool, barbecue sunken lounge, and pergola...'
                  }
                  className="form-textarea"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="btn-submit-whatsapp-quote"
                className="btn-base btn-primary"
                style={{
                  width: '100%',
                  paddingBlock: '0.9rem',
                  fontSize: '1.05rem',
                }}
              >
                <MessageCircle size={20} />
                <span>{lang === 'ar' ? 'إرسال الطلب عبر الواتساب وتجهيز العرض' : 'Send Request via WhatsApp'}</span>
              </button>

              <div
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--color-text-muted)',
                  textAlign: 'center',
                  marginBlockStart: '0.85rem',
                }}
              >
                {lang === 'ar'
                  ? 'سيفتح تطبيق الواتساب مباشرة مع نص رسالتك المعبأة لتأكيد الإرسال فوراً.'
                  : 'WhatsApp will open directly with your formatted request ready to send immediately.'}
              </div>
            </form>
          </div>

          {/* Left Column: Official Contact Channels & Social Media */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Direct Contact Card */}
            <div
              className="crop-box"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
                padding: '2rem',
              }}
            >
              <CropMarks size={10} />

              <h3
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: '1.3rem',
                  marginBlockEnd: '1.25rem',
                  borderBlockEnd: '1px dashed var(--color-border-subtle)',
                  paddingBlockEnd: '0.65rem',
                }}
              >
                {lang === 'ar' ? 'بيانات التواصل الرسمية' : 'Official Contact Channels'}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Address */}
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <MapPin size={20} style={{ color: 'var(--color-copper)', flexShrink: 0, marginBlockStart: '0.2rem' }} />
                  <div>
                    <div style={{ color: 'var(--color-copper-light)', fontSize: '0.82rem', fontFamily: 'var(--font-display)' }}>
                      {lang === 'ar' ? 'المقر الرئيسي' : 'Head Office'}
                    </div>
                    <div style={{ color: 'var(--color-text-primary)', fontSize: '0.98rem' }}>
                      {COMPANY_CONFIG.nameEn} — {lang === 'ar' ? COMPANY_CONFIG.address : COMPANY_CONFIG.addressEn}
                    </div>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <Phone size={20} style={{ color: 'var(--color-copper)', flexShrink: 0, marginBlockStart: '0.2rem' }} />
                  <div>
                    <div style={{ color: 'var(--color-copper-light)', fontSize: '0.82rem', fontFamily: 'var(--font-display)' }}>
                      {lang === 'ar' ? 'الاتصال الهاتفي والواتساب المباشر' : 'Direct Phone & WhatsApp'}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBlockStart: '0.25rem' }}>
                      <a
                        href={`tel:${CONTACT_PHONE_DISPLAY.replace(/\s+/g, '')}`}
                        style={{ color: 'var(--color-text-primary)', fontWeight: 600, direction: 'ltr' }}
                      >
                        {CONTACT_PHONE_DISPLAY}
                      </a>
                      <span style={{ color: 'var(--color-text-muted)' }}>|</span>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER_RAW}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--color-copper)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontWeight: 600 }}
                      >
                        <MessageCircle size={15} />
                        <span>{lang === 'ar' ? 'محادثة واتساب' : 'WhatsApp Chat'}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <Mail size={20} style={{ color: 'var(--color-copper)', flexShrink: 0, marginBlockStart: '0.2rem' }} />
                  <div>
                    <div style={{ color: 'var(--color-copper-light)', fontSize: '0.82rem', fontFamily: 'var(--font-display)' }}>
                      {lang === 'ar' ? 'البريد الإلكتروني المعتمد للمشاريع' : 'Official Project Inquiries'}
                    </div>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      style={{ color: 'var(--color-text-primary)', fontSize: '0.98rem' }}
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                  <Clock size={20} style={{ color: 'var(--color-copper)', flexShrink: 0, marginBlockStart: '0.2rem' }} />
                  <div>
                    <div style={{ color: 'var(--color-copper-light)', fontSize: '0.82rem', fontFamily: 'var(--font-display)' }}>
                      {lang === 'ar' ? 'ساعات العمل الرسمية' : 'Operating Hours'}
                    </div>
                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem' }}>
                      {lang === 'ar' ? COMPANY_CONFIG.workingHours : COMPANY_CONFIG.workingHoursEn}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Channels */}
            <div
              className="crop-box"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
                padding: '2rem',
              }}
            >
              <CropMarks size={10} />

              <h3
                style={{
                  color: 'var(--color-text-primary)',
                  fontSize: '1.25rem',
                  marginBlockEnd: '1rem',
                }}
              >
                {lang === 'ar' ? 'قنوات التواصل الاجتماعي' : 'Social Media Profiles'}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border-subtle)',
                    color: 'var(--color-text-primary)',
                    textDecoration: 'none',
                  }}
                  className="hover-copper"
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Instagram size={20} style={{ color: 'var(--color-copper)' }} />
                    <span>{lang === 'ar' ? 'إنستغرام دار العمارة' : 'Instagram'}</span>
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                    {COMPANY_CONFIG.instagramHandle}
                  </span>
                </a>

                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'var(--color-bg-primary)',
                    border: '1px solid var(--color-border-subtle)',
                    color: 'var(--color-text-primary)',
                    textDecoration: 'none',
                  }}
                  className="hover-copper"
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Facebook size={20} style={{ color: 'var(--color-copper)' }} />
                    <span>{lang === 'ar' ? 'فيسبوك دار العمارة' : 'Facebook'}</span>
                  </span>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                    dar.alemara.uae
                  </span>
                </a>
              </div>
            </div>

            {/* Scope of Services summary badge */}
            <div
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)',
                padding: '1.25rem',
                fontSize: '0.88rem',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6',
              }}
            >
              <div style={{ color: 'var(--color-copper)', fontWeight: 600, marginBlockEnd: '0.35rem' }}>
                {lang === 'ar' ? 'تغطية شاملة لكافة إمارات الدولة' : 'Nationwide Turnkey Coverage'}
              </div>
              <div>
                {lang === 'ar'
                  ? 'نقوم بزيارات مسح ومعاينة ميدانية لكافة المواقع والفلل السكنية والمشاريع التجارية في كافة أنحاء دولة الإمارات.'
                  : 'We carry out topographical surveys and initial site consultations for private residences and hospitality projects across all seven emirates.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
