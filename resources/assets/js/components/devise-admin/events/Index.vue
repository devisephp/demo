<template>

  <div class="dvs-flex dvs-justify-end dvs-items-stretch dvs-min-h-screen dvs-relative">
    <div id="devise-sidebar">
      <h2 class="dvs-font-bold dvs-mb-2">Events</h2>
      <a class="dvs-mb-8 dvs-block dvs-uppercase dvs-font-bold dvs-text-xs" href="#" @click.prevent="goToPage('devise-index')">Back to Administration</a>
      <ul class="dvs-list-reset">
        <li class="dvs-cursor-pointer dvs-mb-6 dvs-text-lg dvs-cursor-pointer" @click.prevent="showCreate = true">
          Create New Event
        </li>
      </ul>
    </div>
    <div id="devise-admin-content">
      <h2 class="dvs-mb-10">Current Events</h2>

      <div v-for="event in events.data" class="dvs-mb-6 dvs-rounded-sm dvs-bg-white dvs-shadow-sm dvs-flex dvs-justify-between dvs-items-center">
        <div class="dvs-min-w-2/5 dvs-text-base dvs-font-bold dvs-pr-8">
          {{ event.name }}<br>
        </div>
        <div class="dvs-min-w-1/5 dvs-text-sm dvs-font-mono dvs-pr-8">
          <span class="dvs-font-mono dvs-font-normal">{{ event.description }}</span>
        </div>
        <div class="dvs-w-2/5 dvs-px-8 dvs-flex dvs-justify-end">
          <button class="dvs-btn dvs-btn-xs dvs-mr-2" @click="showEditEvent(event)">Edit</button>
          <button class="dvs-btn dvs-btn-xs" v-devise-alert-confirm="{callback: requestDeleteEvent, arguments: event, message: 'Are you sure you want to delete this event?'}">Delete</button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <devise-modal class="dvs-z-50" v-if="showCreate" @close="showCreate = false">
        <h4 class="dvs-mb-4">Create new event</h4>

        <fieldset class="dvs-fieldset mb-4">
          <label>Name</label>
          <input type="text" v-model="newEvent.name" placeholder="Name of the Event">
        </fieldset>

        <fieldset class="dvs-fieldset mb-4">
          <label>Description</label>
          <textarea v-model="newEvent.description" placeholder="Description of the Event"></textarea>
        </fieldset>

        <fieldset class="dvs-fieldset mb-4">
          <label>Date</label>
          <input type="date" v-model="newEvent.date" placeholder="Date of the Event">
        </fieldset>

        <button class="dvs-btn" @click="requestCreateEvent" :disabled="createInvalid">Create</button>
        <button class="dvs-btn dvs-btn-plain" @click="showCreate = false">Cancel</button>
      </devise-modal>
    </transition>

    <transition name="fade">
      <devise-modal class="dvs-z-50" v-if="showEdit" @close="showEdit = false">
        <h4 class="dvs-mb-4">Edit event</h4>

        <fieldset class="dvs-fieldset mb-4">
          <label>Name</label>
          <input type="text" v-model="editEvent.name" placeholder="Name of the Event">
        </fieldset>

        <fieldset class="dvs-fieldset mb-4">
          <label>Description</label>
          <textarea v-model="editEvent.description" placeholder="Description of the Event"></textarea>
        </fieldset>

        <fieldset class="dvs-fieldset mb-4">
          <label>Date</label>
          <input type="datetime-local" v-model="editEvent.date" placeholder="Date of the Event">
        </fieldset>

        <button class="dvs-btn" @click="requestEditEvent" :disabled="editInvalid">Edit</button>
        <button class="dvs-btn dvs-btn-plain" @click="showEdit = false">Cancel</button>
      </devise-modal>
    </transition>
  </div>

</template>

<script>
import DeviseModal from './../../../../../../vendor/devisephp/cms/vue/src/components/utilities/Modal'
import moment from 'moment'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'EventsIndex',
  data () {
    return {
      modulesToLoad: 1,
      showCreate: false,
      showEdit: false,
      editEvent: {
        id: null,
        name: null,
        description: null,
        date: null
      },
      newEvent: {
        name: null,
        description: null,
        date: null
      }
    }
  },
  mounted () {
    this.retrieveAllEvents()
  },
  methods: {
    ...mapActions([
      'getEvents',
      'createEvent',
      'updateEvent',
      'deleteEvent'
    ]),
    requestCreateEvent () {
      let self = this
      this.createEvent(this.newEvent).then(function () {
        self.newEvent.name = null
        self.newEvent.description = null
        self.showCreate = false
      })
    },
    showEditEvent (event)  {
      this.editEvent.id = event.id
      this.editEvent.name = event.name
      this.editEvent.description = event.description
      this.editEvent.date = moment(event.date).format('YYYY-MM-DDTHH:mm:ss')
      this.showEdit = true
    },
    requestEditEvent ()  {
      let self = this
      this.updateEvent({event: this.originalEvent(this.editEvent.id), data: this.editEvent}).then(function () {
        self.editEvent.id = null
        self.editEvent.name = null
        self.editEvent.description = null
        self.editEvent.date = null
        self.showEdit = false
      })
    },
    requestDeleteEvent (event) {
      let self = this
      this.deleteEvent(event).then(function () {
        self.retrieveAllEvents()
      })
    },
    retrieveAllEvents (loadbar = true) {
      this.getEvents().then(function () {
        if (loadbar) {
          window.bus.$emit('incrementLoadbar', self.modulesToLoad)
        }
      })
    },
    originalEvent(id) {
      return this.events.data.find(event => event.id === id)
    }
  },
  computed: {
    ...mapGetters([
      'events'
    ]),
    createInvalid () {
      return this.newEvent.name === null ||
             this.newEvent.description === null ||
             this.newEvent.date === null
    },
    editInvalid () {
      return this.editEvent.name === null ||
             this.editEvent.description === null ||
             this.editEvent.date === null
    }
  },
  components: {
    DeviseModal
  }
}
</script>
