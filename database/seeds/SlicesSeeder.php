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
        'name'       => 'Header',
        'view'       => 'slices.header',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 2,
        'name'       => 'Menu Item',
        'view'       => 'slices.menu-item',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 3,
        'name'       => 'Hero',
        'view'       => 'slices.hero',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 4,
        'name'       => 'Left Side With Card',
        'view'       => 'slices.left-side-with-card',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 5,
        'name'       => 'Experiences',
        'view'       => 'slices.experiences',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 6,
        'name'       => 'Experience',
        'view'       => 'slices.experience',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 7,
        'name'       => 'About',
        'view'       => 'slices.about',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 8,
        'name'       => 'About Info',
        'view'       => 'slices.about-info',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 9,
        'name'       => 'Pricing',
        'view'       => 'slices.pricing',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 10,
        'name'       => 'Events List',
        'view'       => 'slices.events-list',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 11,
        'name'       => 'Event Details',
        'view'       => 'slices.events-details',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'id'         => 12,
        'name'       => 'Footer',
        'view'       => 'slices.footer',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
    ]);


    DB::table('dvs_slice_instances')->insert([
      // Header
      [
        'id'                 => 1,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'template_slice_id'  => 1,
        'enabled'            => 1,
        'position'           => 0,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // Hero
      [
        'id'                 => 2,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'template_slice_id'  => 3,
        'enabled'            => 1,
        'position'           => 1,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // Left Side with Card
      [
        'id'                 => 3,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'template_slice_id'  => 4,
        'enabled'            => 1,
        'position'           => 2,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // Experiences
      [
        'id'                 => 4,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'template_slice_id'  => 5,
        'enabled'            => 1,
        'position'           => 3,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // Experience
      [
        'id'                 => 5,
        'page_version_id'    => 1,
        'parent_instance_id' => 4,
        'template_slice_id'  => 6,
        'enabled'            => 1,
        'position'           => 4,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 6,
        'page_version_id'    => 1,
        'parent_instance_id' => 4,
        'template_slice_id'  => 6,
        'enabled'            => 1,
        'position'           => 5,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 7,
        'page_version_id'    => 1,
        'parent_instance_id' => 4,
        'template_slice_id'  => 6,
        'enabled'            => 1,
        'position'           => 6,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 8,
        'page_version_id'    => 1,
        'parent_instance_id' => 4,
        'template_slice_id'  => 6,
        'enabled'            => 1,
        'position'           => 7,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 9,
        'page_version_id'    => 1,
        'parent_instance_id' => 4,
        'template_slice_id'  => 6,
        'enabled'            => 1,
        'position'           => 8,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 10,
        'page_version_id'    => 1,
        'parent_instance_id' => 4,
        'template_slice_id'  => 6,
        'enabled'            => 1,
        'position'           => 9,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // About
      [
        'id'                 => 11,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'template_slice_id'  => 7,
        'enabled'            => 1,
        'position'           => 10,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // About Info
      [
        'id'                 => 12,
        'page_version_id'    => 1,
        'parent_instance_id' => 11,
        'template_slice_id'  => 8,
        'enabled'            => 1,
        'position'           => 11,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 13,
        'page_version_id'    => 1,
        'parent_instance_id' => 11,
        'template_slice_id'  => 9,
        'enabled'            => 1,
        'position'           => 12,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      [
        'id'                 => 14,
        'page_version_id'    => 1,
        'parent_instance_id' => 11,
        'template_slice_id'  => 10,
        'enabled'            => 1,
        'position'           => 13,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // Pricing (14)
      [
        'id'                 => 15,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'template_slice_id'  => 11,
        'enabled'            => 1,
        'position'           => 14,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // Events List
      [
        'id'                 => 16,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'template_slice_id'  => 12,
        'enabled'            => 1,
        'position'           => 15,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
      // Footer
      [
        'id'                 => 17,
        'page_version_id'    => 1,
        'parent_instance_id' => 0,
        'template_slice_id'  => 14,
        'enabled'            => 1,
        'position'           => 16,
        'created_at'         => date('Y-m-d H:i:s'),
        'updated_at'         => date('Y-m-d H:i:s'),
      ],
    ]);
  }

}
