(function(e){function a(a){for(var o,r,c=a[0],s=a[1],l=a[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(d.length)d.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},i={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"838400d6","chunk-0206bfa0":"c003eb7c","chunk-04b93936":"2e9692b3","chunk-13a6037e":"e8970f07","chunk-16015154":"968678ff","chunk-17977988":"66d6420a","chunk-2c06842c":"34eaa190","chunk-2d208d90":"0469c3a8","chunk-2d21d0e2":"99986f02","chunk-2d22c123":"1ae0f90d","chunk-2e80bb9a":"6b6bc425","chunk-3145fe0f":"a8ff7f8b","chunk-328f70dd":"214b6edf","chunk-3807499c":"6d3a7445","chunk-3dc647fd":"3b110f5e","chunk-4cdd78c0":"ab7ba159","chunk-4fde0a08":"804a9a4e","chunk-515a8379":"3c390f86","chunk-53ccb27e":"b2d873c8","chunk-59974754":"06ff4751","chunk-766a929b":"62c4eff8","chunk-839300a6":"491e988b","chunk-c19cf7be":"f77c16f4","chunk-dbb9869e":"411bf24b",comple:"c7f224b9",creditos:"eb3e45c5",glosario:"7b8b13df",intro:"3eb90b83",referencias:"cba5b514",tema1:"9e837696",tema2:"ec772d5a",tema3:"4d203328"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3dc647fd":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,"chunk-dbb9869e":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1,tema3:1};r[e]?a.push(r[e]):0!==r[e]&&n[e]&&a.push(r[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4fde0a08":"5d24a906","chunk-515a8379":"632869a2","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"50db8c1d","chunk-766a929b":"8c46ca47","chunk-839300a6":"b67dc245","chunk-c19cf7be":"31d6cfe0","chunk-dbb9869e":"d035a47c",comple:"103c8e90",creditos:"af163a49",glosario:"958b40c0",intro:"0e433876",referencias:"0111446a",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"fec85989"}[e]+".css",i=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===i))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===o||u===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||i,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete r[e],m.parentNode.removeChild(m),n(t)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=i[e]=[a,n]}));a.push(o[2]=t);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(a){u.onerror=u.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var m=u;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"230f":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.5c7ed043.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},i=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=n("2877"),l=Object(s["a"])(c,r,i,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");d["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"El turismo y los viajes",descripcionCurso:"Este componente formativo aborda los conocimientos básicos del mundo de los viajes, el turismo y los aeropuertos, adentrándose en temas generales de la actividad turística para entender la dinámica que encierra este importante sector para el desarrollo de un país y la significativa responsabilidad que tienen las empresas que ofrecen servicios turísticos.",imagenBannerPrincipal:n("ae0a"),fondoBannerPrincipal:n("230f")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Generalidades del turismo y los viajes",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Sistema turístico",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Geografía turística",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Geografía turística nacional",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Geografía turística internacional",hash:"t_1_4"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Normatividad de los viajes y del turismo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Ley 300 de 1996",hash:"t_2_1"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Fundamentos del servicio en turismo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Manejo del servicio al cliente",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Cultura del servicio al cliente",hash:"t_3_2"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Aquae. (s.f.). <i>El parque nacional más grande de Colombia.</i>",link:"https://www.fundacionaquae.org/sierra-chiribiquete-parque-nacional-mas-grande-colombia/"},{referencia:"Díaz, A. (2020). El turismo en el mundo - Datos estadísticos. Statista website:",link:"https://es.statista.com/temas/3612/el-turismo-en-el-mundo/#:~:text=En%202019%2C%20seg%C3%BAn%20datos%20de,parte%20de%20la%20poblaci%C3%B3n%20mundial"},{referencia:"Colombia. (s.f.). <i>Esta es Colombia</i> [video]. YouTube",link:"https://www.youtube.com/watch?v=mLuPSlwS5w8"},{referencia:"Congreso de la República. (26 de julio de 1996).  Ley 300 de 1996. Por la cual se expide la Ley General de Turismo y se dictan otras disposiciones.",link:"https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8634"},{referencia:"Congreso de Colombia. (22 de noviembre de 2006). Ley 1101 de 2006. Por la cual se modifica la Ley 300 de 1996 - Ley General de Turismo y se dictan otras disposiciones"},{referencia:"Congreso de la república. (10 de Julio de 2012). Ley 1558 de 2012. Por la cual se modifica la Ley 300 de 1996 -Ley General de Turismo, la Ley 1101 de 2006 y se dictan otras disposiciones. ",link:"https://www.redjurista.com/Documents/ley_1558_de_2012_congreso_de_la_republica.aspx#/"},{referencia:"Congreso de Colombia. (31 de diciembre de 2020). Ley 2068 de 2020. Por la cual se modifica la Ley General de Turismo y se dictan otras disposiciones.",link:"https://www.redjurista.com/Documents/ley_2068_de_2020_.aspx#/"},{referencia:"Cravero. (2020). <i>Un mar de 7 colores y 7 razones más para viajar a San Andrés.</i>",link:"https://intriper.com/lectura/un-mar-de-7-colores-y-7-razones-mas-para-viajar-a-san-andres/"},{referencia:"Organización Mundial de Turismo. (2019). <i>El turismo internacional sigue adelantando a la economía global.</i>",link:"https://www.unwto.org/es/el-turismo-mundial-consolida-su-crecimiento-en-2019"},{referencia:"Organización Mundial de Turismo. (s.f). Introducción al turismo.",link:"http://www.utntyh.com/wp-content/uploads/2011/09/INTRODUCCION-AL-TURISMO-OMT.pdf"},{referencia:"Unwto. (s.f). <i>Glosario de términos de turismo.</i>",link:"https://www.unwto.org/es/glosario-terminos-turisticos"}],glosario:[{termino:"Transporte aéreo",significado:"Es el servicio de trasladar de un lugar a otro, de pasajeros o mercancías, mediante la utilización de aeronaves."},{termino:"Turismo",significado:"Se refiere a la actividad de los visitantes."},{termino:"Turismo interior",significado:"Engloba el turismo interno y el turismo receptor, a saber, las actividades realizadas por los visitantes residentes y no residentes en el país de referencia, como parte de sus viajes turísticos internos o internacionales."},{termino:"Turismo internacional",significado:"Incluye el turismo receptor y el turismo emisor, es decir, las actividades realizadas por los visitantes residentes fuera del país de referencia, como parte de sus viajes turísticos o emisores, y las actividades realizadas por los visitantes no residentes en el país de referencia, como parte de sus viajes turísticos receptores."},{termino:"Viajes/viajero",significado:"El término “viaje” designa la actividad de los viajeros. Un viajero es toda persona que se desplaza entre dos lugares geográficos distintos por cualquier motivo y duración."},{termino:"Wanderlust",significado:"Necesidad de viajar sin ninguna razón particular."}],complementario:[{texto:"Geografía turística nacional: Colombia. (s.f.). Esta es <i>Colombia </i> [video].",tipo:"video",link:"https://www.youtube.com/watch?v=mLuPSlwS5w8"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Claudia Ávila Ramírez",cargo:"Experta temática",centro:"Centro Nacional de Hotelería Turismo y Alimentos - Regional Distrito Capital"},{nombre:"Lida Guanumen Riaño",cargo:"Experta temática de apoyo",centro:"Centro Nacional de Hotelería Turismo y Alimentos - Regional Distrito Capital"},{nombre:"Dayra Maritza Paz Calderón",cargo:"Diseñadora y evaluadora instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Sandra Patricia  Hoyos Sepúlveda",cargo:"Revisión y corrección de estilo",centro:"Centro para la Industria de la Comunicación Gráfica\tFebrero de 2021"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Jorge Armando Villamizar Moreno",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Santander"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nelson Iván Vera Briceño",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrés Felipe Herrera Roldan",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ángela María Maldonado Jaime",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jessica Moreno Realpe",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Luis Fabian Robles Méndez",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andrés Mauricio Santaella Ochoa",cargo:"Soporte Front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yuli Marcela Gómez Tarazona ",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var y=n("9224");o["a"].prototype.$package=y,new o["a"]({router:h,store:g["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ae0a:function(e,a,n){e.exports=n.p+"img/banner-princiapal.df6a60a4.svg"}});
//# sourceMappingURL=app.8e1f1da5.js.map