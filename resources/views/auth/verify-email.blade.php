<x-guest-layout>
    <p class="text-sm text-muted-foreground mb-4">
        {{ __('Thanks for signing up! Please verify your email address by clicking the link we emailed to you.') }}
    </p>

    @if (session('status') == 'verification-link-sent')
        <p class="text-sm text-emerald-600 font-medium mb-4">
            {{ __('A new verification link has been sent to your email address.') }}
        </p>
    @endif

    <div class="flex items-center justify-between">
        <form method="POST" action="{{ route('verification.send') }}">
            @csrf
            <x-primary-button>{{ __('Resend Verification Email') }}</x-primary-button>
        </form>

        <form method="POST" action="{{ route('logout') }}">
            @csrf
            <button type="submit" class="text-sm text-muted-foreground hover:text-primary underline">
                {{ __('Log Out') }}
            </button>
        </form>
    </div>
</x-guest-layout>