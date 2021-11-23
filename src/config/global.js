export default {
  global: {
    componenteFormativo: 'El turismo y los viajes',
    descripcionCurso:
      'Este componente formativo aborda los conocimientos básicos del mundo de los viajes, el turismo y los aeropuertos, adentrándose en temas generales de la actividad turística para entender la dinámica que encierra este importante sector para el desarrollo de un país y la significativa responsabilidad que tienen las empresas que ofrecen servicios turísticos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades del turismo y los viajes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sistema turístico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Geografía turística',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Geografía turística nacional',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Geografía turística internacional',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normatividad de los viajes y del turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Ley 300 de 1996',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamentos del servicio en turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Manejo del servicio al cliente',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Cultura del servicio al cliente',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aquae. (s.f.). <i>El parque nacional más grande de Colombia.</i>',
      link:
        'https://www.fundacionaquae.org/sierra-chiribiquete-parque-nacional-mas-grande-colombia/',
    },
    {
      referencia:
        'Díaz, A. (2020). El turismo en el mundo - Datos estadísticos. Statista website:',
      link:
        'https://es.statista.com/temas/3612/el-turismo-en-el-mundo/#:~:text=En%202019%2C%20seg%C3%BAn%20datos%20de,parte%20de%20la%20poblaci%C3%B3n%20mundial',
    },
    {
      referencia: 'Colombia. (s.f.). <i>Esta es Colombia</i> [video]. YouTube',
      link: 'https://www.youtube.com/watch?v=mLuPSlwS5w8',
    },
    {
      referencia:
        'Congreso de la República. (26 de julio de 1996).  Ley 300 de 1996. Por la cual se expide la Ley General de Turismo y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8634',
    },
    {
      referencia:
        'Congreso de Colombia. (22 de noviembre de 2006). Ley 1101 de 2006. Por la cual se modifica la Ley 300 de 1996 - Ley General de Turismo y se dictan otras disposiciones',
    },
    {
      referencia:
        'Congreso de la república. (10 de Julio de 2012). Ley 1558 de 2012. Por la cual se modifica la Ley 300 de 1996 -Ley General de Turismo, la Ley 1101 de 2006 y se dictan otras disposiciones. ',
      link:
        'https://www.redjurista.com/Documents/ley_1558_de_2012_congreso_de_la_republica.aspx#/',
    },
    {
      referencia:
        'Congreso de Colombia. (31 de diciembre de 2020). Ley 2068 de 2020. Por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones.',
      link: 'https://www.redjurista.com/Documents/ley_2068_de_2020_.aspx#/',
    },
    {
      referencia:
        'Cravero. (2020). <i>Un mar de 7 colores y 7 razones más para viajar a San Andrés.</i>',
      link:
        'https://intriper.com/lectura/un-mar-de-7-colores-y-7-razones-mas-para-viajar-a-san-andres/',
    },
    {
      referencia:
        'Organización Mundial de Turismo. (2019). <i>El turismo internacional sigue adelantando a la economía global.</i>',
      link:
        'https://www.unwto.org/es/el-turismo-mundial-consolida-su-crecimiento-en-2019',
    },
    {
      referencia:
        'Organización Mundial de Turismo. (s.f). Introducción al turismo.',
      link:
        'http://www.utntyh.com/wp-content/uploads/2011/09/INTRODUCCION-AL-TURISMO-OMT.pdf',
    },
    {
      referencia: 'Unwto. (s.f). <i>Glosario de términos de turismo.</i>',
      link: 'https://www.unwto.org/es/glosario-terminos-turisticos',
    },
  ],
  glosario: [
    {
      termino: 'Transporte aéreo',
      significado:
        'Es el servicio de trasladar de un lugar a otro, de pasajeros o mercancías, mediante la utilización de aeronaves.',
    },
    {
      termino: 'Turismo',
      significado: 'Se refiere a la actividad de los visitantes.',
    },
    {
      termino: 'Turismo interior',
      significado:
        'Engloba el turismo interno y el turismo receptor, a saber, las actividades realizadas por los visitantes residentes y no residentes en el país de referencia, como parte de sus viajes turísticos internos o internacionales.',
    },
    {
      termino: 'Turismo internacional',
      significado:
        'Incluye el turismo receptor y el turismo emisor, es decir, las actividades realizadas por los visitantes residentes fuera del país de referencia, como parte de sus viajes turísticos o emisores, y las actividades realizadas por los visitantes no residentes en el país de referencia, como parte de sus viajes turísticos receptores.',
    },
    {
      termino: 'Viajes/viajero',
      significado:
        'El término “viaje” designa la actividad de los viajeros. Un viajero es toda persona que se desplaza entre dos lugares geográficos distintos por cualquier motivo y duración.',
    },
    {
      termino: 'Wanderlust',
      significado: 'Necesidad de viajar sin ninguna razón particular.',
    },
  ],
  complementario: [
    {
      texto:
        'Geografía turística nacional: Colombia. (s.f.). Esta es <i>Colombia </i> [video].',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=mLuPSlwS5w8',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Claudia Ávila Ramírez',
        cargo: 'Experta temática',
        centro:
          'Centro Nacional de Hotelería Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Lida Guanumen Riaño',
        cargo: 'Experta temática de apoyo',
        centro:
          'Centro Nacional de Hotelería Turismo y Alimentos - Regional Distrito Capital',
      },
      {
        nombre: 'Dayra Maritza Paz Calderón',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia  Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica	Febrero de 2021',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jessica Moreno Realpe',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte Front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
