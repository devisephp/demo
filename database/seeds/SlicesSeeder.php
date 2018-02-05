<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SlicesSeeder extends Seeder
{

  public function run()
  {
    DB::table('dvs_slices')->insert([
      [
        'id'         => 1,
        'name'       => 'Home',
        'view'       => null,
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 2,
        'name'       => 'Hero',
        'view'       => 'slides.hero',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 3,
        'name'       => 'LeftSideWithCard',
        'view'       => 'slides.left-side-with-card',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 4,
        'name'       => 'Experiences',
        'view'       => 'slides.experiences',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 5,
        'name'       => 'Experience',
        'view'       => 'slides.experience',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
    ]);


    DB::table('dvs_slice_instances')->insert([
      [
        'parent_slice_id' => 1,
        'slice_id'        => 2,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      [
        'parent_slice_id' => 1,
        'slice_id'        => 3,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      [
        'parent_slice_id' => 1,
        'slice_id'        => 4,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      [
        'parent_slice_id' => 4,
        'slice_id'        => 5,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      [
        'parent_slice_id' => 4,
        'slice_id'        => 5,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      [
        'parent_slice_id' => 4,
        'slice_id'        => 5,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      [
        'parent_slice_id' => 4,
        'slice_id'        => 5,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      [
        'parent_slice_id' => 4,
        'slice_id'        => 5,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      [
        'parent_slice_id' => 4,
        'slice_id'        => 5,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
    ]);
  }

}
