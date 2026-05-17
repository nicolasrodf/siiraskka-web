<template>
  <header class="site-header">
    <div class="container nav-shell">
      <RouterLink class="brand" to="/">
        <span class="brand-mark">S</span>
        <span>
          <strong>Siiraskka</strong>
          <small>Arte, papel y oficio</small>
        </span>
      </RouterLink>

      <nav class="nav-links" aria-label="Principal">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/nuestros-productos">Productos</RouterLink>
        <RouterLink to="/cursos-online">Cursos Online</RouterLink>
        <RouterLink to="/talleres-presenciales">Talleres</RouterLink>
        <RouterLink to="/la-tallerista">Sobre la Marca</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </nav>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isOpen ? 'true' : 'false'"
        aria-controls="mobile-menu"
        @click="isOpen = !isOpen"
      >
        Menu
      </button>

      <a class="button button-dark button-compact" href="https://wa.me/51999999999">
        WhatsApp
      </a>
    </div>

    <div v-if="isOpen" id="mobile-menu" class="mobile-menu">
      <div class="container mobile-menu-links">
        <RouterLink to="/" @click="closeMenu">Inicio</RouterLink>
        <RouterLink to="/nuestros-productos" @click="closeMenu">Productos</RouterLink>
        <RouterLink to="/cursos-online" @click="closeMenu">Cursos Online</RouterLink>
        <RouterLink to="/talleres-presenciales" @click="closeMenu">Talleres</RouterLink>
        <RouterLink to="/la-tallerista" @click="closeMenu">Sobre la Marca</RouterLink>
        <RouterLink to="/contacto" @click="closeMenu">Contacto</RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

const closeMenu = () => {
  isOpen.value = false;
};
</script>
