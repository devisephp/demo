<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    DB::table('dvs_languages')->truncate();
    DB::table('dvs_page_versions')->truncate();
    DB::table('dvs_pages')->truncate();
    DB::table('dvs_sites')->truncate();
    DB::table('dvs_slices')->truncate();
    DB::table('dvs_slice_instances')->truncate();

    $this->call([
      LanguagesSeeder::class,
      PagesSeeder::class,
      SitesSeeder::class,
      SlicesSeeder::class
    ]);
  }
}
