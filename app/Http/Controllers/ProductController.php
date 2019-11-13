<?php

namespace App\Http\Controllers;

use App\Product;
use App\Provider;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $result = Product::where('id','=',"$request->keyword")
                           ->OrWhere('code','=',"$request->keyword")
                           ->OrWhere('name','like',"%$request->keyword%")
                           ->paginate(25);
        return response()->json($result);
    }

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get(Product $product)
    {
        return response()->json($product);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function getAll(Product $product)
    {
        return response()->json(Product::all());
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
            'code' => 'required|unique:products,code',
            'name' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'min_stock' => 'required|integer',
            'image' => 'required|string',
            'provider_id' => 'required|exists:providers,id'
        ]);
        $validator->after(function($validator) use($request)
        {
            if(!\Storage::drive('public')->exists($request->input('image')))
            {
                $validator->errors()->add('image','image does not exists');
            }
        });
        if(!$validator->fails())
        {
            $provider = Provider::find($request->input('provider_id'));
            $product = new Product();
            $product->code = $request->input('code');
            $product->name = $request->input('name');
            $product->price = $request->input('price');
            $product->stock = $request->input('stock');
            $product->min_stock = $request->input('min_stock');
            $product->image = $request->input('image');
            $product->provider()->associate($provider);
            $product->save();
            return response(null,200);
        }
        return response()->json($validator->errors());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeImage(Request $request)
    {
        $validator = \Validator::make($request->all(),
        [
            'image' => 'required|image|max:5242880'
        ]);
        if(!$validator->fails())
        {
            $path = \Storage::drive('public')->putFile('img/products',$request->file('image'));
            return response($path,200);
        }
        return response()->json($validator->errors());
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return view('Product.view');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $validator = \Validator::make($request->input(),
        [
            'code' => 'required|unique:products,code',
            'name' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'min_stock' => 'required|integer',
            'image' => 'required|string',
            'provider_id' => 'required|exists:providers,id'
        ]);
        $validator->after(function($validator) use($request)
        {
            if(!\Storage::drive('public')->exists($request->input('image')))
            {
                $validator->errors()->add('image','image does not exists');
            }
        });
        if(!$validator->fails())
        {
            $provider = Provider::find($request->input('provider_id'));
            $product->code = $request->input('code');
            $product->name = $request->input('name');
            $product->price = $request->input('price');
            $product->stock = $request->input('stock');
            $product->min_stock = $request->input('min_stock');
            $product->image = $request->input('image');
            $product->provider()->associate($provider);
            $product->save();
            return response(null,200);
        }
        return response()->json($validator->errors());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //\Storage::drive('public')->delete($product->image);
        $product->delete();
    }
}
