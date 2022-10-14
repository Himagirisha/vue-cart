<template>
 <navbar-comp/>
<router-view></router-view>
<!-- <products-comp @getDataFromProducts="getDataFromProducts"/>
<cart-comp :products="products"/> -->
</template>

<script>
import NavbarComp from './components/NavbarComp.vue'



export default {
  name: 'App',
  components: 
    { NavbarComp},
  
  data(){
    return{
      products:[]
    }
  },
  methods:{
    // getDataFromProducts(data){
    //   this.products.push("productData",data)
    //   console.log("data",this.products);
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
