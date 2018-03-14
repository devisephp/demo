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

  public $tableColumns = [
    [
      "key"    => 'id',
      "label"  => 'ID',
      "sort"   => 'id',
      "search" => 'id'
    ],
    [
      "key"    => 'name',
      "label"  => 'Name',
      "sort"   => 'name',
      "search" => 'name'
    ],
    [
      "key"    => 'url',
      "label"  => 'URL',
      "sort"   => 'url',
      "search" => 'url',
      "show"   => false
    ]
  ];
}
