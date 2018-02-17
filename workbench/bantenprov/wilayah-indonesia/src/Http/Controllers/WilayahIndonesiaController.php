<?php namespace Bantenprov\WilayahIndonesia\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Bantenprov\WilayahIndonesia\Facades\WilayahIndonesia;
use Bantenprov\WilayahIndonesia\Models\WilayahIndonesiaModel;

/**
 * The WilayahIndonesiaController class.
 *
 * @package Bantenprov\WilayahIndonesia
 * @author  bantenprov <developer.bantenprov@gmail.com>
 */
class WilayahIndonesiaController extends Controller
{
    public function demo()
    {
        return WilayahIndonesia::welcome();
    }
}
