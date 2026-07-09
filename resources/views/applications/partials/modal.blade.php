<dialog id="application-modal"
    class="m-auto w-[calc(100%-2rem)] max-w-[500px] rounded-2xl border border-border bg-card p-0 shadow-lg backdrop:bg-black/20 backdrop:backdrop-blur-sm open:flex flex-col">

    <header class="flex items-center justify-between p-6 pb-0">
        <div>
            <h4 class="text-label text-lg" id="modal-title">Add Application</h4>
            <p class="text-description mt-1" id="modal-description">Fill in the details below</p>
        </div>
        <button type="button" class="btn-icon" onclick="closeModal()">✕</button>
    </header>

    <form id="modal-form" method="POST" class="flex flex-col pt-6">
        @csrf
        <div id="method-field"></div>

        <div class="grid gap-4 p-6 pt-0 max-h-[60vh] overflow-y-auto">
            <div class="grid gap-2">
                <x-input-label for="company_name" :value="__('Company Name *')" />
                <x-text-input type="text" id="company_name" name="company_name" placeholder="e.g. Google" required />
            </div>
            <div class="grid gap-2">
                <x-input-label for="job_title" :value="__('Job Title *')" />
                <x-text-input type="text" id="job_title" name="job_title" placeholder="e.g. Frontend Engineer"
                    required />
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-2">
                    <x-input-label for="status" :value="__('Status')" />
                    <select id="status" name="status" class="input">
                        <option value="applied">Applied</option>
                        <option value="interview">Interview</option>
                        <option value="offer">Offer</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
                <div class="grid gap-2">
                    <x-input-label for="source" :value="__('Source')" />
                    <x-text-input type="text" id="source" name="source" placeholder="LinkedIn, Indeed..." />
                </div>
            </div>
            <div class="grid gap-2">
                <x-input-label for="job_url" :value="__('Job URL')" />
                <x-text-input type="text" id="job_url" name="job_url" placeholder="https://..." />
            </div>
            <div class="grid gap-2">
                <x-input-label for="job_description" :value="__('Job Description *')" />
                <textarea id="job_description" name="job_description" rows="4" required class="input h-auto resize-none"
                    placeholder="Paste the full job description..."></textarea>
            </div>
            <div class="grid gap-2">
                <x-input-label for="cover_letter_text" :value="__('Cover Letter')" />
                <textarea id="cover_letter_text" name="cover_letter_text" rows="3" class="input h-auto resize-none"
                    placeholder="Optional cover letter..."></textarea>
            </div>
            <div class="grid gap-2">
                <x-input-label for="email_to" :value="__('Email To')" />
                <x-text-input type="text" id="email_to" name="email_to" placeholder="recruiter@company.com" />
            </div>
            <div class="grid gap-2">
                <x-input-label for="email_body" :value="__('Email Body')" />
                <textarea id="email_body" name="email_body" rows="3" class="input h-auto resize-none"
                    placeholder="Email content..."></textarea>
            </div>

            <div class="grid gap-2">
                <x-input-label for="notes" :value="__('Notes')" />
                <textarea id="notes" name="notes" rows="2" class="input h-auto resize-none"
                    placeholder="Any additional notes..."></textarea>
            </div>
        </div>

        <footer class="flex items-center justify-end gap-3 border-t border-border p-4 px-6">
            <button type="button" onclick="closeModal()" class="btn-secondary">Cancel</button>
            <button type="submit" class="btn-primary">Save Application</button>
        </footer>
    </form>
</dialog>

<script>
    function openModal() {
        document.getElementById('modal-title').textContent = 'Add Application';
        document.getElementById('modal-description').textContent = 'Fill in the details below';
        document.getElementById('modal-form').action = '/applications';
        document.getElementById('method-field').innerHTML = '';
        document.getElementById('modal-form').reset();
        document.getElementById('application-modal').showModal();
    }

    function openEditModal(row) {
        document.getElementById('modal-title').textContent = 'Edit Application';
        document.getElementById('modal-description').textContent = 'Update the details below';
        document.getElementById('modal-form').action = `/applications/${row.dataset.id}`;
        document.getElementById('method-field').innerHTML = '<input type="hidden" name="_method" value="PUT">';
        document.getElementById('company_name').value = row.dataset.company ?? '';
        document.getElementById('job_title').value = row.dataset.title ?? '';
        document.getElementById('status').value = row.dataset.status ?? '';
        document.getElementById('source').value = row.dataset.source ?? '';
        document.getElementById('job_url').value = row.dataset.url ?? '';
        document.getElementById('job_description').value = row.dataset.description ?? '';
        document.getElementById('cover_letter_text').value = row.dataset.coverLetter ?? '';
        document.getElementById('email_to').value = row.dataset.emailTo ?? '';
        document.getElementById('email_body').value = row.dataset.emailBody ?? '';
        document.getElementById('notes').value = row.dataset.notes ?? '';
        document.getElementById('application-modal').showModal();
    }

    function closeModal() {
        document.getElementById('application-modal').close();
    }
</script>