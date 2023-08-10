<template>
  <div id="app">
<div class="container-fluid">
  <div class="row">
    <div class="col-lg-3">
      
    <header>
        <div class="toggle" @click="toggleSidebar">
            <i class="fas fa-bars"></i>
        </div>
        <h3>Dashboard</h3>
        <a href="#">
            <i class="fas fa-sign-out-alt"></i>
        </a>
    </header>
    <nav :class="{ active: sidebarActive }">
        <ul>
            <li>
              <a class="toggle" @click="toggleSidebar" >
            <span class="icon"><i class="fas fa-bars"></i></span>
            <span class="title">Menu</span>
          </a>
            </li>
            <li>
                <a @click="dashB" :class="{'active':dashActive}">
                    <span class="icon"><i class="fas fa-home"></i></span>
                    <span class="title">Dashboard</span>
                </a>
            </li>
            <li>
                <a @click="change" :class="{'active':userActive}">
                    <span class="icon"><i class="fas fa-user"></i></span>
                    <span class="title">User</span>
                </a>
            </li>
            <li>
                <a @click="product" :class="{'active':proActive}">
                    <span class="icon"><i class="far fa-address-card"></i></span>
                    <span class="title">Product</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><i class="fas fa-info"></i></span>
                    <span class="title">Help</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><i class="fas fa-cog"></i></span>
                    <span class="title">Setting</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><i class="fas fa-lock"></i></span>
                    <span class="title">Password</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span class="icon"><i class="fas fa-sign-out-alt"></i></span>
                    <span class="title">Sign Out</span>
                </a>
            </li>
        </ul>
    </nav>
    
    </div>
    <div class="col-lg-9">
      <router-view />
    </div>
  </div>
</div>
</div>
</template>

<script>
import "@/assets/custome.css";
export default {
  data() {
    return {
      sidebarActive: false,
      dashActive:false,
      userActive:false,
      proActive:false,

    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarActive = !this.sidebarActive;
    },
    change(){
      this.$router.push('/users-details')
      this.dashActive = false
      this.userActive = true
      this.proActive =false
    },
    product(){
      this.$router.push('/product-details')
      this.dashActive = false
      this.userActive = false
      this.proActive = true
    },
    dashB(){
      this.$router.push('/')
      this.dashActive = true
      this.userActive = false
      this.proActive =false
    }
  },
  created(){
    if (this.$route.path === '/') {
      this.dashActive = true
      this.userActive = false
     
    }
  
  }
};
</script>

<style>
/* Your styles */
</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
