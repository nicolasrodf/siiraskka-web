import aboutAna1 from "../assets/site-images/about-ana-1.jpg";
import aboutAna2 from "../assets/site-images/about-ana-2.jpg";
import aboutAna3 from "../assets/site-images/about-ana-3.jpg";
import courseDobleX from "../assets/site-images/course-doble-x.jpg";
import courseJaponesa from "../assets/site-images/course-japonesa.jpg";
import courseLongStitch from "../assets/site-images/course-long-stitch.jpg";
import homeCourse from "../assets/site-images/home-course.jpg";
import homeHero from "../assets/site-images/home-hero.jpg";
import homeProduct from "../assets/site-images/home-product.jpg";
import homeWorkshop from "../assets/site-images/home-workshop.jpg";
import productCustom from "../assets/site-images/product-custom.jpg";
import productNotebook from "../assets/site-images/product-notebook.jpg";
import workshopMain from "../assets/site-images/workshop-main.jpg";

export const homeImages = {
  hero: homeHero,
  product: homeProduct,
  workshop: homeWorkshop,
  course: homeCourse
};

export const aboutImages = [aboutAna1, aboutAna2, aboutAna3];

export const productImages = {
  notebook: productNotebook,
  custom: productCustom,
  workshop: homeWorkshop
};

export const courseImages = {
  "long-stitch": courseLongStitch,
  "costura-doble-x": courseDobleX,
  "costura-zig-zag": homeCourse,
  "japonesa-copo-de-nieve": courseJaponesa,
  "costura-alpha": homeCourse
};

export const workshopImage = workshopMain;
