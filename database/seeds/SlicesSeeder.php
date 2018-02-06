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
        'view'       => 'slices.hero',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 3,
        'name'       => 'LeftSideWithCard',
        'view'       => 'slices.left-side-with-card',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 4,
        'name'       => 'Experiences',
        'view'       => 'slices.experiences',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 5,
        'name'       => 'Experience',
        'view'       => 'slices.experience',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 6,
        'name'       => 'About',
        'view'       => 'slices.about',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 7,
        'name'       => 'AboutInfo',
        'view'       => 'slices.about-info',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 8,
        'name'       => 'Pricing',
        'view'       => 'slices.pricing',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
    ]);


    DB::table('dvs_slice_instances')->insert([
      // Hero
      [
        'parent_slice_id' => 1,
        'slice_id'        => 2,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      // Left Side with Card
      [
        'parent_slice_id' => 1,
        'slice_id'        => 3,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      // Experiences
      [
        'parent_slice_id' => 1,
        'slice_id'        => 4,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      // Experience
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
      // About
      [
        'parent_slice_id' => 1,
        'slice_id'        => 6,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      // About Info
      [
        'parent_slice_id' => 6,
        'slice_id'        => 7,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      [
        'parent_slice_id' => 6,
        'slice_id'        => 7,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      [
        'parent_slice_id' => 6,
        'slice_id'        => 7,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
      // Pricing (14)
      [
        'parent_slice_id' => 1,
        'slice_id'        => 8,
        'created_at'      => date('Y-m-d H:i:s'),
        'updated_at'      => date('Y-m-d H:i:s'),
      ],
    ]);
  }

}
