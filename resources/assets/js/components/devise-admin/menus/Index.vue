<template>

  <div class="dvs-flex dvs-justify-end dvs-items-stretch dvs-min-h-screen dvs-relative">
    <div id="devise-sidebar">
      <h2 class="dvs-font-bold dvs-mb-2">Menus</h2>
      <a class="dvs-mb-8 dvs-block dvs-uppercase dvs-font-bold dvs-text-xs" href="#" @click.prevent="goToPage('devise-index')">Back to Administration</a>
      <ul class="dvs-list-reset">
        <li class="dvs-cursor-pointer dvs-mb-6 dvs-text-lg dvs-cursor-pointer" @click.prevent="showCreate = true">
          Create New Menu
        </li>
      </ul>
    </div>
    <div id="devise-admin-content">
      <h2 class="dvs-mb-10">Current Menus</h2>

      <div v-for="menu in menus.data" class="dvs-mb-6 dvs-rounded-sm dvs-bg-white dvs-shadow-sm dvs-flex dvs-justify-between dvs-items-center">
        <div class="dvs-min-w-2/5 dvs-text-base dvs-font-bold dvs-pr-8">
          {{ menu.name }}<br>
        </div>
        <div class="dvs-min-w-1/5 dvs-text-sm dvs-font-mono dvs-pr-8">
          <span class="dvs-font-mono dvs-font-normal">{{ menu.url }}</span>
        </div>
        <div class="dvs-w-2/5 dvs-px-8 dvs-flex dvs-justify-end">
          <button class="dvs-btn dvs-btn-xs dvs-mr-2" @click="showEditMenu(menu)">Edit</button>
          <button class="dvs-btn dvs-btn-xs" v-devise-alert-confirm="{callback: requestDeleteMenu, arguments: menu, message: 'Are you sure you want to delete this menu?'}">Delete</button>
        </div>
      </div>
    </div>

    <transition name="fade">
      <devise-modal class="dvs-z-50" v-if="showCreate" @close="showCreate = false">
        <h4 class="dvs-mb-4">Create new menu</h4>

        <fieldset class="dvs-fieldset mb-4">
          <label>Name</label>
          <input type="text" v-model="newMenu.name" placeholder="Name of the Menu item">
        </fieldset>

        <fieldset class="dvs-fieldset mb-4">
          <label>Url</label>
          <input type="text" v-model="newMenu.url" placeholder="URL of the Menu Item">
        </fieldset>

        <button class="dvs-btn" @click="requestCreateMenu" :disabled="createInvalid">Create</button>
        <button class="dvs-btn dvs-btn-plain" @click="showCreate = false">Cancel</button>
      </devise-modal>
    </transition>

    <transition name="fade">
      <devise-modal class="dvs-z-50" v-if="showEdit" @close="showEdit = false">
        <h4 class="dvs-mb-4">Edit menu</h4>

        <fieldset class="dvs-fieldset mb-4">
          <label>Name</label>
          <input type="text" v-model="editMenu.name" placeholder="Name of the Menu Item">
        </fieldset>

        <fieldset class="dvs-fieldset mb-4">
          <label>Url</label>
          <input type="text" v-model="editMenu.url" placeholder="URL of the Menu Item">
        </fieldset>

        <button class="dvs-btn" @click="requestEditMenu" :disabled="editInvalid">Edit</button>
        <button class="dvs-btn dvs-btn-plain" @click="showEdit = false">Cancel</button>
      </devise-modal>
    </transition>
  </div>

</template>

<script>
import DeviseModal from './../../../../../../vendor/devisephp/cms/vue/src/components/utilities/Modal'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'MenusIndex',
  data () {
    return {
      modulesToLoad: 1,
      showCreate: false,
      showEdit: false,
      editMenu: {
        id: null,
        name: null,
        url: null
      },
      newMenu: {
        name: null,
        url: null
      }
    }
  },
  mounted () {
    this.retrieveAllMenus()
  },
  methods: {
    ...mapActions([
      'getMenus',
      'createMenu',
      'updateMenu',
      'deleteMenu'
    ]),
    requestCreateMenu () {
      let self = this
      this.createMenu(this.newMenu).then(function () {
        self.newMenu.name = null
        self.newMenu.url = null
        self.showCreate = false
      })
    },
    showEditMenu (menu)  {
      this.editMenu.id = menu.id
      this.editMenu.name = menu.name
      this.editMenu.url = menu.url
      this.showEdit = true
    },
    requestEditMenu ()  {
      let self = this
      this.updateMenu({menu: this.originalMenu(this.editMenu.id), data: this.editMenu}).then(function () {
        self.editMenu.id = null
        self.editMenu.name = null
        self.editMenu.url = null
        self.showEdit = false
      })
    },
    requestDeleteMenu (menu) {
      let self = this
      this.deleteMenu(menu).then(function () {
        self.retrieveAllMenus()
      })
    },
    retrieveAllMenus (loadbar = true) {
      this.getMenus().then(function () {
        if (loadbar) {
          window.bus.$emit('incrementLoadbar', self.modulesToLoad)
        }
      })
    },
    originalMenu(id) {
      return this.menus.data.find(menu => menu.id === id)
    }
  },
  computed: {
    ...mapGetters([
      'menus'
    ]),
    createInvalid () {
      return this.newMenu.name === null ||
             this.newMenu.url === null
    },
    editInvalid () {
      return this.editMenu.name === null ||
             this.editMenu.url === null
    }
  },
  components: {
    DeviseModal
  }
}
</script>
