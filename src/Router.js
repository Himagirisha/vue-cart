import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
import HomeComp from "./components/HomeComp";
import CartComp from "./components/CartComp";
import LoginComp from "./components/LoginComp";
import ProductsComp from "./components/ProductsComp";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeComp,
    },
    {
      path: "/login",
      component: LoginComp,
    },
    {
      path: "/products",
      component: ProductsComp,
    },
    {
      path: "/cart",
      component: CartComp,
    },
  ],
});

router.beforeEach(async (to) => {
  // to: the target route location being navigated to.
  // from: the current route location  being navigated away from.
  // console.log("to", to);
  // console.log("from", from);
  // explicitly return false will cancel the navigation
  //return true
  if (to.path === "/products" && store.state.isAuthenticated) {
    return true;
  } else if (to.path === "/products" && !store.state.isAuthenticated) {
    return "/login";
  }
  if (to.path === "/cart" && store.state.isAuthenticated) {
    return true;
  } else if (to.path === "/cart" && !store.state.isAuthenticated) {
    return "/login";
  }
});

export default router;
