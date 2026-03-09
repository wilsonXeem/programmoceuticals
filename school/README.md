# ProgrammoCeuticals School App

This folder contains the school platform:
- `server`: Express + MongoDB backend
- `client`: React frontend

## One-time setup

```bash
cd school
npm run setup
```

`setup` will:
- install backend and frontend dependencies
- copy live env values from `../compiler/backend/.env` into `server/.env`
- generate `client/.env.local` with `REACT_APP_API_URL`

## Start everything (single command)

```bash
cd school
npm start
```

This starts backend and frontend together for development.
`npm start` uses stable backend start mode (no nodemon watcher).

If you want nodemon on backend:

```bash
cd school
npm run dev
```

## Manual env sync only

```bash
cd school
npm run sync-env
```

Optional override:

```bash
cd school
SCHOOL_API_URL=https://api.yourdomain.com npm run sync-env
```

## Build frontend

```bash
cd school
npm run build
```
