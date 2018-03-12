<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FieldsSeeder extends Seeder
{

  public function run()
  {
    DB::table('dvs_fields')->insert([
      [
        'slice_instance_id' => 2,
        'key'               => 'title',
        'json_value'        => '{"text":"<strong>New</strong> England Route"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 3,
        'key'               => 'header',
        'json_value'        => '{"text":"Welcome to the greatest cruise line ever."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 3,
        'key'               => 'paragraph',
        'json_value'        => '{"text":"<p>Devise Sea Cruises is a fantasy cruise line. No, really, it isn\'t real . This is just a demo site for the greatest CMS of all time: Devise . Take a look around and see how content management can be fast for users, easy on developers, and amazing for content managers . You can login by clicking the login button above .</p >"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 3,
        'key'               => 'image',
        'json_value'        => '{"url":"/imgs/placeholder-scenery-3.jpg","alt":"a test image"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 4,
        'key'               => 'title',
        'json_value'        => '{"text":"Unparallelled Amenaties"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      // experience 1 instance 5
      [
        'slice_instance_id' => 5,
        'key'               => 'name',
        'json_value'        => '{"text":"Destinations"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 5,
        'key'               => 'title',
        'json_value'        => '{"text":"Away we go"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 5,
        'key'               => 'description',
        'json_value'        => '{"text":"We offer the most incredible destinations. You will never want to come home."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 5,
        'key'               => 'longDescription',
        'json_value'        => '{"text":"Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 5,
        'key'               => 'html',
        'json_value'        => '{"text":"todo"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      // experience 2 instance 6
      [
        'slice_instance_id' => 6,
        'key'               => 'name',
        'json_value'        => '{"text":"Shore Excursions"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 6,
        'key'               => 'title',
        'json_value'        => '{"text":"Welcome to the wild side"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 6,
        'key'               => 'description',
        'json_value'        => '{"text":"Devise Sea Cruises offer the most extreme excursions in the industry. You probably won\'t survive"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 6,
        'key'               => 'longDescription',
        'json_value'        => '{"text":"Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 6,
        'key'               => 'html',
        'json_value'        => '{"text":"todo"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      // experience 3 instance 7
      [
        'slice_instance_id' => 7,
        'key'               => 'name',
        'json_value'        => '{"text":"Our Ships"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 7,
        'key'               => 'title',
        'json_value'        => '{"text":"Opulance. We has it."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 7,
        'key'               => 'description',
        'json_value'        => '{"text":"Devise Sea Cruises offer the most extreme excursions in the industry. You probably won\'t survive"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 7,
        'key'               => 'longDescription',
        'json_value'        => '{"text":"Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 7,
        'key'               => 'html',
        'json_value'        => '{"text":"todo"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      // experience 4 instance 8
      [
        'slice_instance_id' => 8,
        'key'               => 'name',
        'json_value'        => '{"text":"Things to Do"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 8,
        'key'               => 'title',
        'json_value'        => '{"text":"&quot;Boardum&quot; isn\'t in our vocabulary"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 8,
        'key'               => 'description',
        'json_value'        => '{"text":"We offer the most incredible destinations. You will never want to come home."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 8,
        'key'               => 'longDescription',
        'json_value'        => '{"text":"Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 8,
        'key'               => 'html',
        'json_value'        => '{"text":"todo"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      // experience 5 instance 9
      [
        'slice_instance_id' => 9,
        'key'               => 'name',
        'json_value'        => '{"text":"Dining"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 9,
        'key'               => 'title',
        'json_value'        => '{"text":"Eat your way to paradise"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 9,
        'key'               => 'description',
        'json_value'        => '{"text":"Our executive chefs prepare fresh, organic, gluten-free meals daily."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 9,
        'key'               => 'longDescription',
        'json_value'        => '{"text":"Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 9,
        'key'               => 'html',
        'json_value'        => '{"text":"todo"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      // experience 6 instance 10
      [
        'slice_instance_id' => 10,
        'key'               => 'name',
        'json_value'        => '{"text":"Packages"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 10,
        'key'               => 'title',
        'json_value'        => '{"text":"Deals for families and couples"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 10,
        'key'               => 'description',
        'json_value'        => '{"text":"Family and Getaway Packages provide value without a cost. Wait... what?"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 10,
        'key'               => 'longDescription',
        'json_value'        => '{"text":"Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 10,
        'key'               => 'html',
        'json_value'        => '{"text":"todo"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      // About 11
      [
        'slice_instance_id' => 11,
        'key'               => 'title',
        'json_value'        => '{"text":"About Devise Sea Cruises"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 11,
        'key'               => 'paragraph',
        'json_value'        => '{"text":"Pork pig rump sausage ham kielbasa. Drumstick cow spare ribs pork, ham hock andouille porchetta pork loin frankfurter picanha pastrami turducken shank sausage. Flank ground round kielbasa, doner shank bresaola buffalo. Shank ground round bacon tail meatball burgdoggen flank shoulder. Doner prosciutto pastrami salami shoulder andouille. Shank kevin alcatra, bresaola meatball shankle ball tip burgdoggen. Cupim pork belly tri-tip pastrami prosciutto spare ribs tail t-bone hamburger."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      // about 10 instance 12
      [
        'slice_instance_id' => 12,
        'key'               => 'title',
        'json_value'        => '{"text":"Deals for families and couples"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 12,
        'key'               => 'description',
        'json_value'        => '{"text":"Family and Getaway Packages provide value without a cost. Wait... what?"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      // about 10 instance 13
      [
        'slice_instance_id' => 13,
        'key'               => 'title',
        'json_value'        => '{"text":"Safety is our priority"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 13,
        'key'               => 'description',
        'json_value'        => '{"text":"Devise cruise lines averages less men overboard every year than any other cruise line."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      // about 10 instance 14
      [
        'slice_instance_id' => 14,
        'key'               => 'title',
        'json_value'        => '{"text":"Gluten Free. Every Day."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 14,
        'key'               => 'description',
        'json_value'        => '{"text":"We strive to bring your gluten free cakes to you 24/7. Delicious."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      // Pricing 10 instance 15
      [
        'slice_instance_id' => 15,
        'key'               => 'title',
        'json_value'        => '{"text":"Pricing as relaxing as our cruises"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 15,
        'key'               => 'offer1background',
        'json_value'        => '{"color":"#fff"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 15,
        'key'               => 'offer1title',
        'json_value'        => '{"text":"7-Day Cruise"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 15,
        'key'               => 'offer1price',
        'json_value'        => '{"text":"800"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 15,
        'key'               => 'offer1description',
        'json_value'        => '{"text":"The seven day cruise guarantees that you will have to work out for at least 20 days after you return home. It\'s incredible. Try the quiche."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 15,
        'key'               => 'offer1link',
        'json_value'        => '{"text":"Let\'s get started","href":"http://laravel.com","target":"_blank"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 15,
        'key'               => 'offer2background',
        'json_value'        => '{"color":"#2b6ed8"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 15,
        'key'               => 'offer2title',
        'json_value'        => '{"text":"10-Day Cruise"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 15,
        'key'               => 'offer2price',
        'json_value'        => '{"text":"1200"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 14,
        'key'               => 'offer2description',
        'json_value'        => '{"text":"Someone is not coming home alive. Have you seen that movie 47 meters down? *Spoilers* Yeah, that one girl totally gets it from the shark.."}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
      [
        'slice_instance_id' => 14,
        'key'               => 'offer2link',
        'json_value'        => '{"text":"I\'m so in","href":"http://laravel-news.com","target":"_self"}',
        'created_at'        => date('Y-m-d H:i:s'),
        'updated_at'        => date('Y-m-d H:i:s'),
      ],
    ]);
  }

}
