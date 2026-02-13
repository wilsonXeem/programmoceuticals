# DRT Application (Standalone)

## Overview
Standalone Dossier Review Team (DRT) application for pharmaceutical document review and screening.

## Features
- Document Upload & Management
- Intelligent Screening
- Document Review & Analysis
- Product Checker
- Calculations & Reports
- Standalone Authentication

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve production build
npm run serve
```

## Available Scripts
- `npm start` - Start development server (port 3000)
- `npm run build` - Create production build
- `npm run serve` - Serve production build
- `npm test` - Run tests
- `npm run analyze` - Analyze bundle size

## Authentication
Uses separate authentication system with `drt_isLoggedIn` localStorage key.

## Port
Runs on port 3000 by default.