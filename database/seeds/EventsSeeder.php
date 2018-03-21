<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventsSeeder extends Seeder
{

  public function run()
  {
    DB::table('events')->insert([
      [
        'name'        => 'Puppetry on the Seas!',
        'description' => 'Bacon ipsum dolor amet beef buffalo bacon, salami alcatra short ribs beef ribs kevin pig ball tip picanha fatback turkey. Shank alcatra chicken picanha tenderloin tongue meatball doner turducken turkey pastrami beef ribs leberkas pancetta.',
        'date'        => date('Y-m-d H:i:s', strtotime('next month')),
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'name'        => 'Dawn Power Yoga',
        'description' => 'Pork belly shoulder shank, swine brisket frankfurter spare ribs kevin. Corned beef chicken tri-tip, tongue short loin porchetta t-bone meatloaf filet mignon pig sirloin prosciutto alcatra biltong.',
        'date'        => date('Y-m-d H:i:s', strtotime('next week')),
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'name'        => 'Eat like a pro. Think like a pro.',
        'description' => 'Chicken sirloin ribeye tri-tip fatback, short loin boudin leberkas. Hamburger bresaola bacon pancetta flank pork belly shankle venison strip steak chuck. ',
        'date'        => date('Y-m-d H:i:s', strtotime('tomorrow')),
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],
      [
        'name'        => 'Single malt with The Captain',
        'description' => 'Picanha buffalo shank swine porchetta alcatra cupim. Buffalo short loin turkey, pork chop short ribs spare ribs venison shank sausage biltong. Kevin ham jowl tongue.',
        'date'        => date('Y-m-d H:i:s', strtotime('next tuesday')),
        'created_at' => date('Y-m-d H:i:s'),
        'updated_at' => date('Y-m-d H:i:s'),
      ],

    ]);
  }

}
