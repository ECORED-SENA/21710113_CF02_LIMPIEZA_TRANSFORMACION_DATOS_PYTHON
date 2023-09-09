<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p Existen diversos medios por los cuales una empresa puede acceder a diferentes tipos de información, pues estos se han convertido en el insumo principal para la toma de decisiones, la planeación de procesos y la ejecución de tareas. En este orden de ideas, se debe tener claro que existen diferentes fuentes y distintos tipos de datos que pueden influir en el resultado del análisis.
    p Desde esta perspectiva, es fundamental conocer todos aquellos elementos que permiten seleccionar la información, categorizarla, limpiarla y transformarla, con el fin de que su óptimo manejo permita el alcance de los objetivos y requerimientos del negocio.
    p.mb-5 Una breve revisión de los temas vistos se encuentra en el siguiente esquema:

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La depuración de datos consta de procesos de limpieza y transformación para realizar, al final, un análisis efectivo de datos para tomar decisiones acertadas..")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
