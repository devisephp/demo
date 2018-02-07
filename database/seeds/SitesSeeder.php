<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SitesSeeder extends Seeder
{

  public function run()
  {
    DB::table('dvs_sites')->insert([
      array(
        'name'       => 'Devise Sea Cruises',
        'domain'     => 'devise-sea-cruises.test',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ),
      array(
        'name'       => 'Devise River Cruises',
        'domain'     => 'devise-river-cruises.test',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      )
    ]);

    DB::table('dvs_site_element')->insert([
      array(
        'site_id'      => 1,
        'element_id'   => 45,
        'element_type' => \Devise\Models\DvsLanguage::class,
        'default'      => 1,
        'created_at'   => date('Y-m-d H:i:s'),
        'updated_at'   => date('Y-m-d H:i:s'),
      ),
      array(
        'site_id'      => 1,
        'element_id'   => 163,
        'element_type' => \Devise\Models\DvsLanguage::class,
        'default'      => 0,
        'created_at'   => date('Y-m-d H:i:s'),
        'updated_at'   => date('Y-m-d H:i:s'),
      ),
      array(
        'site_id'      => 2,
        'element_id'   => 45,
        'element_type' => \Devise\Models\DvsLanguage::class,
        'default'      => 1,
        'created_at'   => date('Y-m-d H:i:s'),
        'updated_at'   => date('Y-m-d H:i:s'),
      ),
      array(
        'site_id'      => 2,
        'element_id'   => 163,
        'element_type' => \Devise\Models\DvsLanguage::class,
        'default'      => 0,
        'created_at'   => date('Y-m-d H:i:s'),
        'updated_at'   => date('Y-m-d H:i:s'),
      )
    ]);
  }

}
