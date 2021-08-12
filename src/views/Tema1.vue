<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Generalidades del turismo y los viajes

    .row.mb-5
      .col-lg-7
        p.mb-3  Aunque existen conceptos tan sencillos como el que presenta el diccionario de la Real Academia de la Lengua Española (RAE) o la universidad de Oxford refiriéndose al turismo como la actividad de viajar; también existen otros autores que se han tomado el trabajo de profundizar un poco en las acciones que se ejecutan cuando hacemos turismo. Es así como la Organización Mundial de Turismo (s.f.) propone: 
        p.text-bold  El turismo es un fenómeno social, cultural y económico relacionado con el movimiento de las personas a lugares que se encuentran fuera de su lugar de residencia habitual por motivos personales o de negocios/profesionales. Estas personas se denominan visitantes y el turismo tiene que ver con sus actividades, de las cuales algunas implican un gasto turístico.
      .col-lg-5
        figure(data-aos="fade-right")
          img(src="@/assets/curso/t1-im1.jpg", alt="Mujer mirando panoramica de una ciudad")

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p No obstante, todos los autores concluyen en reconocer <b>el turismo como una actividad económica de gran dinamismo</b>, ya que incide directamente en otros sectores como el de <b>la construcción, transporte, telecomunicaciones, salud, educación, entre otros. </b>

    p.mb-5  Se presentan algunas de las principales características del turista actual:

    figure.mb-5(data-aos="fade-right")
      img(src="@/assets/curso/t1-info1.svg", alt="Cuadro informativo con los tipos de cliente")

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p En las dos últimas décadas, el turismo ha recobrado una mayor importancia, probando ser el sector de expansión que contribuye al desarrollo de <b>un país y cuyas acciones articulan al Gobierno, empresa privada y comunidades.</b>

    #t_1_1.titulo-segundo
      h2 1.1  Sistema turístico
    
    p.mb-5  Muchos autores han querido expresar un concepto que refiere todos los componentes del sistema turístico, pero aún no se tiene un consenso claro al respecto.
    .row.mb-5
      .col-lg-7
        p.mb-3  El sistema turístico es según la OMT (2019):
        p.mb-3.text-bold  Es un conjunto de elementos interrelacionados entre sí que evolucionan dinámicamente. Las características de una comunidad local, los recursos humanos, naturales y culturales de un territorio se combinan formando la materia prima de la actividad turística. Todos los elementos se conectan y se entrelazan en el mercado turístico, y resulta en un desplazamiento del turista desde el lugar de residencia habitual hasta el destino elegido en un circuito que se retroalimenta
        p Todo esto es válido, teniendo en cuenta que el turismo como elemento dinamizador de la economía moviliza recursos económicos, técnicos y humanos, entrelazando actividades y generando una gran logística que permite que alrededor de la actividad se beneficien muchos sectores y subsectores.
      .col-lg-5
        figure.mb-5(data-aos="fade-right")
          img(src="@/assets/curso/t1-i2.jpg", alt="Cuadro informativo con los tipos de cliente")
    p.mb-5  Se propone a continuación un esquema que identifica algunos de los actores que intervienen en el desarrollo del turismo, los mismos serán descritos posteriormente de manera independiente.

    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption <b>Figura</b> Sistema turístico
        figure.mb-5(data-aos="fade-right")
          img(src="@/assets/curso/t1-info2.svg", alt="Cuadro informativo sistema turístico")
        figcaption Nota. *VyT: Viajes y Turismo; OTA: Online Travel Agencies, que traduce agencia de viajes virtuales.
    
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-secundario.p-4(titulo="Oferta")
        .row
          .col-lg-2
            figure(data-aos="fade-left")
              img(src="@/assets/curso/t1-ic1.svg", alt="icono decorativo")
          .col-lg-10
            .h4 Oferta
            p.mb-3 La oferta turística está compuesta por los servicios que se ofrecen en los destinos o que están disponibles para la atención a turistas o pasajeros. Dentro de la oferta se puede encontrar:
            ul.lista-ul
              li 
                i.fas.fa-check
                p <b>Hoteles:</b> establecimientos de alojamiento que ofrecen al turista variedad de servicios como: restaurantes, piscinas, zonas sociales, gimnasio, guarderías, entre otros. Se pueden clasificar de diferentes maneras. En Colombia se categorizan por estrellas, pero en la mayoría de los casos y haciendo uso de las plataformas tecnológicas y redes, el turista valora los comentarios realizados por personas que vivieron la experiencia de alojarse en determinado hotel.
              li 
                i.fas.fa-check
                p <b>Restaurantes:</b> el sector gastronómico es uno de los eslabones más importantes a la hora de evaluar la calidad en los destinos, por ello, en muchas ciudades se invierten recursos importantes para consolidar una oferta interesante a los sibaritas y críticos, que a su vez elevan sus conceptos en importantes publicaciones que hacen que se acreciente la llegada de nuevos comensales.
              li 
                i.fas.fa-check
                p <b>Guías de turismo:</b> este prestador de servicios turísticos es tal vez el único que funciona como empresa unipersonal, ya que en su mayoría trabajan de manera independiente.

              li 
                i.fas.fa-check
                p <b>Parques temáticos:</b> al igual que los parques de atracciones o parques naturales, los parques temáticos son igualmente importantes ya que son en su mayoría dirigidos a niños y son ellos los que demandan los servicios que son adquiridos por sus padres.

              li 
                i.fas.fa-check
                p <b>Alquiler de autos:</b> no en todos los lugares el alquiler de autos tiene tanto éxito como en Europa o los Estados Unidos, ya que para el caso de Colombia los requisitos para acceder a un auto de alquiler son bastante complejos.

      .tarjeta.color-secundario.p-4(titulo="Demanda")
        .row
          .col-lg-2
            figure(data-aos="fade-left")
              img(src="@/assets/curso/t1-ic2.svg", alt="icono decorativo")
          .col-lg-10
            .h4 Demanda
            p La demanda por su parte la componen los grupos de personas que compran o hacen uso de los servicios ofrecidos. Es así como se reconocen a los huéspedes, turistas, clientes, viajeros o pasajeros como parte de ese segmento que adquiere y consume servicios turísticos en los diferentes destinos que visitan.

      .tarjeta.color-secundario.p-4(titulo="Intermediarios")
        .row
          .col-lg-2
            figure(data-aos="fade-left")
              img(src="@/assets/curso/t1-ic3.svg", alt="icono decorativo")
          .col-lg-10
            .h4 Intermediarios
            p Las agencias de viajes hacen el papel de intermediarios en el sistema turístico como parte de la cadena productiva del turismo, están reglamentadas en la ley general de turismo y son reconocidas como empresas netamente comerciales, han perdido terreno gracias a las agencias de viaje online, en inglés Online Travel Agencies (OTA) como Booking, Expedia o Despegar. A continuación, se relaciona los tres grandes grupos de agencias de viajes que existen en Colombia:
            ul.lista-ul
              li 
                i.fas.fa-check
                p Agencia de viajes mayorista
              li 
                i.fas.fa-check
                p Agencia de viajes operadora
              li 
                i.fas.fa-check
                p Agencia de viajes minorista o viajes y turismo            

      .tarjeta.color-secundario.p-4(titulo="Superestructura")
        .row
          .col-lg-2
            figure(data-aos="fade-left")
              img(src="@/assets/curso/t1-ic4.svg", alt="icono decorativo")
          .col-lg-10
            .h4 Superestructura 
            p Aquí convergen tanto entidades territoriales que apoyan las acciones de desarrollo como políticas de apalancamiento que permiten la consolidación de recursos que finalmente se ven reflejados en resultados de transformación en el sector.

      .tarjeta.color-secundario.p-4(titulo="Infraestructura")
        .row
          .col-lg-2
            figure(data-aos="fade-left")
              img(src="@/assets/curso/t1-ic5.svg", alt="icono decorativo")
          .col-lg-10
            .h4 Infraestructura
            p Por su parte está relacionada con el componente físico, es decir la adecuación de la infraestructura, corresponde a la construcción de aeropuertos, senderos, hoteles, vías de acceso entre muchos otros, requeridos para prestar servicios de calidad en los diferentes destinos.

    Separador
    br
    br

    #t_1_2.titulo-segundo
      h2 1.2  Geografía turística      
    .row
      .col-lg-7
        p.mb-3 Es reconocida como una ciencia compleja vista desde la óptica humana y sociocultural en un territorio; sin embargo, y para el caso específico del mundo de los viajes, no se profundizará en su conceptualización, por el contrario, un profesional de aerolínea o de aeropuerto debe ser práctico a la hora de la prestación del servicio, entendiendo que no basta con conocer el entorno geográfico, ya que también hay que ubicar al viajero brindando indicaciones precisas. Como principal actividad del programa de formación, el aprendiz debe reconocer los componentes de referencia de la geografía de Colombia.
        p
      .col-lg-5
        figure(data-aos="fade-up")
          img(src="@/assets/curso/t1-i3.jpg", alt="Manos señalando un punto en el mapa mundial")








    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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

<style lang="sass" scoped></style>
