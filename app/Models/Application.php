<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = [
        'user_id',
        'company_name',
        'job_title',
        'job_description',
        'status',
        'source',
        'job_url',
        'resume_path',
        'cover_letter_text',
        'cover_letter_path',
        'email_to',
        'email_body',
        'notes',
        'applied_at',
    ];

    protected $casts = [
        'applied_at' => 'date',
    ];
}
