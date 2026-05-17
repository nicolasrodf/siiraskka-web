<template>
  <section class="page-section">
    <div class="container page-header">
      <p class="eyebrow">Ferias</p>
      <h1>Compra local, descubre la marca en espacios presenciales y sigue las proximas fechas.</h1>
      <p>
        El contenido actual de Jimdo mezcla feria del mes y recordatorio de tiendas amigas. Aqui
        la pagina queda lista para mostrar eventos futuros sin perder la URL historica.
      </p>
    </div>

    <div class="container split-grid">
      <div class="info-panel">
        <p class="eyebrow">Proxima activacion</p>
        <h2>Espacio para calendario de ferias y colaboraciones.</h2>
        <p>
          La pagina antigua menciona eventos puntuales en Miraflores. Recomiendo convertir esto en
          un bloque facil de actualizar con fecha, lugar y CTA a Instagram o WhatsApp.
        </p>
      </div>

      <div class="info-panel">
        <p class="eyebrow">Complemento comercial</p>
        <h2>Tambien encuentras productos en tiendas amigas.</h2>
        <RouterLink class="button button-outline" to="/tiendas-amigas">
          Ver puntos de venta
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
