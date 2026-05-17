<template>
  <div class="site-shell">
    <SiteHeader />
    <main>
      <RouterView />
    </main>
    <WhatsAppFloat />
    <SiteFooter />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import SiteFooter from "./components/SiteFooter.vue";
import SiteHeader from "./components/SiteHeader.vue";
import WhatsAppFloat from "./components/WhatsAppFloat.vue";
</script>
