<?php

namespace App;

use Devise\Traits\Filterable;
use Devise\Traits\Sortable;
use Illuminate\Database\Eloquent\Model;

class MenuItems extends Model
{
  use Filterable, Sortable;
  
  public $slice = [
    'name',
    'url'
  ];
}
