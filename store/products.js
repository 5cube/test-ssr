export const state = () => ({
  data: [],
  all: []
})

export const getters = {
  allProducts (state) {
    return state.all
  },
  categories (state) {
    return state.data
  },
  categoryProducts: (state) => (categoryId) => {
    const category = state.data.find(el => el.id === categoryId)
    return category ? category.products : []
  }
}

export const actions = {
  async fetchCategories ({ commit }, productsLimit = 10) {
    const response = await this.$axios.$get('/categories', { params: { productsLimit } })
    commit('setProducts', response.result)
  },
  async fetchCategoryProducts ({ commit }, { categoryId, offset = 10, limit = 10 }) {
    const response =  this.$axios.$get(`/categories/${categoryId}/products`, { params: { offset, limit } })
    commit('pushProducts', response.result)
    commit('pushProductsToCategory', { categoryId, products: response.result })
  }
}

export const mutations = {
  setProducts (state, payload) {
    let products = []
    payload.forEach(el => {
      products.push(...el.products)
    })
    state.data = payload
    state.all = products
  },
  pushProducts (state, products) {
    state.all.push(...products)
  },
  pushProductsToCategory (state, { categoryId, products }) {
    let category = state.data.find(el => el.id === categoryId)
    category.products.push(...products)
  },
  clearProducts (state) {
    state.all = []
  },
  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  },
  incrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory++
  },
  restoreProductInventory (state, { id, quantity }) {
    const product = state.all.find(product => product.id === id)
    product.inventory += quantity
  }
}
