<template>
    <div class="container table-responsive py-5"> 
      <table class="table table-bordered table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Rating</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="product.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.rating.rate }}</td>
            <td>
              <img :src="product.image" alt="Product Image" class="product-image" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      products() {
        return this.$store.state.products;
      },
    },
  };
  </script>
  
  <style>
  /* Your additional styles */
  .product-image {
    max-width: 100px;
    height: auto;
  }
  </style>
  