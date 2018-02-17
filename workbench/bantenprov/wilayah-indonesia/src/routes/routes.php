<?php

Route::group(['prefix' => 'wilayah-indonesia'], function() {
    Route::get('demo', 'Bantenprov\WilayahIndonesia\Http\Controllers\WilayahIndonesiaController@demo');
});
