<template>
  <section class="page-section">
    <div class="container page-header">
      <p class="eyebrow">Tiendas amigas</p>
      <h1>Puntos de venta donde la marca ya tiene presencia fisica.</h1>
      <p>
        Esta URL se conserva por SEO y para no romper referencias existentes en buscadores o
        redes. Tambien puede evolucionar a una pagina de stockists mas editorial.
      </p>
    </div>

    <div class="container list-panel">
      <div v-for="store in stores" :key="store.name" class="list-row">
        <span></span>
        <p><strong>{{ store.name }}</strong><br />{{ store.address }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { stores } from "../data/siteContent";
</script>
