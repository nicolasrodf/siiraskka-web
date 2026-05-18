<template>
  <section class="page-section">
    <div class="container page-header">
      <p class="eyebrow">Talleres</p>
      <h1>Talleres presenciales con acompanamiento cercano y enfoque artesanal real.</h1>
      <p>
        El sitio actual muestra talleres grupales, particulares y propuestas para quienes quieren
        empezar desde cero. Esta version mejora la jerarquia de la informacion y facilita el CTA.
      </p>
    </div>

    <div class="container split-grid">
      <img class="feature-photo feature-photo-tall" :src="workshopImage" alt="Taller presencial de encuadernacion" />
      <div class="list-panel">
        <div v-for="item in workshopHighlights" :key="item" class="list-row">
          <span></span>
          <p>{{ item }}</p>
        </div>
      </div>
    </div>

    <div class="container cta-banner">
      <div>
        <p class="eyebrow">Reserva o consulta</p>
        <h2>Escribe para conocer fechas, formatos y proyectos disponibles.</h2>
      </div>
      <a
        class="button button-dark"
        href="mailto:siiraskka.arteypapel@gmail.com?subject=Consulta%20sobre%20talleres"
      >
        Consultar talleres
      </a>
    </div>
  </section>
</template>

<script setup>
import { workshopHighlights } from "../data/siteContent";
import { workshopImage } from "../data/siteImages";
</script>
