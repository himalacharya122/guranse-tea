<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/our-story', function () {
    return Inertia::render('OurStory');
});

Route::get('/process', function () {
    return Inertia::render('Process');
});

Route::get('/terroir', function () {
    return Inertia::render('Terroir');
});

Route::get('/wholesale', function () {
    return Inertia::render('Wholesale');
});

require __DIR__.'/auth.php';
