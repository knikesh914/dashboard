import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    products: [],
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        commit('setUsers', users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async fetchProducts({ commit }) {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        commit('setProducts', products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
  modules: {
  }
})
