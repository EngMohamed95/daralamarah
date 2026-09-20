import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_CONFIG, SERVICES_DATA } from '../data/companyData';
import { useSite } from '../context/SiteContext';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { UIButton } from './ui/button';

export const LandingLeadForm: React.FC = () => {
  const { lang } = useSite();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(lang === 'ar' ? SERVICES_DATA[0].title : SERVICES_DATA[0].titleEn || SERVICES_DATA[0].title);
  const [location, setLocation] = useState(lang === 'ar' ? 'دبي' : 'Dubai');

  const submitLead = (event: React.FormEvent) => {
    event.preventDefault();
    const message = lang === 'ar'
      ? `مرحباً دار العمارة، أود طلب استشارة لمشروعي.\nالاسم: ${name}\nالهاتف: ${phone}\nالموقع: ${location}\nالخدمة: ${service}`
      : `Hello Dar Al Amarah, I would like a project consultation.\nName: ${name}\nPhone: ${phone}\nLocation: ${location}\nService: ${service}`;
    window.open(`https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="app-container landing-contact-grid">
      <div className="landing-contact-copy">
        <Badge variant="outline">{lang === 'ar' ? 'استشارة مجانية لمشروعك' : 'Free project consultation'}</Badge>
        <h2>{lang === 'ar' ? 'ابدأ مشروعك بخطوة واضحة' : 'Start your project with clarity'}</h2>
        <p>{lang === 'ar' ? 'اترك بياناتك وسيفتح واتساب برسالة جاهزة لفريقنا الهندسي. نراجع الاحتياج ونتواصل معك لتحديد المعاينة.' : 'Share your details and WhatsApp will open with a ready-to-send brief for our engineering team.'}</p>
        <ul>
          <li><CheckCircle2 />{lang === 'ar' ? 'رد سريع من فريق متخصص' : 'Fast response from a specialist'}</li>
          <li><CheckCircle2 />{lang === 'ar' ? 'معاينة ودراسة أولية للموقع' : 'Initial site and feasibility review'}</li>
          <li><CheckCircle2 />{lang === 'ar' ? 'عرض نطاق وسعر واضح' : 'Clear scope and quotation'}</li>
        </ul>
        <div className="landing-contact-details">
          <a href={`tel:${COMPANY_CONFIG.phoneDisplay.replace(/\s+/g, '')}`}><Phone /> <span dir="ltr">{COMPANY_CONFIG.phoneDisplay}</span></a>
          <a href={`mailto:${COMPANY_CONFIG.email}`}><Mail /> {COMPANY_CONFIG.email}</a>
          <span><MapPin /> {lang === 'ar' ? COMPANY_CONFIG.address : COMPANY_CONFIG.addressEn}</span>
        </div>
      </div>

      <Card className="landing-lead-card">
        <CardContent>
          <form onSubmit={submitLead}>
            <div className="landing-form-grid">
              <div>
                <label className="form-label" htmlFor="lead-name">{lang === 'ar' ? 'الاسم' : 'Name'}</label>
                <input id="lead-name" className="form-input" value={name} onChange={(event) => setName(event.target.value)} required placeholder={lang === 'ar' ? 'اكتب اسمك' : 'Your name'} />
              </div>
              <div>
                <label className="form-label" htmlFor="lead-phone">{lang === 'ar' ? 'رقم الهاتف' : 'Phone'}</label>
                <input id="lead-phone" className="form-input" value={phone} onChange={(event) => setPhone(event.target.value)} required type="tel" dir="ltr" placeholder="+971" />
              </div>
              <div>
                <label className="form-label" htmlFor="lead-location">{lang === 'ar' ? 'الإمارة' : 'Emirate'}</label>
                <select id="lead-location" className="form-select" value={location} onChange={(event) => setLocation(event.target.value)}>
                  {(lang === 'ar' ? ['دبي', 'أبوظبي', 'الشارقة', 'عجمان', 'رأس الخيمة', 'الفجيرة'] : ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah']).map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>
              <div>
                <label className="form-label" htmlFor="lead-service">{lang === 'ar' ? 'الخدمة المطلوبة' : 'Required service'}</label>
                <select id="lead-service" className="form-select" value={service} onChange={(event) => setService(event.target.value)}>
                  {SERVICES_DATA.map((item) => <option key={item.id}>{lang === 'ar' ? item.title : item.titleEn}</option>)}
                </select>
              </div>
            </div>
            <UIButton type="submit" size="lg" className="landing-submit"><MessageCircle />{lang === 'ar' ? 'اطلب استشارة عبر واتساب' : 'Request consultation on WhatsApp'}</UIButton>
            <small>{lang === 'ar' ? 'لن يتم إرسال أي بيانات قبل تأكيدك داخل واتساب.' : 'Nothing is sent until you confirm inside WhatsApp.'}</small>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
