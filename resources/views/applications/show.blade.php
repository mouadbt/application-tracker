<x-app-layout>
    <x-slot name="header">
        <div class="flex items-center justify-between">
            <div>
                <h2 class="heading">{{ $application->company_name }}</h2>
                <p class="text-description mt-1">{{ $application->job_title }}</p>
            </div>
            <a href="/dashboard" class="btn-secondary">← Back</a>
        </div>
    </x-slot>

    <div class="max-w-3xl space-y-4">

        <div class="card">
            <div class="card-content">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <p class="text-description mb-1">Status</p>
                        <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset
                            {{ $application->status === 'applied' ? 'bg-blue-100/25 text-blue-700 ring-blue-600/10' : '' }}
                            {{ $application->status === 'interview' ? 'bg-yellow-100/25 text-yellow-700 ring-yellow-600/10' : '' }}
                            {{ $application->status === 'offer' ? 'bg-emerald-100/25 text-emerald-700 ring-emerald-600/10' : '' }}
                            {{ $application->status === 'rejected' ? 'bg-red-100/25 text-red-700 ring-red-600/10' : '' }}
                        ">
                            {{ ucfirst($application->status) }}
                        </span>
                    </div>
                    <div>
                        <p class="text-description mb-1">Source</p>
                        <p class="text-body">{{ $application->source ?? '—' }}</p>
                    </div>
                    <div>
                        <p class="text-description mb-1">Applied At</p>
                        <p class="text-body">{{ $application->applied_at?->format('M d, Y') ?? '—' }}</p>
                    </div>
                    @if($application->job_url)
                    <div>
                        <p class="text-description mb-1">Job URL</p>
                        <a href="{{ $application->job_url }}" target="_blank"
                           class="text-primary hover:underline text-sm truncate block">
                            View Posting ↗
                        </a>
                    </div>
                    @endif
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-content">
                <h3 class="text-label mb-2">Job Description</h3>
                <p class="text-body text-sm whitespace-pre-wrap leading-relaxed">{{ $application->job_description }}</p>
            </div>
        </div>

        @if($application->cover_letter_text)
        <div class="card">
            <div class="card-content">
                <h3 class="text-label mb-2">Cover Letter</h3>
                <p class="text-body text-sm whitespace-pre-wrap leading-relaxed">{{ $application->cover_letter_text }}</p>
            </div>
        </div>
        @endif

        @if($application->email_to)
        <div class="card">
            <div class="card-content">
                <h3 class="text-label mb-2">Email</h3>
                <p class="text-description mb-3">To: {{ $application->email_to }}</p>
                <p class="text-body text-sm whitespace-pre-wrap leading-relaxed">{{ $application->email_body }}</p>
            </div>
        </div>
        @endif

        @if($application->notes)
        <div class="card">
            <div class="card-content">
                <h3 class="text-label mb-2">Notes</h3>
                <p class="text-body text-sm whitespace-pre-wrap leading-relaxed">{{ $application->notes }}</p>
            </div>
        </div>
        @endif

    </div>
</x-app-layout>