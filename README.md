# Job Application Tracker

![Stack](https://img.shields.io/badge/Laravel-11-red) ![DB](https://img.shields.io/badge/PostgreSQL-18-blue) ![PHP](https://img.shields.io/badge/PHP-8.5-purple)

Personal web app to track job applications.

## Stack
- Laravel 11
- PostgreSQL
- Blade + Tailwind CSS
- Vanilla JS

## Setup

```bash
composer install
npm install
cp .env.example .env
php artisan key:generate
```

Set .env database section:
DB_CONNECTION=pgsql, DB_HOST=localhost, DB_PORT=5432, DB_DATABASE=job_tracker, DB_USERNAME=mouad, DB_PASSWORD=

```bash
php artisan migrate
php artisan serve
npm run dev
```

## Features
- Auth (login / register)
- Add, edit, delete applications
- Status tracking: Applied, Interview, Offer, Rejected
- Store job description, cover letter, notes
- Dashboard with stats cards