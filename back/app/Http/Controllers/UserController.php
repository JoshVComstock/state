<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Dotenv\Repository\RepositoryInterface;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function getfuncion()
    {
        return User::all();
    }

    public function register(Request $request)
    {
        $request->validate([
            'usuario' => 'required',
            'password' => 'required|confirmed',
            'nombre' => 'required',
            'apellido' => 'required',
            'rol' => 'required'
        ]);
     

        $users = new User();
        $users->usuario = $request->usuario;
        $users->rol = $request->rol;
        $users->nombre = $request->nombre;
        $users->apellido  = $request->apellido;
        $users->password = Hash::make($request->password);
        $users->save();
        return response()->json([
            "status" => 1,
            "msg" => "Registro exitoso",
        ]);
    }
    public function login(Request $request)
    {
        $request->validate([
            "usuario" => "required",
            "password" => "required"

        ]);

        $user = User::where("usuario", "=", $request->usuario)->first();
        if (isset($user->id)) {
            if (Hash::check($request->password, $user->password)) {
                //get user
                $userData = DB::select("select id, usuario, rol,nombre, apellido from users where usuario = '$request->usuario'");
                //crear tokem
                $token = $user->createToken("auth_token")->plainTextToken;
                return response()->json([
                    "status" => 1,
                    "msg" => "Usuario logeado",
                    "access_token" => $token,
                    "user" => $userData,
                ]);
            } else {
                return response()->json([
                    "status" => 0,
                    "msg" => "Password es incorrecto",
                ], 404);
            }
        } else {
            return response()->json([
                "status" => 0,
                "msg" => "Usuario no registrado",
            ], 404);
        };
    }
    public function userProfile()
    {
        return response()->json([
            "status" => 0,
            "msg" => "Acerca del perfil del usuario",
            "data" => auth()->user()
        ]);
    }

    public function Logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            "status" => 0,
            "msg" => "Cierre de seccion",
        ]);
    }
}
