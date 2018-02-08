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
        'name'       => 'Hero',
        'view'       => 'slices.hero',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 2,
        'name'       => 'Left Side With Card',
        'view'       => 'slices.left-side-with-card',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 3,
        'name'       => 'Experiences',
        'view'       => 'slices.experiences',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 4,
        'name'       => 'Experience',
        'view'       => 'slices.experience',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 5,
        'name'       => 'About',
        'view'       => 'slices.about',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 6,
        'name'       => 'About Info',
        'view'       => 'slices.about-info',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 7,
        'name'       => 'Pricing',
        'view'       => 'slices.pricing',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
    ]);


    DB::table('dvs_slice_instances')->insert([
      // Hero
      [
        'id'                 => 1,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'slice_id'           => 1,
        'label'              => 'Hero',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // Left Side with Card
      [
        'id'                 => 2,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'slice_id'           => 2,
        'label'              => 'Left Side With Card',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // Experiences
      [
        'id'                 => 3,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'slice_id'           => 3,
        'label'              => 'Experiences',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // Experience
      [
        'id'                 => 4,
        'page_version_id'    => 1,
        'parent_instance_id' => 3,
        'slice_id'           => 4,
        'label'              => 'Experiences',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 5,
        'page_version_id'    => 1,
        'parent_instance_id' => 3,
        'slice_id'           => 4,
        'label'              => 'Experiences',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 6,
        'page_version_id'    => 1,
        'parent_instance_id' => 3,
        'slice_id'           => 4,
        'label'              => 'Experiences',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 7,
        'page_version_id'    => 1,
        'parent_instance_id' => 3,
        'slice_id'           => 4,
        'label'              => 'Experiences',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 8,
        'page_version_id'    => 1,
        'parent_instance_id' => 3,
        'slice_id'           => 4,
        'label'              => 'Experiences',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 9,
        'page_version_id'    => 1,
        'parent_instance_id' => 3,
        'slice_id'           => 4,
        'label'              => 'Experiences',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // About
      [
        'id'                 => 10,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'slice_id'           => 5,
        'label'              => 'About',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // About Info
      [
        'id'                 => 11,
        'page_version_id'    => 1,
        'parent_instance_id' => 10,
        'slice_id'           => 6,
        'label'              => 'About Info',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 12,
        'page_version_id'    => 1,
        'parent_instance_id' => 10,
        'slice_id'           => 6,
        'label'              => 'About Info',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 13,
        'page_version_id'    => 1,
        'parent_instance_id' => 10,
        'slice_id'           => 6,
        'label'              => 'About Info',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // Pricing (14)
      [
        'id'                 => 14,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'slice_id'           => 7,
        'label'              => 'Pricing',
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
    ]);
  }

}
