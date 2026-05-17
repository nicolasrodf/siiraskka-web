<template>
  <section class="page-section">
    <div class="container page-header">
      <p class="eyebrow">Cursos online</p>
      <h1>Aprende encuadernacion artesanal desde cualquier lugar, con proyectos guiados paso a paso.</h1>
      <p>
        La web actual explica que los videos se entregan por enlace y que incluyen orientacion
        sobre materiales y herramientas. Aqui la informacion queda preparada para una compra mas
        simple y confiable.
      </p>
    </div>

    <div class="container course-grid">
      <article
        v-for="course in courseCards"
        :id="course.slug"
        :key="course.title"
        class="course-panel"
      >
        <img class="panel-image" :src="course.image" :alt="course.title" loading="lazy" />
        <p class="eyebrow">Curso destacado</p>
        <h2>{{ course.title }}</h2>
        <p>{{ course.description }}</p>
        <div class="course-panel-footer">
          <strong>{{ course.price }}</strong>
          <RouterLink class="button button-outline" :to="`/${course.slug}`">Ver detalle</RouterLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { featuredCourses } from "../data/siteContent";
import { courseImages, homeImages } from "../data/siteImages";

const courseCards = featuredCourses.map((course) => ({
  ...course,
  image: courseImages[course.slug] || homeImages.course
}));
</script>
