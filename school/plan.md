# Cohort-Based Programming School - Implementation Plan

## Project Overview
Build a cohort-based programming school web application for instructor-led classes with fixed-duration courses, cohort grouping, and admin management.

## Business Rules (Non-Negotiable)
- All courses: 3 months (12 weeks)
- Schedule: 3 times per week, 2 hours each
- Pricing: Basic Skills (₦100,000), Programming Languages (₦150,000)
- Timezone: Africa/Lagos
- Roles: student, admin only
- Phase 1 deployable in 7 days

## Tech Stack
- **Backend**: Node.js + Express ✅
- **Database**: MongoDB ✅
- **Frontend**: React SPA ✅
- **Auth**: JWT (access token only) ✅
- **Styling**: Simple CSS ✅

## Project Structure
```
cohort-school/
├── server/                 # Backend API ✅
│   ├── models/            # MongoDB schemas ✅
│   ├── routes/            # API endpoints ✅
│   ├── middleware/        # Auth & validation ✅
│   ├── config/            # Database & env config
│   └── server.js          # Entry point ✅
├── client/                # React frontend ✅
│   ├── src/
│   │   ├── components/    # React components ✅
│   │   ├── pages/         # Page components ✅
│   │   ├── services/      # API calls ✅
│   │   ├── data/          # Course slide data ✅
│   │   └── App.js         # Main app ✅
│   └── public/            # Static files ✅
└── plan.md               # This file ✅
```

## Course Content Integration ✅
**Slide-Based Learning System:**
- **15 Complete Courses** with professional slide content
- **Programming Languages** (₦150,000): Python (214 slides), JavaScript (215 slides), React, Node.js, Django, SQL, MongoDB, DSA, Networking, Hosting, AngularJS
- **Basic Skills** (₦100,000): HTML (113 slides), CSS, Excel, SPSS
- **Interactive slide viewer** with navigation and progress tracking
- **Module-based structure** with clear learning paths

## Implementation Phases

### Phase 1: Backend Setup ✅ COMPLETE
- [x] Project structure
- [x] Express server setup
- [x] MongoDB connection
- [x] All 6 database models
- [x] Auth middleware (JWT)
- [x] All API routes (auth, courses, admin, student)

### Phase 2: Frontend Setup ✅ COMPLETE
- [x] React app initialization
- [x] Course slide data integration (15 courses)
- [x] Slide viewer components
- [x] Basic routing structure
- [x] Home and Courses pages
- [x] API service layer

### Phase 3: Authentication (Next)
- [ ] Login/Signup pages
- [ ] JWT token management
- [ ] Protected routes
- [ ] User context

### Phase 4: Course System (Next)
- [ ] Course detail pages
- [ ] Cohort information display
- [ ] Enrollment flow
- [ ] Course content access

### Phase 5: Dashboards (Next)
- [ ] Student dashboard with slide progress
- [ ] Admin dashboard
- [ ] Cohort management
- [ ] Announcements system

### Phase 6: Integration & Polish (Next)
- [ ] Frontend-backend integration
- [ ] Slide progress tracking
- [ ] Responsive design
- [ ] Error handling

### Phase 7: Deployment (Final)
- [ ] Environment configuration
- [ ] Production build
- [ ] Server deployment
- [ ] Frontend deployment

## Key Features by Module

### Module 1: Public Website ✅ COMPLETE
**Pages**: Home ✅, Courses ✅, Course Detail, About, Contact/Apply
**Features**:
- School value proposition ✅
- Cohort-based learning explanation ✅
- Course listings with pricing ✅
- Course categories (Basic/Programming) ✅

### Module 2: Authentication (In Progress)
**Features**:
- Student signup/login
- Admin login
- JWT-based auth ✅ (backend)
- Password hashing ✅ (backend)

### Module 3: Course Management ✅ COMPLETE (Backend)
**Features**:
- Admin-only course creation ✅
- Fixed category pricing ✅
- 12-week duration enforcement ✅
- Course slide data integration ✅

### Module 4: Cohort System ✅ COMPLETE (Backend)
**Features**:
- Cohort creation with course association ✅
- Student enrollment management ✅
- Fixed timetables per cohort ✅

### Module 5: Timetable System ✅ COMPLETE (Backend)
**Features**:
- Weekly schedule definition ✅
- Africa/Lagos timezone ✅
- 3x weekly, 2-hour sessions ✅

### Module 6: Student Dashboard (Next)
**Features**:
- Course/cohort information
- Class timetable display
- **Slide-based learning with progress tracking** ✅ (components ready)
- Announcements viewing
- Course materials access

### Module 7: Admin Dashboard (Next)
**Features**:
- Course/cohort creation ✅ (backend)
- Student management ✅ (backend)
- Announcements posting ✅ (backend)
- Materials uploading ✅ (backend)

## Rich Learning Content ✅ INTEGRATED
- **Python**: 214 slides across 19 modules (variables, functions, OOP, etc.)
- **JavaScript**: 215 slides across 18 modules (ES6+, async, APIs, etc.)
- **HTML**: 113 slides across 10 modules (semantic markup, accessibility)
- **CSS, React, Node.js, Django, SQL, MongoDB, DSA**: Full slide sets
- **Excel, SPSS**: Business/analytics courses
- **Interactive slide viewer** with navigation, progress tracking, fullscreen mode

## Current Status: 60% Complete
✅ **Backend API**: Fully functional with all endpoints
✅ **Course Content**: 15 complete courses with slide data integrated
✅ **Frontend Structure**: React app with routing and components
✅ **Slide System**: Professional learning interface ready

**Next Priority**: Complete authentication pages and user management

## Deployment Checklist
- [x] Backend server running (localhost:5000)
- [ ] Frontend development server
- [ ] Environment variables setup
- [ ] MongoDB connection string ✅
- [ ] JWT secret configuration ✅
- [ ] Frontend build process
- [ ] Server deployment (Vercel/Heroku)
- [ ] Frontend deployment (Vercel/Netlify)

## Explicit Exclusions (DO NOT BUILD)
- Payment gateways
- Certificates
- Instructor dashboards
- Video hosting
- Automated attendance
- Student messaging
- Notifications system
- Social login
- MFA
- Refresh tokens
- Email verification
- Progress tracking beyond slides
- Video streaming
- Quizzes
- Analytics
- Revenue reports