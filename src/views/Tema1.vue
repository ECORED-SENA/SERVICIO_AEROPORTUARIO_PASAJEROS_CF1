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
        p En el mundo del turismo es importante manejar una comunicación clara y efectiva en el que todos hablemos el mismo idioma, por esta razón la Organización de Aviación Civil Internacional (OACI) adoptó de las fuerzas militares esta herramienta efectiva de comunicación llamada <b>alfabeto aeronáutico o alfabeto fonético</b>, que al día de hoy es utilizado a nivel mundial por aerolíneas comerciales, militares y radioaficionados.
      .col-lg-5
        figure(data-aos="fade-up")
          img(src="@/assets/curso/t1-i3.jpg", alt="Manos señalando un punto en el mapa mundial")
    .row.mb-5
      .col-lg-5
        a.anexo.mb-4.mb-lg-0(href="https://www.aerocivil.gov.co/portal-ninos/transito-aereo/Paginas/alfabeto-aeronautico.aspx" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> En el siguiente enlace encontrará el alfabeto aeronáutico de la página de la Aeronáutica Civil de Colombia.
    
    p.mb-5  De igual forma, también la Asociación Internacional de Transporte Aéreo (IATA), implementó una serie de códigos que hacen referencia a:
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3
        figure(data-aos="flip-left")
          img(src="@/assets/curso/t1-i4.svg", alt="Manos señalando un punto en el mapa mundial")
      .col-lg-5
        ul.lista-ul
          li 
            i.fas.fa-check
            | Países
          li 
            i.fas.fa-check
            | Ciudades
          li 
            i.fas.fa-check
            | Aeropuertos
          li 
            i.fas.fa-check
            | Estados
          li 
            i.fas.fa-check
            | Monedas
          li 
            i.fas.fa-check
            | Aerolíneas
          li 
            i.fas.fa-check
            | Tipo de aeronaves

    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        a.anexo.mb-4.mb-lg-0(href="https://www.aerocivil.gov.co/autoridad-de-la-aviacion-civil/seguridad-aviacion-civil/lists/siglaoaciiataaeropuerto/allitems.aspx#InplviewHash6c0e2aa2-438d-49d0-a63c-08ba065fec9a=" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Aeronáutica Civil de Colombia con los principales códigos de ciudades y aeropuertos a nivel nacional para Colombia.  
      .col-lg-10
        p Es importante resaltar que en el país <b>los códigos de ciudades en la mayoría de los casos es el mismo de aeropuerto</b>, varía cuando la ciudad cuenta con más de un terminal aéreo.


    #t_1_3.titulo-segundo
      h2 1.3  Geografía turística nacional    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h3.titulo-tercero Región Caribe
    .row
      .col-lg-8
        p.mb-3  La Región Caribe se encuentra en la zona norte del país, una de sus principales características es su clima cálido y sus grandiosas playas. La mayoría de su extensión es plana, sin embargo, encontramos la formación montañosa litoral más alta del mundo llamada Sierra Nevada de Santa Marta. Debido a su variedad de climas, es considerada la región con mayor diversidad de flora de Colombia.
        p.mb-4 Es importante resaltar que está compuesta por ciudades como:
        .row.justify-content-center
          .col-lg-8
            .tabla-a.color-acento-botones.mb-5 
              table
                thead
                  tr
                    th Departamento
                    th Capital
                tbody
                  tr
                    td Atlántico
                    td Barranquilla
                  tr
                    td Bolívar
                    td Cartagena de Indias
                  tr
                    td Córdoba
                    td Montería

                  tr
                    td Magdalena
                    td Santa Marta

                  tr
                    td Cesar
                    td Valledupar

                  tr
                    td La Guajira
                    td Riohacha
                    
                  tr
                    td Sucre
                    td Sincelejo
                


      .col-lg-4
        figure(data-aos="flip-right")
          img(src="@/assets/curso/t1-m1.svg", alt="Mapa de region Caribe de colombia")

    h4.titulo-cuarto Principales destinos turísticos en la región Caribe
    .row.justify-content-center.mb-5
      .col-lg-10
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Sierra Nevada de Santa Marta")
            .col-md-4
              figure(data-aos="flip-left")
                img(src="@/assets/curso/t1-i5.png", alt="Mapa de region Caribe de colombia")
            .col-md-8
              p.mb-3 Es la formación montañosa litoral más alta del mundo, elevada 42 kilómetros del mar caribe, alcanza una altura de 5.775 metros, sus picos más altos: el Simón Bolívar y el Cristóbal Colón. Habitada por diferentes etnias indígenas que viven en zonas puntuales de la Sierra Nevada, entre ellos encontramos:
              ul.lista-ul
                li 
                  i.fas.fa-check
                  | Los Kogui
                li 
                  i.fas.fa-check
                  | Los Wiwas
                li 
                  i.fas.fa-check
                  | Los Arhuacos
                li 
                  i.fas.fa-check
                  | Los Kankuamos
              p La Sierra Nevada por su riqueza es el lugar perfecto para diferentes actividades de interés, entre ellas, excursiones de fauna y flora, playas, piscinas naturales, cascadas. Una visita obligada por su alto valor cultural es el museo arqueológico de Chairama.
          .row(titulo="Cabo de la Vela y Punta Gallinas")
            .col-md-4
              figure(data-aos="flip-left")
                img(src="@/assets/curso/t1-i6.png", alt="Mapa de region Caribe de colombia")
            .col-md-8
              p.mb-3 Conformada por una serie de accidentes que conforman una bahía de la península que va desde punta Gallinas hasta el Cabo de la Vela. Entre ambos puntos están Puerto Bolívar, bahía Portete y bahía Honda. Cerca de Punta Gallinas se encuentra la etnia Wayúu que es una de las pocas culturas suramericanas que conservan intactas sus tradiciones ancestrales. Es un impresionante escenario natural de mesetas, dunas y acantilados rocosos, que emergen del mar, abrazando a la bahía Hondita. Tiene una inmensa duna que alcanza 60 metros de altura que se alza como una muralla justo en la orilla del mar.
              p Para poder llegar a estos atractivos turísticos de gran imponencia se debe llegar a Riohacha y de allí tomar el transporte adicional, se puede ir con un tour ya pago que se ofrece en el mismo sitio; uno de los principales alojamientos se encuentran rancherías que son las villas construidas por los indígenas Wayúu.
          
          .row(titulo="Cartagena de Indias")
            .col-md-4
              figure(data-aos="flip-left")
                img(src="@/assets/curso/t1-i7.png", alt="Mapa de region Caribe de colombia")
            .col-md-8
              p.mb-4 Es una de las ciudades más turísticas de Colombia y de América Latina, por su gran variedad de atractivos turísticos, historia, cultura, una arquitectura colonial imponente además de ser considerada patrimonio de la humanidad por la UNESCO. Algunos de los lugares por visitar en Cartagena de Indias son:
              ul.lista-ul.mb-4
                li 
                  i.fas.fa-check
                  | El Castillo de San Felipe
                li 
                  i.fas.fa-check
                  | El Palacio de la Inquisición
                li 
                  i.fas.fa-check
                  | La Torre del Reloj
                li 
                  i.fas.fa-check
                  | La Ciudad Amurallada y sus calles empedradas llenas de cultura de la región caribe y muchos otros atractivos que hacen de esta ciudad el lugar ideal para descansar y al mismo tiempo aprender de su historia.
              
                p.mb-3 Si de eventos y festivales se trata aquí encontraremos para todos los gustos e intereses, entre los más destacados:
              ul.lista-ul
                li 
                  i.fas.fa-check
                  | Festival internacional de música - Hay festival 
                li 
                  i.fas.fa-check
                  | Festival internacional de cine y televisión 
                li 
                  i.fas.fa-check
                  | Cartagena Boat show – Festival de artes escénicas
                li 
                  i.fas.fa-check
                  | Festival de bandas
                li 
                  i.fas.fa-check
                  | Fiestas de la independencia y concurso nacional de belleza


    p.mb-5  A continuación, se presentan algunos de los sitios turísticos más representativos de la región Caribe:
    SlyderC.mb-5(:datos="datosSlyder")


    h3.titulo-tercero Región insular
    p.mb-5  Conformada por maravillosos destinos como el Archipiélago de San Andrés, Providencia y Santa Catalina, Isla de Gorgona, Malpelo y Archipiélago de San Bernardo.
    .row.justify-content-center.mb-5
      .col-lg-4
        figure(data-aos="flip-left")
          img(src="@/assets/curso/t1-m2.svg", alt="region insular mar caribe")
      .col-lg-4
        figure(data-aos="flip-left")
          img(src="@/assets/curso/t1-m2-1.svg", alt="Region insular oceano pacífico")
      .clearfix
      .col-lg-8
        figcaption Nota. <a href='https://tierracolombiana.org/region-insular-de-colombia/' target='_blank'>https://tierracolombiana.org/region-insular-de-colombia/</a>
    
    h3.titulo-tercero San Andrés, Providencia y Santa Catalina (islas del Caribe)
    .row.mb-5
      .col-lg-8
        p.mb-3  Sin duda de las mejores playas del caribe, San Andrés Islas está ubicada en el caribe colombiano a unos 750 kilómetros del territorio norte del país, con un mar cristalino también llamado “el mar de los 7 colores” por sus diferentes tonalidades de verde y azul y algunos tonos lila. Esta isla tiene influencia de ingleses por los piratas que llegaron y se mezclaron con los raizales para dar lugar a una cultura de mucha riqueza, por esta razón es posible encontrar isleños hablando inglés, sin embargo, es importante señalar que también hablan español y su lengua nativa creole, que tiene mezcla de inglés isabelino, español y dialectos africanos.
        p.mb-3  Está conformada por Bahías, Puntas, Cayos, Cayos del Norte, Cayos del Sur, con un clima cálido que va desde los 26 a los 34 grados, tiene una temporada seca entre los meses de diciembre y mayo y la temporada de lluvia que se da en los meses de junio a noviembre, principalmente en el mes de junio.
        p Esta zona del país posee una gran variedad de fauna y flora, razón por la cual fue declarado en el año 2000 reserva mundial de la biosfera “Seaflower”.
      .col-lg-4
        figure(data-aos="flip-left")
          img(src="@/assets/curso/t1-p1.png", alt="region insular mar caribe")

    .row.justify-content-center.mb-5
      .col-lg-8
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th Sus principales atractivos turísticos son:
                th Dentro de las actividades a realizar en San Andrés, se encuentran
            tbody
              tr
                td 
                  ul.lista-ul
                    li 
                      i.fas.fa-check
                      | Casa Museo Isleña 
                    li 
                      i.fas.fa-check
                      | Cocoplumbay
                    li 
                      i.fas.fa-check
                      | La Piscinita
                    li 
                      i.fas.fa-check
                      | El Hoyo Soplador
                    li 
                      i.fas.fa-check
                      | El Blowing Hole
                    li 
                      i.fas.fa-check
                      | Sound Bay
                    li 
                      i.fas.fa-check
                      | Cueva Pirata Morgan
                    li 
                      i.fas.fa-check
                      | Jhonny Cay

                  td 
                    ul.lista-ul
                      li 
                        i.fas.fa-check
                        | Snorkel
                      li 
                        i.fas.fa-check
                        | Kitesurf
                      li 
                        i.fas.fa-check
                        | Windsurf
                      li 
                        i.fas.fa-check
                        | Jetski
                      li 
                        i.fas.fa-check
                        | Buceo en arrecifes de coral
                      li 
                        i.fas.fa-check
                        | Alquiler de coche para recorrer la isla



    p.mb-5  A continuación, se presentan algunos de los sitios turísticos más representativos de la región Insular:
    
    SlyderC.mb-5(:datos="datosSlyder2")

    h2.titulo-tercero Región Andina
    .row.mb-5
      .col-lg-8
        p.mb-3  La Región Andina se encuentra ubicada en el centro del país razón por la cual tiene variedad de pisos térmicos, debido a que esta región es atravesada por las tres cordilleras de los Andes y debido a esto posee una variada diversidad en fauna y flora, climas, cuerpos de agua (ríos Cauca y Magdalena) y los diferentes tipos de relieves (valles, cañones, mesetas)
        p.mb-4 Esta región posee algunas de las principales ciudades del país y cada una con una gran variedad de lugares para visitar, ferias y fiestas, costumbres, eventos, cultura. También es la zona del país donde se encuentra la mayoría de los parques nacionales naturales, por su riqueza geográfica. Es importante resaltar que la conforman ciudades como:
        .row.justify-content-center
          .col-lg-8
            .tabla-a.color-acento-botones.mb-5 
              table
                thead
                  tr
                    th Departamento
                    th Capital
                tbody
                  tr
                    td Antioquia
                    td Medellín
                  tr
                    td Norte de Santander
                    td Cúcuta
                  tr
                    td Santander
                    td Bucaramanga

                  tr
                    td Caldas
                    td Manizales

                  tr
                    td Risaralda
                    td Pereira

                  tr
                    td Boyacá
                    td Tunja
                    
                  tr
                    td Cundinamarca
                    td Bogotá
                  tr
                    td Quindío
                    td Armenia
                  tr
                    td Tolima
                    td Ibagué
                  tr
                    td Huila
                    td Neiva

      .col-lg-4
        figure(data-aos="flip-right")
          img(src="@/assets/curso/t1-m3.svg", alt="Mapa de region Andina de colombia")


    h3.titulo-tercero Bogotá
    p.mb-3  <b>Es la capital de Colombia, ubicada en el centro del país y es la tercera capital más alta del mundo después de Quito y La Paz</b> ya que se encuentra a 2.625 metros sobre el nivel del mar, Bogotá es la sede de los principales entes gubernamentales del país. Bogotá es el principal destino turístico en Colombia, ya que cuenta con diversas actividades, eventos culturales, eventos de nivel internacional, lugares de entretenimiento nocturno, parques, museos, centro histórico. Se ubica en la zona denominada “Sabana de Bogotá” donde se encuentran otros municipios de Cundinamarca que igualmente son muy visitados por los turistas por su variedad de atractivos.
    p.mb-5  <b>El turismo en la capital es muy diverso</b>, se encuentran lugares como:
    .row.justify-content-center.mb-5
      .col-lg-4
        figure(data-aos="flip-right")
          img(src="@/assets/curso/t1-p2.png", alt="foto de bogota")
      .col-lg-4
        ul.lista-ul
          li 
            i.fas.fa-check
            | Monserrate
          li 
            i.fas.fa-check
            | La Candelaria
          li 
            i.fas.fa-check
            | Centro Internacional
          li 
            i.fas.fa-check
            | Museo del Oro
          li 
            i.fas.fa-check
            | Museo Botero
          li 
            i.fas.fa-check
            | Museo Nacional de Colombia
          li 
            i.fas.fa-check
            | La Candelaria
          li 
            i.fas.fa-check
            | Maloka
          li 
            i.fas.fa-check
            | Parque Metropolitano Simón Bolívar
          li 
            i.fas.fa-check
            | Parque de la 93

      .col-lg-8
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure(data-aos="flip-right")
                img.nW(src="@/assets/curso/t1-ic6.svg", alt="imagen decorativa")
            .col-lg-8
              .bloque-texto-a__texto.p-4(data-aos="flip-up")
                p Si de turismo ecológico se trata, Bogotá también cuenta con atractivos de aventura, como:
                ul.lista-ul
                  li 
                    i.fas.fa-check
                    | Quebrada La Vieja
                  li 
                    i.fas.fa-check
                    | Quebrada Las Delicias
    p.mb-5  También en las inmediaciones de Bogotá, se encuentran el Páramo de Sumapaz y reservas forestales como Guatavita, Neusa y Chingaza. Cuenta con el aeropuerto Internacional El Dorado, el primero en América Latina en el transporte de carga y el tercero en la región con el mayor número en el tráfico de pasajeros, es uno de los HUB (centro de conexión) más importante de Sudamérica ya que tiene una posición estratégica en la zona media del continente, es el HUB de operación para aerolíneas como:

    .row.justify-content-center.mb-5
      .col-lg-3
        figure(data-aos="flip-right")
          img.nW(src="@/assets/curso/t1-ip1.svg", alt="imagen decorativa")
      .col-lg-4
        ul.lista-ul
          li 
            i.fas.fa-check
            | Avianca
          li 
            i.fas.fa-check
            | Avianca cargo
          li 
            i.fas.fa-check
            | Latam Colombia
          li 
            i.fas.fa-check
            | Viva Air
          li 
            i.fas.fa-check
            | Wingo
          li 
            i.fas.fa-check
            | Líneas Aéreas Suramericanas (LAS)
    p.mb-5  A continuación, se presentan algunos de los lugares turísticos más representativos de Bogotá:
    
    SlyderC.mb-5(:datos="datosSlyder3")

    h3.titulo-tercero Medellín
    p.mb-3  <b>La ciudad de la eterna primavera es una ciudad moderna</b>, rica en actividades de todo tipo para los turistas, cuenta con diversidad cultural, con 22 museos, 6 parques bibliotecas y variadas zonas de oferta gastronómica que la hace muy llamativa para visitar. Cuenta con 2 aeropuertos, el primero es el Olaya Herrera ubicado dentro de la ciudad y segundo el aeropuerto internacional José María Córdova en el municipio de Rionegro a 50 minutos de Medellín.
    p.mb-5  <b>El turismo de salud es su principal eje</b>, esto según cifras del clúster de servicios de medicina y odontología de Medellín, que informa que esta modalidad de turismo viene en crecimiento en los últimos años, de pacientes extranjeros que optan por realizarse algún tratamiento médico u odontológico. Pero no solo el turismo de salud es atractivo en esta ciudad, hay variedad de eventos, festivales, y lugares para visitar, entre ellos:
    .row.justify-content-center.mb-5
      .col-lg-4
        figure(data-aos="flip-right")
          img(src="@/assets/curso/t1-p3.png", alt="foto de bogota")
      .col-lg-4
        ul.lista-ul
          li 
            i.fas.fa-check
            | Cerro Nutibara
          li 
            i.fas.fa-check
            | Parque Explora
          li 
            i.fas.fa-check
            | Plaza de Botero
          li 
            i.fas.fa-check
            | Parque de los Pies Descalzos
          li 
            i.fas.fa-check
            | Centro Internacional de Convenciones (el más moderno de América Latina)
          li 
            i.fas.fa-check
            | Museo Interactivo EPM
          li 
            i.fas.fa-check
            | Comuna 13
          li 
            i.fas.fa-check
            | Jardín Botánico
      .clearfix.mb-4
      .col-lg-8
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure(data-aos="flip-right")
                img.nW(src="@/assets/curso/t1-ic7.svg", alt="imagen decorativa")
            .col-lg-8
              .bloque-texto-a__texto.p-4(data-aos="flip-up")
                p En municipios aledaños a la capital de Antioquia, también se encuentra oferta turística importante:
                ul.lista-ul
                  li 
                    i.fas.fa-check
                    | Guatapé y el Peñol
                  li 
                    i.fas.fa-check
                    | Parque Arví
                  li 
                    i.fas.fa-check
                    | Santa Helena

    SlyderC.mb-5(:datos="datosSlyder4")      

    h3.titulo-tercero Eje Cafetero (Caldas, Risaralda, Quindío, Tolima)
    p.mb-3 Comprendida entre las ciudades de Manizales, Pereira, Armenia e Ibagué es la zona de importancia cultural por su paisaje cafetero, razón por la cual fue declarada por la UNESCO Patrimonio de Humanidad en el año 2011, desde ese momento este paisaje recibe el nombre de “Paisaje Cultural Cafetero”, por sus condiciones climáticas desde los 8 grados hasta los 29 grados hacen que esta región posea condiciones favorables para la producción de café con los más altos estándares de calidad y que fue catalogado como el mejor café del mundo.
    p.mb-5  Uno de los principales atractivos turísticos de esta región, es la tendencia de hoteles propios de la cultura, adaptando casas, haciendas cafeteras como lugares de alojamiento para los turistas, lo que hace que los visitantes vivan de cerca la experiencia con la gente y sus costumbres. Dentro de lo atractivos turísticos más importantes de esta zona del país, están:
    .row.justify-content-center.mb-5
      .col-lg-4
        figure(data-aos="flip-right")
          img(src="@/assets/curso/t1-p4.png", alt="Detalle de farolas de un jeep")
      .col-lg-4
        ul.lista-ul
          li 
            i.fas.fa-check
            | Parque Nacional del Café
          li 
            i.fas.fa-check
            | Parque Nacional de la Cultura Agropecuaria
          li 
            i.fas.fa-check
            | Parque de los Arrieros
          li 
            i.fas.fa-check
            | Bioparque Ukumarí
          li 
            i.fas.fa-check
            | Parque de la Vida
          li 
            i.fas.fa-check
            | Museo Arqueológico Quimbaya
          li 
            i.fas.fa-check
            | Catedral Basílica Nuestra Señora del Rosario de Manizales
    
    p.mb-5  Para los amantes de la naturaleza, las caminatas, el contacto con la biodiversidad de esta área, también se encuentra lugares diseñados para el ecoturismo, tales como:
    .row.justify-content-center.mb-5
      .col-lg-4
        figure(data-aos="flip-right")
          img(src="@/assets/curso/t1-p5.png", alt="Detalle de farolas de un jeep")
      .col-lg-4
        ul.lista-ul
          li 
            i.fas.fa-check
            | Parque Nacional Natural los Nevados
          li 
            i.fas.fa-check
            | Recorrido a la Cultura Cafetera
          li 
            i.fas.fa-check
            | Jardín Botánico Universidad Tecnológica de Pereira
          li 
            i.fas.fa-check
            | Jardín Botánico Universidad de Caldas
          li 
            i.fas.fa-check
            | Jardín Botánico y Mariposario del Quindío
          li 
            i.fas.fa-check
            | Jardín Botánico Universidad del Tolima
          li 
            i.fas.fa-check
            | Termales de Santa Rosa de Cabal
          li 
            i.fas.fa-check
            | Termales de San Vicente
          li 
            i.fas.fa-check
            | Balsaje
          li 
            i.fas.fa-check
            | Valle del Cocora
          li 
            i.fas.fa-check
            | Ecoparque Peñas Blancas

    p.mb-5  A continuación, se presentan algunos de los lugares turísticos más representativos del Eje Cafetero:

    SlyderC.mb-5(:datos="datosSlyder5") 

    h3.titulo-tercero Región Pacífica
    .row
      .col-lg-8
        p.mb-3  Es la zona de una extraordinaria riqueza ecológica, hidrológica, minera y forestal, es la zona de mayor biodiversidad y pluviosidad en todo mundo, abarca la mayor parte del Departamento del Chocó, hogar de afrocolombianos a quienes los españoles en la conquista les llamaron “chocoes”, en esta parte del país el litoral coloca a Colombia frente océano más grande del mundo y con ello a conectar con el resto del mundo lo que promueve el desarrollo de esta región. Las subregiones que la componen son:
        .row.justify-content-center
          .col-lg-10
            ul.lista-ul.mb-5
              li 
                i.fas.fa-check
                | Serranía del Baudó
              li 
                i.fas.fa-check
                | Serranía del Darién
              li 
                i.fas.fa-check
                | Valle del río Atrato
              li 
                i.fas.fa-check
                | Valle del río San Juan
              li 
                i.fas.fa-check
                | Llanura costera del Pacífico
            .tabla-a.color-acento-botones.mb-5 
              table
                thead
                  tr
                    th Chocó
                    th Quibdó
                tbody
                  tr
                    td Valle del Cauca
                    td Cali
                  tr
                    td Cauca
                    td Popayán
                  tr
                    td Nariño
                    td Pasto

      .col-lg-4
        figure(data-aos="flip-right")
          img(src="@/assets/curso/t1-m4.svg", alt="mapa de la región pacífica")

    .h4.mb-4 Principales destinos turísticos en la región Pacífica

    h4.titulo-cuarto  Cali
    p.mb-4  Es la tercera ciudad más poblada de Colombia al suroeste de la capital, posee una gran variedad de clubes nocturnos, centros comerciales, culturales, restaurantes que desde hace unos años ha crecido en su variedad para todos los gustos, conocida también como la capital de la salsa del que ofrece una gran cantidad de lugares como en “Juanchito” zona con más clubes de salsa.
    p.mb-5  En el año 2019 fue recibió el reconocimiento como la mejor ciudad cultural de Suramérica, además de ser el principal centro urbano del país, tiene actividades para todos los gustos, si de naturaleza se trata, en Cali está el Parque Nacional Natural Farallones de Cali, compuesto de una majestuosa cadena de montañas que hace parte de la Cordillera Occidental, separadas por los ríos Cauca y la cuenca del Pacífico, de aquí nacen aproximadamente 30 ríos que abastece el suroccidente colombiano, cabe destacar que posee una gran variedad de especies endémicas de aves.
    p.mb-5  Dentro de los sitios más representativos, por tanto, más turísticos encontramos:
    
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="flip-right")
          img.nW(src="@/assets/curso/t1-p6.jpg", alt="imagen decorativa")
      .col-lg-4
          ul.lista-ul
            li 
              i.fas.fa-check
              | Museo del Oro Calima
            li 
              i.fas.fa-check
              | Juanchito
            li 
              i.fas.fa-check
              | Farallones de Cali
            li 
              i.fas.fa-check
              | Cristo Rey
            li 
              i.fas.fa-check
              | Cerro de las tres cruces
            li 
              i.fas.fa-check
              | Monumento Sebastián de Belalcázar
            li 
              i.fas.fa-check
              | La Ermita
            li 
              i.fas.fa-check
              | Acuaparque de la Caña
            li 
              i.fas.fa-check
              | Ecoparque del Río Pance
            li 
              i.fas.fa-check
              | Parque Alameda Loma de la Cruz

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p Cabe resaltar que en los últimos años también ha crecido <b>el número de extranjeros que llegan a Cali para hacer turismo de salud, tratamientos médicos, estéticos, dentales</b> ya que suele ser más económico que en sus lugares de origen, Cali atiende alrededor de 14.000 pacientes al año en este tipo de turismo.

    p.mb-5  Algunos parques nacionales presentes en esta región del país son:
    .row
      .col-lg-4
        figure.mb-5(data-aos="flip-right")
          img(src="@/assets/curso/t1-p7.jpg", alt="paisaje")
        figure.mb-5(data-aos="flip-right")
          img(src="@/assets/curso/t1-p8.jpg", alt="Frailejones")
      .col-lg-8
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Parque Nacional Natural Ensenada de Utría")
            .col-md-12
              p único en albergar gran variedad de ecosistemas entre el marino hasta el selvático, considerado el parque más diverso del mundo.

          .row(titulo="Parque Nacional Natural Gorgona")
            .col-md-12
              p Encontramos arrecifes coralinos y bosque húmedo, en los años 60's existía la penitenciaría Gorgona que estuvo activa hasta los años 80' s, ahora es un lugar turístico para los visitantes.     
          .row(titulo="Parque Nacional Natural Tatamá")
            .col-md-12
              p Ubicado en la cordillera Occidental con gran variedad de especies tanto en flora como en fauna, allí se encuentra el Páramo Tatamá, ubicado en los Departamentos del Valle del Cauca, Chocó y Risaralda.
          .row(titulo="Parque Nacional Natural Sanquianga")
            .col-md-12
              p En su mayoría ecosistema Manglar donde es el 20 % del total pacífico en el país, es la base de alimentación y reproducción de especies marinas y de estuarios, también de anidación de aves.     
          .row(titulo="Parque Nacional Natural de los Katíos")
            .col-md-12
              p Ubicado en la región del Darién y Urabá, tiene el título de Patrimonio Mundial Natural y Reserva de la Biosfera, actualmente se ubica allí la comunidad indígena Wounaan de Juin Phubuur y la comunidad Peranchito de la etnia Embera-Katio.
          .row(titulo="Parque Nacional Natural Uramba Bahía Málaga")
            .col-md-12
              p Lugar del descubrimiento del Chelorchestia colombiensis, y lugar de avistamiento de ballenas jorobadas que escogen este lugar para dar a luz sus crías.      
          .row(titulo="Santuario de Flora y Fauna Malpelo y el Jardín Botánico la Manigua")
            .col-md-12
              p Es una de las islas más visitadas en el país por científicos y turistas, en este lugar existen diferentes tipos de rocas ígneas.

    p.mb-5  A continuación, se presentan algunos de los lugares turísticos más representativos de la Región Pacífica:
    SlyderC.mb-5(:datos="datosSlyder6")

    //- reguin orinoquia
    h3.titulo-tercero Región Orinoquía
    .row
      .col-lg-8
        p.mb-3  También llamada “Llanos Orientales” es muy importante no solo por ser el hábitat de 300 especies de aves en sus espléndidos bosques, sino también por ser el área de mayor reserva de petróleo y gas natural, otra característica relevante es la gran cantidad de ganado en diversas especies y su gastronomía.
        p.mb-4 Por ser una zona rica en naturaleza, está subdivida de la siguiente manera:
        .row.justify-content-center.mb-5
          .col-lg-8
            ul.lista-ul.mb-5
              li 
                i.fas.fa-check
                | Piedemonte Llanero
              li 
                i.fas.fa-check
                | Mesetas del Meta
              li 
                i.fas.fa-check
                | Llanuras del Guaviare
              li 
                i.fas.fa-check
                | Pantanos del Arauca
              li 
                i.fas.fa-check
                | Serranía de la Macarena

            .tabla-a.color-acento-botones.mb-5 
              table
                thead
                  tr
                    th Departamento
                    th Capital
                tbody
                  tr
                    td Arauca
                    td Arauca
                  tr
                    td Casanare
                    td Yopal
                  tr
                    td Meta
                    td Villavicencio
                  tr
                    td Vichada
                    td Puerto Carreño

              
      .col-lg-4
        figure.mb-5(data-aos="flip-right")
          img(src="@/assets/curso/t1-m5.png", alt="Mapa region orinoquía")
        

    .h4 Principales destinos turísticos en la región Orinoquia
    p.mb-5  En esta región encontramos grandes Parques Nacionales importantes para la biodiversidad colombiana, entre ellos tenemos:
    .row.justify-content-center.mb-5
      .col-lg-4
        figure.mb-5(data-aos="flip-right")
          img(src="@/assets/curso/t1-p9.png", alt="paisaje de rio")
      .col-lg-6
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Parque nacional natural El Tuparro")
            .col-md-12
              p Santuario de aves, orquídeas, monos, serpientes y los espectaculares delfines rosados, también es el cementerio de la desaparecida tribu indígena de los maipures.
          .row(titulo="Sierra de la Macarena")
            .col-md-12
              p Sistema de montañas en la cordillera de los Andes, donde se encuentran especies tan numerosas como lo son: los osos hormigueros, jaguares, pumas, venados etc., su principal atractivo es Caño Cristales.
          .row(titulo="Parque nacional natural El Cocuy")
            .col-md-12
              p Está ubicado sobre la cordillera Oriental y además posee el glaciar más grande del país, una característica relevante es que solo en el parque cuenta con todos los pisos térmicos que hay dentro de todo el territorio colombiano. En el parque se encuentran especies como: cóndor de los andes, águila real, jaguar, tigrillo, venado de cola blanca, armadillos y osos de anteojos.
          .row(titulo="Parque nacional natural Chingaza")
            .col-md-12
              p En su dimensión comprende los Departamentos de Cundinamarca y Meta, se cree que las especies de flora presentes en el parque sobrepasan a las 2000, según estudios realizados por expertos en este tipo de vegetación.
    
    p.mb-5  A continuación, se presentan algunos de los lugares turísticos más representativos de la Región de la Orinoquía
    SlyderC.mb-5(:datos="datosSlyder7")


     //- reguin amazonia
    h3.titulo-tercero Región de la Amazonía
    .row
      .col-lg-8
        p.mb-4  Ubicada en el extremo sur del país, limita con Venezuela, Brasil, Perú y Ecuador y comprende el 40 % del territorio, mide 483119 km², lo que indica que la mayor superficie está en Colombia, también llamado el pulmón del mundo por ser considerada la zona forestal más extensa en el planeta y con ella toda la diversidad que trae consigo, tanto en especies de animales como de plantas, además posee el río más extenso del mundo, el río Amazonas. El turismo que más se realiza en esta zona es el ecológico, los turistas disfrutan mucho el contacto con la naturaleza y con las tribus indígenas presentes en esta zona del país.

        .row.justify-content-center.mb-5
          .col-lg-8
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th Departamento
                    th Capital
                tbody
                  tr
                    td Amazonas
                    td Leticia
                  tr
                    td Caquetá
                    td Florencia
                  tr
                    td Guainía
                    td Puerto Inírida
                  tr
                    td Guaviare
                    td San José del Guaviare
                  tr
                    td Putumayo
                    td Mocoa
                  tr
                    td Vaupés
                    td Mitú

              
      .col-lg-4
        figure.mb-5(data-aos="flip-right")
          img(src="@/assets/curso/t1-m6.png", alt="Mapa region Amazonía")

    .h4.mb-5  Los principales atractivos turísticos en esta zona son
    
    .row.mb-5.align-items-center.justify-content-center
      .col-lg-4.mb-4.mb-lg-0
        figure(data-aos="flip-right")
          img.nW(src="@/assets/curso/t1-p10.png", alt="paisaje de rio")
      .col-lg-4
          ul.lista-ul
            li 
              i.fas.fa-check
              | Parque nacional natural Cahuinarí
            li 
              i.fas.fa-check
              | Parque nacional natural La Paya
            li 
              i.fas.fa-check
              | Parque nacional natural Tinigua
            li 
              i.fas.fa-check
              | Parque nacional natural Río Puré
            li 
              i.fas.fa-check
              | Reserva nacional natural Nukak
            li 
              i.fas.fa-check
              | Reserva nacional natural Puinawai
            li 
              i.fas.fa-check
              | Parque nacional natural Alto Fragua Indi-Wasi
            li 
              i.fas.fa-check
              | Parque nacional natural Serranía de los Churumbelos Auka-Wasi

    .h4.mb-5  Los parques más emblemáticos de esta zona del país son:
    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Parque nacional natural Amacayacu")
        .row.justify-content-center.align-items-center
          .col-lg-5
            figure(data-aos="fade-left")
              img(src="@/assets/curso/t1-p11.png", alt="paisaje")
          .col-lg-6
            p Se encuentra en el llamado “trapecio amazónico que alberga especies como: el titi cabeza blanco, el guacamayo, el tucán, la nutria, y como animales endémicos el león rayado y el pez cuatro aletas. Las principales actividades incluyen, paseo por el río Amazonas, la isla de Los Micos, Isla de Mocagua, viaje río arriba del Río Tarapoto para la vista de los delfines rosados y grises de agua dulce.
        
      .py-3.py-md-4(titulo="Parque nacional natural Sierra de Chiribiquete")
        .row.justify-content-center.align-items-center
          .col-lg-5
            figure(data-aos="fade-left")
              img(src="@/assets/curso/t1-p11.png", alt="icono decorativo")
          .col-lg-6
            p Entre los departamentos Caquetá y Guaviare está el parque nacional natural más grande del país, dentro de su principal riqueza además de la flora y fauna que allí se encuentra, también está presente la arqueología con más de 36 abrigos rocosos donde se han encontrado más de 250.000 dibujos, que son el más importante hallazgo de pictografías rupestres, que datan de hace 19.510 años antes del presente según proyecciones de arqueólogos” (Aquae, s.f.). 

    p.mb-5  A continuación, se presentan algunos de los lugares turísticos más representativos de la Región de la Amazónica:
    SlyderC.mb-5(:datos="datosSlyder8")

    Separador
    br
    br
    #t_1_4.titulo-segundo
      h2  1.4  Geografía turística internacional
    .row.mb-5
      .col-lg-7
        p El turismo internacional ha estado en los últimos años en continuo crecimiento por la diversificación que ofrece a los turistas en variedad de opciones para escoger, esto conlleva al dinamismo en la promoción y desarrollo de nuevos destinos turísticos lo cual es un motor importante para el progreso socioeconómico de las naciones, uno de los tipos de turismo que viene en auge es el de negocios y este lo convierte en un factor de consideración para el comercio internacional siendo así una de las fuente de ingreso considerable de países en desarrollo, esto va de la mano con la diversificación y competencia entre destinos.
        .bloque-texto-b.color-secundario.p-4.mb-5
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            .h5.mb-0 En el año 2019, se registraron 1.500 millones de llegadas internacionales en todo el mundo, lo que equivale a la quinta parte de la población mundial<br>
            span  - Según estadísticas de la OMT
            i.fas.fa-quote-right
        p Esto indica el crecimiento considerable del interés de las personas por explorar lugares desconocidos, culturas diferentes, y buscar nuevas experiencias. La tendencia de las generaciones actuales ha sido salir de su zona de confort y apostarle a experimentar emociones memorables, que los enriquecen como seres humanos y sociales.

      .col-lg-5
        figure(data-aos="fade-left")
          img(src="@/assets/curso/t1-p12.png", alt="paisaje")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p Por esta razón es muy común escuchar el término <b>“wanderlust”</b> entre los jóvenes, ya que este hace referencia al interés de las personas de no tener un motivo especial de viaje, más que el deseo mismo de viajar por pasión. Para esto se debe identificar los destinos de mayor demanda e interés para las personas, <b>conociendo de primera mano, ciudades importantes, tipo de moneda, atractivos turísticos, actividades de ocio, eventos especiales, gastronomía, tradiciones, entre otras.</b>
    
    h3.titulo-tercero Destinos turísticos más representativos de América
    p.mb-5  En el siguiente cuadro se presentan las ciudades y/o atractivos turísticos más representativos del continente americano:

    .row.justify-content-center.mb-5
      .col-lg-8
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th Países
                th Ciudades / atractivos turísticos
            tbody
              tr
                td Estados Unidos
                td Nueva York, Las Vegas, Miami, Orlando
              tr
                td México
                td Cancún, Ciudad de México
              tr
                td Costa Rica
                td San José
              tr
                td Brasil
                td São Paulo, Rio de Janeiro
              tr
                td Argentina
                td Buenos Aires, Patagonia
              tr
                td Chile
                td Santiago de Chile, San Pedro de Atacama, Islas de Pascua
              tr
                td Perú
                td Lima, Cuzco, Machu Picchu
              tr
                td Aruba y Curazao
                td Antillas Holandesas en el caribe

    .row.mb-5
      .col-lg-7
        p.mb-3  En América encontramos diversidad de destinos, todos con atractivos turísticos de alto impacto desde Estados Unidos la principal Metrópoli que todos quieren visitar, encontramos diversidad de ciudades que tienen atractivos particulares para disfrutar y conocer como es New York, conocida también como la Gran Manzana, importante por sus grandes centros de negocios, la Estatua de la Libertad, y diversos e importantes teatros, plazas, entre otros establecimientos; otro destino es Las Vegas, conocida como la ciudad del pecado, con actividad nocturna donde contrasta la diversión con la escenografía temática exclusiva en su infraestructura que la hace muy llamativa, por sus casinos. Sería imposible olvidar Miami que alberga a inmigrantes de América del Sur, central, cuba, Puerto Rico y otras comunidades, considerada la puerta al Caribe y Latinoamérica donde se habla casi en toda la ciudad el idioma español; otra ciudad emblemática es Orlando conocida como Downtown Orlando, donde se encuentran los parques temáticos, y también los complejos de <b>Walt Disney World Resort, Seaworld y Universal Orlando Resort, para el disfrute de chicos y grandes.</b>
        p Sin duda alguna otro destino maravilloso es México, sitio mágico por su historia, rutas y gastronomía es uno de los destinos que los turistas prefieren para visitar por la calidez de su gente y sus zonas arqueológicas, territorio donde habitaron culturas prehispánicas de una gran importancia para la humanidad, en el estado de México se encuentra Teotihuacán y las Pirámides del Sol y la Luna, también están las grandes ciudades Mayas.
      .col-lg-5
        figure(data-aos="fade-left")
          img(src="@/assets/curso/t1-p13.png", alt="turistas comprando sandía a vendedora con traje tipica")

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p Otros destinos igualmente fascinantes por visitar son los países de América del Sur con una amplia gama de destinos, lugares, cultura y ricos en historia, entre ellos Perú que posee grandes centros arqueológicos, el más representativo Machu Picchu, también se encuentra las ruinas de la ciudadela de Chan Chan y las líneas de Nazca.
    
    p.mb-5  A continuación, se presentan algunos de los lugares turísticos más representativos del continente americano:      
    SlyderC.mb-5(:datos="datosSlyder9")


    h3.titulo-tercero Destinos turísticos más representativos de Europa
    p.mb-5  En el siguiente cuadro se presentan las ciudades y/o atractivos turísticos más representativos del continente europeo:
    .row.justify-content-center.mb-5
      .col-lg-8
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th Países
                th Ciudades / atractivos turísticos
            tbody
              tr
                td España
                td Barcelona, Bilbao, Madrid, Toledo, Sevilla, Córdoba
              tr
                td Francia
                td Paris, Versalles, Monte Saint- Michel, Burdeos, Carcasona, Niza, Lyon   
              tr
                td Países Bajos
                td Ámsterdam
              tr
                td Alemania
                td Frankfurt, Colonia, Hamburgo, Berlín, Dresde, Múnich
              tr
                td Hungría
                td Budapest
              tr
                td República Checa
                td Praga
              tr
                td Austria
                td Salzburgo, Viena
              tr
                td Italia
                td Milan, Verona, Venecia, Florencia, Roma, Nápoles, Pompeya
    .row.mb-5
      .col-lg-7
        p Europa, un continente de contrastes, llamado también el <b>“viejo continente”</b> por tener países milenarios y que han llevado su evolución y desarrollo de maneras distintas a través de los años, razón por la cual es un continente rico en idiomas, cultura, arquitectura, gastronomía con el contraste en sus grandes ciudades capitales de lo histórico y lo moderno al mismo tiempo. Viajar por Europa es un sueño, disfrutar de sus canales pluviales en las distintas ciudades como Ámsterdam, Venecia hacen de la estancia en Europa un viaje para recordar, en cuanto a la movilidad la facilidad que hay en los desplazamientos entre países, permite que visitar varios países en un viaje sea posible, <b>puede ser por avión, bus, carro, tren y todo está diseñado para comodidad del turista.</b>
      .col-lg-5
        figure(data-aos="fade-right")
          img(src="@/assets/curso/t1-p14.png", alt="Torre eiffel de Paris")

    .row.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4
          p Entre sus principales atractivos turísticos está la inolvidable Torre Eiffel en París, el Castillo de Neuschwanstein en Alemania, el Coliseo Romano en Roma, el Parlamento de Hungría en Budapest, La Gran Vía en Madrid, El Reloj Astronómico de Praga, Casa del Fauno en Pompeya y demás lugares que hacen del turismo en Europa el más apetecido por los turistas.
    
    p.mb-5  A continuación, se presentan algunos de los lugares turísticos más representativos del continente europeo:
    SlyderC.mb-5(:datos="datosSlyder10")    

    h3.titulo-tercero Destinos turísticos más representativos de Asia
    p.mb-5  En el siguiente cuadro se presentan las ciudades y/o atractivos turísticos más representativos del continente asiático:

    .row.justify-content-center.mb-5
      .col-lg-8
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th Países
                th Ciudades / atractivos turísticos
            tbody
              tr
                td Emiratos Árabes
                td Dubái
              tr
                td Indonesia
                td Yakarta  
              tr
                td China
                td Pekín
              tr
                td Japón
                td Tokio
              tr
                td India
                td Nueva Delhi
              tr
                td Tailandia
                td Bangkok  
    .row.mb-5
      .col-lg-7
        p.mb-3  Es el continente más poblado del planeta, ofrece al visitante múltiples tipos de turismo, por sus culturas milenarias ricas en costumbres, paisajes, idiomas, escritura, y comida exótica; es un continente de las ultramodernas ciudades y mucho lujo en algunos casos, pero ofrece oferta para todos los presupuestos y gustos.
        p  Se encuentran ciudades de lujo como Singapur, que significa “la ciudad del león”; es una ciudad al sudeste asiático llena de dinamismo, con múltiples opciones culturales entre ellas el paseo por el río Singapur. Otra ciudad que se caracteriza por el exceso y los lujos es Dubái, es una sorprendente ciudad que ofrece todo tipo de actividades como safaris por el desierto y cenar a la luz de la luna, y visitar su maravillosa arquitectura como sus famosas mezquitas.
      .col-lg-5
        figure(data-aos="fade-left")
          img(src="@/assets/curso/t1-p15.png", alt="Pagoda en Tokio")

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.p-4
          p Entre sus principales atractivos turísticos está la inolvidable Torre Eiffel en París, el Castillo de Neuschwanstein en Alemania, el Coliseo Romano en Roma, el Parlamento de Hungría en Budapest, La Gran Vía en Madrid, El Reloj Astronómico de Praga, Casa del Fauno en Pompeya y demás lugares que hacen del turismo en Europa el más apetecido por los turistas.

    p.mb-5  A continuación, se presentan algunos de los lugares turísticos más representativos del continente asiático:
    SlyderC.mb-5(:datos="datosSlyder11")     


    h3.titulo-tercero Destinos turísticos más representativos de África
    p.mb-5  En el siguiente cuadro se presentan las ciudades y/o atractivos turísticos más representativos del continente africano:

    .row.justify-content-center.mb-5
      .col-lg-8
        .tabla-a.color-acento-botones
          table
            thead.text-bold
              tr
                th Países
                th Ciudades / atractivos turísticos
            tbody
              tr
                td.text-bold Egipto
                td El Cairo
              tr
                td.text-bold Marruecos
                td Rabat
              tr
                td.text-bold Kenia
                td Nairobi

    .row.mb-5
      .col-lg-7
        p.mb-3 Es reconocido por su vestimenta colorida y su espectacular geografía, los safaris, animales salvajes y por ser cuna de la primera civilización del mundo (Egipto) es un continente lleno de magia para visitar, además es reconocido por ser el continente más caliente del mundo.
        p.mb-3 A lo largo y ancho de su territorio se hablan más de 2.100 idiomas y es la casa de las personas más pequeñas del mundo, los pigmeos donde las mujeres pueden medir 1.33m y los hombres 1.45m.
        p.mb-3  Como atractivos turísticos importantes se tienen Las Cataratas Victoria, El Monte Kilimanjaro, Madagascar. Se destaca por sus animales salvajes, los cuales se pueden observar en los famosos safaris propios de este sector, entre los animales más representativos están, el elefante africano, la jirafa, el guepardo, el cocodrilo del nilo, el gorila, leones marinos y demás.

      .col-lg-5
        figure(data-aos="fade-right")
          img(src="@/assets/curso/t1-p16.png", alt="Elefantes africanos en espacio abierto")

    p.mb-5  A continuación, se presentan algunos de los lugares turísticos más representativos del continente africano:
    SlyderC.mb-5(:datos="datosSlyder12")   




  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Parque Nacional Natural Tayrona',
        texto:
          'Ubicado en la Sierra Nevada de Santa Marta, considerado como un santuario de la naturaleza por su diversidad en fauna y flora.',
        imagen: require('@/assets/curso/s1-i1.jpg'),
      },
      {
        titulo: 'Aldea de los indios Kogui en las montañas de la Sierra Nevada',
        texto:
          'El pueblo Kogui ha ocupado esta región durante siglos, la mayoría de los ellos siguen viviendo tradicionalmente en cabañas de barro con techos de paja.',
        imagen: require('@/assets/curso/s1-i2.jpg'),
      },
      {
        titulo: 'La Guajira',
        texto:
          'Posee pisos térmicos entre los 22 y 40 grados de la zona intertropical, su ecosistema terrestre va desde el desierto hasta la selva seca y húmeda de montaña. ',
        imagen: require('@/assets/curso/s1-i3.jpg'),
      },
      {
        titulo: 'Cabo de la Vela, La Guajira',
        texto:
          'Un hermoso paraje de desiertos, rancherías y fuertes vientos, su bahía goza de un mar hermoso y tranquilo.',
        imagen: require('@/assets/curso/s1-i4.jpg'),
      },
      {
        titulo: 'Punta Gallinas, La Guajira',
        texto:
          'Es uno de los destinos más impresionantes de toda Colombia, un lugar que enamora con sus extraordinarios paisajes y su gran riqueza cultural.',
        imagen: require('@/assets/curso/s1-i5.jpg'),
      },
      {
        titulo: 'Cartagena de Indias',
        texto:
          'Es una de las ciudades más turísticas de Colombia y de América Latina, por su historia, cultura, una arquitectura colonial imponente.',
        imagen: require('@/assets/curso/s1-i6.jpg'),
      },
      {
        titulo: 'La Ciudad Amurallada, Cartagena',
        texto:
          'Declarada por la UNESCO como patrimonio nacional de Colombia en 1959, y luego en 1984 se incluyó en la lista como patrimonio mundial como “puerto, fortaleza y conjunto monumental de Cartagena de Indias”.',
        imagen: require('@/assets/curso/s1-i7.jpg'),
      },
      {
        titulo: 'Torre del reloj, Cartagena',
        texto:
          'Construida como puerta principal de acceso a la ciudad amurallada, la torre es un emblemático monumento de 30 metros de altura. ',
        imagen: require('@/assets/curso/s1-i8.jpg'),
      },
      {
        titulo: 'Carnaval de Barranquilla',
        texto:
          'Es un evento masivo de personas en la costa caribe colombiana. Patrimonio cultural de la nación en 2001, y obra maestra del patrimonio oral e intangible de la humanidad por la UNESCO en 2003.',
        imagen: require('@/assets/curso/s1-i9.jpg'),
      },
      {
        titulo: 'Taganga, Santa Marta',
        texto:
          'Reconocida por sus playas, su centro histórico y por la facilidad para el ecoturismo, es llamada también “La Perla de América” desde el siglo XVIII.',
        imagen: require('@/assets/curso/s1-i10.jpg'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'San Andrés Isla',
        texto:
          'Es la más grande del Archipiélago de San Andrés, Providencia y Santa Catalina, su baile típico es el calypso con un toque africano que solo refleja la alegría de su gente.',
        imagen: require('@/assets/curso/s2-i1.jpg'),
      },
      {
        titulo: 'San Andrés, Providencia y Santa Catalina',
        texto:
          'Uno de los mejores destinos para pasar vacaciones tropicales, visitado por miles de turistas en busca de playas de arena blanca y atardeceres perfectos.',
        imagen: require('@/assets/curso/s2-i2.jpg'),
      },
      {
        titulo: 'El mar de los siete colores',
        texto:
          'Mar de los siete colores, el tono de sus aguas van desde el arenoso color de la playa, pasando por el turquesa y degradándose en un azul profundo (Cravero, 2020).',
        imagen: require('@/assets/curso/s2-i3.jpg'),
      },
      {
        titulo: 'Jhonny Cay',
        texto:
          'Es uno de los destinos más impresionantes de toda Colombia, un islote con playas y palmeras, con extraordinarios paisajes y gran riqueza cultural.',
        imagen: require('@/assets/curso/s2-i4.jpg'),
      },
      {
        titulo: 'Buceo en Arrecifes',
        texto: 'Muchos turistas visitan San Andrés, para practicar buceo.',
        imagen: require('@/assets/curso/s2-i5.jpg'),
      },
    ],
    datosSlyder3: [
      {
        titulo: 'Cerro de Monserrate',
        texto:
          'Una montaña que domina el centro de ciudad de Bogotá, capital de Colombia; a 3.152 metros sobre el nivel del mar se encuentra la basílica del Señor de Monserrate.',
        imagen: require('@/assets/curso/s3-i1.jpg'),
      },
      {
        titulo: 'La Candelaria',
        texto:
          'Un lugar icónico del centro de Bogotá que reúne arquitectura, historia, cultura y gastronomía.',
        imagen: require('@/assets/curso/s3-i2.jpg'),
      },
      {
        titulo: 'Usaquén',
        texto:
          'Localidad ubicada en el norte de Bogotá, su ambiente festivo y gastronomía atrae a cientos de turistas.',
        imagen: require('@/assets/curso/s3-i3.jpg'),
      },
      {
        titulo: 'Museo del Oro',
        texto:
          'Artefacto de oro precolombino expuesto en el Museo del Oro, ubicado en el centro histórico de Bogotá, cuenta con más de 30.000 piezas hechas de oro.',
        imagen: require('@/assets/curso/s3-i4.jpg'),
      },
      {
        titulo: 'Museo Nacional de Colombia',
        texto:
          'Este museo representa la historia y herencia nacional, cuenta con 17 cuartos en donde se puede explorar los diversos períodos de historia colombiana.',
        imagen: require('@/assets/curso/s3-i5.jpg'),
      },
      {
        titulo: 'Maloka',
        texto:
          'Museo de ciencia, innovación y tecnología, donde se encuentra una amplia variedad de salas interactivas. Fue inaugurado el 7 de julio de 2019.',
        imagen: require('@/assets/curso/s3-i6.jpg'),
      },
      {
        titulo: 'Parque Metropolitano Simón Bolívar',
        texto:
          'Es el parque más grande de Bogotá, ubicado en el corazón de la ciudad, caracterizado por amplios espacios verdes y gran cantidad de árboles.',
        imagen: require('@/assets/curso/s3-i7.jpg'),
      },
      {
        titulo: 'Parque de la 93',
        texto:
          'Este  sector es cosiderado un  destino festivo y gastronómico, posee una arquitectura moderna y parques verdes.',
        imagen: require('@/assets/curso/s3-i8.jpg'),
      },
      {
        titulo: 'Catedral Primada de Colombia',
        texto:
          'Construcción de estilo Neoclásico en plena plaza de Bolívar en el centro de Bogotá. En 1975 fue declarada Monumento Nacional por su valor histórico y arquitectónico.',
        imagen: require('@/assets/curso/s3-i9.jpg'),
      },
      {
        titulo: 'Plaza de Toros de Santamaría',
        texto:
          'Construida en 1931, fue declarada como monumento nacional de Colombia en 1984, cuenta con una capacidad de más de 14 mil espectadores.',
        imagen: require('@/assets/curso/s3-i10.jpg'),
      },
    ],
    datosSlyder4: [
      {
        titulo: 'Medellín',
        texto:
          'Llamada también la ciudad de la eterna primavera, en la época de la llegada de los españoles se denominó San Lorenzo de Aburrá.',
        imagen: require('@/assets/curso/s4-i1.jpg'),
      },
      {
        titulo: 'Cerro Nutibara',
        texto:
          'Pequeña formación montañosa ubicada en la zona urbana, donde se puede encontrar también un pequeño pueblo turístico del estilo colonial.',
        imagen: require('@/assets/curso/s4-i2.jpg'),
      },
      {
        titulo: 'Parque explora',
        texto:
          'Es un museo interactivo para la apropiación y difusión de la ciencia y la tecnología.',
        imagen: require('@/assets/curso/s4-i3.jpg'),
      },
      {
        titulo: 'Plaza de Botero',
        texto:
          'Uno de los lugares más icónicos de Medellín en el que se exhiben 23 esculturas donadas por el artista colombiano Fernando Botero.',
        imagen: require('@/assets/curso/s4-i4.jpg'),
      },
      {
        titulo: 'Centro Internacional de Convenciones',
        texto:
          'Llamado también Plaza mayor de Medellín, es el escenario ideal para la realización de eventos y encuentros empresariales y académicos.',
        imagen: require('@/assets/curso/s4-i5.jpg'),
      },
      {
        titulo: 'Comuna 13',
        texto:
          'Una de las 16 comunas de la ciudad, situadas al oeste de la zona central occidental de la ciudad.',
        imagen: require('@/assets/curso/s4-i6.jpg'),
      },
      {
        titulo: 'Jardín botánico',
        texto:
          'Ubicado en ciudad de Medellín, cuenta con unas 13.2 hectáreas de extensión. En la imagen se observa la entrada del jardín botánico.',
        imagen: require('@/assets/curso/s4-i7.jpg'),
      },
      {
        titulo: 'Guatapé',
        texto:
          'Localizado en la subregión oriente del Departamento de Antioquia, con calles coloridas, casas adornadas y un ambiente festivo.',
        imagen: require('@/assets/curso/s4-i8.jpg'),
      },
      {
        titulo: 'Parque Arví',
        texto:
          'El Parque Arví cuenta con 16.000 hectáreas, para disfrutar de la belleza paisajística del territorio desde los diferentes miradores naturales.',
        imagen: require('@/assets/curso/s4-i9.jpg'),
      },
    ],
    datosSlyder5: [
      {
        titulo: 'Manizales',
        texto:
          'Se caracteriza por la gran variedad de eventos a lo largo del año entre festivales, teatro, danza, artes plásticas, la más importantes de ellas la feria de Manizales. ',
        imagen: require('@/assets/curso/s5-i1.jpg'),
      },
      {
        titulo: 'Parque Nacional del Café',
        texto:
          'Ubicado en el Departamento de Quindío, con más de 40 atracciones, senderos ecológicos, y shows en vivo que evocan la cultura cafetera.',
        imagen: require('@/assets/curso/s5-i2.jpg'),
      },
      {
        titulo: 'Catedral Basílica Nuestra Señora del Rosario de Manizales',
        texto:
          'Ubicada frente a la Plaza de Bolívar, el escultor Italiano Alideo Fontanini esculpió la gran parte de las imágenes que exhiben en la parte exterior del templo.',
        imagen: require('@/assets/curso/s5-i3.jpg'),
      },
      {
        titulo: 'Parque Nacional Natural Los Nevados',
        texto:
          'Situado en la cordillera central de los Andes colombianos; es el corazón de la región cafetera y la fuente de agua para cientos de habitantes de la región.',
        imagen: require('@/assets/curso/s5-i4.jpg'),
      },
      {
        titulo: 'Termales de Santa Rosa de Cabal',
        texto:
          'Ubicado en el Departamento de Risaralda, las aguas termales brotan del interior de la tierra a más de 60 grados.',
        imagen: require('@/assets/curso/s5-i5.jpg'),
      },
      {
        titulo: 'Valle del Cocora',
        texto:
          'Situado en la cordillera de los Andes, cuenta con el árbol nacional del país, La Palma de Cera del Quindío, con gran diversidad de flora y fauna.',
        imagen: require('@/assets/curso/s5-i6.jpg'),
      },
    ],
    datosSlyder6: [
      {
        titulo: 'Cristo Rey, Cali',
        texto:
          'Panorama lateral de la estatua de Cristo Rey, ubicada en el corregimiento de los andes en la ciudad de Cali, es de 40 metros de altura en el cerro de los cristales a 440 msnm.',
        imagen: require('@/assets/curso/s6-i1.jpg'),
      },
      {
        titulo: 'Cerro de las Tres Cruces, Cali',
        texto:
          'Un ambiente natural, para ejercitarse, que ofrece una buena vista de la ciudad de  Cali,  además de variadas alternativas de hidratación y alimentación.',
        imagen: require('@/assets/curso/s6-i2.jpg'),
      },
      {
        titulo: 'Iglesia la Ermita',
        texto:
          'Templo católico ubicado cerca al río Cali y dedicado a Nuestra Señora de la Soledad y al Señor de la Caña.',
        imagen: require('@/assets/curso/s6-i3.jpg'),
      },
      {
        titulo: 'Atardecer en la Isla de Gorgona',
        texto:
          'Ubicada al oeste de la costa del Pacífico, descubierta en 1.526 por Bartolomé Ruiz, inicialmente se llamó San Felipe, pero fue cambiado por Francisco Pizarro quien le dio el nombre de Gorgona.',
        imagen: require('@/assets/curso/s6-i4.jpg'),
      },
      {
        titulo: 'Popayán',
        texto:
          'Su nombre completo es Asunción de Popayán y es una de las ciudades más antiguas y mejor conservadas de toda américa, razón por la cual la Unesco en 2005 le otorgó el reconocimiento como ciudad Unesco de la gastronomía.',
        imagen: require('@/assets/curso/s6-i5.jpg'),
      },
      {
        titulo: 'Carnaval de Negros y Blancos, Pasto',
        texto:
          'El es la fiesta más grande e importante del sur de Colombia. Se celebra del 2 al 7 de enero de cada año. En el año 2000 fue declarado Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.',
        imagen: require('@/assets/curso/s6-i6.jpg'),
      },
      {
        titulo: 'Santuario de las Lajas, Ipiales',
        texto:
          'Reconocido en el mundo como uno de los templos más bellos, construcción de estilo neogótico, que se alza en un abismo, sobre el cañón del río Guáitara, atrae la vista de miles de colombianos y extranjeros que con frecuencia visitan el templo.',
        imagen: require('@/assets/curso/s6-i7.jpg'),
      },
      {
        titulo: 'Parque nacional natural Tatamá',
        texto:
          'Ubicado en la cordillera occidental, reserva conformada por un conjunto de montañas, colinas y valles de páramo, un refugio natural para muchas especies animales y vegetales.',
        imagen: require('@/assets/curso/s6-i8.jpg'),
      },
      {
        titulo: 'Parque Nacional Natural Uramba Bahía Málaga',
        texto:
          'Ubicada en el municipio de Buenaventura, uno de los lugares más diversos del mundo, es conocida por recibir visita de las ballenas jorobadas para su reproducción.',
        imagen: require('@/assets/curso/s6-i9.jpg'),
      },
    ],
    datosSlyder7: [
      {
        titulo: 'Sierra de la Macarena',
        texto:
          'Una vista panorámica de los verdes cerros de la Sierra de la Macarena, donde se encuentra el río Caño Cristales.',
        imagen: require('@/assets/curso/s7-i1.jpg'),
      },
      {
        titulo: 'Caño Cristales',
        texto:
          'Ubicada en la Sierra de la Macarena, denominado “el río de los siete colores” ya que las plantas en el fondo del río cambian de color por su exposición al sol, con un efecto visual de colores amarillos, rojos, verdes. ',
        imagen: require('@/assets/curso/s7-i2.jpg'),
      },
      {
        titulo: 'Coleo, Llanos Orientales ',
        texto:
          'Es un deporte tradicional de la zona de los llanos orientales, llega a mediados del siglo XVI, consiste en derribar el toro jalándole la cola.',
        imagen: require('@/assets/curso/s7-i3.jpg'),
      },
      {
        titulo: 'Parque Nacional Natural El Tuparro',
        texto:
          'Santuario de aves, orquídeas, monos, serpientes delfines rosados de agua dulce. También se encuentra el antiguo cementerio que perteneció a la nación indígena de los Maipures.',
        imagen: require('@/assets/curso/s7-i4.jpg'),
      },
      {
        titulo: 'Parque Nacional Natural El Cocuy',
        texto:
          'Ubicado en el municipio de Boyacá; reserva hidrográfica, con paisajes extremos de contrastes únicos, su extensión es de 306.000 hectáreas.',
        imagen: require('@/assets/curso/s7-i5.jpg'),
      },
      {
        titulo: 'Parque nacional natural Chingaza',
        texto:
          'Ubicado en la región andina, entre los departamentos de Cundinamarca y Meta, considerado como un tesoro natural y cultural por la majestuosidad de sus montañas.',
        imagen: require('@/assets/curso/s7-i6.jpg'),
      },
    ],
    datosSlyder8: [
      {
        titulo: 'Leticia, Amazonas',
        texto:
          'Un lugar de gran atractivo para turistas que buscan un contacto extremo con la naturaleza y las culturas indígenas ancestrales, existe una enorme variedad de especies animales y vegetales.',
        imagen: require('@/assets/curso/s8-i1.jpg'),
      },
      {
        titulo: 'Río Guaporé o Iténez',
        texto:
          'Es un río presente en el Amazonas, sus aguas pasan por el parque nacional Noel Kempff Mercado en Bolivia, nace en la Serra Dos Parecis en Brasil, con una longitud de 1.210 km.',
        imagen: require('@/assets/curso/s8-i2.jpg'),
      },
      {
        titulo: 'Río Amazonas',
        texto:
          'Atraviesa Perú, Colombia y Brasil, el río más largo y caudaloso del mundo, posee lirios de agua gigantes, lo suficientemente fuertes como para sostener a un adulto.',
        imagen: require('@/assets/curso/s8-i3.jpg'),
      },
      {
        titulo: 'Parque Nacional Natural Chiribiquete',
        texto:
          'Ubicado en los Departamentos de Caquetá y Guaviare, es un sistema montañoso que se divide en partes: Macizo Norte, Macizo Central y las Mesas de Iguaje; el arte rupestre encontrado data de diferentes tiempos en la historia.',
        imagen: require('@/assets/curso/s8-i4.jpg'),
      },
    ],
    datosSlyder9: [
      {
        titulo: 'Nueva York, Estados Unidos',
        texto:
          'Es considerada la metrópoli más grande del mundo con la más alta población de los Estados Unidos y donde se encuentra los principales centros financieros, comerciales y culturales.',
        imagen: require('@/assets/curso/s9-i1.jpg'),
      },
      {
        titulo: 'Walt Disney World, Orlando',
        texto:
          'Complejo turístico reconocido en el mundo por sus parques temáticos, el parque Magic Kingdom es más famosos, cuenta con impresionantes atracciones mecánicas y acuáticas.',
        imagen: require('@/assets/curso/s9-i2.jpg'),
      },
      {
        titulo: 'Las Vegas, Estados Unidos',
        texto:
          'Uno de los principales destinos comerciales y vacacionales, reconocida por los grandes casinos, el juego, las apuestas y la extravagante vida nocturna. Denominada popularmente  como “la ciudad del pecado”',
        imagen: require('@/assets/curso/s9-i3.jpg'),
      },
      {
        titulo: 'Miami, Estados Unidos',
        texto:
          'Las playas hermosas, naturaleza, arte callejero, y vida nocturna, cautivan a los viajeros de todo el mundo.',
        imagen: require('@/assets/curso/s9-i4.jpg'),
      },
      {
        titulo: 'Chichén Itzá, Yucatán',
        texto:
          'Ciudad mexicana más famosa del mundo y la segunda zona arqueológica más visitada. es el lugar perfecto para conocer la cultura e historia maya. Patrimonio cultural de la humanidad en 1988.',
        imagen: require('@/assets/curso/s9-i5.jpg'),
      },
      {
        titulo: 'Teotihuacan, Ciudad de México',
        texto:
          'Complejo arqueológico declarado patrimonio cultural de la humanidad por la Unesco en 1987, se encuentran dos edificación denominadas pirámides del sol y de la luna.',
        imagen: require('@/assets/curso/s9-i6.jpg'),
      },
      {
        titulo: 'Machu Picchu, Perú',
        texto:
          'Ubicado en los andes peruanos, una de las 7 maravillas del mundo más visitadas por los turistas, la mayor obra arquitectónica de los Incas.',
        imagen: require('@/assets/curso/s9-i8.jpg'),
      },
      {
        titulo: 'Cataratas del Niágara, Canadá',
        texto:
          'Majestuosas caídas de agua aproximadamente de 51 metros de altura y un hermoso paisaje son una de las atracciones más importantes del mundo.',
        imagen: require('@/assets/curso/s9-i7.jpg'),
      },
      {
        titulo: 'São Paulo, Brasil',
        texto:
          'Centro financiero de Brasil, se encuentra entre las ciudades más pobladas del mundo, con numerosas instituciones culturales y una rica tradición arquitectónica.',
        imagen: require('@/assets/curso/s9-i9.jpg'),
      },
      {
        titulo: 'Cristo Redentor, Río de Janeiro',
        texto:
          'Estatua del Cristo Redentor conocida también como Cristo del Corcovado, una de las 7 maravillas del mundo moderno, tiene una altura de 30.1 metros.',
        imagen: require('@/assets/curso/s9-i10.jpg'),
      },
      {
        titulo: 'Las Cataratas del Iguazú',
        texto:
          'Patrimonio de la humanidad de la Unesco desde 1984 en su parte argentina y desde 1986, por su parte brasileña, la impresionante y majestuosa caída de agua alcanza hasta los 82 metros.',
        imagen: require('@/assets/curso/s9-i11.jpg'),
      },
    ],
    datosSlyder10: [
      {
        titulo: 'París, Francia',
        texto:
          'Emblemático y principal símbolo de París, construida en 1889, construcción de hierro de 300 metros de altura.',
        imagen: require('@/assets/curso/s10-i1.jpg'),
      },
      {
        titulo: 'Museo de Louvre, París',
        texto:
          'Localizado en el antiguo palacio Real de Louvre, uno de los museos más importantes del mundo donde alberga obras de arte de grandes expositores, cuenta con 60.500 metros cuadrados en galerías y alrededor de 445.000 piezas de arte.',
        imagen: require('@/assets/curso/s10-i2.jpg'),
      },
      {
        titulo: 'Budapest, Hungría',
        texto:
          'Capital y ciudad más poblada de Hungría, con un esplendoroso estilo urbano, su infraestructura arquitectónica del siglo XIX  se extienden por la orilla del Danubio.',
        imagen: require('@/assets/curso/s10-i3.jpg'),
      },
      {
        titulo: 'Parlamento húngaro, Budapest',
        texto:
          'Frente al río Danubio, es el centro legislativo del parlamento, de estilo gótico y ecléctico, fue construido entre 1885-1904 y desde 1987 es Patrimonio de la Humanidad de Unesco.',
        imagen: require('@/assets/curso/s10-i4.jpg'),
      },
      {
        titulo: 'Barcelona, España',
        texto:
          'Una de las ciudades más pobladas de España, con arquitectura modernista, y  un foco de nuevas tendencias en el mundo de la cultura, la moda y la gastronomía.',
        imagen: require('@/assets/curso/s10-i5.jpg'),
      },
      {
        titulo: 'Bilbao, España',
        texto:
          'Los puntos de referencia populares de Bilbao son el río Nervión, el puente de La Salve y el Museo Guggenheim de Bilbao. Este último es un museo de arte moderno y contemporáneo, uno de los museos más grandes de España.',
        imagen: require('@/assets/curso/s10-i6.jpg'),
      },
      {
        titulo: 'Castillo de Neuschwanstein, Alemania',
        texto:
          'Construcción majestuosa rodeada por un hermoso paisaje que inspiró a Walt Disney a la creación del castillo de la Bella Durmiente. Abierto al público desde 1886, recibe más de 1.4 millones de visitantes al año.',
        imagen: require('@/assets/curso/s10-i8.jpg'),
      },
      {
        titulo: 'Monte Saint- Michel, Francia',
        texto:
          'Es una pequeña isla rocosa en el estuario del río Couesnon, ubicada en la región de Normandía, en el noroeste de Francia. ',
        imagen: require('@/assets/curso/s10-i7.jpg'),
      },
      {
        titulo: 'Coliseo Romano, Italia',
        texto:
          'Una de las más grandes construcciones en el Imperio Romano, constituía una entretención para todo el público de la antigua Roma, con batallas de gladiadores, animales, un espectáculo con capacidad hasta de 50.000 espectadores.',
        imagen: require('@/assets/curso/s10-i9.jpg'),
      },
      {
        titulo: 'Venecia, Italia',
        texto:
          'Una ciudad mágica que parece flotar sobre las aguas del Adriático. Cuenta además con un rico patrimonio cultural y arquitectónico en el que destaca por encima de todo la Plaza de San Marcos.',
        imagen: require('@/assets/curso/s10-i10.jpg'),
      },
      {
        titulo: 'Basílica de San Pedro, Italia',
        texto:
          'Situada en el ciudad de Vaticano, uno de los lugares más sagrados para la religión católica, anualmente recibe personas de todo el mundo, Fue construida por Bernini a mediados del siglo XVII.',
        imagen: require('@/assets/curso/s10-i11.jpg'),
      },
      {
        titulo: 'Pompeya, Italia',
        texto:
          'Es uno de los yacimientos arqueológicos más famosos del mundo gracias a la conservación de los restos de la ciudad sepultada por la erupción volcánica del Vesubio en el año 79 d.C. patrimonio de la Unesco desde 1997.',
        imagen: require('@/assets/curso/s10-i12.jpg'),
      },
      {
        titulo: 'Ámsterdam, Países Bajos',
        texto:
          'Gran centro financiero y cultural, la ciudad se encuentra bajo el nivel del mar, se  mantiene a flote gracias a su sistema de canales y a los pilotes de madera que cimientan sus construcciones.',
        imagen: require('@/assets/curso/s10-i13.jpg'),
      },
      {
        titulo: 'Praga, República Checa',
        texto:
          'Región bohemia, reconocida como una de la ciudades más hermosas del mundo, alberga buen parte de la historia de Europa, declarada por la Unesco como patrimonio de la humanidad en 1982. ',
        imagen: require('@/assets/curso/s10-i14.jpg'),
      },
    ],
    datosSlyder11: [
      {
        titulo: 'Angkor Wat, Camboya',
        texto:
          'Uno de los sitios con un alto significado arqueológico, arquitectónico y artístico, se cataloga como uno de los templos hinduistas más importantes del sureste asiático, cuna del imperio Jemer.',
        imagen: require('@/assets/curso/s11-i1.jpg'),
      },
      {
        titulo: 'Dubái, Emiratos Árabes Unidos',
        texto:
          'Caracterizada por sus grandes y exuberantes rascacielos, una de las ciudades más grandes y famosas de Emiratos Árabes Unidos, su economía se basa en el turismo, la aviación, la propiedad inmobiliaria y servicios financieros.',
        imagen: require('@/assets/curso/s11-i2.jpg'),
      },
      {
        titulo: 'Singapur',
        texto:
          'Uno de los países más ricos del mundo; tras la independencia de Malasia en 1965 se convierte en un estado autónomo; es moderno, multicultural, posee tecnologías e infraestructuras comerciales avanzadas y de acceso al mercado mundial.',
        imagen: require('@/assets/curso/s11-i3.jpg'),
      },
      {
        titulo: 'La Gran Muralla China',
        texto:
          'Es la pared más larga y la arquitectura antigua más grande del mundo, con  más de 2.300 años. Declarada patrimonio de la humanidad por la Unesco en 1987, en 2007 fue elegida como una de las siete maravillas del mundo moderno.',
        imagen: require('@/assets/curso/s11-i4.jpg'),
      },
      {
        titulo: 'El Taj Mahal, India',
        texto:
          'Uno de los más bellos edificios del mundo, construido entre 1631 y 1653 bajo el mando de Shah Jahan para albergar la tumba de su esposa. En 1983, fue declarado patrimonio de la humanidad, y es una de las siete maravillas del mundo.',
        imagen: require('@/assets/curso/s11-i5.jpg'),
      },
      {
        titulo: 'Bangkok, Tailandia',
        texto:
          'Centro de la actividad política, comercial e industrial, su influencia en el arte, moda, educación y entretenimiento, le ha proporcionado a Bangkok el estatus de ciudad incluyente y moderna del sudeste asiático. ',
        imagen: require('@/assets/curso/s11-i6.jpg'),
      },
      {
        titulo: 'Kioto, Japón',
        texto:
          'Tiene el título de ser la ciudad más hermosa de Japón, centro religioso con alrededor de 1000 templos budistas majestuosos, posee monumentos emblemáticos, palacios imperiales y jardines excepcionales. ',
        imagen: require('@/assets/curso/s11-i7.jpg'),
      },
    ],
    datosSlyder12: [
      {
        titulo: 'Madagascar',
        texto:
          'Es una isla situada enfrente de Mozambique y el océano Índico, con una variedad de especies únicas en el mundo, como el lémur, camaleón pantera, fosa, aye-aye, rana tomate, entre muchos otros.',
        imagen: require('@/assets/curso/s12-i1.jpg'),
      },
      {
        titulo: 'El Monte Kilimanjaro, Tanzania',
        texto:
          'Es el más alto del continente africano, formado por tres volcanes inactivos, conocido popularmente como el techo de África, y por los famosos campos de hielo de su cumbre.',
        imagen: require('@/assets/curso/s12-i2.jpg'),
      },
      {
        titulo: 'Cataratas Victoria',
        texto:
          'Situadas entre Zambia y Zimbabue, constituyen  un salto de agua del río Zambeze. En 1989 la Unesco las incluyó en su lista de monumentos naturales. La cortina de agua más larga del mundo atrae a turistas de todo el planeta.',
        imagen: require('@/assets/curso/s12-i3.jpg'),
      },
      {
        titulo: 'El Cairo, Egipto',
        texto:
          'Ubicado en las riberas del río Nilo, los monumentos más conocidos son las famosas pirámides de Giza y la Esfinge, donde convergen la tradición islámica del país y los recuerdos de la milenaria era de los faraones.',
        imagen: require('@/assets/curso/s12-i4.jpg'),
      },
      {
        titulo: 'Desierto del Sahara',
        texto:
          'Es el desierto caliente más grande del mundo, abarca la mayor parte de África, es un escenario de dunas que pueden superar los 122 m de altura y de accidentes geográficos en continuo movimiento.',
        imagen: require('@/assets/curso/s12-i5.jpg'),
      },
      {
        titulo: 'Marruecos',
        texto:
          'Marruecos es un país islamico, con destacadas manifestaciones culturales e históricas; se caracteriza por un alto intercambio cultural e influencia de países de medio oriente. Su turismo va en ascenso al considerarse un lugar con un estilo muy propio, pintoresco y clásico. ',
        imagen: require('@/assets/curso/s12-i6.jpg'),
      },
    ],
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
