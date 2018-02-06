<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SitesSeeder extends Seeder
{

  public function run()
  {
    DB::table('dvs_sites')->insert([
      array(
        'domains'     => 'devise-sea-cruises.test',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      ),
      array(
        'domains'     => 'devise-river-cruises.test',
        'created_at'  => date('Y-m-d H:i:s'),
        'updated_at'  => date('Y-m-d H:i:s'),
      )
    ]);
  }

}
