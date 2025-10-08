<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Toxicología industrial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Los valores límites permisibles (VLP), son parámetros fundamentales en el campo de la higiene industrial y la toxicología ocupacional. Se definen como las concentraciones máximas de una sustancia química, agente biológico o físico a las que un trabajador puede estar expuesto durante un período determinado, generalmente una jornada laboral de 8 horas diarias y 40 horas semanales, sin que se produzcan efectos adversos significativos en su salud. Estos valores sirven como referencia en la elaboración de normativas, estándares y programas de prevención de riesgos químicos en el lugar de trabajo, permitiendo la protección de la salud de los empleados y promoviendo ambientes laborales seguros y saludables.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left").mb-4
          p(data-aos="fade-left") Además, los VLP son utilizados como herramientas de monitoreo y control en los procesos industriales, facilitando la identificación de niveles de exposición que requieren medidas correctivas o preventivas. La aplicación de estos límites también fomenta una cultura de seguridad, sensibilizando a empleadores y trabajadores sobre la importancia de manejar adecuadamente las sustancias peligrosas y de adoptar prácticas seguras en sus actividades diarias.

          figure.justify-content-end.d-flex
            img(src="@/assets/curso/intro/2.svg" data-aos="zoom-in", style="max-width: 104px")
    


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=67406" target="_blank" rel="noopener noreferrer") Ministerio del Trabajo. (2015). Decreto 1072 de 2015, por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Diario Oficial No. 49.523. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.elsevier.com/es-es" target="_blank" rel="noopener noreferrer") Guyton, A. C., & Hall, J. E. (2021). Textbook of Medical Physiology (14th ed.). Elsevier.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=UoDykAYX7kU" target="_blank" rel="noopener noreferrer") IMQ Prevención. (2021, 21 de junio). Webinar. Valoración de exposición a sílice cristalina respirable y sus consecuencias en la salud [Vídeo]. YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
