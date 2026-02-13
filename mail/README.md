# ProgrammoCeuticals Mail App

Standalone React mailer app for `mail.programmoceuticals.com`.

## Features

- Admin sign-in against compiler backend (`/api/auth/signin`)
- Admin-only access guard (email must match `REACT_APP_ADMIN_EMAIL`)
- Manual recipient entry (comma/newline/space/semicolon-separated emails)
- Bulk email send via `/api/admin/emails/send`
- Backend-generated live preview via `/api/admin/emails/preview` so preview and sent HTML stay identical

## Setup

1. Copy environment file:

```bash
cp .env.example .env
```

2. Install dependencies:

```bash
npm install
```

3. Run development server:

```bash
npm start
```

Default local URL: `http://localhost:3000`

## Backend dependency

This app relies on the existing compiler backend running and reachable at `REACT_APP_API_URL`.
