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
