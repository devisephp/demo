<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserGroupSeeder extends Seeder
{

  public function run()
  {
    DB::table('users')->insert([
      [
        'id'         => 1,
        'name'       => 'Mauro',
        'email'      => 'mauro@lbm.co',
        'password'   => \Illuminate\Support\Facades\Hash::make('sublime'),
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 2,
        'name'       => 'Gary',
        'email'      => 'gary@lbm.co',
        'password'   => \Illuminate\Support\Facades\Hash::make('sublime'),
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
    ]);


    DB::table('groups')->insert([
      [
        'id'         => 1,
        'name'       => 'Developers',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 2,
        'name'       => 'Administrators',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 3,
        'name'       => 'Editors',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
    ]);


    DB::table('group_user')->insert([
      [
        'id'         => 1,
        'user_id'    => 1,
        'group_id'   => 1,
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 2,
        'user_id'    => 2,
        'group_id'   => 1,
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
    ]);
  }

}
