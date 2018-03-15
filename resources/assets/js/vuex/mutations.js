
export default {
  // Menus
  createMenu (state, menu) {
    state.menus.data.push(menu)
  },

  setMenus (state, payload) {
    state.menus = payload
  },

  updateMenu (state, {menu, data}) {
    menu = data
  },

  deleteMenu (state, menu) {
    state.menus.data.splice(state.menus.data.indexOf(menu), 1)
  },
}
