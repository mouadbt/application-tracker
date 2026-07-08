@props(['status'])
@if ($status)
    <div {{ $attributes->merge(['class' => 'text-sm text-emerald-600 font-medium']) }}>
        {{ $status }}
    </div>
@endif