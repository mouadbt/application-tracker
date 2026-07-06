<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('company_name');
            $table->string('job_title');
            $table->text('job_description');
            $table->string('status', 50)->default('applied');
            $table->string('source', 100)->nullable();
            $table->text('job_url')->nullable();
            $table->string('resume_path', 500)->nullable();
            $table->text('cover_letter_text')->nullable();
            $table->string('cover_letter_path', 500)->nullable();
            $table->jsonb('questions')->nullable();
            $table->string('email_to')->nullable();
            $table->text('email_body')->nullable();
            $table->text('notes')->nullable();
            $table->date('applied_at')->default(DB::raw('CURRENT_DATE'));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applications');
    }
};
