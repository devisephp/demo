<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SlicesSeeder extends Seeder
{

  public function run()
  {
    DB::table('dvs_slices')->insert([
      array(
        'id'          => 1,
        'name'        => 'Home',
        'view'        => null,
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ),
    ]);

    DB::table('dvs_slices')->insert([
      array(
        'id'          => 2,
        'name'        => 'Header',
        'view'        => 'slides.header',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ),
    ]);

    DB::table('dvs_slice_instances')->insert([
      array(
        'parent_slice_id' => 1,
        'slice_id'        => 2,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ),
    ]);
  }

}
