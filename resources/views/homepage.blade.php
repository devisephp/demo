<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

    <title>Welcome to Devise Ocean Cruises</title>

    <script>
      var sitesObj = {
        data: [
          {
            name: 'Devise Sea Cruises',
            current: true,
            languages: {
              data: [
                {
                  id: 0,
                  name: 'English',
                  url: 'http://sea-cruise.devise.lbm.co',
                  default: true
                },
                {
                  id: 0,
                  name: 'Espanol',
                  url: 'http://sea-cruise.devise.lbm.co/es/'
                }
              ]
            }
          },
          {
            name: 'Devise River Cruises',
            current: false,
            languages: {
              data: [
                {
                  id: 0,
                  name: 'English',
                  url: 'http://river-cruise.devise.lbm.co',
                  default: true
                },
                {
                  id: 0,
                  name: 'Espanol',
                  url: 'http://river-cruise.devise.lbm.co/es/'
                }
              ]
            }
          }
        ]
      }

      var pageObj = {
        meta: {
          title: '',
          description: '',
          keywords: '',
          canonical: '',
          languages: [
            {
              id: 0,
              name: 'English',
              current: true,
              url: ''
            },
            {
              id: 1,
              name: 'Espanol',
              current: false,
              url: ''
            }
          ],
          versions: [
            {
              id: 0,
              current: true,
              name: '',
              ab_testing_amount: 0,
            }
          ]
        },
        slices: {
          data: [
            {
              name: 'HeroSlice',
              data: {
                title: {
                  text: '<strong>New</strong> England Route'
                }
              }
            },
            {
              name: 'LeftSideWithCard',
              data: {
                header: {
                  text: 'Welcome to the greatest cruise line ever.',
                },
                paragraph: {
                  text: '<p>Devise Sea Cruises is a fantasy cruise line. No, really, it isn\'t real. This is just a demo site for the greatest CMS of all time: Devise. Take a look around and see how content management can be fast for users, easy on developers, and amazing for content managers. You can login by clicking the login button above.</p>'
                },
                image: {
                  url: '/imgs/placeholder-scenery-3.jpg',
                  alt: 'A test image'
                }
              }
            },
            {
              name: 'ExperiencesSlice',
              data: {
                title: {
                  text: 'Unparallelled Amenaties'
                }
              },
              slices: {
                data: [
                  {
                    name: 'Experience',
                    data: {
                      name: {
                        text: 'Destinations',
                      },
                      title: {
                        text: 'Away we go',
                      },
                      description: {
                        text: 'We offer the most incredible destinations. You will never want to come home.'
                      },
                      longDescription: {
                        text: 'Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey.'
                      },
                      html: {
                        text: `TODO`
                      }
                    }
                  },
                  {
                    name: 'Experience',
                    data: {
                      name: {
                        text: 'Shore Excursions',
                      },
                      title: {
                        text: 'Welcome to the wild side',
                      },
                      description: {
                        text: 'Devise Sea Cruises offer the most extreme excursions in the industry. You probably won\'t survive'
                      },
                      longDescription: {
                        text: 'Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey.'
                      },
                      html: {
                        text: `TODO`
                      }
                    }
                  },
                  {
                    name: 'Experience',
                    data: {
                      name: {
                        text: 'Our Ships',
                      },
                      title: {
                        text: 'Opulance. We has it.',
                      },
                      description: {
                        text: 'Devise Sea Cruises offer the most extreme excursions in the industry. You probably won\'t survive'
                      },
                      longDescription: {
                        text: 'Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey.'
                      },
                      html: {
                        text: `TODO`
                      }
                    }
                  },
                  {
                    name: 'Experience',
                    data: {
                      name: {
                        text: 'Things to Do',
                      },
                      title: {
                        text: '"Boardum" isn\'t in our vocabulary',
                      },
                      description: {
                        text: 'We offer a million things to do on every ship. Literally, a million.'
                      },
                      longDescription: {
                        text: 'Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey.'
                      },
                      html: {
                        text: `TODO`
                      }
                    }
                  },
                  {
                    name: 'Experience',
                    data: {
                      name: {
                        text: 'Dining',
                      },
                      title: {
                        text: 'Eat your way to paradise',
                      },
                      description: {
                        text: 'Our executive chefs prepare fresh, organic, gluten-free meals daily.'
                      },
                      longDescription: {
                        text: 'Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey.'
                      },
                      html: {
                        text: `TODO`
                      }
                    }
                  },
                  {
                    name: 'Experience',
                    data: {
                      name: {
                        text: 'Packages',
                      },
                      title: {
                        text: 'Deals for families and couples',
                      },
                      description: {
                        text: 'Family and Getaway Packages provide value without a cost. Wait... what?'
                      },
                      longDescription: {
                        text: 'Bacon ipsum dolor amet alcatra kielbasa salami brisket kevin, frankfurter picanha swine shank. Cow corned beef bacon spare ribs hamburger andouille tri-tip buffalo. Ribeye turducken kevin, biltong andouille jowl ham hock strip steak short ribs tri-tip fatback landjaeger. Kevin venison ham hock bresaola salami turkey.'
                      },
                      html: {
                        text: `TODO`
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      }

      // this should normally be written out by devise and this is for testing
      // only.
      window.page = JSON.stringify(pageObj)

    </script>
    <script>
      window.deviseComponents = {
        HeroSlice: {
          name: 'HeroSlice',
          template: '<hero :devise="devise"></hero>',
          config: {
            title: {
              type: 'wysiwyg',
              label: 'title'
            }
          }
        },
        LeftSideWithCard: {
          name: 'LeftSideWithCard',
          template: `
          <div class="p-8 md:p-12 lg:p-12 mt-10 sm:mt-0 bg-grey-lightest flex flex-col items-center">
            <div class="max-w-container">
              <div class="flex justify-between items-stretch flex-col sm:flex-row card shadow-lg rounded-lg bg-white">
                <div class="w-full sm:w-3/5 mb-10 sm:mb-0 sm:mr-10 p-12">
                  <h3 class="text-blue-dark mb-4 font-light">
                    @{{ devise.data.header.text }}
                  </h3>
                  <div v-html="devise.data.paragraph.text"></div>
                </div>
                <div class="min-w-xs w-3/5 md:w-3/5 lg:w-3/5 xl:w-2/5 xxl:w-1/5 sm:ml-8 bg-cover rounded-r-lg" :style="{ backgroundImage: 'url(' + devise.data.image.url + ')'}"></div>
              </div>
            </div>
          </div>
          `,
          config: {
            title: {
              type: 'text',
              label: 'Header',
              maxlength: 120
            },
            paragraph: {
              type: 'wysiwyg',
              label: 'Paragraph below the title',
            },
            image: {
              type: 'image',
              label: 'Image to the right of the title',
            }
          }
        },
        ExperiencesSlice: {
          name: 'ExperiencesSlice',
          template: `
          <div class="p-8 md:p-12 lg:p-15 mt-10 sm:mt-0 flex flex-col items-center" id="experience">
            <div class="max-w-container flex justify-between items-center flex-col sm:flex-row w-full">
              <experiences-app :devise="devise"></experiences-app>
            </div>
          </div>
          `,
          config: {
            title: {
              type: 'text',
              label: 'Header',
              maxlength: 120
            },
            paragraph: {
              type: 'wysiwyg',
              label: 'Paragraph below the title',
            },
            image: {
              type: 'image',
              label: 'Image to the right of the title',
            }
          },
          config: {
            title: {
              type: 'wysiwyg',
              label: 'title'
            }
          }
        }
      }
    </script>
  </head>
  <body>

    <div class="flex flex-col justify-center items-stretch w-full">
      <div class="fixed pin-l pin-r pin-t z-20" id="headroom">
        <ul class="flex list-reset font-normal uppercase text-sm justify-end p-8">
          <li class="relative z-20"><a href="#hero" class="no-underline mx-8">Home</a></li>
          <li class="relative z-20"><a href="#experience" class="no-underline mx-8">Experiences</a></li>
          <li class="relative z-20"><a href="#about" class="no-underline mx-8">About</a></li>
          <li class="relative z-20"><a href="#purchase" class="no-underline mx-8">Purchase</a></li>
          <li class="relative z-20"><a href="/admin/login" class="no-underline mx-8">Login</a></li>
        </ul>
      </div>

      <div id="app">
        <devise></devise>
      </div>

      <div class="p-8 md:p-12 lg:p-15 mt-10 sm:mt-0 w-full bg-grey-lightest flex flex-col items-center" id="about">
        <div class="max-w-container">
          <h2 class="mb-8 text-blue-dark">About Devise Sea Cruises</h2>

          <p class="w-4/5 text-blue-grey">Pork pig rump sausage ham kielbasa. Drumstick cow spare ribs pork, ham hock andouille porchetta pork loin frankfurter picanha pastrami turducken shank sausage. Flank ground round kielbasa, doner shank bresaola buffalo. Shank ground round bacon tail meatball burgdoggen flank shoulder. Doner prosciutto pastrami salami shoulder andouille. Shank kevin alcatra, bresaola meatball shankle ball tip burgdoggen. Cupim pork belly tri-tip pastrami prosciutto spare ribs tail t-bone hamburger.</p>

          <div class="mt-10 flex flex-col md:flex-row">
            <div class="md:pr-8 mb-8 w-full md:w-1/3">
              <h5 class="text-blue-dark mb-4">Her Majesty</h5>
              <p>Pancetta corned beef porchetta, picanha shoulder kevin cupim tri-tip drumstick shank turkey capicola bacon jerky. </p>
            </div>
            <div class="md:px-8 mb-8 w-full md:w-1/3">
              <h5 class="text-blue-dark mb-4">Corina Laguna</h5>
              <p>Filet mignon biltong landjaeger ball tip rump. Pork cow bacon ribeye capicola doner chicken sausage. Meatloaf sausage ham hock boudin rump. </p>
            </div>
            <div class="md:pl-8 mb-8 w-full md:w-1/3">
              <h5 class="text-blue-dark mb-4">Devisifyisty</h5>
              <p>Shankle fatback boudin pork belly jowl frankfurter flank porchetta buffalo pork turkey filet mignon salami. Chuck kevin filet mignon.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="p-8 md:p-12 lg:p-15 mt-10 sm:mt-0 w-full flex flex-col items-center" id="pricing">
        <div class="max-w-container">
          <h2 class="mb-12 text-blue-dark font-light text-center">Pricing as relaxing as our cruises</h2>

          <div class="flex flex-col md:flex-row justify-between align-stretch mb-8">
            <div class="w-full md:w-1/2 md:pr-4 flex">
              <div class="rounded-sm bg-grey-lighter p-8 text-blue-dark w-full">
                <h4 class="mb-8 font-light text-center">7-Day Cruise</h4>
                <div class="text-center text-5xl font-bold mb-8">
                  <small class="text-xs align-top mt-4 -mr-3 inline-block">$</small>
                  800
                  <sub class="text-sm align-baseline inline-block -ml-3">/ person</sub>
                </div>
                <p>The seven day cruise guarantees that you will have to work out for at least 20 days after you return home. It's incredible. Try the quiche.</p>
              </div>
            </div>

            <div class="w-full md:w-1/2 md:pl-4 flex">
              <div class="rounded-sm bg-blue-dark text-white p-8 w-full">
                <h4 class="mb-8 font-light text-center">14-Day Cruise</h4>
                <div class="text-center text-5xl font-bold mb-8">
                  <small class="text-xs align-top mt-4 -mr-3 inline-block">$</small>
                  1,800
                  <sub class="text-sm align-baseline inline-block -ml-3">/ person</sub>
                </div>
                <p class="text-white">Someone is not coming home alive. Have you seen that movie 47 meters down? *Spoilers* Yeah, that one girl totally get's it from the shark. </p>
              </div>
            </div>
          </div>

          <div class="flex justify-between">
            <div class="w-full md:w-1/2 text-center">
              <a href="#" class="btn">Let's Get Started</a>
            </div>
            <div class="w-1/2 text-center hidden md:block">
              <a href="#" class="btn">I'm So In</a>
            </div>
          </div>
        </div>
      </div>

    </div>

    <script type="text/javascript" src="http://localhost:8080/app.js"></script>
    <script src="{{ mix('/js/app.js') }}"></script>

  </body>
</html>
