<x-app-layout>
    <x-slot name="header">
        <h2 class="heading">Profile</h2>
        <hr class="bg-border h-[2px] w-12 border-0 mt-1" />
    </x-slot>

    <div class="max-w-2xl space-y-6">
        <div class="card">
            <div class="card-content">
                @include('profile.partials.update-profile-information-form')
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                @include('profile.partials.update-password-form')
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                @include('profile.partials.delete-user-form')
            </div>
        </div>
    </div>
</x-app-layout>