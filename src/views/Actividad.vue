<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/Seleccion_Multiple.svg", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-contenido
          h2 Tipos de archivos
        p.mb-4 Identificar los principales comandos utilizados para limpieza y transformación de los datos
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Cuestionario
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/ad1/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/arrastrar-terminos.svg", alt="")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo.color-acento-contenido
          h2 Complete el comando
        p.mb-4 Escribir correctamente los comandos necesarios para la limpieza y la transformación de datos según los casos presentados. 
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Relación de términos
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/ad2/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece     
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
