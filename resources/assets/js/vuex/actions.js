const actions = {

  // Events
  getEvents (context) {
    return new Promise((resolve, reject) => {
      window.axios.get(context.state.devise.api.baseUrl + 'events/').then(function (response) {
        context.commit('setEvents', response.data)
        resolve(response)
      }).catch(function (error) {
        window.bus.$emit('showError', error)
      })
    }).catch(function (error) {
      window.bus.$emit('showError', error)
    })
  },

  createEvent (context, event) {
    return new Promise((resolve, reject) => {
      window.axios.post(context.state.devise.api.baseUrl + 'events/', event).then(function (response) {
        window.bus.$emit('showMessage', {title: 'Success!', message: event.name + ' has been created.'})
        context.commit('createEvent', response.data)
        resolve(response)
      }).catch(function (error) {
        window.bus.$emit('showError', error)
      })
    }).catch(function (error) {
      window.bus.$emit('showError', error)
    })
  },

  updateEvent (context, payload) {
    return new Promise((resolve, reject) => {
      window.axios.put(context.state.devise.api.baseUrl + 'events/' + payload.event.id, payload.data).then(function (response) {
        window.bus.$emit('showMessage', {title: 'Success!', message: payload.data.name + ' has been saved.'})
        context.commit('updateEvent', {menu: payload.event, data: response.data})
        resolve(response)
      }).catch(function (error) {
        window.bus.$emit('showError', error)
      })
    }).catch(function (error) {
      window.bus.$emit('showError', error)
    })
  },

  deleteEvent (context, menu) {
    return new Promise((resolve, reject) => {
      window.axios.delete(context.state.devise.api.baseUrl + 'events/' + menu.id).then(function (response) {
        window.bus.$emit('showMessage', {title: 'Success!', message: menu.name + ' has been deleted.'})
        context.commit('deleteEvent', menu)
        resolve(response)
      }).catch(function (error) {
        window.bus.$emit('showError', error)
      })
    }).catch(function (error) {
      window.bus.$emit('showError', error)
    })
  },

  // Menus
  getMenus (context) {
    return new Promise((resolve, reject) => {
      window.axios.get(context.state.devise.api.baseUrl + 'menu-items/').then(function (response) {
        context.commit('setMenus', response.data)
        resolve(response)
      }).catch(function (error) {
        window.bus.$emit('showError', error)
      })
    }).catch(function (error) {
      window.bus.$emit('showError', error)
    })
  },

  createMenu (context, menu) {
    return new Promise((resolve, reject) => {
      window.axios.post(context.state.devise.api.baseUrl + 'menu-items/', menu).then(function (response) {
        window.bus.$emit('showMessage', {title: 'Success!', message: menu.name + ' has been created.'})
        context.commit('createMenu', response.data)
        resolve(response)
      }).catch(function (error) {
        window.bus.$emit('showError', error)
      })
    }).catch(function (error) {
      window.bus.$emit('showError', error)
    })
  },

  updateMenu (context, payload) {
    return new Promise((resolve, reject) => {
      window.axios.put(context.state.devise.api.baseUrl + 'menu-items/' + payload.menu.id, payload.data).then(function (response) {
        window.bus.$emit('showMessage', {title: 'Success!', message: payload.data.name + ' has been saved.'})
        context.commit('updateMenu', {menu: payload.menu, data: response.data})
        resolve(response)
      }).catch(function (error) {
        window.bus.$emit('showError', error)
      })
    }).catch(function (error) {
      window.bus.$emit('showError', error)
    })
  },

  deleteMenu (context, menu) {
    return new Promise((resolve, reject) => {
      window.axios.delete(context.state.devise.api.baseUrl + 'menu-items/' + menu.id).then(function (response) {
        window.bus.$emit('showMessage', {title: 'Success!', message: menu.name + ' has been deleted.'})
        context.commit('deleteMenu', menu)
        resolve(response)
      }).catch(function (error) {
        window.bus.$emit('showError', error)
      })
    }).catch(function (error) {
      window.bus.$emit('showError', error)
    })
  },


}

export default actions
