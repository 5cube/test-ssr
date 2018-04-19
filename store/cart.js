export const state = () => ({
  added: [],
  checkoutStatus: null
})

export const getters = {
  checkoutStatus: state => state.checkoutStatus,
  cartProducts: (state, getters, rootState) => {
    let products = []
    state.added.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      if (quantity > 0) {
        products.push({
          ...product,
          quantity
        })
      }
    })
    return products
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

export const actions = {
  checkout ({ commit, state }) {
    const savedCartItems = [...state.added]
    commit('setCheckoutStatus', null)
    commit('setCartItems', { items: [] })
    const products = savedCartItems.map(({ id, quantity }) => {
      return {
        productId: id,
        quantity
      }
    })
    this.$axios.$post('https://test.igorserver.ru/orders', { products }).then(response => {
      console.log(response.data)
    }).catch(error => {
      commit('setCheckoutStatus', 'failed')
      commit('setCartItems', { items: savedCartItems })
      throw new Error(error)
    })
  },
  addProductToCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    if (product.inventory > 0) {
      const cartItem = state.added.find(item => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id })
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      commit('decrementProductInventory', { id: product.id })
    }
  },
  removeProductFromCart ({ state, commit }, product) {
    commit('setCheckoutStatus', null)
    const cartItem = state.added.find(item => item.id === product.id)
    if (cartItem && cartItem.quantity > 0) {
      commit('decrementItemQuantity', cartItem)
      commit('incrementProductInventory', { id: product.id })
    }
  },
  removeItemsFromCart ({ state, commit }) {
    state.added.forEach(el => {
      commit('restoreProductInventory', { id: el.id, quantity: el.quantity })
    })
    commit('clearCart')
  }
}

export const mutations = {
  pushProductToCart (state, { id }) {
    state.added.push({
      id,
      quantity: 1
    })
  },
  incrementItemQuantity (state, { id }) {
    const cartItem = state.added.find(item => item.id === id)
    cartItem.quantity++
  },
  decrementItemQuantity (state, { id }) {
    const cartItem = state.added.find(item => item.id === id)
    cartItem.quantity--
  },
  setCartItems (state, { items }) {
    state.added = items
  },
  setCheckoutStatus (state, status) {
    state.checkoutStatus = status
  },
  clearCart (state) {
    state.added = []
  }
}
