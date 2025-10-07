<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Historia de los valores límites permisibles'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    p(data-aos="fade-left") La historia de los valores límites permisibles, está estrechamente relacionada con el desarrollo de la ciencia de la salud ocupacional, la protección ambiental y la regulación de riesgos laborales y ambientales. A continuación, te presento un resumen de su evolución:

    .row.align-items-start.mb-5
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Inicios y antecedentes (siglo XIX y principios del XX)")
            p Durante los siglos XIX y principios del XX, con el avance de la industrialización, comenzaron a registrarse problemas de salud relacionados con la exposición a sustancias químicas, polvo, ruido, entre otros. Sin embargo, en esa época, no existían regulaciones formales ni valores establecidos, para limitar dichas exposiciones.
    
          .div(titulo="Primera legislación y normalización (años 1920-1950)")
            p Con el aumento de accidentes laborales y enfermedades profesionales, algunos países comenzaron a establecer regulaciones mínimas. En 1930, se crearon las primeras leyes laborales en Estados Unidos, incluyendo límites para ciertas sustancias químicas en ambientes laborales, aunque estos eran muy básicos.
    
          .div(titulo="Desarrollo de estándares científicos (años 1950-1970)")
            p La ciencia de la toxicología y la medicina laboral avanzó, permitiendo determinar dosis seguras y niveles de exposición que no causaran efectos adversos. Se establecieron los primeros valores límite permisibles (VLP) en diferentes países, basados en estudios científicos que identificaban niveles seguros de exposición.
    
          .div(titulo="Organización internacional y armonización (años 1970-1990)")
            p Organizaciones como la Organización Internacional del Trabajo (OIT) y la Organización Mundial de la Salud (OMS), comenzaron a desarrollar recomendaciones y guías internacionales. La creación de organismos como la American Conference of Governmental Industrial Hygienists (ACGIH) también fue clave, introduciendo los límites umbral (TLV) y valores límite de exposición (PEL).
    
          .div(titulo="Estándares modernos y regulación actual (años 1990 en adelante)")
            p Hoy en día, los valores límites permisibles son considerados instrumentos claves en la protección de la salud y el medio ambiente. Se actualizan periódicamente mediante revisiones científicas, y su establecimiento implica evaluaciones de riesgo, considerando diferentes factores, como la duración de la exposición, la susceptibilidad de la población y las nuevas evidencias científicas.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/1.png", alt="").mb-4.mb-lg-0
    
          
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La historia de los valores límites permisibles, refleja un proceso de maduración científica y regulatoria que ha permitido establecer niveles seguros de exposición a agentes químicos, físicos y biológicos en ambientes laborales y ambientales, con el objetivo de proteger la salud humana y el entorno.


    
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Fundamentos y objetivos de los VLP


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 El propósito principal de establecer VLP, es proteger la salud de los trabajadores, tanto a corto como a largo plazo. La toxicidad de las sustancias químicas está influenciada por múltiples factores, como la dosis, la duración y la frecuencia de la exposición, además de las características individuales de cada trabajador, incluyendo edad, estado de salud, susceptibilidad genética, entre otros. Los VLP representan un límite de seguridad diseñado para la mayoría de la población laboral, aunque no garantizan protección absoluta en individuos hipersensibles o en situaciones de exposición combinada a múltiples agentes.
    
        .bg-color-4.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos valores se establecen en base a revisiones científicas exhaustivas, considerando datos epidemiológicos, estudios toxicológicos y la experiencia clínica, con el fin de determinar niveles que minimicen los riesgos para la salud. La implementación eficaz de los VLP requiere de una vigilancia continua y actualización periódica, en respuesta a nuevos conocimientos científicos y cambios en las condiciones laborales. En definitiva, los VLP constituyen una herramienta esencial en la gestión integral de riesgos laborales, promoviendo ambientes de trabajo seguros y contribuyendo a la prevención de enfermedades profesionales, relacionadas con exposiciones químicas. 
    
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Organismos que establecen los TLV

    .row.mb-5
      .col-lg-8
        .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 Existen diversas entidades tanto a nivel internacional como nacional, que son responsables de definir, establecer y actualizar los Valores Límite de Exposición (VLP) para diferentes agentes químicos y biológicos en ambientes laborales. Estas entidades trabajan en conjunto para garantizar la protección de la salud de los trabajadores mediante la creación de normativas, recomendaciones y guías técnicas que permitan controlar y minimizar los riesgos asociados a la exposición en el entorno laboral. 
        
        p(data-aos="fade-left") A continuación, se destacan las principales instituciones y su papel en la definición de los VLP:
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in").mb-4.mb-lg-0


    .bg-full-width.bg-fondo-slider.mb-0
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-lg-1
              h3 ACGIH (American Conference of Governmental Industrial Hygienists)
              p Es una organización no gubernamental que desarrolla los TLV (Threshold Limit Values), que son límites de exposición considerados como recomendaciones para proteger la salud de los trabajadores. Los TLV de la ACGIH son ampliamente reconocidos a nivel mundial y sirven como referencia técnica para la evaluación y control de riesgos laborales, aunque no tienen carácter regulatorio. La ACGIH actualiza periódicamente estos límites en función de la evidencia científica disponible, considerando aspectos como la toxicidad, la dosis, el tiempo de exposición y los efectos adversos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7.order-lg-1
              h3 OSHA (Occupational Safety and Health Administration)
              p Es la agencia del gobierno de Estados Unidos responsable de establecer y hacer cumplir las normas de seguridad y salud en el trabajo. OSHA establece los PEL (Permissible Exposure Limits), que son límites regulados y obligatorios para los empleadores en EE. UU. Estos límites buscan prevenir enfermedades y lesiones relacionadas con la exposición a los agentes peligrosos en el lugar de trabajo y están respaldados por regulaciones legales que pueden derivar en sanciones, en caso de incumplimiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7.order-lg-1
              h3 NIOSH (National Institute for Occupational Safety and Health)
              p Es un Instituto Federal de Estados Unidos, dedicado a la investigación y recomendación en materia de salud ocupacional. Publica los REL (Recommended Exposure Limits), que son límites de exposición recomendados basados en evidencia científica y consideraciones de protección a largo plazo. Aunque no tienen carácter obligatorio, los REL sirven como guías técnicas para empleadores, profesionales y reguladores, promoviendo prácticas seguras y promoviendo la protección de la salud laboral.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-lg-1
              h3 OIT (Organización Internacional del Trabajo)
              p Es una agencia de las Naciones Unidas que fomenta normas internacionales en materia de trabajo y condiciones laborales justas. La OIT promueve recomendaciones y directrices internacionales para armonizar las normativas nacionales y proteger la salud y seguridad de los trabajadores en todo el mundo, fomentando la cooperación internacional y el intercambio de buenas prácticas.
    
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 En el contexto de Colombia, los VLP están regulados principalmente a través de las normativas del Ministerio de Trabajo y el Decreto 1072 del 2015. Estas regulaciones establecen los límites y medidas preventivas que deben adoptar los empleadores para garantizar un ambiente laboral seguro y saludable, alineándose con las recomendaciones internacionales y adaptándolas a las condiciones locales.

    












    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/102927 " target="_blank" rel="noopener noreferrer") Mastandrea, C. (2005). Hidrocarburos aromáticos policíclicos. Riesgos para la salud y marcadores biológicos: ( ed.). Scielo Argentina. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/40705" target="_blank" rel="noopener noreferrer") Martínez, R. R. Jaramillo Juárez, F. (Coord.) & Rincón Sánchez, A. R. (Coord.). (2009). Toxicología ambiental: ( ed.). Universidad Autónoma de Aguascalientes.  
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.aetox.es/  " target="_blank" rel="noopener noreferrer") Asociación Española de Toxicología  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ASSxU-GKqn4" target="_blank" rel="noopener noreferrer") Canal UGT - UGT de Catalunya. (2018, 22 de octubre). Exposición a contaminantes químicos [Vídeo]. YouTube.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
