<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;
use App\Models\turbidez;
use App\Models\dhts;

class Reportescontroller extends Controller
{
    public function generatepdfturbidez()
    {
        $Turbidez = DB::table('turbidez')->get();
        $pdf = PDF::loadView('Turbidezpdf', ['Turbidez' => $Turbidez]);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream();
    }
    public function generatepdfDht()
    {
        $Sensor = DB::table('dhts')->get();
        $pdf = PDF::loadView('DthSensorpdf', ['Sensor' => $Sensor]);
        $pdf->setPaper('A4', 'landscape');
        return $pdf->stream();
    }
 
}
