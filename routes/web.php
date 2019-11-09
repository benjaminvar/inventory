<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::prefix('/components')->group(function() {
    Route::get('/buttons', function () {
        return view('buttons');
    });
    Route::get('/cards', function () {
        return view('cards');
    });
});
Route::prefix('/utilities')->group(function() {
    Route::get('/color', function () {
        return view('utilities-color');
    });
    Route::get('/border', function () {
        return view('utilities-border');
    });
    Route::get('/animation', function () {
        return view('utilities-animation');
    });
    Route::get('/other', function () {
        return view('utilities-other');
    });
});
Route::prefix('/pages')->group(function() {
    Route::get('/login', function () {
        return view('Auth.login');
    })->name('login');
    Route::get('/register', function () {
        return view('Auth.register');
    })->name('register');;
    Route::get('/forgot-password', function () {
        return view('Auth.forgot-password');
    })->name('forgot');
    Route::get('/404', function () {
        return view('404');
    });
    Route::get('/blank', function () {
        return view('blank');
    });
    Route::get('/charts', function () {
        return view('charts');
    });
    Route::get('/tables', function () {
        return view('tables');
    });
});
Route::fallback(function () {
    return redirect('pages/404');
});