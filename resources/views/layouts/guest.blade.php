<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Job Tracker') }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-background text-foreground min-h-screen flex flex-col items-center justify-center p-6">
    <div class="w-full max-w-sm">
        <div class="mb-6 text-center">
            <h1 class="heading">Job Tracker</h1>
        </div>
        <div class="card">
            <div class="card-content">
                {{ $slot }}
            </div>
        </div>
    </div>
</body>
</html>