<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/provinsi/read', ['uses' => 'ProvinsiController@index']);
Route::post('/provinsi/create', 'ProvinsiController@create');
Route::get('/provinsi/read/{id}', 'ProvinsiController@edit');
Route::post('/provinsi/update/{id}', 'ProvinsiController@update');
Route::post('/provinsi/delete/{id}', 'ProvinsiController@delete');
