<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Customer;
use Faker\Generator as Faker;

$factory->define(Customer::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'last_name' => $faker->name,
        'doc_id' => 'cod'.substr(sha1(uniqid('cod',true)),0,8),
        'phone_number' => $faker->phoneNumber,
        'address' => $faker->address,
    ];
});
