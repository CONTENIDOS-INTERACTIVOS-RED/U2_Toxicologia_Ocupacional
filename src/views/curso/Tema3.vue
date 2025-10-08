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

    
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
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
        .bg-color-4.p-4(data-aos="fade-left").mb-4
          p.mb-0 En cambio, sustancias con un DL50 alto, aunque puedan no ser letales en dosis elevadas, pueden presentar riesgos crónicos a niveles de exposición que superen su TLV, causando efectos a largo plazo como daños en órganos, cáncer o alteraciones genéticas.
    
        p(data-aos="fade-left").mb-4 A continuación, se presenta una tabla con algunos ejemplos de sustancias químicas frecuentes en entornos industriales y laborales, sus valores de DL50 oral en ratas y sus TLV-TWA, según la American Conference of Governmental Industrial Hygienists (ACGIH, 2023). Estos valores sirven como referencia para la evaluación del riesgo y la implementación de medidas preventivas en diferentes contextos:


    .titulo-figura.mb-2
      h5 Tabla 1. 
      span Ejemplos
    
    .tabla-a.color-acento-contenido.mb-5
      table
        caption Leyenda de la tabla
        thead
          tr
            th.bg-color-tabla.text-white Sustancia
            th.bg-color-tabla.text-white DL50 (oral, rata)
            th.bg-color-tabla.text-white TLV-TWA
        tbody
          tr
            td Benceno
            td 930 mg/kg
            td 0,5 ppm
          tr
            td Formaldehído
            td 800 mg/kg
            td 0,1 ppm (Ceiling)
          tr
            td Plomo inorgánico
            td 450 mg/kg
            td 0,05 mg/m³
          tr
            td Sílice cristalina
            td >5000 mg/kg
            td 0,025 mg/m³
          tr
            td Monóxido de carbono
            td N/D
            td 25 ppm
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estos ejemplos ilustran cómo sustancias con diferentes grados de toxicidad aguda y efectos crónicos, requieren límites de exposición específicos para garantizar la protección de la salud humana en diferentes escenarios de exposición. La integración de los datos de DL50 y TLV, permite a los profesionales de la salud ocupacional y toxicólogos, diseñar protocolos de seguridad, control de riesgos y medidas preventivas eficaces, minimizando así los efectos adversos tanto a corto como a largo plazo. 


    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Métodos de determinación del DL50


    p(data-aos="fade-left").mb-5 La determinación de la Dosis Letal 50 (DL50), es un procedimiento toxicológico clásico utilizado para evaluar la toxicidad aguda de una sustancia. Se define como la dosis de una sustancia química que provoca la muerte del 50 % de una población de animales de prueba en condiciones experimentales controladas. Esta medida proporciona una estimación cuantitativa de la toxicidad de un compuesto y permite establecer comparaciones entre distintas sustancias.


    .bg-full-width.bg-fondo-slider.mb-0
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/15.png")
            .col-lg-7.order-lg-1
              p El método tradicional para determinar el DL50, implica el uso de modelos animales, siendo las ratas y los ratones las especies más frecuentemente empleadas, debido a su disponibilidad, tamaño, facilidad de manejo y similitudes fisiológicas con los humanos. La sustancia en estudio, se administra a los animales mediante diferentes vías de exposición, tales como la oral (por ingestión), dérmica (aplicación sobre la piel) o inhalatoria (exposición a vapores o aerosoles). La elección de la vía depende del uso previsto de la sustancia en humanos o del escenario de exposición más relevante.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/16.png")
            .col-lg-7.order-lg-1
              p Durante el ensayo, se aplican diferentes concentraciones de la sustancia a varios grupos de animales, manteniendo condiciones ambientales y nutricionales controladas. Los investigadores monitorean a los animales durante un período de tiempo determinado (habitualmente entre 24 y 96 horas) para observar los efectos tóxicos y registrar la mortalidad en cada grupo. Con los datos recopilados, se utiliza un análisis estadístico como el método de Probit o el de Spearman-Kärber para estimar la dosis que resulta letal para el 50 % de los individuos expuestos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/17.png")
            .col-lg-7.order-lg-1
              p Sin embargo, a pesar de su utilidad histórica, el uso del DL50 ha sido objeto de creciente controversia por consideraciones éticas relacionadas con el bienestar animal. La experimentación con animales conlleva sufrimiento y muerte, lo que ha llevado a una presión significativa por parte de la comunidad científica y de organizaciones defensoras de los derechos de los animales, para reducir, refinar y reemplazar estas pruebas (principio de las 3R: reducir, refinar y reemplazar).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/18.png")
            .col-lg-7.order-lg-1
              p En respuesta a estas preocupaciones, se están desarrollando y validando métodos alternativos que no requieren el uso de animales vivos. Entre ellos se incluyen los estudios in vitro, que emplean cultivos celulares humanos o animales, para evaluar la citotoxicidad, y los modelos in silico, que utilizan simulaciones por computadora basadas en estructuras químicas y bases de datos toxicológicas para predecir la toxicidad de las sustancias. Estas técnicas no solo reducen el sufrimiento animal, sino que también pueden ser más rápidas, económicas y, en algunos casos, ofrecer una mejor correlación con la toxicidad en humanos.
    
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/19.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 A medida que estas tecnologías avanzan, se espera que la dependencia de los métodos tradicionales para la determinación del DL50 disminuya, promoviendo un enfoque más ético, eficiente y científicamente robusto en la evaluación del riesgo químico (Guyton & Hall, 2021).


    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Métodos de determinación de los TLV (Threshold Limit Values)


    .row.mb-5
      .col-lg-8
        .bg-color-1.p-4.py-lg-5.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los Valores Límite Umbral (TLV, por sus siglas en inglés: Threshold Limit Values) representan concentraciones de sustancias químicas en el aire a las que se cree que los trabajadores pueden estar expuestos repetidamente, día tras día, durante su vida laboral, sin sufrir efectos adversos para la salud
    
        p(data-aos="fade-left") La determinación de estos valores es un proceso riguroso y altamente especializado, basado en una combinación de evidencia científica, juicio profesional y análisis crítico de múltiples fuentes de datos.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/21.png", data-aos="zoom-in")

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 A diferencia de otros indicadores de toxicidad, los TLV no se basan en un solo estudio, sino en una evaluación integrada de un conjunto amplio de información que proviene de diversas disciplinas, tales como toxicología, epidemiología, medicina ocupacional, fisiología, genética y bioestadística. 
    
        .bg-color-4.p-4.py-lg-5(data-aos="fade-left").mb-4
          p.mb-0 El objetivo es establecer límites seguros que protejan la salud de los trabajadores, teniendo en cuenta tanto los efectos inmediatos como los acumulativos de la exposición a lo largo del tiempo.


        p(data-aos="fade-left").mb-4 Principales componentes del proceso de determinación de TLV:
    
    
    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/infografia1.svg', alt='', style="max-width: 1109px;").mx-auto
    

              .bg-color-white.box-shadow.p-3(x="29%" y="34%" numero="+")
                h5 Estudios toxicológicos en animales y humanos 

                p Se analizan ensayos experimentales en animales de laboratorio (ratas, ratones, conejos, etc.) expuestos a diferentes concentraciones de sustancias químicas, para identificar efectos adversos sobre órganos específicos, toxicidad sistémica, neurotoxicidad y carcinogenicidad, entre otros. Estos datos se complementan con estudios clínicos controlados en humanos, cuando están disponibles, y observaciones derivadas de la práctica médica y la medicina ocupacional.
    

              .bg-color-white.box-shadow.p-3(x="20%" y="57.5%" numero="+")
                h5 Datos epidemiológicos de exposiciones laborales. 

                p Los estudios epidemiológicos en poblaciones trabajadoras expuestas a químicos específicos constituyen una fuente clave para evaluar los efectos reales de la exposición crónica en condiciones de trabajo. Estos estudios permiten detectar relaciones entre la exposición y la aparición de enfermedades respiratorias, dérmicas, neurológicas o cáncer, así como identificar factores de riesgo ocupacionales.
    

              .bg-color-white.box-shadow.p-3(x="59%" y="6%" numero="+")
                h5 Evaluación de efectos crónicos, subcrónicos y reproductivos

                p Se consideran los efectos a corto, mediano y largo plazo, incluyendo toxicidad subcrónica (exposición repetida por semanas o meses) y crónica (años). También se presta especial atención a la toxicidad reproductiva y al desarrollo fetal, lo cual es crucial para proteger a trabajadores en edad reproductiva y a mujeres embarazadas.
    
              .bg-color-white.box-shadow.p-3(x="69%" y="35%" numero="+")
                h5 Consideración de factores modificadores individuales y poblacionales. 

                p Las diferencias biológicas entre individuos, como la edad, el sexo, el estado de salud, la presencia de enfermedades preexistentes, la nutrición, el consumo de medicamentos y la susceptibilidad genética, pueden influir en la respuesta a las sustancias tóxicas. Estos factores son considerados mediante la aplicación de márgenes de seguridad o factores de corrección en la definición de los TLV.
    
    

    .row.align-items-center.mb-5
      .col-auto
        img(src="@/assets/bullets/1.svg", style="max-width: 90px").mx-auto
      .col
        h2(data-aos="fade-left").mb-0 Proceso de revisión y actualización

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Los TLV son establecidos y actualizados por la American Conference of Governmental Industrial Hygienists (ACGIH), una organización científica reconocida internacionalmente. Este proceso no es estático: los TLV son revisados anualmente, con base en los nuevos descubrimientos científicos, desarrollos tecnológicos y cambios en la evidencia disponible sobre los efectos de las sustancias químicas.

    
        p(data-aos="fade-left").mb-4 La ACGIH publica anualmente una lista de TLV y BEI (Índices Biológicos de Exposición), acompañada de documentación técnica detallada que justifica cada valor propuesto. Este proceso implica una revisión exhaustiva de la literatura científica por parte de comités de expertos, audiencias públicas y la posibilidad de recibir comentarios de la comunidad científica, industrial y regulatoria antes de su adopción definitiva.
    
        .bg-color-8.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/23.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Aunque los TLV no son valores legalmente vinculantes en la mayoría de los países, sirven como referencia técnica esencial para el desarrollo de normativas nacionales, estándares de seguridad laboral y programas de prevención de riesgos químicos. Su uso es fundamental para establecer controles de ingeniería, seleccionar equipos de protección personal, diseñar planes de monitoreo ambiental y proteger la salud de los trabajadores en todos los sectores industriales. 
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/24.png", data-aos="zoom-in")
          

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Limitaciones del DL50 y TLV

    .row.mb-5
      .col-lg-9
        p(data-aos="fade-left") A pesar de su amplia utilización en toxicología y salud ocupacional, tanto el valor DL50 como los TLV presentan limitaciones importantes que deben ser reconocidas al momento de interpretar o aplicar estos parámetros en la evaluación del riesgo químico. Estas limitaciones pueden afectar la precisión y la aplicabilidad de las medidas preventivas, especialmente en escenarios complejos o en poblaciones vulnerables.
    
      .col-lg-3
        figure
          img(src="@/assets/curso/tema3/25.svg", data-aos="zoom-in")


    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/26.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="El DL50 no considera efectos subletales, crónicos ni mecanismos de toxicidad específicos")
            p La Dosis Letal 50 (DL50), fue diseñada como una herramienta para estimar la toxicidad aguda de una sustancia, es decir, la dosis que causa la muerte del 50 % de los animales de prueba en un corto período tras la exposición. Sin embargo, esta métrica no proporciona información sobre efectos subletales, tales como alteraciones hepáticas, neurotoxicidad, inmunosupresión o trastornos reproductivos que pueden ocurrir a dosis menores sin causar la muerte.
            p Además, el DL50 no refleja la toxicidad crónica, es decir, los efectos derivados de exposiciones prolongadas a dosis bajas, que son mucho más comunes en escenarios reales, especialmente en ambientes laborales o residenciales. Tampoco considera diferencias en los mecanismos de toxicidad entre especies, ni la variabilidad entre individuos humanos. Como resultado, basarse exclusivamente en el DL50 para evaluar el riesgo puede llevar a subestimaciones graves del peligro real de una sustancia.
    
          .div(titulo="Los TLV están diseñados para trabajadores adultos sanos y pueden no ser protectores para poblaciones sensibles")
            p Los Valores Límite Umbral (TLV) propuestos por la ACGIH, están diseñados con la premisa de proteger a la mayoría de los trabajadores sanos durante una jornada laboral estándar de 8 horas diarias, 5 días por semana. No están pensados para aplicarse en entornos no ocupacionales, ni tampoco ofrecen protección garantizada para grupos más vulnerables como niños, personas mayores, embarazadas, personas con enfermedades crónicas o trabajadores inmunocomprometidos.
            p Esto implica que los TLV pueden no ofrecer un margen de seguridad adecuado para ciertos sectores de la población, especialmente si están expuestos de forma continua fuera del contexto laboral (como en áreas residenciales cercanas a fuentes de emisión industrial).
    
          .div(titulo="No contemplan los efectos combinados de exposiciones múltiples")
            p Una de las limitaciones más críticas de los TLV y del DL50 es que se basan en la evaluación de sustancias individuales, ignorando la posibilidad de exposiciones combinadas a múltiples agentes químicos. En la práctica, especialmente en entornos industriales, los trabajadores están frecuentemente expuestos a mezclas complejas de productos químicos.
            p Estas combinaciones pueden dar lugar a efectos aditivos, sinérgicos o antagónicos que no se reflejan en los valores individuales de cada sustancia. Por ejemplo, dos solventes con toxicidad hepática moderada pueden, al combinarse, causar daño hepático grave, incluso si cada uno está presente en concentraciones por debajo de su TLV respectivo. Esta interacción entre sustancias complica la evaluación del riesgo y puede comprometer la eficacia de los límites establecidos.
    
          .div(titulo="Inconsistencias regulatorias a nivel internacional")
            p Otra limitación significativa radica en las diferencias entre los límites de exposición adoptados por distintas agencias y países. Por ejemplo, los valores establecidos por la ACGIH (EE. UU.), la OSHA (Administración de Seguridad y Salud Ocupacional), la Unión Europea, y otros organismos pueden variar sustancialmente para la misma sustancia.
            p Estas discrepancias reflejan no solo diferencias metodológicas y científicas, sino también influencias políticas, económicas y sociales en la elaboración de regulaciones. Esta falta de armonización internacional puede generar confusión, dificultar el comercio internacional de productos químicos, e incluso llevar a la aplicación de estándares menos protectores en regiones con normativas más laxas (OSHA, 2023).
    
    
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://pubchem.ncbi.nlm.nih.gov" target="_blank" rel="noopener noreferrer")  National Library of Medicine. (n.d.). PubChem compound database. U.S. National Institutes of Health.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://echa.europa.eu/information-on-chemicals" target="_blank" rel="noopener noreferrer") European Chemicals Agency. (n.d.). Information on chemicals.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=50wZfwmr2Gc" target="_blank" rel="noopener noreferrer") IMQ Prevención. (2021, 21 de junio). Webinar. Evaluación de exposición a los agentes químicos. Norma UNE-EN 689:2019 [Vídeo]. YouTube. 


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
// ===================================
// IMPORTS OBLIGATORIOS PARA ACTIVIDAD
// ===================================
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema3', // Cambiar X por número del tema (Tema1, Tema2, Tema3, etc.)

  // ===================================
  // COMPONENT REGISTRATION
  // ===================================
  components: {
    Actividad,
  },

  // ===================================
  // DATA CON CUESTIONARIO
  // ===================================
  data() {
    return {
      // IMPORTANTE: Cambiar 'temaX' por el tema correspondiente:
      // tema1 → cuestionarios.tema1
      // tema2 → cuestionarios.tema2
      // tema3 → cuestionarios.tema3
      cuestionario: cuestionarios.tema3,
    }
  },

  // ===================================
  // LIFECYCLE - AOS REFRESH OBLIGATORIO
  // ===================================
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
