<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TemplatesSeeder extends Seeder
{

  public function run()
  {
    DB::table('dvs_templates')->insert([
      [
        'id'            => 1,
        'name'          => 'Home Page',
        'layout'        => 'layouts.marketing',
        'model_queries' => '',
        'created_at'    => date('Y-m-d H:i:s'),
        'updated_at'    => date('Y-m-d H:i:s'),
      ]
    ]);


    DB::table('dvs_template_slice')->insert([
      // Header
      [
        'id'          => 1,
        'template_id' => 1,
        'parent_id'   => 0,
        'slice_id'    => 1,
        'type'        => 'single',
        'label'       => 'Header',
        'position'    => 0,
        'model_query' => '',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
      // Menu Items
      [
        'id'          => 2,
        'template_id' => 1,
        'parent_id'   => 1,
        'slice_id'    => 2,
        'type'        => 'model',
        'label'       => 'Menu Items',
        'position'    => 1,
        'model_query' => 'class=App%5CMenuItems&sort=id',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
      // Hero
      [
        'id'          => 3,
        'template_id' => 1,
        'parent_id'   => 0,
        'slice_id'    => 3,
        'type'        => 'single',
        'label'       => 'Hero',
        'position'    => 2,
        'model_query' => '',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
      // Left Side with Card
      [
        'id'          => 4,
        'template_id' => 1,
        'parent_id'   => 0,
        'slice_id'    => 4,
        'type'        => 'single',
        'label'       => 'Left Side With Card',
        'position'    => 3,
        'model_query' => '',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
      // Experiences
      [
        'id'          => 5,
        'template_id' => 1,
        'parent_id'   => 0,
        'slice_id'    => 5,
        'type'        => 'single',
        'label'       => 'Experience',
        'position'    => 4,
        'model_query' => '',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
      // Experience
      [
        'id'          => 6,
        'template_id' => 1,
        'parent_id'   => 5,
        'slice_id'    => 6,
        'type'        => 'repeats',
        'label'       => 'Experiences',
        'position'    => 5,
        'model_query' => '',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
      // About
      [
        'id'          => 7,
        'template_id' => 1,
        'parent_id'   => 0,
        'slice_id'    => 7,
        'type'        => 'single',
        'label'       => 'About',
        'position'    => 6,
        'model_query' => '',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
      // About Info
      [
        'id'          => 8,
        'template_id' => 1,
        'parent_id'   => 7,
        'slice_id'    => 8,
        'type'        => 'single',
        'label'       => 'About Info',
        'position'    => 7,
        'model_query' => '',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
      [
        'id'          => 9,
        'template_id' => 1,
        'parent_id'   => 7,
        'slice_id'    => 8,
        'type'        => 'single',
        'label'       => 'About Info',
        'position'    => 8,
        'model_query' => '',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
      [
        'id'          => 10,
        'template_id' => 1,
        'parent_id'   => 7,
        'slice_id'    => 8,
        'type'        => 'single',
        'label'       => 'About Info',
        'position'    => 9,
        'model_query' => '',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
      // Pricing (14)
      [
        'id'          => 11,
        'template_id' => 1,
        'parent_id'   => 0,
        'slice_id'    => 9,
        'type'        => 'single',
        'label'       => 'Pricing',
        'position'    => 10,
        'model_query' => '',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
      // Events List
      [
        'id'          => 12,
        'template_id' => 1,
        'parent_id'   => 0,
        'slice_id'    => 10,
        'type'        => 'single',
        'label'       => 'Event list',
        'position'    => 11,
        'model_query' => '',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
      // Menu Items
      [
        'id'          => 13,
        'template_id' => 1,
        'parent_id'   => 12,
        'slice_id'    => 11,
        'type'        => 'model',
        'label'       => 'Event Details',
        'position'    => 12,
        'model_query' => 'class=App%5CEvent&sort=-date',
        'config'      => '',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ],
    ]);
  }

}
