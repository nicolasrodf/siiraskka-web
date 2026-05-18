<template>
  <section class="page-section">
    <div class="container page-header">
      <p class="eyebrow">Productos</p>
      <h1>Productos artesanales para uso diario, regalos con identidad y marcas que quieren diferenciarse.</h1>
      <p>
        Esta pagina reorganiza el contenido existente de "Nuestros productos" en una estructura
        mas comercial, clara y preparada para futuras fichas o carrito.
      </p>
    </div>

    <div class="container card-grid">
      <article v-for="item in productCards" :key="item.title" class="feature-card">
        <img class="card-image" :src="item.image" :alt="item.title" loading="lazy" />
        <p class="card-accent">{{ item.accent }}</p>
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </article>
    </div>

    <div class="container cta-banner">
      <div>
        <p class="eyebrow">Pedido personalizado</p>
        <h2>Cuadernos, cartonaje y piezas de marca desarrolladas a medida.</h2>
      </div>
      <a
        class="button button-dark"
        href="mailto:siiraskka.arteypapel@gmail.com?subject=Solicitud%20de%20cotizacion"
      >
        Solicitar cotizacion
      </a>
    </div>
  </section>
</template>

<script setup>
import { featuredProducts } from "../data/siteContent";
import { aboutImages, productImages } from "../data/siteImages";

const productCards = [
  { ...featuredProducts[0], image: productImages.notebook },
  { ...featuredProducts[1], image: aboutImages[1] },
  { ...featuredProducts[2], image: productImages.custom }
];
</script>
