<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'code' => 'pod'.substr(sha1(uniqid()),0,6),
        'name' => $faker->name,
        'price' => $faker->randomFloat(2,100,500),
        'stock' => $faker->numberBetween(100,500),
        'min_stock' => 20,
        'provider_id' => 1,
        'image' => $faker->image(public_path('/img/products'), 800, 800, 'cats')

    ];
});
