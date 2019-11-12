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
Route::get('/categories', 'CategoryController@show');
Route::get('/ajax/categories', 'CategoryController@index');
Route::get('/ajax/categories/{category}', 'CategoryController@get');
Route::post('/ajax/categories/add', 'CategoryController@store');
Route::put('/ajax/categories/{category}/update', 'CategoryController@update');
Route::delete('/ajax/categories/{category}/delete', 'CategoryController@destroy');

Route::get('/providers', 'ProviderController@show');
Route::get('/ajax/providers', 'ProviderController@index');
Route::get('/ajax/providers/{provider}', 'ProviderController@get');
Route::post('/ajax/providers/add', 'ProviderController@store');
Route::put('/ajax/providers/{provider}/update', 'ProviderController@update');
Route::delete('/ajax/providers/{provider}/delete', 'ProviderController@destroy');