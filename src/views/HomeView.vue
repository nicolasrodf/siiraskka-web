<template>
  <div>
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Encuadernacion artesanal premium</p>
          <h1>Cuadernos, cursos y piezas hechas a mano para mujeres que crean con intencion.</h1>
          <p class="hero-text">
            Siiraskka transforma papel, tela, hilo y oficio en objetos con presencia. Una marca
            artesanal para profesionales creativas que valoran tecnica, identidad y belleza
            duradera.
          </p>
          <div class="button-row">
            <RouterLink class="button button-dark" to="/nuestros-productos">Ver productos</RouterLink>
            <RouterLink class="button button-light" to="/cursos-online">Ver cursos</RouterLink>
            <a
              class="button button-outline"
              href="mailto:siiraskka.arteypapel@gmail.com?subject=Pedido%20personalizado"
            >
              Pedido personalizado
            </a>
          </div>
          <div class="hero-metrics">
            <div>
              <strong>2014</strong>
              <span>Origen del proyecto</span>
            </div>
            <div>
              <strong>Peru + Chile</strong>
              <span>Experiencia formativa</span>
            </div>
            <div>
              <strong>Online + presencial</strong>
              <span>Aprendizaje flexible</span>
            </div>
          </div>
        </div>

        <div class="hero-art">
          <img class="hero-photo hero-photo-main" :src="homeImages.hero" alt="Cuaderno artesanal Siiraskka" />
          <img class="hero-photo hero-photo-secondary" :src="aboutImages[1]" alt="Detalle de encuadernacion artesanal" />
          <img class="hero-photo hero-photo-accent" :src="homeImages.course" alt="Curso online de encuadernacion" />
          <div class="hero-card">
            <p>Hecho a mano en Lima</p>
            <strong>Objetos que guardan ideas, procesos y memoria.</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Productos destacados</p>
          <h2>Una coleccion pensada para regalar, trabajar y conservar.</h2>
        </div>
        <div class="card-grid">
          <article v-for="item in productCards" :key="item.title" class="feature-card">
            <img class="card-image" :src="item.image" :alt="item.title" loading="lazy" />
            <p class="card-accent">{{ item.accent }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-tint">
      <div class="container split-grid">
        <div>
          <p class="eyebrow">Cursos y talleres</p>
          <h2>Aprende tecnicas que combinan estructura, precision y sensibilidad material.</h2>
          <p class="support-text">
            Rescatamos del sitio actual los cursos Long Stitch, Costura Doble X, Zig-Zag y
            Japonesa Copo de Nieve para organizarlos con una experiencia de compra y exploracion
            mucho mas clara.
          </p>
        </div>
        <div class="course-list">
          <article v-for="course in courseCards" :key="course.title" class="course-card">
            <img class="course-list-image" :src="course.image" :alt="course.title" loading="lazy" />
            <div>
              <h3>{{ course.title }}</h3>
              <p>{{ course.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container split-grid">
        <div>
          <p class="eyebrow">Sobre la marca</p>
          <h2>Mas que vender cuadernos: crear objetos que acompanen una vida profesional y creativa.</h2>
        </div>
        <div class="story-with-photo">
          <img class="story-photo" :src="aboutPreview" alt="Ana y el universo Siiraskka" loading="lazy" />
          <div class="story-block">
          <p>
            Siiraskka nace en 2014 y hoy combina productos hechos a mano, talleres y cursos online
            para una comunidad que valora el detalle y el aprendizaje con profundidad.
          </p>
          <p>
            Cada pieza parte de una seleccion consciente de materiales, acabados y costuras para
            lograr un resultado util, memorable y con identidad propia.
          </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Experiencias reales</p>
          <h2>Testimonios que refuerzan el valor percibido de la marca.</h2>
        </div>
        <div class="testimonial-grid">
          <blockquote v-for="item in testimonials" :key="item.author" class="testimonial-card">
            <p>"{{ item.quote }}"</p>
            <footer>{{ item.author }}</footer>
          </blockquote>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-heading">
          <p class="eyebrow">Preguntas frecuentes</p>
          <h2>Resolviendo dudas antes del primer mensaje.</h2>
        </div>
        <div class="faq-list">
          <details v-for="item in faqs" :key="item.question" class="faq-item">
            <summary>{{ item.question }}</summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { faqs, featuredCourses, featuredProducts, testimonials } from "../data/siteContent";
import { aboutImages, courseImages, homeImages, productImages } from "../data/siteImages";

const productCards = [
  { ...featuredProducts[0], image: productImages.notebook },
  { ...featuredProducts[1], image: aboutImages[1] },
  { ...featuredProducts[2], image: productImages.custom }
];

const courseCards = featuredCourses.map((course) => ({
  ...course,
  image: courseImages[course.slug] || homeImages.course
}));

const aboutPreview = aboutImages[0];
</script>
