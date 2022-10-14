<template>
  <div class="row">
    <div
      v-for="product in products"
      :key="product.id"
      class="card"
      style="width: 18rem"
    >
      <img
        class="card-img-top"
        :src="product.productImageURL"
        alt="product image"
      />
      <div class="card-body">
        <h3 class="card-title">{{ product.productName }}</h3>
        <h5 class="card-text">Price: Rs {{ product.productPrice }}</h5>
        <p class="card-text">Details: {{ product.productDescription }}</p>
        <button class="btn btn-primary" @click="addProduct(product.id)">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      products: [
        {
          productDescription:
            "A lightweight gaming mouse featuring Razer Hyperspeed Wireless technology that's 25% faster than any other wireless technology available.",
          productImageURL:
            "https://m.media-amazon.com/images/I/61M7B24YNEL._SL1500_.jpg",
          productName: "Razer Viper Ultimate Gaming Mice",
          productPrice: 7999,
          id: 1,
        },
        {
          productDescription:
            "LG OLED TV is a joy to behold. Self-lit pixels allow truly spectacular picture quality and a whole host of design possibilities, while the latest cutting-edge technologies help deliver unprecedented levels of wonder. This is everything you love about TV — elevated in every way.",
          productImageURL:
            "https://m.media-amazon.com/images/I/71T8piA182L._SX679_.jpg",
          productName:
            "LG 83 Inch (210.82cm) 4K Smart OLED TV (OLED83C1, Black)",
          productPrice: 649999,
          id: 2,
        },
        {
          productDescription:
            "Get in Line. Get the goods. Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better.",
          productImageURL:
            "https://m.media-amazon.com/images/I/51RFfemMaoL._UY625_.jpg",
          productName: "Nike Mens Nike Dunk Low Retro Sneaker",
          productPrice: 7349,
          id: 3,
        },
        {
          productDescription:
            "WD_BLACK SN850 NVMe™ SSD. Crush load times and slash throttling, lagging, and model pop-ins for a smooth, fast experience. This purpose-built gaming drive comes in capacities of 1TB to 2TB",
          productImageURL:
            "https://m.media-amazon.com/images/I/71VP6Pp62HS._SX522_.jpg",
          productName: "Western Digital SN850 500GB, PCIe Gen 4 SSD ",
          productPrice: 5599,
          id: 4,
        },
      ],
      selectedProduct: [],
    };
  },

  methods: {
    addProduct(ID) {
      console.log("productID of clicked product is ", ID);
      let tempProduct = this.products.find((product) => product.id === ID);
      // console.log("tempProd", tempProd);
      this.selectedProduct = tempProduct;
      console.log("selectedProduct", this.selectedProduct);
      // this.$store.dispatch('addProductToCart',{product: this.selectedProduct,quantity:1})
      this.$router.push("/cart");
    },
  },
};
</script>

<style>
.card {
  margin-left: 80px;
  box-shadow: 5px 10px 8px #888888;
}
</style>
