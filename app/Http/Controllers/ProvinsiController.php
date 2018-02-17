<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use App\Provinsi;

class ProvinsiController extends Controller
{
    //
    public function index(){
		
		//$res                    = DB::table('provinsi')->get();
		$res                    = Provinsi::all();
		$data['total']          = count($res);
		$data['per_page']       = 5;
		$page                   = 1;
		$step                   = $page+($data['per_page']-1);
		$data['last_page']      = ceil($data['total']/$data['per_page']);
		$data['from']           = $page;
		$data['to']             = $step;
		$data['next_page_url']  = '/provinsi/read/'.$page;
		$data['prev_page_url']  = '/provinsi/read/'.$page;
		$data['data']           = $res;
        return json_encode($data);
    }
    public function create(){
		/* ======= Class DB Connection =================
        $content['provinsi_f_nama']   = Input::get('provinsi_f_nama');
        $content['provinsi_f_ket']    = Input::get('provinsi_f_ket');
        $isi =  DB::table('provinsi')->insert($content);
        $res['message']    = 'Success';
        return json_encode($res);
		======= Class DB Connection ================= */
		$provinsi 	= new Provinsi;
		$provinsi->provinsi_f_nama 	= Input::get('provinsi_f_nama');
		$provinsi->provinsi_f_ket 	= Input::get('provinsi_f_ket');
		$provinsi->save();
		$res['message']    = 'Success';
        return json_encode($res);
    }
    public function edit($id){
		/*
		$isi = DB::table('provinsi')
                    ->where('provinsi_f_id', $id)
                    ->get();
		
		return json_encode($isi);
		*/
		$provinsi 	= Provinsi::find($id);
		return json_encode($provinsi);
    }
    public function update($id){
		/*
		$content['provinsi_f_nama']   = Input::get('provinsi_f_nama');
		$content['provinsi_f_ket']    = Input::get('provinsi_f_ket');
		$isi = DB::table('provinsi')
                    ->where('provinsi_f_id', $id)
                    ->update($content);
		if($isi){
			$res['message']    = 'Success';
		}else{
			$res['message']    = 'Fail';
		}
		return json_encode($res);
		*/
		$provinsi 	= Provinsi::find($id);
		$provinsi->provinsi_f_nama 	= Input::get('provinsi_f_nama');
		$provinsi->provinsi_f_ket 	= Input::get('provinsi_f_ket');
		$provinsi->save();
		if($provinsi){
			$res['message']    = 'Success';
		}else{
			$res['message']    = 'Fail';
		}
        return json_encode($res);		
    }
    public function delete($id){
		/*
		$isi = DB::table('provinsi')
                    ->where('provinsi_f_id', $id)
                    ->delete();
		if($isi){
			$res['message']    = 'Success';
		}else{
			$res['message']    = 'Fail';
		}
		return json_encode($res);
		*/
		$provinsi 	= Provinsi::find($id);
		$provinsi->delete();
    }
}
