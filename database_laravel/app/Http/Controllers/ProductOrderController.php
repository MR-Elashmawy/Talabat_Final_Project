<?php

namespace App\Http\Controllers;

use App\Models\ProductOrder;
use App\Http\Requests\StoreProductOrderRequest;
use App\Http\Requests\UpdateProductOrderRequest;
use App\Models\Product;

header('Access-Control-Allow-Origin: *');
class ProductOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\StoreProductOrderRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductOrderRequest $request)
    {
        $orderDetails =  ProductOrder::create([
            'order_id' => $request->order_id,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity,
        ]);

        return $orderDetails;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProductOrder  $productOrder
     * @return \Illuminate\Http\Response
     */
    public function show(ProductOrder $productOrder)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProductOrder  $productOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductOrder $productOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductOrderRequest  $request
     * @param  \App\Models\ProductOrder  $productOrder
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductOrderRequest $request, ProductOrder $productOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProductOrder  $productOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProductOrder $productOrder)
    {
        $productOrder = ProductOrder::find($productOrder->order_id);
        $productOrder->delete();
        return $productOrder;
    }

    // public function getOrderDetails($orderID)
    // {
    //     $ordersDetails = ProductOrder::where('order_id', $orderID)->get();
    //     return $ordersDetails[0];
    // }
}
