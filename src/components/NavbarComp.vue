<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">VueCart</router-link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item"  v-if="this.$store.state.isAuthenticated">
            <router-link class="nav-link" to="/cart">Cart</router-link>
          </li>
          <li class="nav-item" v-if="!this.$store.state.isAuthenticated">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
        </ul>

        <button
          class="btn btn-primary"
          v-if="this.$store.state.isAuthenticated"
          type="button"
          @click="logout"
        >
          LogOut
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods:{
    logout(){
      alert("You are successfully logged out");
      this.$store.commit("logout");
      this.$router.push("/")
    }
  }
};
</script>

<style></style>
