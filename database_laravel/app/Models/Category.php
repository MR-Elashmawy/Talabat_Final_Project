<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'description',
        'city',
        'location',
        'telephone_number',
        'phone_number',
        'phone_number_2',
        'status',
        'category_type',
        'image'
    ];
}
