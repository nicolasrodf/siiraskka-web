<template>
  <section class="page-section">
    <div class="container page-header">
      <p class="eyebrow">Contacto</p>
      <h1>Conversemos sobre tu pedido, tu aprendizaje o la proxima experiencia Siiraskka.</h1>
      <p>
        El correo pasa a ser el canal principal de contacto y el formulario queda listo para una
        integracion posterior.
      </p>
    </div>

    <div class="container split-grid">
      <form class="contact-form">
        <label>
          Nombre
          <input type="text" placeholder="Tu nombre" />
        </label>
        <label>
          Email
          <input type="email" placeholder="tu@email.com" />
        </label>
        <label>
          Mensaje
          <textarea rows="5" placeholder="Cuentame que necesitas"></textarea>
        </label>
        <button class="button button-dark" type="button">Formulario en integracion</button>
      </form>

      <div class="info-panel">
        <p class="eyebrow">Canales directos</p>
        <h2>El correo directo centraliza pedidos, cursos y consultas.</h2>
        <p>
          Usa este correo para pedidos personalizados, cursos online, talleres y coordinaciones
          generales.
        </p>
        <a
          class="button button-outline"
          href="mailto:siiraskka.arteypapel@gmail.com?subject=Consulta%20Siiraskka"
        >
          Enviar correo
        </a>
      </div>
    </div>
  </section>
</template>
