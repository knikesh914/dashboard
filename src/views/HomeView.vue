<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5>Users</h5>
            <h3>{{ userCount }}</h3>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5>Sales</h5>
            <h3>{{ userCount }}</h3>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="card">
          <div class="card-body">
            <h5>Products</h5>
            <h3>{{ productCount }}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
<div class="col-lg-6"></div>
<div class="col-lg-6">
  <Bar :data="chartData" :options="options" />
</div>

    </div>
  </div>
</template>

<script>
import "@/assets/custome.css";
import { mapState, mapActions } from 'vuex';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)


export default {
  name: 'HomeView',
  components: {
    Bar
  },
  data() {
    return {
      data: {
 
      },
      options: {
        responsive: true
      }
    }
  },
  computed: {
    ...mapState(['users', 'products']), // Map both 'users' and 'products' state
    userCount() {
      return this.users.length;
    },
    productCount() {
      return this.products.length;
    },
    chartData() {
    if (this.products && this.products.length > 0) {
      return {
        labels: this.products.map(product => product.category),
        datasets: [
          {
            label: 'Product Prices',
            backgroundColor: '#f87979',
            data: this.products.map(product => product.price),
          }
        ],
      };
    } else {
      return {
        labels: [], // Empty labels
        datasets: [
          {
            label: 'Product Prices',
            backgroundColor: '#f87979',
            data: [],
          }
        ],
      };
    }
  },
  },
  methods: {
    ...mapActions(['fetchUsers', 'fetchProducts']), // Map both 'fetchUsers' and 'fetchProducts' actions
  },
  created() {
    this.fetchUsers();
    this.fetchProducts();
  },
};
</script>

<style>
/* Your styles */
</style>
