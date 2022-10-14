<template>
  <header>Cart🛒</header>
  <div class="card" style="width: 18rem;">
  <img src="https://m.media-amazon.com/images/I/61M7B24YNEL._SL1500_.jpg" class="card-img-top" alt="viper">
  <div class="card-body">
    <h5 class="card-title">viper</h5>
    <p class="card-text">"A lightweight gaming mouse featuring Razer Hyperspeed Wireless technology that's 25% faster than any other wireless technology available."</p>
    <button @click="handleIncrement">➕</button>
    <button @click="handleDecrement">➖</button>
    <h3>Quantity:{{counter}}</h3>
    <button class="btn btn-primary">CheckOut</button>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      // cartProduct:[]
        counter:0
    }
  },
  methods:{
    // cartProducts(){
    //   this.cartProduct=this.$store.state.products
    //   console.log("cart product",this.cartProduct);
    // }
    handleIncrement(){
      this.counter+=1

    },
    handleDecrement(){
      this.counter-=1
      
    }
  }
}
</script>

<style>
  header{
    height: 50px;
    color:white;
    background-color: black;
    font-size: 30px;
  }
</style>