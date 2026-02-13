# ProgrammoCeuticals Landing Site Backend

Express.js backend API for the ProgrammoCeuticals landing site.

## Features

- Lead capture API (`/api/leads`)
- Email notifications for new leads
- Optional MongoDB storage
- Rate limiting and security middleware
- Input validation and sanitization

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### POST /api/leads
Submit a new lead from the contact form.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "orgType": "Industry",
  "interest": "Dossier",
  "message": "Interested in your dossier compilation tool",
  "source": "landing",
  "page": "/contact"
}
```

**Response:**
```json
{
  "ok": true,
  "message": "Lead submitted successfully",
  "id": "lead_id_if_database_configured"
}
```

### GET /api/health
Health check endpoint.

**Response:**
```json
{
  "ok": true,
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Configuration

### Email Setup
Configure SMTP settings in `.env` to enable email notifications:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NOTIFICATION_EMAIL=info@programmoceuticals.com
```

### Database Setup (Optional)
Configure MongoDB URI in `.env` to enable lead storage:
```
MONGODB_URI=mongodb://localhost:27017/programmoceuticals-landing
```

## Security Features

- Helmet.js for security headers
- CORS protection
- Rate limiting (100 requests/15min, 10 POST requests/15min)
- Input validation and sanitization
- Error handling

## Development

The server runs on port 5000 by default. Use `npm run dev` for development with auto-restart on file changes.