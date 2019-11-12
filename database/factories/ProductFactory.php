<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    //return the full image path including the drive
    $fullImagePath = $faker->image(storage_path('/app/public/img/products'), 800, 800, 'cats');
    //get the image filename and extension
    $imageBasename = pathinfo($fullImagePath)['basename'];
    //get relative path of image
    $imagePath = 'img/products/'. $imageBasename;
    return [
        'code' => 'pod'.substr(sha1(uniqid()),0,6),
        'name' => $faker->name,
        'price' => $faker->randomFloat(2,100,500),
        'stock' => $faker->numberBetween(100,500),
        'min_stock' => 20,
        'provider_id' => 1,
        'image' =>  $imagePath
    ];
});
