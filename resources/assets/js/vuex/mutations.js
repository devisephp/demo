
export default {
  // Menus
  createMenu (state, menu) {
    console.log(menu)
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
