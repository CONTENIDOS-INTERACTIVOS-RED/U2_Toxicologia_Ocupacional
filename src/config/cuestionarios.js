export default {
  tema3: {
    tema: '3. Valores DL50 y TLV',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre los Valores Límite Permisibles, DL50 y TLV en el ambiente laboral.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál es la función principal de los Valores Límite Permisibles (VLP) en el ambiente laboral?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Garantizar la productividad de los trabajadores.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto:
              'Establecer concentraciones seguras de sustancias para prevenir efectos adversos en la salud.',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Sustituir equipos de protección personal.',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Eliminar por completo los riesgos laborales.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Los VLP establecen concentraciones seguras de sustancias para prevenir efectos adversos en la salud.',
        mensaje_incorrecto:
          'Incorrecto. Los VLP establecen concentraciones seguras de sustancias para prevenir efectos adversos en la salud.',
      },
      {
        id: 2,
        texto: '¿Qué representa el valor DL50 en toxicología?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'El valor mínimo que provoca una alergia.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto:
              'La dosis que causa la muerte al 50 % de una población animal expuesta.',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'La cantidad máxima de sustancia permitida por día.',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'El límite biológico aceptado en humanos.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! El DL50 representa la dosis que causa la muerte al 50 % de una población animal expuesta.',
        mensaje_incorrecto:
          'Incorrecto. El DL50 representa la dosis que causa la muerte al 50 % de una población animal expuesta.',
      },
      {
        id: 3,
        texto:
          '¿Cuál de los siguientes organismos establece los TLV (Threshold Limit Values)?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'OSHA',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'NIOSH',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'ACGIH',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'EPA',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La ACGIH (American Conference of Governmental Industrial Hygienists) establece los TLV.',
        mensaje_incorrecto:
          'Incorrecto. La ACGIH (American Conference of Governmental Industrial Hygienists) establece los TLV.',
      },
      {
        id: 4,
        texto: '¿Qué tipo de exposición cubre el TLV-TWA?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Exposición máxima instantánea',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto:
              'Exposición promedio ponderada durante una jornada laboral de 8 horas',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Exposición para 15 minutos',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Exposición biológica en sangre',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! El TLV-TWA cubre la exposición promedio ponderada durante una jornada laboral de 8 horas.',
        mensaje_incorrecto:
          'Incorrecto. El TLV-TWA cubre la exposición promedio ponderada durante una jornada laboral de 8 horas.',
      },
      {
        id: 5,
        texto: '¿Cuál es una limitación del DL50 como indicador toxicológico?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Es costoso de aplicar.',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Solo se puede aplicar en humanos.',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'No considera efectos subletales ni crónicos.',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'No se usa en entornos laborales.',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Una limitación del DL50 es que no considera efectos subletales ni crónicos.',
        mensaje_incorrecto:
          'Incorrecto. Una limitación del DL50 es que no considera efectos subletales ni crónicos.',
      },
    ],
  },
}
