<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Sale extends Model
{
    public function products()
    {
        return $this->belongsToMany(Product::class,'product_sale','product_id','sale_id');
    }
}
