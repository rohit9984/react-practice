import { useState, useEffect, useRef} from 'react';
import {
  Feather,
  Check,
  Loader2,
  AlertCircle,
  Download,
  Camera

  
} from 'lucide-react';

//"https://lucide.dev/guide/react/" ___________________________That is use for icon


// ___________________Template_________________________

type TemplateName = 'modern' | 'classic' | 'minimal'; 


interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
}

interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
}

interface EducationEntry {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

interface ResumeData {
  template: TemplateName;
  personalInfo: PersonalInfo;
  summary: string;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  skills: string[];
}

/* ── Storage API ────────────────────────────────────────────────────────── */


declare global {
  interface Window {
    storage?: {
      get: (key: string, useUserScope: boolean) => string | null;
      set: (key: string, value: string, useUserScope: boolean) => void;
    };
  }
}

const STORAGE_KEY = 'folio-resume-data';

/* ── Default data ───────────────────────────────────────────────────────── */

const defaultData: ResumeData = {
  template: 'modern',
  personalInfo: {
    name: 'Alex Morgan',
    title: 'Senior Product Designer',
    email: 'alex.morgan@email.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    website: 'alexmorgan.design',
  },
  summary:
    'Product designer with 8+ years of experience leading end-to-end design for B2B SaaS products. Passionate about translating complex problems into intuitive, elegant interfaces that drive measurable business outcomes.',
  experience: [
    {
      id: 'exp1',
      company: 'Lumina Labs',
      role: 'Senior Product Designer',
      location: 'San Francisco, CA',
      startDate: 'Jan 2021',
      endDate: '',
      current: true,
      bullets: [
        'Led redesign of the core analytics dashboard, increasing daily active usage by 40%',
           'Established the company-wide design system adopted across 12 product teams',
        'Mentored 3 junior designers and ran weekly design critique sessions',
      ],
    },
    {
      id: 'exp2',
      company: 'Nimbus Tech',
      role: 'Product Designer',
      location: 'Remote',
      startDate: 'Jun 2018',
      endDate: 'Dec 2020',
      current: false,
      bullets: [
        'Designed the onboarding flow that reduced time-to-first-value by 60%',
        'Collaborated with engineering to ship 20+ features across web and mobile',
      ],
    },
  ],
  education: [
    {
      id: 'edu1',
      school: 'Rhode Island School of Design',
      degree: 'BFA',
      field: 'Graphic Design',
      startDate: '2012',
      endDate: '2016',
    },
  ],

   skills: [
    'Figma',
    'Prototyping',
    'Design Systems',
    'User Research',
    'Wireframing',
    'Accessibility',
    'Design Thinking',
  ],
};

/* ── Helpers ────────────────────────────────────────────────────────────── */

function genId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function dateRange(start: string, end: string, current?: boolean): string {
  if (current) return `${start} – Present`;
  if (start && end) return `${start} – ${end}`;
  return start || end || '';
}

/* ── Styles ──────────────────────────────────────────────────────────────── */

const STYLES = `
*{box-sizing:border-box;margin:0;padding:0}
.folio-app{display:flex;flex-direction:column;height:100vh;overflow:hidden;background:#eef0f3;color:#1a2332;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',sans-serif}
.folio-topbar{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 24px;background:#fff;border-bottom:1px solid #e0e3e8;flex-shrink:0;z-index:10}
.folio-topbar-left{display:flex;align-items:center;gap:14px}
.folio-topbar-center{display:flex;align-items:center}
.folio-topbar-right{display:flex;align-items:center;gap:12px}
.folio-brand{display:flex;align-items:center;gap:8px;font-size:20px;font-weight:700;color:#1f6f63;letter-spacing:-0.02em}
.folio-brand svg{stroke-width:2.2}
.folio-status{display:flex;align-items:center;gap:5px;padding:4px 11px;border-radius:20px;font-size:12px;font-weight:500;transition:all .25s ease;white-space:nowrap}
.folio-status.saved{background:#e8f5f0;color:#1f6f63}
.folio-status.saving{background:#fff8e1;color:#b8860b}
.folio-status.unsaved{background:#f3f4f6;color:#9ca3af}
.folio-switcher{display:flex;gap:2px;background:#f0f2f5;border-radius:24px;padding:3px}
.folio-switcher button{padding:6px 18px;border-radius:20px;border:none;background:transparent;cursor:pointer;font-size:13px;font-weight:500;color:#6b7280;transition:all .2s ease;font-family:inherit}

.folio-switcher button:hover{color:#1a2332}
.folio-switcher button.active{background:#1f6f63;color:#fff;font-weight:600}
.folio-export{display:flex;align-items:center;gap:7px;padding:8px 18px;background:#1a2332;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:13px;font-weight:600;font-family:inherit;transition:background .2s ease}
.folio-export:hover{background:#243447}
.folio-export:active{background:#152030}
.folio-main{display:flex;flex:1;overflow:hidden}
.folio-editor{width:420px;flex-shrink:0;overflow-y:auto;background:#fff;border-right:1px solid #e0e3e8}
.folio-editor::-webkit-scrollbar{width:6px}
.folio-editor::-webkit-scrollbar-thumb{background:#d1d5db;border-radius:3px}
.folio-preview{flex:1;overflow-y:auto;padding:40px 32px;display:flex;justify-content:center;background:#e8ebef}
.folio-preview::-webkit-scrollbar{width:8px}
.folio-preview::-webkit-scrollbar-thumb{background:#cdd2d8;border-radius:4px}
.folio-paper{background:#fff;border-radius:4px;width:100%;max-width:800px;min-height:1100px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.06),0 8px 32px rgba(0,0,0,.08)}
.folio-acc{border-bottom:1px solid #eceef1}
.folio-acc:last-child{border-bottom:none}
.folio-acc-head{display:flex;align-items:center;gap:10px;width:100%;padding:15px 20px;background:none;border:none;cursor:pointer;font-size:14px;font-weight:600;color:#1a2332;text-align:left;font-family:inherit;transition:background .15s ease}
.folio-acc-head:hover{background:#f8f9fb}
.folio-acc-icon{color:#1f6f63;flex-shrink:0}
.folio-acc-chevron{margin-left:auto;color:#9ca3af;transition:transform .25s ease;flex-shrink:0}

.folio-acc-chevron.open{transform:rotate(180deg)}
.folio-acc-body{padding:4px 20px 22px}
.folio-grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.folio-field{display:flex;flex-direction:column;gap:5px}
.folio-field.full{grid-column:1/-1}
.folio-label{font-size:11px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.05em}
.folio-input{padding:8px 12px;border:1px solid #d8dce0;border-radius:6px;font-size:13px;color:#1a2332;background:#fff;outline:none;font-family:inherit;transition:border-color .15s,box-shadow .15s}
.folio-input::placeholder{color:#b8bcc0}
.folio-input:focus{border-color:#1f6f63;box-shadow:0 0 0 3px rgba(31,111,99,.12)}
.folio-input:disabled{background:#f3f4f6;color:#9ca3af;cursor:not-allowed}
.folio-textarea{padding:10px 12px;border:1px solid #d8dce0;border-radius:6px;font-size:13px;color:#1a2332;background:#fff;outline:none;font-family:inherit;resize:vertical;min-height:90px;line-height:1.5;transition:border-color .15s,box-shadow .15s}
.folio-textarea:focus{border-color:#1f6f63;box-shadow:0 0 0 3px rgba(31,111,99,.12)}
.folio-check{display:flex;align-items:center;gap:7px;font-size:13px;color:#4b5563;cursor:pointer;user-select:none}
.folio-check input{accent-color:#1f6f63;width:15px;height:15px;cursor:pointer}
.folio-entry{border:1px solid #eceef1;border-radius:8px;padding:14px;margin-bottom:10px;background:#fafbfc}
.folio-entry-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;gap:8px}
.folio-entry-title{font-size:13px;font-weight:600;color:#1a2332;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.folio-entry-actions{display:flex;gap:3px;flex-shrink:0}

.folio-btn{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:1px solid #e0e3e8;border-radius:6px;background:#fff;cursor:pointer;color:#6b7280;transition:all .15s ease}
.folio-btn:hover{background:#f3f4f6;color:#1a2332}
.folio-btn.danger:hover{background:#fef2f2;color:#dc2626;border-color:#fca5a5}
.folio-btn:disabled{opacity:.4;cursor:not-allowed}
.folio-btn-add{display:flex;align-items:center;gap:6px;padding:7px 14px;border:1px dashed #1f6f63;border-radius:6px;background:transparent;color:#1f6f63;cursor:pointer;font-size:13px;font-weight:600;font-family:inherit;transition:background .15s}
.folio-btn-add:hover{background:#e8f5f0}
.folio-bullets{display:flex;flex-direction:column;gap:8px;margin-top:12px}
.folio-bullet-row{display:flex;gap:8px;align-items:center}
.folio-bullet-row .folio-input{flex:1}
.folio-bullet-dot{width:6px;height:6px;border-radius:50%;background:#1f6f63;flex-shrink:0}
.folio-skills-wrap{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px}
.folio-tag{display:flex;align-items:center;gap:6px;padding:5px 10px 5px 12px;background:#e8f5f0;border:1px solid #b3dccf;border-radius:20px;font-size:12px;color:#1f6f63;font-weight:500}
.folio-tag button{display:flex;align-items:center;background:none;border:none;cursor:pointer;color:#1f6f63;padding:0;opacity:.6;transition:opacity .15s}
.folio-tag button:hover{opacity:1}
.folio-skill-input{padding:8px 12px;border:1px solid #d8dce0;border-radius:6px;font-size:13px;width:100%;color:#1a2332;outline:none;font-family:inherit;transition:border-color .15s,box-shadow .15s}
.folio-skill-input:focus{border-color:#1f6f63;box-shadow:0 0 0 3px rgba(31,111,99,.12)}

.folio-sec-gap{height:14px}
@keyframes folio-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
.folio-spin{animation:folio-spin .8s linear infinite}
@media(max-width:900px){
  .folio-topbar{flex-wrap:wrap;gap:10px;padding:10px 16px}
  .folio-topbar-center{order:3;width:100%;justify-content:center}
  .folio-main{flex-direction:column}
  .folio-editor{width:100%;max-height:45vh;border-right:none;border-bottom:1px solid #e0e3e8}
  .folio-preview{padding:20px}
}
@media print{
  .no-print{display:none!important}
  .folio-main{display:block!important;overflow:visible!important}
  .folio-preview{overflow:visible!important;padding:0!important;background:none!important;display:block!important}
  .folio-paper{box-shadow:none!important;border-radius:0!important;max-width:none!important;width:100%!important;min-height:auto!important}
  *{-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important}
  @page{margin:.5in}
}

/* ══ MODERN TEMPLATE ═══════════════════════════════════════ */
.tpl-modern{display:flex;min-height:100%;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}
.tpl-mod-side{width:35%;background:#1a2332;color:#d1d5db;padding:36px 24px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.tpl-mod-side .tpl-name{color:#fff;font-size:22px;font-weight:700;line-height:1.2;margin-bottom:4px}
.tpl-mod-side .tpl-title{color:#4ecdc4;font-size:13px;margin-bottom:28px;font-weight:500}
.tpl-mod-side .tpl-sec{margin-bottom:26px}
.tpl-mod-side .tpl-sec-title{color:#4ecdc4;font-size:11px;text-transform:uppercase;letter-spacing:.12em;font-weight:600;margin-bottom:12px;padding-bottom:6px;border-bottom:1px solid #2d3e52}
.tpl-mod-contact-item{display:flex;align-items:center;gap:8px;margin-bottom:9px;font-size:12px;color:#b0b8c4;line-height:1.4;word-break:break-word}
.tpl-mod-contact-item svg{color:#4ecdc4;flex-shrink:0}
.tpl-mod-skill{display:inline-block;padding:4px 10px;background:#2d3e52;border-radius:12px;font-size:11px;color:#d1d5db;margin:0 4px 5px 0}
.tpl-mod-edu{margin-bottom:14px}
.tpl-mod-edu-school{font-size:13px;color:#fff;font-weight:600;line-height:1.3}
.tpl-mod-edu-degree{font-size:12px;color:#b0b8c4;margin-top:2px}
.tpl-mod-edu-date{font-size:11px;color:#7a8a9a;margin-top:2px}
.tpl-mod-main{flex:1;padding:36px 28px}
.tpl-mod-main .tpl-sec{margin-bottom:26px}
.tpl-mod-main .tpl-sec-title{font-size:13px;font-weight:700;color:#1a2332;text-transform:uppercase;letter-spacing:.08em;margin-bottom:14px;padding-bottom:6px;border-bottom:2px solid #1f6f63}
.tpl-mod-summary{font-size:13px;line-height:1.6;color:#4b5563}
.tpl-mod-exp{margin-bottom:18px}

.tpl-mod-exp:last-child{margin-bottom:0}
.tpl-mod-exp-head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:1px;gap:12px}
.tpl-mod-exp-role{font-size:15px;font-weight:700;color:#1a2332}
.tpl-mod-exp-date{font-size:12px;color:#888;white-space:nowrap}
.tpl-mod-exp-company{font-size:13px;color:#1f6f63;font-weight:600;margin-bottom:1px}
.tpl-mod-exp-loc{font-size:12px;color:#888;margin-bottom:8px}
.tpl-mod-exp-bullets{padding-left:18px}
.tpl-mod-exp-bullets li{font-size:13px;line-height:1.5;color:#4b5563;margin-bottom:4px}
.tpl-mod-exp-bullets li::marker{color:#1f6f63}

/* ══ CLASSIC TEMPLATE ══════════════════════════════════════ */
.tpl-classic{padding:48px 56px;font-family:Georgia,'Times New Roman',serif;color:#222}
.tpl-classic .tpl-header{text-align:center;margin-bottom:28px}
.tpl-classic .tpl-name{font-size:28px;font-weight:700;letter-spacing:.04em;margin-bottom:4px}
.tpl-classic .tpl-title{font-size:16px;font-style:italic;color:#555;margin-bottom:10px}
.tpl-classic .tpl-contact{font-size:13px;color:#555}
.tpl-classic .tpl-contact span{margin:0 7px}
.tpl-classic .tpl-contact span:first-child{margin-left:0}
.tpl-classic .tpl-contact span:last-child{margin-right:0}
.tpl-classic .tpl-contact span + span::before{content:"·";margin-right:10px;color:#aaa}



.tpl-classic .tpl-sec{margin-bottom:22px}
.tpl-classic .tpl-sec-title{font-size:13px;text-transform:uppercase;letter-spacing:.18em;text-align:center;margin-bottom:12px;font-weight:700;color:#333}
.tpl-classic .tpl-rule{border:none;border-top:1px solid #bbb;margin:-6px 0 12px}
.tpl-classic .tpl-summary{font-size:14px;line-height:1.7;text-align:justify}
.tpl-classic .tpl-exp{margin-bottom:14px}
.tpl-classic .tpl-exp:last-child{margin-bottom:0}
.tpl-classic .tpl-exp-head{display:flex;justify-content:space-between;align-items:baseline;gap:12px}
.tpl-classic .tpl-exp-role{font-size:15px;font-weight:700}
.tpl-classic .tpl-exp-date{font-size:13px;color:#777;font-style:italic}
.tpl-classic .tpl-exp-company{font-size:14px;font-style:italic;color:#444;margin-top:1px}
.tpl-classic .tpl-exp-loc{font-size:13px;color:#888;margin-top:1px;margin-bottom:6px}
.tpl-classic .tpl-exp-bullets{padding-left:20px;margin-top:4px}
.tpl-classic .tpl-exp-bullets li{font-size:13px;line-height:1.6;margin-bottom:2px}
.tpl-classic .tpl-edu{margin-bottom:8px}
.tpl-classic .tpl-edu:last-child{margin-bottom:0}
.tpl-classic .tpl-edu-school{font-weight:700;font-size:15px}
.tpl-classic .tpl-edu-degree{font-style:italic;color:#555;font-size:14px}
.tpl-classic .tpl-edu-date{font-size:13px;color:#777;font-style:italic}
.tpl-classic .tpl-skills{font-size:14px;line-height:1.8;text-align:center}

/* ══ MINIMAL TEMPLATE ═════════════════════════════════════ */
.tpl-minimal{padding:56px 64px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#333}
.tpl-minimal .tpl-header{margin-bottom:40px}
.tpl-minimal .tpl-name{font-size:24px;font-weight:500;color:#222;margin-bottom:3px;letter-spacing:-.01em}
.tpl-minimal .tpl-title{font-size:15px;font-weight:300;color:#999;margin-bottom:14px}
.tpl-minimal .tpl-contact{font-size:13px;color:#aaa;line-height:1.6}
.tpl-minimal .tpl-contact span{margin-right:16px}
.tpl-minimal .tpl-sec{margin-bottom:32px}
.tpl-minimal .tpl-sec-title{font-size:11px;text-transform:uppercase;letter-spacing:.16em;color:#bbb;margin-bottom:14px;font-weight:600}
.tpl-minimal .tpl-summary{font-size:14px;line-height:1.7;color:#555}
.tpl-minimal .tpl-exp{margin-bottom:22px}
.tpl-minimal .tpl-exp:last-child{margin-bottom:0}
.tpl-minimal .tpl-exp-head{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-bottom:2px}
.tpl-minimal .tpl-exp-role{font-size:15px;font-weight:500;color:#333}
.tpl-minimal .tpl-exp-date{font-size:12px;color:#bbb}
.tpl-minimal .tpl-exp-company{font-size:14px;color:#888}
.tpl-minimal .tpl-exp-loc{font-size:12px;color:#bbb;margin-bottom:8px}
.tpl-minimal .tpl-exp-bullets{padding-left:16px;margin-top:6px}
.tpl-minimal .tpl-exp-bullets li{font-size:13px;line-height:1.6;color:#666;margin-bottom:3px}
.tpl-minimal .tpl-edu{margin-bottom:10px}
.tpl-minimal .tpl-edu:last-child{margin-bottom:0}
.tpl-minimal .tpl-edu-school{font-size:14px;font-weight:500;color:#333}
.tpl-minimal .tpl-edu-degree{font-size:13px;color:#888;margin-top:1px}
.tpl-minimal .tpl-edu-date{font-size:12px;color:#bbb;margin-top:1px}
.tpl-minimal .tpl-skills{font-size:13px;color:#555;line-height:1.8}
.tpl-minimal .tpl-skills span{margin-right:14px}
`;

/* ════════════════════════════════════════════════════════
   MODERN TEMPLATE COMPONENT
   ════════════════════════════════════════════════════════ */

function ModernTemplate({ data }: { data: ResumeData }) {
  const { personalInfo: p, summary, experience, education, skills } = data;
  const hasContact = p.email || p.phone || p.location || p.website;

  return (
    <div className="tpl-modern">
      <div className="tpl-mod-side">
        <h1 className="tpl-name">{p.name || 'Your Name'}</h1>
        <div className="tpl-title">{p.title || 'Your Title'}</div>

        {hasContact && (
          <div className="tpl-sec">
            <div className="tpl-sec-title">Contact</div>
            {p.email && (
              <div className="tpl-mod-contact-item">
                <Mail size={12} />
                <span>{p.email}</span>
              </div>
            )}
            {p.phone && (
              <div className="tpl-mod-contact-item">
                <Phone size={12} />
                <span>{p.phone}</span>
              </div>
            )}

              {p.location && (
              <div className="tpl-mod-contact-item">
                <MapPin size={12} />
                <span>{p.location}</span>
              </div>
            )}
            {p.website && (
              <div className="tpl-mod-contact-item">
                <Globe size={12} />
                <span>{p.website}</span>
              </div>
            )}
          </div>
        )}

        {skills.length > 0 && (
          <div className="tpl-sec">
            <div className="tpl-sec-title">Skills</div>
            {skills.map((s, i) => (
              <span key={i} className="tpl-mod-skill">
                {s}
              </span>
            ))}
          </div>
        )}

         {education.length > 0 && (
          <div className="tpl-sec">
            <div className="tpl-sec-title">Education</div>
            {education.map((e) => (
              <div key={e.id} className="tpl-mod-edu">
                <div className="tpl-mod-edu-school">{e.school}</div>
                {e.degree && e.field && (
                  <div className="tpl-mod-edu-degree">{e.degree}, {e.field}</div>
                )}
                {e.degree && !e.field && (
                  <div className="tpl-mod-edu-degree">{e.degree}</div>
                )}
                {e.field && !e.degree && (
                  <div className="tpl-mod-edu-degree">{e.field}</div>
                )}
                <div className="tpl-mod-edu-date">
                  {dateRange(e.startDate, e.endDate)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

       <div className="tpl-mod-main">
        {summary && (
          <div className="tpl-sec">
            <div className="tpl-sec-title">Summary</div>
            <p className="tpl-mod-summary">{summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div className="tpl-sec">
            <div className="tpl-sec-title">Experience</div>
            {experience.map((exp) => (
              <div key={exp.id} className="tpl-mod-exp">
                <div className="tpl-mod-exp-head">
                  <div>
                    <div className="tpl-mod-exp-role">{exp.role || 'Role'}</div>
                    <div className="tpl-mod-exp-company">
                      {exp.company || 'Company'}
                    </div>
                  </div>
                  <div className="tpl-mod-exp-date">
                    {dateRange(exp.startDate, exp.endDate, exp.current)}
                  </div>
                </div>
                 {exp.location && <div className="tpl-mod-exp-loc">{exp.location}</div>}
                {exp.bullets.filter((b) => b.trim()).length > 0 && (
                  <ul className="tpl-mod-exp-bullets">
                    {exp.bullets
                      .filter((b) => b.trim())
                      .map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


/* ════════════════════════════════════════════════════════
   CLASSIC TEMPLATE COMPONENT
   ════════════════════════════════════════════════════════ */

function ClassicTemplate({ data }: { data: ResumeData }) {
  const { personalInfo: p, summary, experience, education, skills } = data;
  const contactParts = [p.email, p.phone, p.location, p.website].filter(Boolean);

  return (
    <div className="tpl-classic">
      <div className="tpl-header">
        <h1 className="tpl-name">{p.name || 'Your Name'}</h1>
        {p.title && <div className="tpl-title">{p.title}</div>}
        {contactParts.length > 0 && (
          <div className="tpl-contact">
            {contactParts.map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        )}
      </div>

      {summary && (
        <div className="tpl-sec">
          <div className="tpl-sec-title">Summary</div>
          <hr className="tpl-rule" />
          <p className="tpl-summary">{summary}</p>
        </div>
      )}

       {experience.length > 0 && (
        <div className="tpl-sec">
          <div className="tpl-sec-title">Experience</div>
          <hr className="tpl-rule" />
          {experience.map((exp) => (
            <div key={exp.id} className="tpl-exp">
              <div className="tpl-exp-head">
                <div className="tpl-exp-role">{exp.role || 'Role'}</div>
                <div className="tpl-exp-date">
                  {dateRange(exp.startDate, exp.endDate, exp.current)}
                </div>
              </div>
              <div className="tpl-exp-company">{exp.company || 'Company'}</div>
              {exp.location && <div className="tpl-exp-loc">{exp.location}</div>}
              {exp.bullets.filter((b) => b.trim()).length > 0 && (
                <ul className="tpl-exp-bullets">
                  {exp.bullets
                    .filter((b) => b.trim())
                    .map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      
      {education.length > 0 && (
        <div className="tpl-sec">
          <div className="tpl-sec-title">Education</div>
          <hr className="tpl-rule" />
          {education.map((e) => (
            <div key={e.id} className="tpl-edu">
              <div className="tpl-edu-school">{e.school}</div>
              {e.degree && e.field && (
                <div className="tpl-edu-degree">{e.degree}, {e.field}</div>
              )}
              {e.degree && !e.field && (
                <div className="tpl-edu-degree">{e.degree}</div>
              )}
              {e.field && !e.degree && (
                <div className="tpl-edu-degree">{e.field}</div>
              )}
              <div className="tpl-edu-date">{dateRange(e.startDate, e.endDate)}</div>
            </div>
          ))}
        </div>
      )}
  {skills.length > 0 && (
        <div className="tpl-sec">
          <div className="tpl-sec-title">Skills</div>
          <hr className="tpl-rule" />
          <div className="tpl-skills">{skills.join('  ·  ')}</div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MINIMAL TEMPLATE COMPONENT
   ════════════════════════════════════════════════════════ */

function MinimalTemplate({ data }: { data: ResumeData }) {
  const { personalInfo: p, summary, experience, education, skills } = data;
  const contactParts = [p.email, p.phone, p.location, p.website].filter(Boolean);

  return (
    <div className="tpl-minimal">
      <div className="tpl-header">
        <h1 className="tpl-name">{p.name || 'Your Name'}</h1>
        {p.title && <div className="tpl-title">{p.title}</div>}
        {contactParts.length > 0 && (
          <div className="tpl-contact">
            {contactParts.map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        )}
      </div>

      {summary && (
        <div className="tpl-sec">
          <div className="tpl-sec-title">Summary</div>
          <p className="tpl-summary">{summary}</p>
        </div>
      )}

      {experience.length > 0 && (
        <div className="tpl-sec">
          <div className="tpl-sec-title">Experience</div>
          {experience.map((exp) => (
            <div key={exp.id} className="tpl-exp">
              <div className="tpl-exp-head">
                <div className="tpl-exp-role">{exp.role || 'Role'}</div>
                <div className="tpl-exp-date">
                  {dateRange(exp.startDate, exp.endDate, exp.current)}
                </div>
              </div>
              <div className="tpl-exp-company">{exp.company || 'Company'}</div>
              {exp.location && <div className="tpl-exp-loc">{exp.location}</div>}
              {exp.bullets.filter((b) => b.trim()).length > 0 && (
                <ul className="tpl-exp-bullets">
                  {exp.bullets
                    .filter((b) => b.trim())
                    .map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}

                       </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="tpl-sec">
          <div className="tpl-sec-title">Education</div>
          {education.map((e) => (
            <div key={e.id} className="tpl-edu">
              <div className="tpl-edu-school">{e.school}</div>
              {e.degree && e.field && (
                <div className="tpl-edu-degree">{e.degree}, {e.field}</div>
              )}
              {e.degree && !e.field && (
                <div className="tpl-edu-degree">{e.degree}</div>
              )}
              {e.field && !e.degree && (
                <div className="tpl-edu-degree">{e.field}</div>
              )}
              <div className="tpl-edu-date">{dateRange(e.startDate, e.endDate)}</div>
            </div>
          ))}
        </div>
      )}

         {skills.length > 0 && (
        <div className="tpl-sec">
          <div className="tpl-sec-title">Skills</div>
          <div className="tpl-skills">
            {skills.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   RESUME PREVIEW (switches templates)
   ════════════════════════════════════════════════════════ */
function ResumePreview({ data }: { data: ResumeData }) {
  if (data.template === 'classic') return <ClassicTemplate data={data} />;
  if (data.template === 'minimal') return <MinimalTemplate data={data} />;
  return <ModernTemplate data={data} />;
}

/* ════════════════════════════════════════════════════════
   ACCORDION SECTION
   ════════════════════════════════════════════════════════ */

function Accordion({
  icon,
  title,
  isOpen,
  onToggle,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
   return (
    <div className="folio-acc">
      <button className="folio-acc-head" onClick={onToggle}>
        <span className="folio-acc-icon">{icon}</span>
        {title}
        <ChevronDownIcon
          size={18}
          className={`folio-acc-chevron ${isOpen ? 'open' : ''}`}
        />
      </button>
      {isOpen && <div className="folio-acc-body">{children}</div>}
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MAIN APP
   ════════════════════════════════════════════════════════ */

type SaveStatus = 'saved' | 'saving' | 'unsaved';

export default function App() {
  const [data, setData] = useState<ResumeData>(defaultData);
  const [openSection, setOpenSection] = useState<string>('contact');
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('unsaved');
  const [storageAvailable, setStorageAvailable] = useState(true);
  const [skillInput, setSkillInput] = useState('');
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstRender = useRef(true);

  /* Load from storage on mount */
  useEffect(() => {
    if (typeof window !== 'undefined' && window.storage) {
      setStorageAvailable(true);
      const saved = window.storage.get(STORAGE_KEY, false);
      if (saved) {
        try {
          const parsed = JSON.parse(saved) as ResumeData;
          setData({ ...defaultData, ...parsed });
          setSaveStatus('saved');
        } catch {
          setSaveStatus('unsaved');
        }
      } else {
        setSaveStatus('unsaved');
      }
    } else {
      setStorageAvailable(false);
    }
  }, []);

    /* Debounced auto-save */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!storageAvailable) return;

    setSaveStatus('saving');
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      if (window.storage) {
        window.storage.set(STORAGE_KEY, JSON.stringify(data), false);
        setSaveStatus('saved');
      }
    }, 500);

    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [data, storageAvailable]);

  /* ── Update helpers ──────────────────────────────────────── */

  const updatePersonalInfo = (field: keyof PersonalInfo, value: string) => {
    setData((d) => ({ ...d, personalInfo: { ...d.personalInfo, [field]: value } }));
  };

   const updateField = <K extends keyof ResumeData>(field: K, value: ResumeData[K]) => {
    setData((d) => ({ ...d, [field]: value }));
  };

  /* ── Experience helpers ───────────────────────────────────── */

  const addExperience = () => {
    setData((d) => ({
      ...d,
      experience: [
        ...d.experience,
        {
          id: genId(),
          company: '',
          role: '',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          bullets: [''],
        },
      ],
    }));
  };

  const updateExperience = (id: string, field: keyof ExperienceEntry, value: string | boolean) => {
    setData((d) => ({
      ...d,
      experience: d.experience.map((e) =>
        e.id === id ? { ...e, [field]: value } : e
      ),
    }));
  };

  const removeExperience = (id: string) => {
    setData((d) => ({
      ...d,
      experience: d.experience.filter((e) => e.id !== id),
    }));
  };

  const moveExperience = (index: number, dir: 'up' | 'down') => {
    setData((d) => {
      const arr = [...d.experience];
      const target = dir === 'up' ? index - 1 : index + 1;
      if (target < 0 || target >= arr.length) return d;
      [arr[index], arr[target]] = [arr[target], arr[index]];
      return { ...d, experience: arr };
    });
  };

   const addBullet = (expId: string) => {
    setData((d) => ({
      ...d,
      experience: d.experience.map((e) =>
        e.id === expId ? { ...e, bullets: [...e.bullets, ''] } : e
      ),
    }));
  };

  const updateBullet = (expId: string, bulletIndex: number, value: string) => {
    setData((d) => ({
      ...d,
      experience: d.experience.map((e) =>
        e.id === expId
          ? { ...e, bullets: e.bullets.map((b, i) => (i === bulletIndex ? value : b)) }
          : e
      ),
    }));
  };

  const removeBullet = (expId: string, bulletIndex: number) => {
    setData((d) => ({
      ...d,
      experience: d.experience.map((e) =>
        e.id === expId
          ? { ...e, bullets: e.bullets.filter((_, i) => i !== bulletIndex) }
          : e
      ),
    }));
  };

  /* ── Education helpers ────────────────────────────────────── */

  const addEducation = () => {
    setData((d) => ({
      ...d,
      education: [
        ...d.education,
        { id: genId(), school: '', degree: '', field: '', startDate: '', endDate: '' },
      ],
    }));
  };

   const updateEducation = (id: string, field: keyof EducationEntry, value: string) => {
    setData((d) => ({
      ...d,
      education: d.education.map((e) =>
        e.id === id ? { ...e, [field]: value } : e
      ),
    }));
  };

  const removeEducation = (id: string) => {
    setData((d) => ({
      ...d,
      education: d.education.filter((e) => e.id !== id),
    }));
  };

  const moveEducation = (index: number, dir: 'up' | 'down') => {
    setData((d) => {
      const arr = [...d.education];
      const target = dir === 'up' ? index - 1 : index + 1;
      if (target < 0 || target >= arr.length) return d;
      [arr[index], arr[target]] = [arr[target], arr[index]];
      return { ...d, education: arr };
    });
  };

   /* ── Skills helpers ───────────────────────────────────────── */

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !data.skills.includes(trimmed)) {
      setData((d) => ({ ...d, skills: [...d.skills, trimmed] }));
    }
    setSkillInput('');
  };

  const removeSkill = (skill: string) => {
    setData((d) => ({ ...d, skills: d.skills.filter((s) => s !== skill) }));
  };

  /* ── Template switch ──────────────────────────────────────── */

  const switchTemplate = (tpl: TemplateName) => {
    setData((d) => ({ ...d, template: tpl }));
  };

  /* ── Export PDF ───────────────────────────────────────────── */

  const exportPDF = () => {
    window.print();
  };

   /* ── Toggle section ───────────────────────────────────────── */

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? '' : section));
  };

  /* ── Render ───────────────────────────────────────────────── */

  return (
    <>
      <style>{STYLES}</style>
      <div className="folio-app">
        {/* ── Top bar ── */}
        <header className="folio-topbar no-print">
          <div className="folio-topbar-left">
            <div className="folio-brand">
              <Feather size={22} />
              Folio
            </div>
            {storageAvailable ? (
              <div className={`folio-status ${saveStatus}`}>
                {saveStatus === 'saved' && (
                  <>
                    <Check size={13} />
                    Saved
                  </>
                )}

                  {saveStatus === 'saving' && (
                  <>
                    <Loader2 size={13} className="folio-spin" />
                    Saving…
                  </>
                )}
                {saveStatus === 'unsaved' && (
                  <>
                    <AlertCircle size={13} />
                    Not saved
                  </>
                )}
              </div>
            ) : (
              <div className="folio-status unsaved">
                <AlertCircle size={13} />
                Not saved between sessions
              </div>
            )}
          </div>

          <div className="folio-topbar-center">
            <div className="folio-switcher">
              {(['modern', 'classic', 'minimal'] as TemplateName[]).map((tpl) => (
                <button
                  key={tpl}
                  className={data.template === tpl ? 'active' : ''}
                  onClick={() => switchTemplate(tpl)}
                >
                  {tpl.charAt(0).toUpperCase() + tpl.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="folio-topbar-right">
            <button className="folio-export" onClick={exportPDF}>
              <Download size={16} />
              Export PDF
            </button>
          </div>
        </header>

        {/* ── Main ── */}
        <div className="folio-main">
          {/* ── Editor ── */}
          <div className="folio-editor no-print">
            {/* Contact */}
            <Accordion
              icon={<User size={18} />}
              title="Contact"
              isOpen={openSection === 'contact'}
              onToggle={() => toggleSection('contact')}
            >
              <div className="folio-grid2">
                <div className="folio-field full">
                  <label className="folio-label">Full Name</label>
                  <input

 className="folio-input"
                    value={data.personalInfo.name}
                    onChange={(e) => updatePersonalInfo('name', e.target.value)}
                    placeholder="Alex Morgan"
                  />
                </div>
                <div className="folio-field full">
                  <label className="folio-label">Title</label>
                  <input
                    className="folio-input"
                    value={data.personalInfo.title}
                    onChange={(e) => updatePersonalInfo('title', e.target.value)}
                    placeholder="Senior Product Designer"
                  />
                </div>
                <div className="folio-field">
                  <label className="folio-label">Email</label>
                  <input
                    className="folio-input"
                    value={data.personalInfo.email}
                    onChange={(e) => updatePersonalInfo('email', e.target.value)}
                    placeholder="alex@email.com"
                  />
                </div>
                <div className="folio-field">
                  <label className="folio-label">Phone</label>
                  <input
                    className="folio-input"
                    value={data.personalInfo.phone}
                    onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="folio-field">
                  <label className="folio-label">Location</label>
                  <input
                    className="folio-input"
                    value={data.personalInfo.location}
                    onChange={(e) => updatePersonalInfo('location', e.target.value)}
                    placeholder="San Francisco, CA"
                  />
                </div>
                <div className="folio-field">
                  <label className="folio-label">Website</label>
                  <input
                    className="folio-input"
                    value={data.personalInfo.website}
                    onChange={(e) => updatePersonalInfo('website', e.target.value)}
                    placeholder="alexmorgan.design"
                  />
                </div>
              </div>
            </Accordion>

             {/* Summary */}
            <Accordion
              icon={<FileText size={18} />}
              title="Summary"
              isOpen={openSection === 'summary'}
              onToggle={() => toggleSection('summary')}
            >
              <div className="folio-field">
                <label className="folio-label">Professional Summary</label>
                <textarea
                  className="folio-textarea"
                  value={data.summary}
                  onChange={(e) => updateField('summary', e.target.value)}
                  placeholder="Write a brief summary of your professional background and key strengths…"
                />
              </div>
            </Accordion>

            {/* Experience */}
            <Accordion
              icon={<Briefcase size={18} />}
              title="Experience"
              isOpen={openSection === 'experience'}
              onToggle={() => toggleSection('experience')}
            >
 data.experience.map((exp, idx) => (
                <div key={exp.id} className="folio-entry">
                  <div className="folio-entry-head">
                    <div className="folio-entry-title">
                      {exp.role || exp.company || `Experience ${idx + 1}`}
                    </div>
                     {<div className="folio-entry-actions">
                      <button
                        className="folio-btn"
                        onClick={() => moveExperience(idx, 'up')}
                        disabled={idx === 0}
                        title="Move up"
                      >
                        <ChevronUp size={15} />
                      </button>
                      <button
                        className="folio-btn"
                        onClick={() => moveExperience(idx, 'down')}
                        disabled={idx === data.experience.length - 1}
                        title="Move down"
                      >
                        <ChevronDown size={15} />
                      </button>
                      <button
                        className="folio-btn danger"
                        onClick={() => removeExperience(exp.id)}
                        title="Remove"
                      >

                         <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                  <div className="folio-grid2">
                    <div className="folio-field">
                      <label className="folio-label">Role</label>
                      <input
                        className="folio-input"
                        value={exp.role}
                        onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                        placeholder="Senior Designer"
                      />
                    </div>
                    <div className="folio-field">
                      <label className="folio-label">Company</label>
                      <input
                        className="folio-input"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                        placeholder="Lumina Labs"
                      />
 </div>
                    <div className="folio-field full">
                      <label className="folio-label">Location</label>
                      <input
                        className="folio-input"
                        value={exp.location}
                        onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                        placeholder="San Francisco, CA"
                      />
                    </div>
                    <div className="folio-field">
                      <label className="folio-label">Start Date</label>
                      <input
                        className="folio-input"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                        placeholder="Jan 2021"
                      />
                    </div>
                    <div className="folio-field">
                      <label className="folio-label">End Date</label>
                      <input
                        className="folio-input"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                        placeholder="Dec 2023"
                        disabled={exp.current}
                      />
                    </div>
                  </div>
                  <div className="folio-sec-gap" />
                  <label className="folio-check">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => updateExperience(exp.id, 'current', e.target.checked)}
                    />
                    I currently work here
                  </label>

                  <div className="folio-bullets">
                    <label className="folio-label">Highlights</label>
                    {exp.bullets.map((bullet, bi) => (
                      <div key={bi} className="folio-bullet-row">
                        <span className="folio-bullet-dot" />
                        <input
                          className="folio-input"
                          value={bullet}
                          onChange={(e) => updateBullet(exp.id, bi, e.target.value)}
                          placeholder="Describe a key achievement…"
                        />