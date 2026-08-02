# Job Application Tracker

![Stack](https://img.shields.io/badge/React-19-blue) ![Lang](https://img.shields.io/badge/TypeScript-5-3178C6) ![DB](https://img.shields.io/badge/Supabase-PostgreSQL-green) ![Style](https://img.shields.io/badge/Tailwind-v4-38BDF8)

Personal web app to track job applications.

## Stack
- React 19 + TypeScript
- Supabase (PostgreSQL)
- Tailwind CSS v4
- Vite

## Setup

```bash
npm install
cp .env.example .env.local
```

Add to .env.local:
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

```bash
npm run dev
```

## Features
- Auth (login / register)
- Add, edit, delete applications
- Status tracking: Applied, Interview, Offer, Rejected
- Store job description, cover letter, notes
- Dashboard with stats