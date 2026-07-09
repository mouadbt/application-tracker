<x-app-layout>
    <x-slot name="header">
        <div class="flex items-center justify-between">
            <div>
                <h2 class="heading">Job Applications</h2>
                <hr class="bg-border h-[2px] w-12 border-0 mt-1" />
            </div>
            <button onclick="openModal()" class="btn-primary">+ Add Application</button>
        </div>
    </x-slot>

    {{-- Stats --}}
    <section class="flex gap-4 items-stretch h-min mb-8">
        <div class="card flex-1">
            <div class="card-content">
                <span class="text-description">Total Applications</span>
                <span class="heading text-3xl">{{ $stats['total'] }}</span>
            </div>
        </div>
        <div class="card flex-1">
            <div class="card-content">
                <span class="text-description">Applied</span>
                <span class="heading text-3xl text-blue-600">{{ $stats['applied'] }}</span>
            </div>
        </div>
        <div class="card flex-1">
            <div class="card-content">
                <span class="text-description">Interview</span>
                <span class="heading text-3xl text-yellow-600">{{ $stats['interview'] }}</span>
            </div>
        </div>
        <div class="card flex-1">
            <div class="card-content">
                <span class="text-description">Offer</span>
                <span class="heading text-3xl text-emerald-600">{{ $stats['offer'] }}</span>
            </div>
        </div>
        <div class="card flex-1">
            <div class="card-content">
                <span class="text-description">Rejected</span>
                <span class="heading text-3xl text-destructive">{{ $stats['rejected'] }}</span>
            </div>
        </div>
    </section>

    {{-- Table --}}
    <section class="space-y-6">
        <div class="flex items-center justify-between">
            <h2 class="heading">Recent Applications</h2>
            <span class="text-description">Showing {{ $applications->count() }} results</span>
        </div>

        <div class="table-wrapper rounded-2xl border border-border">
            <table class="table">
                <thead class="table-thead">
                    <tr>
                        <th class="table-th">Company</th>
                        <th class="table-th">Position</th>
                        <th class="table-th">Status</th>
                        <th class="table-th">Source</th>
                        <th class="table-th">Applied</th>
                        <th class="table-th text-right">Actions</th>
                    </tr>
                </thead>
                <tbody class="table-tbody">
                    @forelse($applications as $application)
                        <tr class="group" data-id="{{ $application->id }}" data-company="{{ $application->company_name }}"
                            data-title="{{ $application->job_title }}" data-status="{{ $application->status }}"
                            data-source="{{ $application->source }}" data-url="{{ $application->job_url }}"
                            data-description="{{ $application->job_description }}"
                            data-cover-letter="{{ $application->cover_letter_text }}"
                            data-email-to="{{ $application->email_to }}" data-email-body="{{ $application->email_body }}"
                            data-notes="{{ $application->notes }}">
                            <td class="table-td">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="flex size-9 items-center justify-center rounded-xl bg-primary/5 text-primary font-bold border border-primary/10 text-sm">
                                        {{ strtoupper(substr($application->company_name, 0, 1)) }}
                                    </div>
                                    <span class="font-semibold text-foreground">{{ $application->company_name }}</span>
                                </div>
                            </td>
                            <td class="table-td font-medium">{{ $application->job_title }}</td>
                            <td class="table-td">
                                <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset
                                    {{ $application->status === 'applied' ? 'bg-blue-100/25 text-blue-700 ring-blue-600/10' : '' }}
                                    {{ $application->status === 'interview' ? 'bg-yellow-100/25 text-yellow-700 ring-yellow-600/10' : '' }}
                                    {{ $application->status === 'offer' ? 'bg-emerald-100/25 text-emerald-700 ring-emerald-600/10' : '' }}
                                    {{ $application->status === 'rejected' ? 'bg-red-100/25 text-red-700 ring-red-600/10' : '' }}
                                ">
                                    {{ ucfirst($application->status) }}
                                </span>
                            </td>
                            <td class="table-td text-muted-foreground">{{ $application->source ?? '—' }}</td>
                            <td class="table-td text-muted-foreground">
                                {{ $application->applied_at?->format('M d, Y') ?? '—' }}</td>
                            <td class="table-td text-right relative">
                                <div
                                    class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href="/applications/{{ $application->id }}"
                                        class="btn-ghost text-xs px-3 py-1">View</a>
                                    <button onclick="openEditModal(this.closest('tr'))"
                                        class="btn-ghost text-xs px-3 py-1">Edit</button>
                                    <form action="/applications/{{ $application->id }}" method="POST"
                                        onsubmit="return confirm('Delete this application?')">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit"
                                            class="btn-ghost text-xs px-3 py-1 text-destructive">Delete</button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="6" class="text-center p-8 text-muted-foreground">
                                No applications yet. Add your first one!
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </section>

    @include('applications.partials.modal')
</x-app-layout>