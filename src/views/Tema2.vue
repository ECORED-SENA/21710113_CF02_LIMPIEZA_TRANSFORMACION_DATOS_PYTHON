<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span 2
      h1 Transformación de los datos
    
    .row.fondo1-t2.align-items-center.pt-5.mb-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          p.mb-4(data-aos="fade") La transformación de datos es el proceso de convertir datos crudos en un formato o estructura que se acomode mejor al objetivo del estudio.

          .col-lg-10.mb-5
            .bg-white.tarjeta.bg-shadow1.p-4
              .row.align-items-center.justify-content-evenly
                .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t2/img1.png' alt='')
                .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left")  
                  p.mb-0 #[b Por ejemplo,] se pueden transformar valores numéricos a categóricos, como las edades a #[em mayor de edad] o #[em menor de edad]. También se puede transformar un valor sin cambiar el tipo de dato, como lo sería pasar #[em Edad] a #[em Año de nacimiento].
          
          p.mb-5(data-aos="fade") Asimismo, los datos transformados pueden remplazar los datos que se encontraban en una columna o pueden ser colocados en nuevas columnas, como se aprecia en el siguiente ejemplo.

          .col-lg-10(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Tabla 1.] Ejemplo de transformación de datos
            .tabla-a.color-primario
              table
                thead
                  tr.bg-acento-contenido
                    th Datos original: Edad
                    th Nueva columna: Clasificación
                    th Nueva columna: Año de Nacimiento
                tbody.bg-10.text-center
                  tr
                    td 17
                    td Menor de edad
                    td 2005
                  tr
                    td 35
                    td Mayor de edad
                    td 1986


    p.mb-4(data-aos="fade") Si se presenta mucha variabilidad en los datos, estos pueden ser agrupados en rangos, por ejemplo, la edad puede que esté dispersa en edades de 1 a 80 años, por lo que serían muchas variables independientes sueltas, lo que dificulta un poco el análisis, por lo que se puede recurrir a crear rangos para edades, que vayan de 10 en 10. Y en vez de analizar 80 variables independientes, se analizarían 8.
    h5.mb-5(data-aos="fade")  Como se puede ver en el siguiente ejemplo, el objetivo es agrupar en un rango las edades pertenecientes a ese segmento:

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Tabla 2.] Rango de edades por segmento
        .tabla-a.color-primario
          table
            thead
              tr.bg-acento-contenido
                th Edades
                th Rango
                th Nombre Rango
            tbody.bg-10.text-center
              tr
                td 1, 3, 5, 6
                td Menor de edad
                td A
              tr
                td 12, 15
                td Mayor de edad
                td B
              tr
                td 25
                td 20-30
                td C
              tr
                td 31, 38, 39
                td 30-40
                td D
              tr
                td 42, 43
                td 40-50
                td E
              tr
                td 
                td 50-60
                td F
              tr
                td 62, 63, 65
                td 60-70
                td G
              tr
                td 79
                td 70-80
                td H

    .row.justify-content-center
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        p Desde la información base, se pueden crear muchas otras variables que contribuyan a realizar un análisis completo.
        .bg-9.p-4.mb-4
          p #[b Por ejemplo], si se tienen la cantidad y el valor que representan ventas de artículos, se puede crear una nueva variable multiplicándolas, para obtener el total de venta para cada registro. 
          p.mb-0 O también, en caso de discriminar un valor con base en el impuesto, pero solamente se cuenta con el total y se sabe el porcentaje de impuesto, se pueden realizar estos cálculos y ponerlos en nuevas columnas.
        p Son múltiples las acciones que se pueden realizar con la información base, la cual permite crear nuevas variables que facilitarán un mejor entendimiento de los datos.
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img2.svg' alt='')


    Separador

    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 2.1 Nuevas columnas

    p.mb-4(data-aos="fade") Son una forma de transformación de los datos iniciales, ya que, a partir de uno o varios campos, se puede crear una nueva columna, con información nueva; estas columnas nuevas dependen de los requerimientos que se haya solicitado.

    figure(data-aos="fade-down") 
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/prqBVe1DE3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Nuevas columnas


    Separador

    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 2.2 Filtrado

    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bg-4.h-100
          .row 
            .col-lg-4.col-6
              img(src='@/assets/curso/temas/t2/img3.svg' alt='')
            .col-lg-8.p-4.ps-lg-3
              h5 El filtrado de datos se utiliza cuando se desea retirar o clasificar, del conjunto de datos, aquellos registros que cumplan ciertas condiciones.      
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left") 
        .bg-8.p-4.h-100
          p Recuerde que esta variable fue construida anteriormente, en el apartado denominado nuevas columnas, desde el campo Modelo, cumpliendo con el filtro de clasificación, para el cual la condición era que, para modelos inferiores al año 2000, se guardaba una nueva etiqueta denominada Modelo Viejo, y para los superiores a ese año, el valor asignado fue Modelo Nuevo.

    h5.mb-4(data-aos="fade") Para realizar una gráfica que permita determinar el valor porcentual que representa cada una de estas etiquetas, se deben ejecutar las siguientes líneas de comando:

    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .br-12.bg-7.w-fit.px-4.py-2.mb-4.h-100.d-lg-flex.justify-content-center.flex-lg-column
          p.mb-lg-0.mb-1.t-c6 total_rango_modelo 
            span.tc-1 = 
            | df[‘ModeloTransformado’].
            span.tc-2 groupby 
            | (df[‘ModeloTransformado’]) .
            span.tc-2 count
            | () labels 
            pan.tc-1 = 
            | [“Modelo Nuevo”, “Modelo Viejo”]
          p.mb-0.t-c6 colors 
            span.tc-1 = 
            | sns.
            span.tc-2 color_palette
            | (‘Set2’)[
            span.tc-3 0
            | :
            span.tc-3 5
            | ] plt.
            span.tc-2 pie
            | (total_rango_modelo, 
            span.tc-5 labels 
            span.tc-1 =
            | labels , 
            span.tc-5 colors 
            span.tc-1 = 
            | colors, 
            span.tc-5 autopct
            span.tc-1 =
            | ‘
            span.tc-1 %
            | .
            span.tc-3 1
            | f
            span.tc-1 %%
            | ’) plt.
            span.tc-2 show
            | ( )
      .col-lg-5.col-md-7.mb-4.mb-lg-0(data-aos="fade-left") 
        img(src='@/assets/curso/temas/t2/img4.svg' alt='')

    h5.mb-4(data-aos="fade") Como vemos en la Figura 14, el resultado es la cantidad porcentual de automóviles nuevos y viejos.

    .row.align-items-center.mb-5
      .col-lg-7.col-md-7.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 14.] Gráfica porcentual variable ModeloTransformado
        img(src='@/assets/curso/temas/t2/fig14.png' alt='Gráfica, tipo torta, en la que se presenta que el modelo nuevo equivale al 58 % y el viejo, al 42 %.')
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left") 
        p Ese filtro de clasificación se utilizó para crear una nueva columna, que en estos momentos permite determinar porcentualmente el número de automóviles viejos y nuevos, continuando con el siguiente filtro que se utilizará para descartar información; por ejemplo, si solo se desea trabajar con los modelos que representan una mayor presencia, se tendría que dejar los registros que se identifiquen como modelo, nuevo ya que son el 58 % total de los datos.
        p Esto se puede lograr usando una lista de condicionales que responden si el auto es 
          b.bg-1 Modelo Nuevo o Modelo Viejo.
          |  Luego, esta lista de condicionales es pasada al comando #[em loc], el cual se encargará de devolver cada una de las posiciones donde, según la lista de condicionales, la condición haya sido verdadera.

    p.mb-4(data-aos="fade") Para obtener ese resultado, se debe ejecutar la siguiente línea de comandos, donde se debe determinar el filtro de registros que cumplan con el valor Modelo Nuevo de la columna ModeloTransformado.

    .br-12.bg-7.w-fit.px-4.py-2.mb-4.d-lg-block.d-none(data-aos="fade")
      span.t-c filtros
        span.tc-1 =
        | df[‘ModeloTransformado’]
        span.tc-1 ==
        | ‘Modelo Nuevo’
    .br-12.bg-7.w-fit.px-4.py-2.mb-4.d-lg-none.d-block(data-aos="fade")
      span.t-c filtros
        span.tc-1 =
        | df[‘ModeloTransformado’]
        span.tc-1 == 
        | ‘Modelo Nuevo’    

    p.mb-4(data-aos="fade") Y para descartar el resto de los datos, se debe ejecutar el filtro dentro de la colección de los datos de la siguiente manera.

    .br-12.bg-7.w-fit.px-4.py-2.mb-4(data-aos="fade")
      span.t-c df.loc[filtros] 

    .row.fondo2-t2.align-items-center.pt-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.mb-4

          .row.align-items-center
            .col-lg-7.col-md-7.mb-4.mb-lg-0(data-aos="fade-right")
              .titulo-sexto.color-acento-contenido.mb-3
                p.mb-0 #[b Figura 15.] Filtrando para descartar registros
              img(src='@/assets/curso/temas/t2/fig15.png' alt='Ejecución de comando para filtrar y descartar registros.')
            .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left") 
              p En la Figura 15, se muestra cómo, al filtrar los datos, se han dejado solo los registros que cumplen con la condición Modelo Nuevo, y también se observan los cambios en el total de los registros de la parte inferior de la imagen, pasando de 2004 a 1206.


          Separador

          #t_2_3
          .titulo-segundo.color-acento-contenido(data-aos="fade") 
            h2 2.3 Agrupación

          p.mb-4(data-aos="fade") La agrupación de datos se realiza cuando no es significativo el detalle de un registro sino su valor como grupo, ya sea su sumatoria o frecuencia. Esta se aplica para variables categóricas o variables numéricas no continuas. Al igual que con los casos anteriores, se va a utilizar como ejemplo el calcular el valor promedio por marca de auto en la tabla de vehículos, explicado a través del siguiente recurso:

          .tarjeta.bg-white.p-4.p-lg-5.mb-5(data-aos="fade-down") 
            PasosB.color-acento-botones
              .row.align-items-center.justify-content-center(titulo="")
                .col-lg-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/paso1.svg' alt='')
                .col-lg-6
                  p.mb-4 Lo primero que se debe hacer es usar la función #[em groupby] para agrupar los datos según la marca, y la función #[em mean], para calcular el valor promedio de los autos según marca. Para obtener el resultado descrito anteriormente, se deben ejecutar las siguientes líneas de comando.
                  .br-12.bg-7.w-fit.px-4.py-2.mb-4
                    p.mb-0.t-c6 marcas
                      span.tc-1 =
                      | df.
                      span.tc-2 groupby
                      | (
                      span.tc-5 by
                      span.tc-1 =
                      | ‘Marca’)’ 
                    p.mb-0.t-c6 marcas[‘Valor’].
                      spanspan.tc-2 mean
                      | ()
              .row.align-items-center.justify-content-center(titulo="")
                .col-lg-4.mb-4.mb-md-0
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 Valor medio de las marcas
                  img(src='@/assets/curso/temas/t2/fig1.png' alt='Ejecución del comando para calcular el promedio del valor de las marcas.')
                .col-lg-6
                  p Como se puede ver en la imagen, la función #[em #[b groupby]] recibe el nombre de la columna por la cual se van a agrupar los datos; luego, se toma la columna correspondiente al valor y se le calcula el promedio.
              .row.align-items-center.justify-content-center(titulo="")
                .col-lg-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/paso3.svg' alt='')
                .col-lg-6
                  p También se pueden agrupar valores numéricos, tanto discretos como continuos, en diferentes rangos. Para el siguiente ejemplo, se van a agrupar, por edades, en rangos de 10 años; para tal fin, se debe ejecutar el siguiente comando.
                  .br-12.bg-7.w-fit.px-4.py-2.mb-4.d-lg-block.d-none
                    p.mb-0.t-c6 df.
                      span.tc-2 groupby
                      | (pd.cut(df['Edad'],np.arange(0,101,10))).
                      span.tc-2 mean
                      | ()['Valor']
                  .br-12.bg-7.w-fit.px-3.py-2.mb-4.d-lg-none.d-block
                    p.mb-0.t-c6 df.
                      span.tc-2 groupby
                      | (pd.cut(df['Edad'],np.arange (0,101,10))).
                      span.tc-2 mean
                      | ()['Valor']
              .row.align-items-center.justify-content-center(titulo="")
                .col-lg-5.mb-4.mb-md-0
                  .titulo-sexto.color-acento-contenido.mb-3
                    p.mb-0 Agrupación por edades de rangos de 10 años
                  img(src='@/assets/curso/temas/t2/fig2.png' alt='Agrupación por edades en rangos de 10 años.')
                .col-lg-5
                  p Como se muestra en la imagen, se hace uso nuevamente de la función #[em groupby], pero en esta ocasión se hace en conjunto con la función #[em cut], que divide el conjunto de datos en rangos dados por la función #[em np.arange], la cual entrega valores entre 0 y 100, con un paso de 10.
              .row.align-items-center.justify-content-center(titulo="")
                .col-lg-4.mb-4.mb-md-0
                  img(src='@/assets/curso/temas/t2/paso4.svg' alt='')
                .col-lg-6 
                  p El resultado final es procesado por la función #[em mean], que se encarga de promediar los registros pertenecientes a cada  grupo. Es importante recordar que ya se han  realizado filtros anteriormente y solo se tienen edades desde los 15 a los 80 años, por lo que se ve que en los rangos de 0 a 10, 80 a 90 y 90 a 100 no existe información.
                  .bg-8.p-4
                    p.mb-0 Puede utilizar la agrupación para transformar los datos y obtener información general, que también le permita ir entendiendo mejor cada una de las variables con respecto a las demás.


    Separador

    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 2.4 Columnas <em>dummy</em>

    .row.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p Estas variables son datos ficticios que necesitan ser creados, ya que los algoritmos de entrenamiento o predicción solo trabajan con valores numéricos. En estos casos, se deben transformar los valores que sean categóricos a valores numéricos. Por ejemplo, si se usa la columna #[em Marca] y se desea transformar a numérica, se pueden crear columnas para cada marca, y luego asignar 1 si pertenece a esa marca o 0 si no pertenece.
        p Para entender un poco mejor, observe el siguiente cuadro, donde se tiene la variable #[em Género], con los valores #[em F] y #[em M] en la columna original; cuando se pasa a #[em dummies], se crearía una columna nueva para cada dato diferente, si este coincide, se coloca el número 1, de lo contrario, se coloca un 0.
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img5.svg' alt='El texto alternativo debe ser: Tablas que muestra cómo se traslada la información de la variable Género con valores F y M a columnas Dummies_F y Dummines_M.')

    h5.mb-4(data-aos="fade") Siguiendo con el ejemplo de la variable #[em Marca], se puede hacer usando el comando #[em get_dummies], para obtener una tabla donde se indica a qué marca pertenece el auto; para tal fin, se debe hacer uso del siguiente comando. (Véase Figura 16)

    .br-12.bg-7.w-fit.px-4.py-3.mb-4
      span.t-c dfdummy
        span.tc-1 =
        | pd.
        spam.tc-2 get_dummies
        | (df[‘Marca’], 
        span.tc-5 prefix
        span.tc-1 =
        | ‘Marca’) dfdumm

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 16.] Columnas #[em Dummy] según la marca
        img(src='@/assets/curso/temas/t2/fig16.png' alt='Tabla de registro según la marca.')
    
    p.mb-4(data-aos="fade") Luego, se toma esta tabla y se concatena a la tabla inicial, usando el comando #[em concat]. Para esto, se debe hacer uso de los siguientes comandos.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-8
        .br-12.bg-7.w-fit.px-4.py-3.mb-4
          span.t-c df
            span.tc-1 =
            | pd.
            span.tc-2 concat
            | ([df,dfdummy], 
            span.tc-5 axis
            span.tc-1 =
            span.tc-3 1
            | )df
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 17.] Columnas #[em dummy] concatenadas al conjunto de datos inicial
        img(src='@/assets/curso/temas/t2/fig17.png' alt='Captura de pantalla en la que se muestra cómo se concatena la tabla anterior con los datos iniciales.')

    p(data-aos="fade") Como se puede observar en la Figura 17, la cantidad de columnas aumentó a 65, de las cuales 55 son las columnas #[em dummy] que se generaron; es allí donde se debe pensar si es conveniente usar esta columna para el análisis de los datos; como siempre, todo dependerá de los requerimientos del negocio.
    h5.mb-4(data-aos="fade") Ahora, observe el mismo procedimiento, pero, esta vez, para la variable #[em Género]. El proceso es el mismo, solo debe cambiar por la columna #[em Género].

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-6
        .br-12.bg-7.w-fit.px-4.py-3.mb-4
          span.t-c dfdummy
            span.tc-1 = 
            | pd.
            span.tc-2 get_dummies
            | (df[‘Genero’], 
            span.tc-5 prefix
            span.tc-1 =
            | ‘Genero’) dfdummy

    p.mb-4(data-aos="fade") El resultado se puede ver en la Figura 18, donde se realiza la transformación de una variable categórica, como lo es el género, representado en F o M, a un valor numérico, de 0 donde no encuentre la coincidencia y 1 para cuando corresponda a la variable.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 18.] Columnas #[em Dummy] para el Género
        img(src='@/assets/curso/temas/t2/fig18.png' alt='Transformación de la variable Género a un valor numérico.')

    p(data-aos="fade") En este caso, se crearon dos columnas nuevas, lo que quiere decir que el número de columnas dependerá de la variabilidad que exista en cada una de las filas de las columnas categóricas que se quieran transformar a #[em dummy].


    Separador

    #t_2_5
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 2.5 Discretización o <em>Binning</em>

    p(data-aos="fade") El proceso de discretización corresponde a la transformación de una variable numérica en una categórica. Esta técnica se utiliza para reducir los efectos de los errores de pequeñas observaciones.
    p(data-aos="fade") Para comprender esta parte, se tiene una encuesta en la que se pregunta por el nivel de satisfacción, y el resultado es capturado de 1 a 5. Los resultados se necesitan agrupados de la siguiente manera:
    h5.mb-5(data-aos="fade") Los valores 0 y 1 se etiquetan como Muy bajo; el 2, Bajo; el 3, Medio; y 4 y 5, Alto. El resultado quedaría de la siguiente manera:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Tabla 3.] Discretización de datos
        .tabla-a.color-primario.tabla-4
          table
            tbody
              tr
                td.column-20 Respuesta
                td Variable discreta
              tr
                td 0
                td Muy bajo
              tr
                td 1
                td Muy bajo
              tr
                td 4
                td Alto
              tr
                td 3
                td Medio
              tr
                td 2
                td Bajo
              tr
                td 3
                td Medio
              tr
                td 4
                td Alto
              tr
                td 5
                td Alto
              tr
                td 2
                td Bajo
              tr
                td 1
                td Muy bajo

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-lg-10.mb-2
        .tarjeta.bg-8.p-3
          .row.align-items-center 
            .col-md-2.col-3.mb-3.mb-md-0
              img.px-lg-3(src='@/assets/curso/temas/t1/adv.svg' alt='')
            .col-md-10
              p.mb-0 Cuando existe mucha dispersión de los datos, es recomendable recurrir a la discretización, de forma que se permita un mejor entendimiento de ellos.

    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p Previamente, se utilizó este método en la creación de nuevas columnas, donde convertimos un valor numérico discreto, como es el año del modelo, a una variable categórica, como es #[em Modelo Nuevo] o #[em Modelo Viejo].
        p Otra forma de discretizar los datos es utilizando etiquetas que identifiquen rangos de ciertas variables, como lo sería #[em Menor de edad] y #[em Mayor de edad] para el campo #[em Edad]; los menores de 18 años tomarían la primera etiqueta, el resto, la segunda etiqueta. (Véase Figura 19)
        h5 Para realizar este procedimiento, ejecute las siguientes líneas de comando.
      .col-lg-6.col-md-6.mb-4.mb-lg-0(data-aos="fade-left") 
        img(src='@/assets/curso/temas/t2/img6.svg' alt='' )

    .br-12.bg-7.w-fit.px-4.py-3.mb-5(data-aos="fade")
      span.t-c df [‘EdadDiscreta’]
        span.tc-1 =
        | np.
        span.tc-2 where
        | (df[“Edad”]
        span.tc-1 <
        span.tc-3 18
        | ,”Menor de Edad”, “Mayor de Edad”) df.
        span.tc-2 head
        | ()

    .row.justify-content-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 19.] Discretización del campo Edad
        img(src='@/assets/curso/temas/t2/fig19.png' alt='Transformación de una variable numérica en una categórica; en este caso: mayor de edad o menor de edad.')

    p(data-aos="fade") La discretización de variables es muy útil en aprendizaje supervisado. El científico de datos puede decidir qué variables conviene que sean discretizadas antes de aplicar los modelos y cuáles pueden funcionar mejor de forma continua. Aquellas variables que puedan ser descritas, desde el punto de vista del algoritmo, en forma de intervalos son buenas candidatas a la discretización, es decir, aquellas que convenga describir en grupos (tales como bajo, medio y alto) podrían ser discretizadas.
    h5.mb-4(data-aos="fade") Para visualizar todas las variables discretas, se debe ejecutar el siguiente comando, que permitirá ver las columnas categóricas nuevas que se obtuvieron desde una variable numérica.

    .br-12.bg-7.w-fit.px-4.py-3.mb-4.d-lg-block.d-none(data-aos="fade")
      span.t-c df [ [‘ModeloTransformado’,’Rango_Edad’,’EdadDiscreta’]]
    .br-12.bg-7.w-fit.px-4.py-3.mb-4.d-lg-none.d-block(data-aos="fade")
      span.t-c df [ [‘ModeloTransformado’,’Rango_Edad’, ’EdadDiscreta’]]  

    p.mb-4 Este comando selecciona solo las columnas que se coloquen dentro de dobles corchetes. En este caso, se usa para visualizar las nuevas variables categóricas, pero puede ser utilizado para ver un conjunto de columnas cualquiera. 
      b (Véase Figura 20)

    .row.justify-content-center
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 20.] Variables discreta
        img.borde-img(src='@/assets/curso/temas/t2/fig20.jpg' alt='Ejemplo de columnas categóricas nuevas que se obtienen desde una variable numérica.')


    Separador

    #t_2_6
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 2.6 Escalamiento

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-5.col-md-6.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/img7.png' alt='')
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left") 
        p Algunos algoritmos diferencian la importancia de ciertas columnas con base en la escala que tengan sus valores para poder generar un resultado, es por esto que es importante que todos los datos estén dentro de un mismo rango y tengan una misma desviación media.
        p El método que se implementará funciona de la siguiente manera: por ejemplo, se tienen dos columnas con 10 datos, estos con diferentes valores; para el valor 1, se puede decir que son rangos para el precio de un artículo; mientras que para el valor 2, se establece la representación de las unidades vendidas; claramente existirá una amplia diferencia en sus rangos.
        p Para normalizar estos dos rangos, lo primero es determinar el valor máximo, que sería 1500 para la columna denominada valor 1, y 20, para la columna denominada valor 2. Posteriormente, se divide cada valor de la fila por el valor máximo, como se muestra a continuación.

    .row.fondo3-t2.align-items-center.pt-3.mb-3
      .col-lg-12.col-12.px-lg-5.px-4

        .row.justify-content-center.mb-5
          .col-lg-12(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 4.] Escalamiento de datos
            .tabla-a.color-primario
              table
                thead
                  tr.bg-acento-contenido
                    th No
                    th Valor 1
                    th Operación 1
                    th Valor normalizado 1
                    th Valor 2
                    th Operación 2
                    th Valor normalizado 2
                tbody.bg-10.text-center
                  tr
                    td 1
                    td 1200
                    td 1200/1500 =
                    td 0.800
                    td 5
                    td 5/20 =
                    td 0.250
                  tr
                    td 2
                    td 200
                    td 200/1500 =
                    td 0.133
                    td 2
                    td 2/20 =
                    td 0.100
                  tr
                    td 3
                    td 300
                    td 300/1500 =
                    td 0.200
                    td 4
                    td 4/20 =
                    td 0.200
                  tr
                    td 4
                    td 400
                    td 400/1500 =
                    td 0.267
                    td 5
                    td 5/20=
                    td 0.250
                  tr
                    td 5
                    td 300
                    td 300/1500 =
                    td 0.200
                    td 7
                    td 7/20 =
                    td 0.350
                  tr
                    td 6
                    td 100
                    td 100/1500 =
                    td 0.067
                    td.bg-acento-contenido 20 
                    td 8/20 =
                    td 1.000
                  tr
                    td 7
                    td 50
                    td 50/1500 =
                    td 0.033
                    td 9
                    td 9/20 =
                    td 0.450
                  tr
                    td 8
                    td 20
                    td 20/1500 =
                    td 0.013
                    td 10
                    td 10/20 =
                    td 0.500
                  tr
                    td 9
                    td 5
                    td 5/1500 =
                    td 0.003
                    td 15
                    td 15/20 =
                    td 0.750
                  tr
                    td 10
                    td.bg-acento-contenido 1500 
                    td 1500/1500 =
                    td 1.000
                    td 5
                    td 20/20 =
                    td 0.250

        .row.align-items-center.justify-content-center.mb-4
          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
            p A pesar de que las columnas 
              em Valor 1 
              | y 
              em Valor 2 
              | en sus datos originales presentan diferencias importantes, cuando se normalizan se comportan de la misma manera, ya que se encuentran en el mismo rango, y este es el resultado que se busca cuando se realiza dicho proceso: que todas las variables tengan la misma importancia.
            p Pasando al ejemplo práctico, su objetivo es llevar todas las variables numéricas a una misma escala, pues, si se observan los valores de cada una de las columnas, sus datos varían significativamente. Para observar estos datos, se debe utilizar el siguiente comando:
            .br-12.bg-7.w-fit.px-4.py-3(data-aos="fade")
              span.t-c df.
                span.tc-2 describe 
                | ( )
          .col-lg-4.col-md-6.mb-4.mb-lg-0(data-aos="fade-left")  
            img(src='@/assets/curso/temas/t2/img8.svg' alt='')

        p.mb-4(data-aos="fade") Al ejecutarlo, se genera el resultado que se aprecia en la 
          b Figura 21
          | , donde los datos varían significativamente. Si se dejan las variables de esta manera, los algoritmos de entrenamiento para predicción de datos le estarían dando mayor importancia a la variable 
          em Valor
          |, que es la que representa datos más altos, mientras que a 
          em Hijos, 
          | le daría menor relevancia, al ser la de menor valor.
        
        .row.justify-content-center
          .col-lg-5.mb-4(data-aos="fade")
            .titulo-sexto.color-acento-contenido.mb-3
              p.mb-0 #[b Figura 21.] Valores mínimos y máximos de campos numéricos
            img(src='@/assets/curso/temas/t2/fig21.png' alt='Tabla que refleja variaciones significativas entre valores.')

    p(data-aos="fade") Lo que se quiere es que se tenga igual importancia para todas las variables, como se veía anteriormente en las columnas 
      em dummy, 
      | que se representan todas por igual, ya sea 0 o 1; y este también sería el objetivo para las variables numéricas, como en el ejemplo descrito anteriormente, en la cual se llevan a una escala entre 0 y 1; la diferencia con las 
      em dummy 
      | es que existirá más variabilidad en ese rango.
    p.mb-4(data-aos="fade") Para este proceso, existen diferentes técnicas; para esta ocasión, se utilizará el máximo absoluto, descrito en el ejemplo anterior, el cual consiste en dividir cada dato entre el valor máximo absoluto, el cual se puede calcular usando las funciones 
      em max() 
      | y 
      em abs()
      | , por lo que, para realizar el escalamiento a todas las variables numéricas, se deben ejecutar los siguientes comandos.
        
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        .br-12.bg-7.px-3.px-lg-5.py-2.mb-4.h-100.d-lg-flex.justify-content-center.flex-lg-column.d-lg-block.d-none
          p.mb-0.t-c6 df_max
            span.tc-1 =
            | df [ [‘Modelo’,’Valor’, ‘Hijos’, ‘Edad’] ]
          p.mb-0.t-c6 
            span.tc-1 for 
            | column 
            span.tc-1 in 
            | df_max.columns:
          p.mb-0.t-c6 df_max[column]
            span.tc-1 =
            | df_max[column]
            span.tc-1 /
            | df_max[column].
            span.tc-2 abs
            | ( ).
            span.tc-2 max
            | ( )
          p.mb-0.t-c6 
            spanspan.tc-2 display
            | (df_max)
        .br-12.bg-7.px-3.px-lg-5.py-2.mb-4.h-100.d-lg-none.d-block
          p.mb-0.t-c6 df_max
            span.tc-1 =
            | df [ [‘Modelo’,’Valor’, ‘Hijos’, ‘Edad’] ]
          p.mb-0.t-c6 
            span.tc-1 for 
            | column 
            span.tc-1 in 
            | df_max.columns:
          p.mb-0.t-c6 df_max[column] 
            span.tc-1 =
            | df_max[column]
            span.tc-1 /
            | df_max[column].
            span.tc-2 abs
            | ( ).
            span.tc-2 max
            | ( )
          p.mb-0.t-c6 
            spanspan.tc-2 display
            | (df_max)    
      .col-lg-4.col-md-7.mb-4.mb-lg-0(data-aos="fade-left") 
        img(src='@/assets/curso/temas/t2/img9.svg' alt='')

    .row.align-items-center.mb-5
      .col-lg-4.col-md-7.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 22.] Escalamiento de las columnas numéricas
        img(src='@/assets/curso/temas/t2/fig22.png' alt='Tabla que evidencia el escalamiento de los anteriores resultados para obtener una normalización de los datos.' style="width: 295px;")
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left") 
        p El resultado que se muestra en la Figura 22 permite ver que cada una de las variables numéricas se encuentran en una escala de 0 a 1. Al obtener el valor máximo de cada columna y dividir cada valor por ese valor máximo, se tiene una normalización de los datos. Así, los algoritmos tendrán menos problemas para realizar un correcto reconocimiento de la importancia de estas columnas, ya que serán tratadas por igual.
        h5.mb-4 Para estar seguros del procedimiento, se debe usar el comando que se usó anteriormente para la descripción de los datos.
        .br-12.bg-7.w-fit.px-4.py-3.mb-4
          span.t-c6 df_max.
          span.tc-2 describe
          | ( )

    p.mb-4(data-aos="fade") Como se puede observar en la Figura 23, el valor mínimo para cada una de las variables es 0, de la misma manera que el máximo es 1.

    .row.align-items-center
      .col-lg-4.col-md-7.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 23.] Variables numéricas normalizadas
        img(src='@/assets/curso/temas/t2/fig23.png' alt='Tabla con variables numéricas normalizadas.')
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left") 
        p Al tener las variables en la misma escala, los algoritmos de entrenamiento no le darán mayor importancia a una variable específica, por lo que todas serán tratadas con la misma importancia.



</template>

<script>
export default {
  name: 'Tema2',
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
