<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApplicationController extends Controller
{
    public function index()
    {
        $applications = Application::where('user_id', Auth::id())->latest()->get();

        $stats = [
            'total'     => $applications->count(),
            'applied'   => $applications->where('status', 'applied')->count(),
            'interview' => $applications->where('status', 'interview')->count(),
            'offer'     => $applications->where('status', 'offer')->count(),
            'rejected'  => $applications->where('status', 'rejected')->count(),
        ];

        return view('dashboard', compact('applications', 'stats'));
    }

    public function show(Application $application)
    {
        return view('applications.show', compact('application'));
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'company_name'      => 'required|string|max:255',
            'job_title'         => 'required|string|max:255',
            'job_description'   => 'required|string',
            'status'            => 'required|string',
            'source'            => 'nullable|string|max:100',
            'job_url'           => 'nullable|string',
            'cover_letter_text' => 'nullable|string',
            'email_to'          => 'nullable|string',
            'email_body'        => 'nullable|string',
            'notes'             => 'nullable|string',
            'applied_at'        => 'nullable|date',
        ]);

        $data['user_id'] = Auth::id();

        Application::create($data);

        return redirect('/dashboard');
    }

    public function update(Request $request, Application $application)
    {
        $data = $request->validate([
            'company_name'      => 'required|string|max:255',
            'job_title'         => 'required|string|max:255',
            'job_description'   => 'required|string',
            'status'            => 'required|string',
            'source'            => 'nullable|string|max:100',
            'job_url'           => 'nullable|string',
            'cover_letter_text' => 'nullable|string',
            'email_to'          => 'nullable|string',
            'email_body'        => 'nullable|string',
            'notes'             => 'nullable|string',
            'applied_at'        => 'nullable|date',
        ]);

        $application->update($data);

        return redirect('/dashboard');
    }

    public function destroy(Application $application)
    {
        $application->delete();
        return redirect('/dashboard');
    }
}