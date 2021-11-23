<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-lg-5

        figure.pos-relative(data-aos="fade-left", data-aos-delay='50')
          img(src="@/assets/curso/t0-i1.jpg", alt="pareja caminando mientras arrastra una maleta")
      .col-lg-7
        p.mb-4  <b>El turismo es una de las industrias de mayor crecimiento en el mundo y su importancia está centrada en las oportunidades que representa,</b> ya que, permite la articulación de algunos otros sectores de la economía como puede ser el sector de la construcción, que, aunque parezca que no tiene ninguna relación con turismo, es necesario para el desarrollo de la planta turística de los destinos.
        p Según informes revelados por la Organización Mundial de Turismo (OMT) y el Foro Económico Mundial, en el año 2019 el turismo creció a un ritmo de aproximadamente del 10 % en Colombia y a nivel global su crecimiento es del 4,4 %; si se toma en cuenta que las tendencias que se fortalecen en turismo son la búsqueda de actividades de bienestar que incluyen senderismo, turismo deportivo, ecológico, de salud, cultural y de historia, <b>Colombia tiene mucho potencial en cada uno de estos aspectos, haciéndolo un destino muy llamativo para visitar.</b>
        
    .row.mb-5.justify-content-center
      .col-lg-10   
        .cajon.color-secundario.p-4(data-aos="fade-up", data-aos-delay='0')
          p Las compañías asociadas al transporte aéreo y en general al turismo tienen desafíos enormes relacionados con la digitalización del medio y nuevos modelos de negocio que sean llamativos tanto para el turista tradicional como para las nuevas generaciones, que buscan cada vez más, vivir nuevas experiencias, lo cual requiere inversión no solo a nivel tecnológico, sino también en el talento humano vinculado al turismo, ya que, lo que se busca es brindar las herramientas necesarias para ser un destino turístico de alto nivel y competitivo.
      





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
