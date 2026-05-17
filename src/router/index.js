import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import CourseDetailView from "../views/CourseDetailView.vue";
import CoursesView from "../views/CoursesView.vue";
import FairsView from "../views/FairsView.vue";
import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import StoresView from "../views/StoresView.vue";
import WorkshopsView from "../views/WorkshopsView.vue";
import { courseDetails } from "../data/siteContent";
import { courseImages, homeImages } from "../data/siteImages";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Siiraskka | Encuadernacion artesanal, cursos y cuadernos hechos a mano",
      description:
        "Encuadernacion artesanal premium en Lima: cuadernos hechos a mano, pedidos personalizados, talleres y cursos online de Siiraskka."
    }
  },
  {
    path: "/nuestros-productos",
    name: "products",
    component: ProductsView,
    meta: {
      title: "Productos artesanales | Siiraskka",
      description:
        "Cuadernos artesanales, sellos, cartonaje y pedidos personalizados hechos a mano por Siiraskka."
    }
  },
  {
    path: "/cursos-online",
    name: "courses",
    component: CoursesView,
    meta: {
      title: "Cursos online de encuadernacion | Siiraskka",
      description:
        "Aprende encuadernacion artesanal con cursos online de Long Stitch, Costura Doble X, Zig-Zag y mas."
    }
  },
  {
    path: "/talleres-presenciales",
    name: "workshops",
    component: WorkshopsView,
    meta: {
      title: "Talleres de encuadernacion en Lima | Siiraskka",
      description:
        "Talleres presenciales de encuadernacion artesanal en Lima para principiantes y alumnas con experiencia."
    }
  },
  {
    path: "/la-tallerista",
    name: "about",
    component: AboutView,
    meta: {
      title: "Sobre la marca y la tallerista | Siiraskka",
      description:
        "Conoce la historia de Ana y el universo de Siiraskka, una marca de encuadernacion artesanal nacida en 2014."
    }
  },
  {
    path: "/contacto",
    name: "contact",
    component: ContactView,
    meta: {
      title: "Contacto | Siiraskka",
      description:
        "Contacta con Siiraskka para pedidos personalizados, talleres, cursos online y colaboraciones."
    }
  },
  {
    path: "/tiendas-amigas",
    name: "stores",
    component: StoresView,
    meta: {
      title: "Tiendas amigas | Siiraskka",
      description:
        "Descubre los puntos de venta y tiendas amigas donde puedes encontrar productos de Siiraskka."
    }
  },
  {
    path: "/ferias",
    name: "fairs",
    component: FairsView,
    meta: {
      title: "Ferias y eventos | Siiraskka",
      description:
        "Conoce las ferias y activaciones donde Siiraskka participa y descubre sus productos en persona."
    }
  },
  {
    path: "/long-stitch",
    name: "long-stitch",
    component: CourseDetailView,
    props: { course: { ...courseDetails["long-stitch"], image: courseImages["long-stitch"] } },
    meta: {
      title: "Encuadernacion Long Stitch | Siiraskka",
      description:
        "Curso online de encuadernacion Long Stitch con estructura Bradel y variante en tela."
    }
  },
  {
    path: "/costura-doble-x",
    name: "costura-doble-x",
    component: CourseDetailView,
    props: { course: { ...courseDetails["costura-doble-x"], image: courseImages["costura-doble-x"] } },
    meta: {
      title: "Encuadernacion Costura Doble X | Siiraskka",
      description:
        "Curso online de encuadernacion Costura Doble X con foco en acabados prolijos y estructura Bradel."
    }
  },
  {
    path: "/costura-zig-zag",
    name: "costura-zig-zag",
    component: CourseDetailView,
    props: { course: { ...courseDetails["costura-zig-zag"], image: courseImages["costura-zig-zag"] || homeImages.course } },
    meta: {
      title: "Encuadernacion Costura Zig-Zag | Siiraskka",
      description:
        "Curso especializado de encuadernacion con costura Zig-Zag dentro del universo Siiraskka."
    }
  },
  {
    path: "/japonesa-copo-de-nieve",
    name: "japonesa-copo-de-nieve",
    component: CourseDetailView,
    props: { course: { ...courseDetails["japonesa-copo-de-nieve"], image: courseImages["japonesa-copo-de-nieve"] } },
    meta: {
      title: "Encuadernacion Japonesa Copo de Nieve | Siiraskka",
      description:
        "Curso online de encuadernacion japonesa Copo de Nieve para libros de firmas y cuadernos de dibujo."
    }
  },
  {
    path: "/costura-alpha",
    name: "costura-alpha",
    component: CourseDetailView,
    props: { course: { ...courseDetails["costura-alpha"], image: courseImages["costura-alpha"] || homeImages.course } },
    meta: {
      title: "Encuadernacion Costura Alpha | Siiraskka",
      description:
        "Ruta preservada para la tecnica Costura Alpha dentro de la nueva arquitectura SEO de Siiraskka."
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  }
});

router.afterEach((to) => {
  const title = to.meta.title || "Siiraskka";
  const description = to.meta.description || "";
  const canonicalHref = `https://www.siiraskka.com${to.path}`;

  document.title = title;

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute("content", description);
  }

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute("content", title);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute("content", description);
  }

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute("content", canonicalHref);
  }

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", canonicalHref);
  }
});

export default router;
