<template>
  <section class="page-section">
    <div class="container page-header">
      <p class="eyebrow">Sobre la marca</p>
      <h1>Una historia construida entre oficio, papel y aprendizaje continuo.</h1>
    </div>

    <div class="container split-grid">
      <div class="story-gallery-block">
        <div class="story-gallery">
          <img v-for="image in aboutImages" :key="image" class="gallery-photo" :src="image" alt="Proceso y retratos de Siiraskka" loading="lazy" />
        </div>
        <div class="story-block">
          <p v-for="paragraph in aboutStory" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>

      <aside class="info-panel" id="tiendas-amigas">
        <p class="eyebrow">Tiendas amigas</p>
        <h2>Puntos donde hoy ya existe presencia fisica de la marca.</h2>
        <div class="store-list">
          <div v-for="store in stores" :key="store.name" class="store-item">
            <strong>{{ store.name }}</strong>
            <p>{{ store.address }}</p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { aboutStory, stores } from "../data/siteContent";
import { aboutImages } from "../data/siteImages";
</script>
