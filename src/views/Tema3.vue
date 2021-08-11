<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  3
      h1 Fundamentos del servicio en turismo
    .row.justify-content-center.mb-5.slideInUp
      .col-lg-10

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    #t_3_1.titulo-segundo
      h2 3.1  Manejo del servicio al cliente
    .row.mb-5
      .col-lg-7
        p.mb-3  En las empresas prestadoras de servicios turísticos se requiere de una atención al cliente de calidad, debido a que el cliente es la razón de ser de la organización, la experiencia del cliente depende en gran parte de la atención recibida en todos los momentos, y de allí la posibilidad de que adquiera nuevamente el servicio, y que genere una buena referencia para atraer a más usuarios. Es por ello, que es de suma importancia conocer el concepto de clientes, tipología, necesidades, expectativas, exigencias y manejo; las personas involucradas en el proceso de atención a clientes deben estar en la capacidad de ofrecer un servicio de calidad, que cree un vínculo con el cliente y permita su fidelización.
        .cajon.color-secundario.p-4
          p Uno de los componentes importantes en temas de servicio, es la experiencia del cliente, que es la percepción que se genera después de haber interactuado con la empresa y todos sus puntos de atención y que impacta directamente en la decisión de volver o no a tomar el producto o servicio.

      .col-lg-5
        figure(data-aos="fade-left")
          img(src="@/assets/curso/t3-i1.jpg", alt="mujer recibiendo información en la recepción del hotel")    
    
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-secundario.p-4(titulo="Servicio")
        .row
          .col-lg-2
            figure(data-aos="fade-left")
              img(src="@/assets/curso/t3-ic1.svg", alt="icono decorativo")
          .col-lg-10
            .h4 Servicio
            p El conjunto de actividades establecidas para satisfacer una necesidad, es intangible, por lo tanto, se percibe de manera diferente según cada persona, siendo una postura subjetiva.
        
      .tarjeta.color-secundario.p-4(titulo="Producto")
        .row
          .col-lg-2
            figure(data-aos="fade-left")
              img(src="@/assets/curso/t3-ic2.svg", alt="icono decorativo")
          .col-lg-10
            .h4 Producto
            p Es algo físico que se puede ver, tocar, percibir, donde su función es cumplir con una necesidad del cliente, es tangible, generalmente es producido de forma estándar y masivamente.

      .tarjeta.color-secundario.p-4(titulo="Clientes")
        .row
          .col-lg-2
            figure(data-aos="fade-left")
              img(src="@/assets/curso/t3-ic3.svg", alt="icono decorativo")
          .col-lg-10
            .h4 Clientes
            p Toda aquella persona que solicita un bien o servicio a un profesional o una compañía, es la razón de ser de las empresas, quienes centran su atención en poder generar vínculos de confianza y lealtad con los usuarios y así poder llegar a su fidelización creando relaciones de valor. Las compañías buscan diferentes estrategias de mercadeo para captar la atención de más clientes en un mundo donde cada vez la competencia es más exigente y donde el abanico de opciones es más amplio.
    
    .row.mb-5
      .col-lg-4
        .tarjeta.color-secundario.p-4.text-center.shadow-box
          figure.mb-4(data-aos="flip-left")
            img.h140.centered(src="@/assets/curso/t3-ic4.svg", alt="icono decorativo")
          .h4 Cliente real
          p Es rápido al hacer compras, usa la tecnología como su aliado, se puede medir su nivel de satisfacción, pueden llegar a ser clientes influyentes tanto positiva como negativamente.

      .col-lg-4
        .tarjeta.color-acento-botones.p-4.text-center.shadow-box
          figure.mb-4(data-aos="flip-left")
            img.h140.centered(src="@/assets/curso/t3-ic5.svg", alt="icono decorativo")
          .h4 Cliente potencial
          p Es aquel que podría convertirse en comprador, consumidor o usuario de un servicio o producto; pero, aunque conozca el bien o servicio no es fiel a la marca.
      
      .col-lg-4
        .tarjeta.color-secundario.p-4.text-center.shadow-box
          figure.mb-4(data-aos="flip-left")
            img.h140.centered(src="@/assets/curso/t3-ic6.svg", alt="icono decorativo")
          .h4 Cliente fiel
          p Es el tipo de cliente que toda compañía desea tener, porque genera recompra, conoce bien el producto o servicio, es receptivo, prefiere la compañía por encima de la competencia.
    
    .row.mb-5
      .col-lg-4
        .tarjeta.color-secundario.p-4.text-center.shadow-box.h-100
          figure.mb-4(data-aos="flip-left")
            img.h140.centered(src="@/assets/curso/t3-ic7.svg", alt="icono decorativo")
          .h4 Cliente racional
          p Analizan lo que necesitan comprar y las alternativas que existen en el mercado. Es concreto, sabe lo que quiere; realiza análisis costo beneficio, es cordial.
      
      .col-lg-4
        .tarjeta.color-acento-botones.p-4.text-center.shadow-box.h-100
          figure.mb-4(data-aos="flip-left")
            img.h140.centered(src="@/assets/curso/t3-ic8.svg", alt="icono decorativo")
          .h4 Cliente impaciente
          p Persona que lleva prisa y quiere una atención rápida, no es fácil de complacer, generalmente tiene un carácter dominante. No sólo quiere una solución, sino que la quiere inmediatamente.
      
      .col-lg-4
        .tarjeta.color-secundario.p-4.text-center.shadow-box.h-100
          figure.mb-4(data-aos="flip-left")
            img.h140.centered(src="@/assets/curso/t3-ic9.svg", alt="icono decorativo")
          .h4 Cliente indeciso
          p Es la persona que tiene dudas sobre la compra, generalmente busca la aprobación de un tercero para tomar la decisión y cerrar el negocio. Se desenvuelven mejor en compras en línea, ya que hay menos tensión. 
    .row.mb-5.justify-content-center
      .col-lg-4
        .tarjeta.color-secundario.p-4.text-center.shadow-box
          figure.mb-4(data-aos="flip-left")
            img.h140.centered(src="@/assets/curso/t3-ic10.svg", alt="icono decorativo")

          .h4 Cliente crítico
          p Es el cliente que siempre tiene una duda respecto a lo que se le está ofreciendo, normalmente es agitado y le da mucho valor su tiempo. Analiza superficialmente con el ánimo de encontrar fallas.


    Separador
    br
    br
    #t_3_2.titulo-segundo
      h2 3.2  Cultura del servicio al cliente
    p.mb-5  Para desempeñarse en el área de servicio al cliente, es importante tener en cuenta un conjunto de características especiales que permitirán realizar la actividad con una mayor facilidad, teniendo en cuenta que encontrará diferentes situaciones que requerirán de todo el profesionalismo.
    .row.mb-5.justify-content-center
      .col-lg-10
        figure.mb-4(data-aos="flip-down")
          img(src="@/assets/curso/t3-i2.jpg", alt="icono decorativo")
        figcaption <b>Nota.</b> www.pixabay.com
    p.mb-5  Las cualidades más relevantes a tener en cuenta para trabajar en servicio al cliente son:
    .row
      .col-lg-4
        figure.mb-4(data-aos="flip-left")
          img(src="@/assets/curso/t3-i3.jpg", alt="Mujeres en oficia para atención al público")
      .col-lg-8




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped>
.h140{max-width: 140px}
</style>
