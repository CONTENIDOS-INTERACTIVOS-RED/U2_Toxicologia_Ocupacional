export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Valores límites permisibles',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Toxicología industrial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Historia de los valores límites permisibles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Fundamentos y objetivos de los VLP',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Organismos que establecen los TLV',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Valores DL50 y TLV',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Relación entre DL50 y TLV',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Métodos de determinación del DL50',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Métodos de determinación de los TLV',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Limitaciones del DL50 y TLV',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'ACGIH. (2023). Threshold Limit Values for Chemical Substances and Physical Agents. American Conference of Governmental Industrial Hygienists.',
      link: 'https://www.acgih.org/science/tlv-bei-guidelines/',
    },
    {
      referencia:
        'OSHA. (2023). Chemical Hazards and Toxic Substances. Occupational Safety and Health Administration.',
      link: 'https://www.osha.gov/',
    },
    {
      referencia:
        'NIOSH. (2022). Pocket Guide to Chemical Hazards. National Institute for Occupational Safety and Health',
      link: 'https://www.cdc.gov/niosh/index.html',
    },
    {
      referencia:
        'Ministerio de Trabajo y Seguridad Social. (1979). Resolución 2400 de 1979, por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo. Diario Oficial No. 35.118.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=2713',
    },
  ],
  glosario: [
    {
      termino: 'ACGIH',
      significado:
        'Organización que establece los TLV como guía para la protección de la salud de los trabajadores.',
    },
    {
      termino: 'Agente químico',
      significado:
        'Sustancia que puede causar efectos adversos a la salud cuando se inhala, ingiere o entra en contacto con la piel.',
    },
    {
      termino: 'ARL',
      significado:
        'Aseguradoras de Riesgos Laborales responsables de implementar programas de vigilancia y control ocupacional.',
    },
    {
      termino: 'BEI',
      significado:
        'Índices Biológicos de Exposición que indican niveles de marcadores químicos en el cuerpo para evaluar la exposición interna.',
    },
    {
      termino: 'Control de riesgos',
      significado:
        'Conjunto de medidas técnicas, administrativas y de protección personal destinadas a prevenir la exposición a peligros laborales.',
    },
    {
      termino: 'DL50',
      significado:
        'Dosis de una sustancia que causa la muerte al 50 % de una población animal de prueba en condiciones experimentales.',
    },
    {
      termino: 'Efecto crónico',
      significado:
        'Daño a la salud que se manifiesta tras exposiciones repetidas a una sustancia durante un periodo prolongado.',
    },
    {
      termino: 'EPP',
      significado:
        'Equipos de Protección Personal que sirven para reducir la exposición directa a agentes peligrosos.',
    },
    {
      termino: 'Exposición ocupacional',
      significado:
        'Contacto directo o indirecto del trabajador con agentes físicos, químicos o biológicos en su ambiente laboral.',
    },
    {
      termino: 'Gestión del riesgo',
      significado:
        'Proceso sistemático para identificar, evaluar y controlar los peligros que pueden afectar la salud de los trabajadores.',
    },
    {
      termino: 'In silico',
      significado:
        'Modelos computacionales utilizados para predecir el comportamiento tóxico de sustancias químicas.',
    },
    {
      termino: 'In vitro',
      significado:
        'Estudios realizados fuera de organismos vivos, generalmente en cultivos celulares, para evaluar toxicidad.',
    },
    {
      termino: 'Monitoreo ambiental',
      significado:
        'Técnica de medición continua o periódica de contaminantes en el ambiente laboral.',
    },
    {
      termino: 'NIOSH',
      significado:
        'Instituto estadounidense que investiga y recomienda límites de exposición seguros, como los REL.',
    },
    {
      termino: 'OSHA',
      significado:
        'Agencia de EE.UU. que regula y fiscaliza los límites legales de exposición ocupacional (PEL).',
    },
    {
      termino: 'Prevención',
      significado:
        'Estrategias y acciones orientadas a evitar enfermedades o daños derivados de condiciones laborales peligrosas.',
    },
    {
      termino: 'TLV',
      significado:
        'Valores Límite Umbral que indican concentraciones ambientales seguras de sustancias químicas en el trabajo.',
    },
    {
      termino: 'TLV-C',
      significado:
        'Valor de exposición máxima que no debe ser superado en ningún momento.',
    },
    {
      termino: 'TLV-STEL',
      significado:
        'Límite de exposición permitido por corto tiempo (generalmente 15 minutos), para evitar efectos agudos.',
    },
    {
      termino: 'TLV-TWA',
      significado:
        'Promedio ponderado de concentración para una jornada de 8 horas, diseñado para prevenir efectos crónicos.',
    },
  ],
}
