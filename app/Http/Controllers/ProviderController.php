<?php

namespace App\Http\Controllers;

use App\Provider;
use Illuminate\Http\Request;

class ProviderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $result = Provider::where('id','=',"$request->keyword")
                           ->OrWhere('name','like',"%$request->keyword%")
                           ->OrWhere('email','like',"%$request->keyword%")
                           ->OrWhere('phone_number','like',"%$request->keyword%")
                           ->paginate(25);
        return response()->json($result);
    }
    public function get(Provider $provider)
    {
        return response()->json($provider);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = \Validator::make($request->input(),
       [
           'name' => 'required|string',
           'email' => 'required|email',
           'phone_number' => 'required|string',
           'address' => 'required|string'
       ]);
       if(!$validator->fails())
       {
           $provider = new Provider();
           $provider->name = $request->input('name');
           $provider->email = $request->input('email');
           $provider->phone_number = $request->input('phone_number');
           $provider->address = $request->input('address');
           $provider->save();
           return response(null,200);
       }
       return response()->json($validator->errors());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Provider  $provider
     * @return \Illuminate\Http\Response
     */
    public function show(Provider $provider)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Provider  $provider
     * @return \Illuminate\Http\Response
     */
    public function edit(Provider $provider)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Provider  $provider
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Provider $provider)
    {
        $validator = \Validator::make($request->input(),
       [
           'name' => 'required|string',
           'email' => 'required|email',
           'phone_number' => 'required|string',
           'address' => 'required|string'
       ]);
       if(!$validator->fails())
       {
           $provider->name = $request->input('name');
           $provider->email = $request->input('email');
           $provider->phone_number = $request->input('phone_number');
           $provider->address = $request->input('address');
           $provider->save();
           return response(null,200);
       }
       return response()->json($validator->errors());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Provider  $provider
     * @return \Illuminate\Http\Response
     */
    public function destroy(Provider $provider)
    {
        $provider->delete();
    }
}
