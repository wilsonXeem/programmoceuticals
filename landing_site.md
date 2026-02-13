# ProgrammoCeuticals Landing Website (programmoceuticals.com) — MVP Specification

Version: 1.0
Audience: Mixed (students, pharmacy professionals, industry/manufacturers, regulatory clients)
Primary CTAs: WhatsApp chat, phone call, email
Stack: MERN (React + Node/Express + optional MongoDB)

## 0) Purpose

Build a public-facing landing website that:

1. Explains ProgrammoCeuticals clearly (what we do, who we serve)
2. Routes visitors to product apps on subdomains (dossier, school, regulations)
3. Converts visitors via WhatsApp/call/email and lead capture
4. Establishes trust (credibility, proof, FAQs)
5. Is SEO-friendly and fast

---

## 1) High-Level Architecture

### 1.1 Frontend (React)

- React SPA (Vite or CRA; prefer Vite)
- Routing via React Router
- UI: TailwindCSS (preferred) or CSS modules
- Analytics: Plausible/GA4 (optional but recommended)
- Forms: Contact + Request Demo (posts to backend)

### 1.2 Backend (Node/Express)

- Minimal API for:
  - Contact form submission
  - Demo request submission
  - Newsletter waitlist (optional)
- Email sending:
  - Nodemailer via SMTP (Namecheap Private Email or Gmail workspace)
  - Or transactional provider (SendGrid/Mailgun) if preferred later

### 1.3 Database (Optional)

MVP can work without DB by emailing submissions.
If DB is used (MongoDB):

- Store submissions for tracking and follow-up.

### 1.4 Deployment

- Frontend hosted on: Vercel/Netlify OR static hosting (Namecheap)
- Backend hosted on: Render/Fly.io/Hetzner VPS
- Domain routing:
  - programmoceuticals.com -> landing
  - dossier.programmoceuticals.com -> Dossier app
  - school.programmoceuticals.com -> School app
  - regulations.programmoceuticals.com -> Regulations app
  - Future subdomains: tools., api., docs., etc.

---

## 2) Site Map (Pages)

MVP pages:

1. `/` Home
2. `/products` Products hub (links to subdomains)
3. `/services` Services (consulting + dev + training)
4. `/about` About (mission, founder credibility, vision)
5. `/contact` Contact (WhatsApp/call/email + form)
6. `/privacy` Privacy policy (simple)
7. `/terms` Terms (simple)

Optional later:

- `/insights` blog list + `/insights/:slug`

---

## 3) Global UX Requirements

### 3.1 Navigation (Top)

- Logo (left) -> Home
- Links: Products, Services, About, Contact
- CTA button (right): “Chat on WhatsApp”

### 3.2 Footer (Bottom)

- Quick links
- Subdomain links
- Contact details (WhatsApp, phone, email)
- Socials (LinkedIn, X, YouTube) if available
- Copyright

### 3.3 Mobile-first

- Hamburger menu on mobile
- Sticky WhatsApp floating button (mobile + desktop)

---

## 4) Brand Messaging (Copy Guide)

### 4.1 One-liner

“ProgrammoCeuticals builds technology solutions and training for pharmacy, healthcare, regulation, and industry.”

### 4.2 Core pillars (must be visible on Home)

1. Education: School + training programs
2. Regulatory: Compliance tools + guidance workflows
3. Industry tools: Dossier & documentation tooling
4. Consulting/Build: Custom software + workflow automation

### 4.3 Trust signals (include at least 3)

- “Built by a licensed pharmacist & software engineer”
- “Designed for real regulatory and industry workflows”
- “Data privacy-first (local/offline options where required)”
- “Scalable: from students to faculty-wide systems”

---

## 5) Page Specs

## 5.1 Home Page (`/`)

Sections (in order):

### A) Hero

- Headline: “Technology for Pharmacy, Regulation & Industry”
- Subtext: 1–2 lines describing mixed audience value
- Primary CTA: “Chat on WhatsApp”
- Secondary CTA: “Explore Products”
- Tertiary CTA: “Email Us”

