<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Job Tracker') }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-background text-foreground min-h-screen">
    @include('layouts.navigation')

    @isset($header)
        <header class="p-8 pb-0">{{ $header }}</header>
    @endisset

    <main class="p-8">
        {{ $slot }}
    </main>
</body>
</html>