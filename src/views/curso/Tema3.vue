<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Valores DL50 y TLV'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    p(data-aos="fade-left") Para conocer sobre esta temática, lo invitamos a ver el siguiente video.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Jbo0TeJdDYs?si=D1Gh1jJPi6p1K5Fp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .row.align-items-center.mb-5
      .col-auto
        img(src="@/assets/bullets/1.svg", style="max-width: 90px").mx-auto
      .col
        h2(data-aos="fade-left").mb-0 Clasificación de los Valores Límites Permisibles

    p(data-aos="fade-left").mb-5 La organización y clasificación de los VLP por parte de instituciones como la ACGIH, permiten una evaluación más precisa del riesgo y una adecuada implementación de medidas preventivas. La clasificación se realiza en función del período y la forma en que los agentes peligrosos afectan al trabajador, distinguiéndose principalmente los siguientes:


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/1.png")
            .col-lg-7.order-lg-1
              h5 V-TWA (Time-Weighted Average)
              p Es el límite de concentración al que el trabajador puede estar expuesto en promedio, durante una jornada laboral estándar de 8 horas diarias y 40 horas semanales, sin que exista riesgo de efectos adversos. Este valor tiene en cuenta la exposición continua y busca proteger contra efectos crónicos o acumulativos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/2.png")
            .col-lg-7.order-lg-1
              h5 TLV-STEL (Short-Term Exposure Limit)
              p Es el límite máximo permisible para exposiciones de corta duración, generalmente de 15 minutos, que no debe ser superado en ningún momento. Este límite busca prevenir efectos agudos, como irritaciones o daños en tejidos, que puedan ocurrir en períodos cortos pero intensos de exposición.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7.order-lg-1
              h5 TLV-C (Ceiling)
              p Es la concentración que en ningún momento debe ser superada, incluso instantáneamente. Este límite es especialmente importante en casos de agentes muy peligrosos o irritantes, donde una exposición momentánea puede causar daños inmediatos o efectos graves.


    .row.mb-5
      .col-lg-8
        .bg-color-8.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además de estos límites para agentes químicos, existen VLP biológicos, conocidos como BEIs (Biological Exposure Indices), que se basan en el monitoreo de metabolitos, anticuerpos u otros marcadores biológicos en sangre, orina u otros fluidos corporales. Estos índices permiten evaluar la exposición interna del trabajador y la eficacia de las medidas preventivas, además de detectar exposiciones no evidentes mediante mediciones ambientales.
    
        p(data-aos="fade-left") La correcta clasificación y comprensión de estos límites son esenciales para diseñar estrategias de control, realizar monitoreos efectivos y asegurar que las condiciones laborales sean seguras y saludables, minimizando riesgos y promoviendo el bienestar de los trabajadores en diferentes sectores económicos.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
    

    .row.align-items-center.mb-5
      .col-auto
        img(src="@/assets/bullets/1.svg", style="max-width: 90px").mx-auto
      .col
        h2(data-aos="fade-left").mb-0 Valores límites permisibles en Colombia

    p(data-aos="fade-left").mb-5 En Colombia, los Valores Límite de Exposición (VLPs) para sustancias químicas en el ambiente laboral, están claramente definidos en diversos documentos técnicos y normativos que garantizan una regulación adecuada para la protección de la salud de los trabajadores. Estos documentos contienen listas actualizadas de sustancias peligrosas y los límites máximos permisibles de exposición, los cuales son revisados y ajustados periódicamente, para reflejar los avances científicos y tecnológicos en materia de salud ocupacional.


    .bg-full-width.bg-fondo-slider.mb-0
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-lg-1
              h3 Decreto 1072 del 2015
              p Unifica y actualiza la normativa en seguridad y salud en el trabajo en Colombia, incorpora en su marco regulatorio los límites de exposición recomendados por organizaciones internacionales, incluyendo los valores de referencia basados en la American Conference of Governmental Industrial Hygienists (ACGIH). De igual manera, la Resolución 2400 de 1979, establece parámetros específicos para diferentes sustancias químicas, sirviendo como referencia obligatoria para la evaluación y control en los ambientes laborales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-lg-1
              h3 Listados internacionales de TLV
              p Colombia adopta los listados internacionales de TLV (Threshold Limit Values), que son estándares reconocidos globalmente y utilizados como guías en la evaluación de riesgos ocupacionales. La adopción de estos valores permite armonizar las prácticas nacionales con las mejores prácticas internacionales, facilitando una protección efectiva de los trabajadores frente a exposiciones peligrosas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7.order-lg-1
              h3 Aseguradoras de Riesgos Laborales (ARL)
              p Desempeñan un papel fundamental en la implementación de estos parámetros normativos. Utilizan los VLP como base para diseñar y ejecutar programas de vigilancia ambiental y ocupacional, que incluyen la monitorización periódica de las condiciones en los lugares de trabajo, la identificación de fuentes de exposición, y la evaluación continua de los riesgos. Asimismo, las ARL establecen medidas de control, que abarcan desde la implementación de controles de ingeniería (como sistemas de ventilación y extracción), el uso adecuado de equipos de protección personal (EPP), hasta la capacitación constante de los trabajadores en prácticas seguras y en el manejo correcto de sustancias peligrosas
    


    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/9.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 En Colombia existe un marco normativo robusto que define los VLP a través de documentos técnicos y normativos, incorporando valores internacionales confiables, y que es aplicado de manera efectiva por las ARL para promover ambientes laborales seguros y saludables.


    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Relación entre DL50 y TLV

    p(data-aos="fade-left").mb-5 La relación entre DL50 y TLV es fundamental para entender los diferentes aspectos del riesgo químico y la protección de la salud, tanto en entornos laborales como en exposiciones ambientales. Aunque estos dos conceptos evalúan diferentes dimensiones de la toxicidad, su análisis conjunto permite una visión más completa del peligro que representan ciertas sustancias. 
    
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-6.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema3/10.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center DL50
            p.mb-0 Al medir la dosis letal en un período corto, el DL50 proporciona información sobre la toxicidad aguda y la cantidad de sustancia que puede causar daño o muerte en un organismo en una sola exposición.
      .col-lg-6.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema3/11.png" alt="")
          .custom-image-card__text.p-4
            h5.mb-2.text-center TLV
            p.mb-0 El TLV (Límite de Exposición Permitido) o TLV-TWA (Valor TWA o promedio ponderado en el tiempo), se centra en la exposición prolongada y en niveles considerados seguros para los trabajadores durante su jornada laboral, minimizando los efectos adversos a largo plazo.



    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Mientras el DL50 se obtiene a partir de estudios experimentales controlados en animales, que permiten determinar la dosis que causa la muerte en la mitad de los sujetos de prueba, los TLV se derivan de una revisión exhaustiva de datos toxicológicos, epidemiológicos y clínicos en humanos y animales. Esta diferencia en el enfoque metodológico refleja la finalidad de cada medición: el DL50 es una medida de la toxicidad aguda y de la dosis que puede ser fatal, mientras que los TLV están diseñados para proteger la salud en exposiciones continuas o repetidas, estableciendo límites seguros para la exposición ocupacional (Stellman, 2012).
    

        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 Estos conceptos, aunque diferentes, se complementan en la evaluación del riesgo químico. Por ejemplo, una sustancia con un DL50 muy bajo indica que, incluso una pequeña cantidad, puede ser mortal, sugiriendo que su TLV debería ser extremadamente conservador para evitar intoxicaciones agudas.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p.mb-0 En cambio, sustancias con un DL50 alto, aunque puedan no ser letales en dosis elevadas, pueden presentar riesgos crónicos a niveles de exposición que superen su TLV, causando efectos a largo plazo como daños en órganos, cáncer o alteraciones genéticas.
    
        p(data-aos="fade-left").mb-4 A continuación, se presenta una tabla con algunos ejemplos de sustancias químicas frecuentes en entornos industriales y laborales, sus valores de DL50 oral en ratas y sus TLV-TWA, según la American Conference of Governmental Industrial Hygienists (ACGIH, 2023). Estos valores sirven como referencia para la evaluación del riesgo y la implementación de medidas preventivas en diferentes contextos:


    
    
    




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.fao.org " target="_blank" rel="noopener noreferrer") FAO. (2021). Pesticide residues in food and the environment. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/75988 " target="_blank" rel="noopener noreferrer") Jaramillo González, F. (2006). Toxicología básica: ( ed.). Universidad Autónoma de Aguascalientes.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ritsq.org/about/attc/ " target="_blank" rel="noopener noreferrer") Red Iberoamericana de Toxicología y Seguridad Química 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=7KsaT2tVoiI" target="_blank" rel="noopener noreferrer") ProtecCyL_CIM_BSE. (2023, 24 de noviembre). “Intoxicación por gas” [Vídeo]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
