<template>
  <div v-cloak class="w-full">
    <transition name="slide" mode="out-in">
      <router-view :features="features" :key="key"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        features: [
          {
            name: 'Destinations',
            pro: false,
            title: 'The most incredible desitinations',
            description: 'We offer the most incredible destinations. You will never want to come home.',
            longDescription: 'Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey.',
            html: `TODO`
          },
          {
            name: 'Shore Excursions',
            pro: false,
            title: 'Real Adventures Await',
            description: 'Devise Sea Cruises offer the most extreme excursions in the industry. You probably won\'t survive',
            longDescription: 'Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey.',
            html: `TODO`
          },
          {
            name: 'Our Ships',
            pro: true,
            title: 'Opulance. We has it.',
            description: 'Come aboard the most magnificent ships of the seven seas and get lost with too many cocktails.',
            longDescription: 'Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey.',
            html: `TODO`
          },
          {
            name: 'Things to Do',
            pro: true,
            title: '"Boardum" isn\'t in our vocabulary',
            description: 'We offer a million things to do on every ship. Literally, a million.',
            longDescription: 'Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey.',
            html: `TODO`
          },
          {
            name: 'Dining',
            pro: true,
            title: 'Eat your way to paradise',
            description: 'Our executive chefs prepare fresh, organic, gluten-free meals daily.',
            longDescription: 'Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey.',
            html: `TODO`
          },
          {
            name: 'Packages',
            pro: true,
            title: 'Deals for families and couples',
            description: 'Family and Getaway Packages provide value without a cost. Wait... what?',
            longDescription: 'Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey.',
            html: `TODO`
          }
        ]
      }
    },
    computed: {
      key () {
        return this.$route.name + '-' + this.$route.params.featurename
      }
    }
  }
</script>
