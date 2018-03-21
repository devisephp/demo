
export default {
  // Events
  createEvent (state, event) {
    state.events.data.push(event)
  },

  setEvents (state, payload) {
    state.events = payload
  },

  updateEvent (state, {event, data}) {
    state.events.data.splice(state.events.data.indexOf(event), 1, data)
  },

  deleteEvent (state, event) {
    state.events.data.splice(state.events.data.indexOf(event), 1)
  },

  // Menus
  createMenu (state, menu) {
    state.menus.data.push(menu)
  },

  setMenus (state, payload) {
    state.menus = payload
  },

  updateMenu (state, {menu, data}) {
    state.menus.data.splice(state.menus.data.indexOf(menu), 1, data)
  },

  deleteMenu (state, menu) {
    state.menus.data.splice(state.menus.data.indexOf(menu), 1)
  },
}