Include a subtle “Product shortcuts” row:

- Dossier Compiler -> dossier.programmoceuticals.com
- School -> school.programmoceuticals.com
- Regulations -> regulations.programmoceuticals.com

### B) Who We Serve

Cards:

- Students & Early Professionals
- Faculty & Institutions
- Pharma/Manufacturing Teams
- Regulatory/Compliance Clients

### C) What We Do (Pillars)

4 cards with icons:

- Train (School & Cohorts)
- Build (Custom apps)
- Automate (Workflows & forms)
- Comply (Regulatory tooling)

### D) Featured Products

Product cards (MVP: 3–5):

1. Dossier Compiler — “CTD structure, offline-first dossier assembly”
2. ProgrammoCeuticals School — “Structured cohorts, curriculum-driven”
3. Regulations Hub — “NAFDAC-aligned guidance & document intake”
   Optional cards:
4. Faculty RMS — “Results & transcript management”
5. Consulting — “Implementation & advisory”

Each card:

- short description
- CTA: “Open” (external link to subdomain) OR “Request Demo” if not live

### E) Why ProgrammoCeuticals

Bullets:

- Pharmacy + engineering expertise
- Built for African regulatory & industry realities
- Secure-by-design and auditable workflows
- Clear support and maintenance model

### F) Testimonials / Proof (MVP light)

- 2–3 testimonial placeholders (or “Pilot partners / early adopters”)
- If none: use “Use cases” instead

### G) FAQ

6–8 FAQs (see section 9)

### H) Final CTA Strip

- Headline: “Need help choosing the right tool?”
- Buttons: WhatsApp | Call | Email

---

## 5.2 Products Page (`/products`)

Goal: act as a hub and router to subdomains.

Layout:

- Intro paragraph
- Product grid with status tags:
  - Live (link)
  - Beta (request access)
  - Coming soon (notify me)

Products list (initial):

- Dossier Compiler (dossier.)
- School (school.)
- Regulations Hub (regulations.)
- Faculty RMS (rms. or request demo)
- API/Portal (api. future)

Each product card:

- Name
- 2–3 bullets: who it’s for, key outcomes
- CTA: Open / Request demo

---

## 5.3 Services Page (`/services`)

Sections:

1. Consulting & Implementation
   - Regulatory process consulting
   - Documentation workflows
   - Digital transformation for faculty/industry
2. Custom Software Development
   - Portals, dashboards, automation
   - Integrations, data systems
3. Training & Upskilling
   - Cohorts (frontend, python, data)
   - Corporate training (industry teams)

Include:

- “How engagement works” (Discovery -> Proposal -> Build -> Support)
- CTA: WhatsApp + Book a call (call link) + Email

---

## 5.4 About Page (`/about`)

Sections:

- Mission
- Why ProgrammoCeuticals exists (pharmacy + tech bridge)
- Founder credibility (short bio, no long CV)
- Values: clarity, compliance, quality, scalability
- CTA: Contact

---

## 5.5 Contact Page (`/contact`)

Must include three contact methods and a form.

### A) Direct Contact Cards

- WhatsApp: `https://wa.me/<PHONENUM>?text=<ENCODED_DEFAULT_TEXT>`
- Call: `tel:+2349033782254`
- Email: `mailto:info@programmoceuticals.com?subject=...`

### B) Contact Form

Fields:

- Full name (required)
- Email (required)
- Phone (optional)
- Organization type (select: Student, Faculty, Industry, Regulatory, Other)
- Interested in (select multi or single: Dossier, School, Regulations, RMS, Consulting)
- Message (required)

Submit behavior:

- POST to backend `/api/leads`
- Show success state + next step: “We’ll reach out within 1–2 business days”
- Also provide immediate WhatsApp button after submission

---

## 5.6 Privacy (`/privacy`) and Terms (`/terms`)

Simple static pages:

- What data you collect (form submissions)
- Why (responding to inquiries)
- Storage (email and/or DB)
- User rights (request deletion)
- Cookies/analytics (if used)

