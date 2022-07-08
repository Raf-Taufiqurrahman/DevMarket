<template>
  <div>
    <Navbar />
    <router-view />
    <MobileNav />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import MobileNav from "./components/MobileNav.vue";
export default {
  components: { Navbar, MobileNav }
}
</script>