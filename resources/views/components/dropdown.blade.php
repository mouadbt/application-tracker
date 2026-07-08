@props(['align' => 'right'])

<div class="relative" x-data="{ open: false }" @click.outside="open = false" @close.stop="open = false">
    <div @click="open = ! open">
        {{ $trigger }}
    </div>

    <div x-show="open"
         x-transition:enter="transition ease-out duration-200"
         x-transition:enter-start="opacity-0 scale-95"
         x-transition:enter-end="opacity-100 scale-100"
         x-transition:leave="transition ease-in duration-75"
         x-transition:leave-start="opacity-100 scale-100"
         x-transition:leave-end="opacity-0 scale-95"
         class="absolute z-50 mt-2 w-48 rounded-2xl border border-border bg-background shadow-lg p-1 flex flex-col {{ $align === 'left' ? 'left-0' : 'right-0' }}"
         style="display: none;"
         @click="open = false">
        {{ $content }}
    </div>
</div>