---

## 6) Backend API Spec (Express)

### 6.1 Endpoints

#### POST `/api/leads`

Purpose: receive contact form submissions.

Request JSON:
{
"fullName": "string",
"email": "string",
"phone": "string|null",
"orgType": "Student|Faculty|Industry|Regulatory|Other",
"interest": "Dossier|School|Regulations|RMS|Consulting|Other",
"message": "string",
"source": "landing",
"page": "/contact"
}

Validation:

- fullName min 2
- email valid
- message min 10
- rate limit by IP (basic)

Response:

- 201 + { ok: true, id?: "..." }

Behavior:

- Send email notification to info@programmoceuticals.com with formatted lead details
- Optional: store in MongoDB `Leads` collection

#### GET `/api/health`

Returns `{ ok: true }` for uptime monitoring.

### 6.2 Security

- Helmet
- CORS allow only programmoceuticals.com
- Rate limiting on POST endpoints
- Input sanitization (basic)

---

## 7) Data Model (Optional MongoDB)

### Lead

- \_id
- fullName
- email
- phone
- orgType
- interest
- message
- source
- page
- createdAt
- status: new|contacted|won|closed (optional)

---

## 8) UI Components (React)

Global:

- Navbar
- Footer
- CTAButtons (WhatsApp/Call/Email)
- ProductCard
- ServiceCard
- FAQAccordion
- TestimonialCard (optional)
- SectionHeading
- ContactForm

UX enhancements:

- Sticky WhatsApp button
- Smooth scroll to sections on Home
- External link indicator for subdomain links

---

## 9) FAQ Content (MVP)

1. Is ProgrammoCeuticals only for pharmacists?
2. Can industries use the tools without exposing sensitive files?
3. Do you provide implementation support and training?
4. How do subdomain apps work (dossier, school, regulations)?
5. Can the system be customized for our department/faculty/company?
6. How do you handle security and access control?
7. What is the maintenance model?
8. Can we request a demo before payment?

---

## 10) SEO & Metadata

- Proper page titles:
  - Home: ProgrammoCeuticals — Technology for Pharmacy, Regulation & Industry
  - Products: Products | ProgrammoCeuticals
  - Services: Services | ProgrammoCeuticals
  - About: About | ProgrammoCeuticals
  - Contact: Contact | ProgrammoCeuticals
- Meta description per page
- OpenGraph tags for social sharing
- Sitemap.xml + robots.txt
- Use clean URLs, no hash routing if possible (if using SPA, configure server rewrites)

---

## 11) Subdomain Linking Rules

All product links must be configurable via environment variables:

- DOSSIER_URL=https://dossier.programmoceuticals.com
- SCHOOL_URL=https://school.programmoceuticals.com
- REGULATIONS_URL=https://regulations.programmoceuticals.com
- RMS_URL=https://rms.programmoceuticals.com (or request-demo if not live)

In UI, show a “status badge”:

- Live / Beta / Coming soon

---

## 12) Content Placeholders (Fill Later)

- Testimonials: placeholders allowed
- Case studies: placeholders allowed
- Partner logos: optional section, include “Add logo here” placeholders

---

## 13) Acceptance Criteria

MVP is complete when:

- All pages render correctly (desktop + mobile)
- WhatsApp/call/email actions work
- Contact form validates and submits successfully
- Lead submission triggers email to info@
- Products page routes correctly to subdomains
- Basic SEO metadata present
- Lighthouse performance reasonable (fast load, minimal bundle)

---

## 14) Future Enhancements (Non-MVP)

- Blog/Insights with CMS
- Multi-language support
- Lead dashboard (admin)
- Appointment scheduling (Calendly)
- Auth gateway/SSO across subdomains (later)
- Status page for apps

---

## 15) Default Contact Values

- Phone: +234 903 378 2254
- Email: info@programmoceuticals.com
- WhatsApp default text:
  "Hello ProgrammoCeuticals, I’m interested in [Dossier/School/Regulations/RMS/Consulting]. Please share next steps."
