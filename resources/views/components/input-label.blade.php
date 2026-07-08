@props(['value'])
<label {{ $attributes->merge(['class' => 'text-label text-sm block mb-1.5']) }}>
    {{ $value ?? $slot }}
</label>