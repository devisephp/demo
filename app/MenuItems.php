<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MenuItems extends Model
{
  public $slice = [
    'name',
    'url'
  ];
}
