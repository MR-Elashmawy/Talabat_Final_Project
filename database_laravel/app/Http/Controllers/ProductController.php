<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return $products;

        // http://127.0.0.1:8000/api/products GET
    }
    public function getProductFilter($categoryid)
    {
        $products = Product::where('category_id', $categoryid)->get();
        return $products;
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
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */

     
    public function store(StoreProductRequest $request)
    {
        $product =  Product::create([
            'title' => $request->title,
            'details' => $request->details,
            'price' => $request->price,
            'type' => $request->type,
            'status' => $request->status,
            'image' => $request->image,
            'category_id' => $request->category_id

        ]);

        return $product;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $product = Product::findOrFail($product->id);
        return $product;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $product = Product::find($product->id);

        $product =  $product->update([
            'title' => $request->title,
            'details' => $request->details,
            'price' => $request->price,
            'type' => $request->type,
            'status' => $request->status,
            'image' => $request->image,
            'category_id' => $request->category_id
        ]);

        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product = Product::findOrFail($product->id);
        $product->delete();
        return $product;
    }

}
