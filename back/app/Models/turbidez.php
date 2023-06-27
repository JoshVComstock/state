<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class turbidez extends Model
{
    use HasFactory;
    protected $fillable = [
        'nivel_turbidez'
    ];
}
