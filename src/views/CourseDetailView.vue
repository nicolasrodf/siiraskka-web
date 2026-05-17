<template>
  <section class="page-section">
    <div class="container page-header">
      <p class="eyebrow">Curso online</p>
      <h1>{{ course.title }}</h1>
      <p>{{ course.description }}</p>
    </div>

    <div class="container split-grid">
      <div class="info-panel detail-panel">
        <img class="panel-image" :src="course.image" :alt="course.title" loading="lazy" />
        <p class="eyebrow">Informacion clave</p>
        <h2>{{ course.price }}</h2>
        <p>{{ course.tools }}</p>
        <p>{{ course.note }}</p>
      </div>

      <div class="info-panel">
        <p class="eyebrow">Conversion</p>
        <h2>Conservar esta URL ayuda a proteger el trafico historico.</h2>
        <p>
          Esta pagina funciona como destino comercial individual para la migracion desde Jimdo.
          Luego se puede enriquecer con galeria real, checkout o botones de pago.
        </p>
        <a class="button button-dark" href="https://wa.me/51999999999">Consultar este curso</a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true
  }
});
</script>
