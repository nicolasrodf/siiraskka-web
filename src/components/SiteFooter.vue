<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <p class="eyebrow">Siiraskka</p>
        <h2>Encuadernacion artesanal con mirada contemporanea.</h2>
      </div>

      <div>
        <p class="footer-label">Explora</p>
        <RouterLink to="/nuestros-productos">Productos</RouterLink>
        <RouterLink to="/cursos-online">Cursos Online</RouterLink>
        <RouterLink to="/talleres-presenciales">Talleres</RouterLink>
      </div>

      <div>
        <p class="footer-label">Contacto</p>
        <a href="mailto:siiraskka.atteypapel@gmail.com">siiraskka.atteypapel@gmail.com</a>
        <a href="https://www.instagram.com/siiraskka/">Instagram</a>
        <a href="mailto:siiraskka.atteypapel@gmail.com?subject=Consulta%20Siiraskka">Enviar correo</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <p>Base de rediseño y migracion SEO para www.siiraskka.com</p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
