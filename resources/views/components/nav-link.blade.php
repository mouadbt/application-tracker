@props(['active'])

@php
$classes = ($active ?? false)
    ? 'btn-ghost text-primary font-semibold'
    : 'btn-ghost text-muted-foreground';
@endphp

<a {{ $attributes->merge(['class' => $classes]) }}>
    {{ $slot }}
</a>