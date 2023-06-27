<?php

use App\Http\Controllers\dhtsController;
use App\Http\Controllers\turbidezController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Reportescontroller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/dhtd', [dhtsController::class, 'index']);
Route::post('/dhtd', [dhtsController::class, 'store']);
Route::delete('/dhtd/{id}', [dhtsController::class, 'destroy']);

Route::get('/turbidez', [turbidezController::class, 'index']);
Route::get('/turbide', [turbidezController::class, 'mostrarnivel']);

Route::post('/turbidez', [turbidezController::class, 'store']);
Route::delete('/turbidez/{id}', [turbidezController::class, 'destroy']);

Route::post('registeruser', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);
Route::get('registeruserget', [UserController::class, 'getfuncion']);

//Reportes
Route::get('report1-pdf', [Reportescontroller::class, 'generatepdfturbidez']);
Route::get('report2-pdf', [Reportescontroller::class, 'generatepdfDht']);