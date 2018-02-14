<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TemplatesSeeder extends Seeder
{

  public function run()
  {
    DB::table('dvs_templates')->insert([
      [
        'id'         => 1,
        'name'       => 'Home Page',
        'layout'     => 'layouts.marketing',
        'slices'      => '[{"id":1,"type":"single","slices":[]},{"id":2,"type":"single","slices":[]},{"id":3,"type":"single","slices":[{"id":4,"type":"repeats"}]},{"id":5,"type":"single","slices":[{"id":6,"type":"repeats"}]},{"id":7,"type":"single","slices":[]}]',
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ]
    ]);
  }

}
