export default {
  global: {
    componenteFormativo: 'Depurando los datos',
    descripcionCurso:
      'En este componente formativo, se describe la importancia de la limpieza y transformación de los datos, además, se dan a conocer los pasos necesarios para realizar estos procesos; por otro lado, se reconocerán los comandos de las principales librerías para el análisis y manipulación de los datos del lenguaje de programación Python.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Limpieza de los datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Describir los datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Datos nulos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Imputación de valores nulos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Datos sucios',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Datos atípicos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Transformación de los datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Nuevas columnas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Filtrado',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Agrupación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Columnas <em>dummy</em>',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Discretización o <em>Binning</em>',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Escalamiento',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: '1. Limpieza de Datos',
      referencia:
        'Torres, A. (2021). <em>Limpieza de datos en Pandas: Explicado con ejemplos. freeCodeCamp</em>.',
      tipo: 'Página Web',
      link:
        'https://www.freecodecamp.org/espanol/news/limpieza-de-datos-en-pandas-explicado-con-ejemplos/',
    },
    {
      tema: '1. Limpieza de Datos',
      referencia:
        'Skills For Industry. (2021). <em>Python desde cero: Limpieza de Datos</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rOzxoJYoWj8',
    },
    {
      tema: '2. Transformación de los datos',
      referencia:
        'McKinney, W. y Pandas Development Team. (2022). <em>Pandas: powerful Python data analysis toolkit. Release 1.4.2.</em> Pandas.',
      tipo: 'PDF',
      link: 'https://pandas.pydata.org/pandas-docs/version/1.4.2/pandas.pdf',
    },
    {
      tema: '2.3. Agrupación',
      referencia:
        'InteractiveChaos. (2022). <em>Agrupaciones en dataframes</em>.',
      tipo: 'Página Web',
      link: 'https://pandas.pydata.org/pandas-docs/version/1.4.2/pandas.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Tipo de dato',
      significado:
        'espacio en memoria que especifica una restricción, por ejemplo, <em>int64, float64, object, bool</em>.',
    },
    {
      termino: 'Atípico',
      significado:
        'valor que no corresponde a un conjunto de valores definidos.',
    },
    {
      termino: '<em>Dummy</em>',
      significado:
        'variable ficticia utilizada para convertir valores categóricos a numéricos.',
    },
    {
      termino: 'Escala',
      significado: 'valores definidos por un valor mínimo o máximo.',
    },
    {
      termino: 'Imputación',
      significado:
        'reemplazar registros vacíos mediante técnicas como valor fijo, promedio, k vecinos entre otros.',
    },
    {
      termino: 'Valores nulos',
      significado:
        'ausencia de información en algún registro de los campos de una colección de datos.',
    },
    {
      termino: 'Filtrado',
      significado:
        'acción realizada para obtener información detallada, clasificar o agrupar.',
    },
    {
      termino: 'Agrupar',
      significado:
        'acción utilizada para unir por rangos que permitan entender mejor la información.',
    },
  ],
  referencias: [
    {
      referencia: 'González, R. (s. f.). <em>Python para todos</em>.',
      link:
        'https://persoal.citius.usc.es/eva.cernadas/informaticaparacientificos/material/libros/Python%20para%20todos.pdf',
    },
    {
      referencia:
        'López, L. (2021). <em>Limpieza de datos con Python</em>. Medium.',
      link:
        'https://lauralpezb.medium.com/limpieza-de-datos-con-python-48d436ca9ace',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC]. (2018). <em>Herramientas de analítica para la explotación de datos</em>.',
      link:
        'https://herramientas.datos.gov.co/sites/default/files/2020-11/Inventario%20herramientas%20anal%C3%ADtica_0.pdf',
    },
    {
      referencia:
        'Rodríguez, S. y Rivera, A. (2018). <em>La importancia de la limpieza de datos en Big Data</em>.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rónald Alexánder Vacca Ascanio',
          cargo: 'Experto Temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Julián Ramirez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
