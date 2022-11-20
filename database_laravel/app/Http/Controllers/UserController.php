<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index() {
        $users = User::all();
        return $users;
    }
    public function show($id)
    {
        $user = User::find($id);
        return $user;
    }
    public function store(Request $request)
    {
        $user =  User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            // 'password' => Hash::make($request->password),
            'password' => $request->password,
            'city' => $request->city,
            'address' => $request->address,
            'gender' => $request->gender,
            'image' => $request->image
        ]);

        return $user;
        // http://127.0.0.1:8000/api/users POST
    }


    public function update(Request $request, $id)
    {
        $user = User::find($id);
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->gender = $request->gender;
        $user->update();
        return $user;
        // http://127.0.0.1:8000/api/users POST
    }


    public function countDefaultUsers()
    {
        $users = User::where('is_admin', 0)->count();
        return $users;
    }


}
