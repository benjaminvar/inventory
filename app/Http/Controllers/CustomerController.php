<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = Customer::where('name','like',"%$request->keyword%")
        ->OrWhere('last_name','like',"%$request->keyword%")
        ->OrWhere('doc_id','like',"%$request->keyword%")
        ->OrWhere('phone_number','like',"%$request->keyword%")
        ->OrWhere('id','=',"$request->keyword")
        ->paginate(25);
        return response()->json($result);
    }
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get(Customer $customer)
    {
        return response()->json($customer);
    }
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
        return response()->json(Customer::all());
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
           'last_name' => 'required|string',
           'doc_id' => 'required|string|unique:customers,doc_id',
           'phone_number' => 'required|string',
           'address' => 'required|string'
       ]);
       if(!$validator->fails())
       {
           $customer = new Customer();
           $customer->name = $request->input('name');
           $customer->last_name = $request->input('last_name');
           $customer->doc_id = $request->input('doc_id');
           $customer->phone_number = $request->input('phone_number');
           $customer->address = $request->input('address');
           $customer->save();
           return response(null,200);
       }
       return response()->json($validator->errors());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function show(Customer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function edit(Customer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Customer $customer)
    {
        $validator = \Validator::make($request->input(),
        [
            'name' => 'required|string',
            'last_name' => 'required|string',
            'doc_id' => 'required|string|unique:customers,doc_id',
            'phone_number' => 'required|string',
            'address' => 'required|string'
        ]);
        if(!$validator->fails())
        {
            $customer->name = $request->input('name');
            $customer->last_name = $request->input('last_name');
            $customer->doc_id = $request->input('doc_id');
            $customer->phone_number = $request->input('phone_number');
            $customer->address = $request->input('address');
            $customer->save();
            return response(null,200);
        }
        return response()->json($validator->errors());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Customer  $customer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Customer $customer)
    {
        $customer->delete();
    }
}
