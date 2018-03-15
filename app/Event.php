<?php

namespace App;

use Devise\Traits\Filterable;
use Devise\Traits\Sortable;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
  use Filterable, Sortable;

  public $fillable = ['name', 'description', 'date'];

  public $slice = [
    'name',
    'description',
    'date'
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
      "key"    => 'description',
      "label"  => 'Description',
      "sort"   => 'description',
      "search" => 'description'
    ],
    [
      "key"    => 'date',
      "label"  => 'Date',
      "sort"   => 'date',
      "search" => 'date',
      "show"   => false
    ]
  ];
}
