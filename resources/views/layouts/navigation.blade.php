<header class="p-8 flex items-center justify-between border-b border-border" x-data="{ open: false }">
    <a href="{{ route('dashboard') }}">
        <h1 class="heading">Job Tracker</h1>
        <hr class="bg-border h-[2px] w-12 border-0 mt-1" />
    </a>

    <div class="relative" @click.outside="open = false">
        <button @click="open = !open" class="btn-secondary">
            {{ Auth::user()->name }}
        </button>

        <div x-show="open" x-transition style="display: none;"
             class="absolute right-0 mt-2 w-48 rounded-2xl border border-border bg-background shadow-lg p-1 flex flex-col z-50">
            <a href="{{ route('profile.edit') }}" class="btn-ghost justify-start">Profile</a>
            <form method="POST" action="{{ route('logout') }}">
                @csrf
                <button type="submit" class="btn-ghost w-full justify-start">Log Out</button>
            </form>
        </div>
    </div>
</header>