<?php

use Illuminate\Database\Migrations\Migration;

class CreateMenuItems extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu_items', function(\Illuminate\Database\Schema\Blueprint $table) {
            $table->increments('id');
            $table->string('name', 255)->default('');
            $table->string('url', 255)->default('');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('menu_items');
    }

}