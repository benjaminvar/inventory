<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Provider;

class Product extends Model
{
    use SoftDeletes;

    public function provider()
    {
        return $this->belongsTo(Provider::class);
    }
}
