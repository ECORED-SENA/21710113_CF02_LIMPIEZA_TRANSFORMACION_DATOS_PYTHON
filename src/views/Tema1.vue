<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Limpieza de los datos

    .row.fondo1-t1.align-items-center.pt-3.mb-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4

          p.mb-4(data-aos="fade") Este proceso consiste en detectar, corregir o eliminar registros corruptos o inexactos de un conjunto tablas o base de datos; dentro de dicha limpieza, se identifican las partes incompletas, incorrectas, inexactas o irrelevantes de los datos, para su posterior sustitución, modificación o eliminación.

          .row.align-items-center.justify-content-center.mb-4
            .col-lg-3.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
              img(src='@/assets/curso/temas/t1/img1.png' alt='')
            .col-lg-9.mb-4.mb-lg-0(data-aos="fade-left")  
              .bg-white.tarjeta.bg-shadow1.p-4
                p Realizar este proceso en el mundo de la ciencia de datos es fundamental, pues no puede confiarse a ciegas en la veracidad de los datos que se toman de las diferentes fuentes de información. Es necesario depurarlos y tomar los que realmente contribuyan al cumplimiento de los objetivos organizacionales propuestos.
                h5 Desde esta perspectiva, es importante tener claridad sobre los problemas más comunes que se pueden llegar a encontrar durante este proceso. Estos se presentan a continuación:
      
          .row.align-items-end.justify-content-center.justify-content-center.justify-content-lg-start.mb-5
            .col-lg-6.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
              img(src='@/assets/curso/temas/t1/img2.svg' alt='')
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")  
              .bg-2.tarjeta.mb-2.p-3.py-2
                .tarj-num
                  h5.bg-num.mb-lg-0 1
                  p.mb-0 #[b Registros repetidos:] información duplicada, que es exactamente igual para todas las columnas.
              .bg-2.tarjeta.mb-2.p-3.py-2
                .tarj-num
                  h5.bg-num.mb-lg-0 2
                  p.mb-0 #[b Valores nulos:] son registros que vienen con información vacía.
              .bg-2.tarjeta.mb-2.p-3.py-2
                .tarj-num
                  h5.bg-num.mb-lg-0 3
                  p.mb-0 #[b Valores no estandarizados:] representan la misma información, pero escrita de diferente manera.
              .bg-2.tarjeta.mb-2.p-3.py-2
                .tarj-num
                  h5.bg-num.mb-lg-0 4
                  p.mb-0 #[b Valores atípicos:] es el dato que no corresponde al parámetro establecido para ese campo.
              .bg-2.tarjeta.mb-2.p-3.py-2
                .tarj-num
                  h5.bg-num.mb-lg-0 5
                  p.mb-0 #[b Caracteres especiales:] campos que vienen acompañados de espacios, asteriscos, puntos y cualquier caracter que no corresponda a este tipo de datos.
          
          p.mb-4(data-aos="fade") Para entender mejor este tema, se trabajará con un ejemplo que contribuirá a entender a qué se enfrenta alguien cuando recolecta información desde diversas fuentes de información; para conocerlo, revise con atención el recurso propuesto:

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/LOlsg6ZkdcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Ejemplo problemas en la recolección de la información

    .row.justify-content-center.mb-4
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .cajon-b.color-acento-contenido.py-2.mb-2
          p.mb-0 Si bien no se conocen todas las numerosas anomalías que se pueden encontrar, es importante tener claridad en los tipos y la estructura de datos de la colección, de tal manera que se puedan quitar, modificar o eliminar; lo cierto es que los datos deben mantener siempre una consistencia de lo que representan.
        p Es importante tener en cuenta que, para iniciar con el proceso de limpieza de datos y búsqueda de inconsistencias, se debe realizar la importación de librerías, proceso que se explicó en el componente anterior; pues es necesario trabajar con datos unificados en los tres tipos de archivos de diferentes formatos, para posteriormente guardarlos en un archivo de formato CSV, sobre el cual se basará el desarrollo de este componente. 
          b Observe la Figura 1:
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-left")
        .bg-9.h-100.d-flex.justify-content-center.align-items-center
          img(src='@/assets/curso/temas/t1/img3.svg' alt='' style="width: 150px;")

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-7
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Archivos unificados
        img(src='@/assets/curso/temas/t1/fig1.png' alt='Captura de pantalla de un archivo unificado, como ejemplo, para iniciar la búsqueda de inconsistencias.')
    
    p(data-aos="fade") Sobre este archivo unificado, se empezará a realizar la búsqueda de inconsistencias, pues la información aquí recolectada se tomó desde diferentes fuentes de información, por lo que seguramente se presentarán anomalías en la estructura de los datos. A continuación, se empezará con la descripción de los datos, para determinar la identificación de cada columna y los tipos de datos; de esta forma, se podrá determinar la consistencia de los mismos.


    Separador

    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.1 Describir los datos

    p.mb-4(data-aos="fade") Existen muchas formas de describir los datos, pero normalmente se tienen en cuenta las siguientes, haga clic en cada botón para conocerlas:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-4.mb-4
        .bg-1.text-center.p-4.h-100
          h5 Cantidad de Datos
          p.mb-0 Número de registros, campos y tablas seleccionadas en la etapa anterior.
      .col-lg-4.mb-4
        .bg-3.text-center.p-4.h-100
          h5 Tipos de valores
          p.mb-0 Pueden ser numéricos, categóricos o booleanos. Se debe prestar atención que al momento de cargar los datos no se modifiquen estos tipos.
      .col-lg-4.mb-4
        .bg-4.text-center.p-4.h-100
          h5 Esquema de codificación
          p.mb-0 En algunas ocasiones, los valores de las bases de datos son representaciones de características, como, por ejemplo, el género o tipo de producto.

    p.mb-4(data-aos="fade") El siguiente recurso educativo amplía la información sobre el proceso para realizar la descripción de los datos:

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MhYKNNf9VDM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Proceso para realizar la descripción de los datos

    p(data-aos="fade") A continuación, se empezarán a manipular los datos nulos, para lo cual es necesario conocer diferentes técnicas para corregir este tipo de situaciones.


    Separador

    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.2 Datos nulos

    .row.fondo2-t1.align-items-center.pt-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.mb-4

          p(data-aos="fade") Lo primero que se debe contemplar es que, cuando no se encuentran ciertos datos de un campo, al cargar los datos, a estos se les debe asignar un 
            span.bg-1 valor #[em #[b NaN]],
            |  que indica que son datos nulos. Es importante tener en cuenta que el tratamiento de los datos depende del objetivo del estudio de los mismos.
          p.mb-4(data-aos="fade") En la mayoría de los casos, se opta por ignorar toda la fila; en otros casos, dependerá de la cantidad de valores nulos, y, a partir de las filas ignoradas, se establece si es posible continuar con el estudio de los datos o si se hace inviable debido a la falta de registros. Otra opción es completar los valores vacíos, sin embargo, se debe considerar con detalle con qué valor se va a completar, puesto que cualquier valor que se ponga podrá aumentar el sesgo del conjunto de datos.

          .row.justify-content-center.mb-4
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              .bg-3.tarjeta.p-4
                h5 Para ver la cantidad de valores nulos del conjunto de datos que se ha venido trabajando, es necesario utilizar el siguiente comando.
                .br-12.bg-7.w-fit.px-4.py-2.mb-3
                  span.t-c df.
                    span.tc-2 isnull 
                    | ( ).
                    span.tc-2 sum
                    | ( )
                p Este comando permitirá detectar y contar cada uno de los valores nulos encontrados en cada columna de los datos que se están estudiando. 
                  b (Véase Figura 2)               
            .col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/t1/img4.svg' alt='')

          .row.justify-content-center.mb-4(data-aos="fade-down")
            .col-lg-3
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 2.] Valores nulos por columna
              img(src='@/assets/curso/temas/t1/fig2.png' alt='Ejemplo de valores nulos encontrados.')

          h4 Es importante tener en cuenta que: 
          p.mb-4 Una salida rápida para la solución de valores nulos puede ser eliminar todas las filas donde se presente un valor nulo en cualquiera de las columnas, pero observe que, en la Figura 2, la variable color presenta un número alto de valores nulos, de manera que, al realizar la eliminación con esa técnica, se estaría descartando mucha información importante.
          h4 Pero, ¿cómo determinar lo que se considera mucha información?
          p Para responder a esta pregunta, es necesario realizar el cálculo porcentual de los valores nulos con respecto al total de registros; para este procedimiento, debe contar todos los valores nulos y dividirlos sobre el total; utilice el siguiente comando para obtener ese resultado
          
          .br-12.bg-7.w-fit.px-4.py-2.mb-4
            span.t-c porcentaje 
              span.tc-1 = 
              | ((df.
              span.tc-2 isnull
              | ().sum() / 
              span.tc-2 len
              | (df))*
              span.tc-3 100).
              span.tc-2 sort_values
              | (
              span.tc-5 ascending 
              span.tc-1 = 
              span.tc-3 False
              | ) 
              span.tc-3 print
              | (porcentaje)

          h5 Al aplicar dicho comando, se puede determinar cuál sería el porcentaje de eliminación si se realiza un proceso de descarte general.
          p.mb-4 Tal como se observa en la Figura 3, el porcentaje que se estaría eliminando, solamente teniendo en cuenta la variable color, sería de aproximadamente el 60 % del total de los datos; si dentro de ese porcentaje no se cruza con registros de la edad, entonces se eliminaría otro 12 % adicional, lo que resultaría en un error, ya que se estaría descartando una muestra bastante representativa, equivalente a un 72 %, y si se procede con la eliminación de esta manera, seguramente los resultados estarán bastante sesgados o insuficientes para realizar la analítica.

          .row.justify-content-center.mb-4(data-aos="fade-down")
            .col-lg-7
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 3.] Cálculo del porcentaje de valores nulos
              img(src='@/assets/curso/temas/t1/fig3.png' alt='Captura de pantalla en la que se muestra el cálculo de los valores nulos.')

          .row.justify-content-center.mb-4(data-aos="fade-down")
            .col-lg-10
              .tarjeta.bg-5.p-3
                .row.justify-content-around.align-items-center
                  .col-3.col-sm-2.col-lg-1
                    img(src="@/assets/curso/temas/t1/cta.svg")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1 Caso de datos nulos
                        p.text-small.mb-0 Para entender mejor este procedimiento, observe con atención el documento anexo denominado: Casos datos nulos.
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/casos_datos_nulos.pdf')" target="_blank")
                          span Descargar
                          i.fas.fa-file-download


    Separador

    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.3 Imputación de valores nulos

    p.mb-4(data-aos="fade") En caso de que la cantidad de valores nulos sea lo suficientemente baja para reemplazar todos los valores con un valor específico, se puede realizar la imputación de valores nulos, la cual toma valores estadísticos, como la media, la mediana o la moda, para realizar el cambio; tal como se presenta en el siguiente recurso:

    TabsB.color-acento-contenido.mb-5
      .bg-6.py-4.py-md-5(titulo="Imputación con la media" :icono="require('@/assets/curso/temas/t1/ico-tab.svg')")
        .row.align-items-center.justify-content-evenly
          .col-lg-5.mb-4.mb-lg-0
            h4 Imputación con la media
            p Consiste en reemplazar todos los datos nulos con la media, que debe ser calculada con los datos existentes. 
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/t1/tab-1.svg', alt='La tabla evidencia cómo se llenan las celdas vacías con el valor de la media. En este caso: 26.')
      .bg-6.py-4.py-md-5(titulo="Imputación con la mediana" :icono="require('@/assets/curso/temas/t1/ico-tab.svg')")
        .row.align-items-center.justify-content-evenly
          .col-lg-5.mb-4.mb-lg-0
            h4 Imputación con la mediana
            p Consiste en reemplazar todos los datos nulos con el valor central de la lista, ordenándolos ascendentemente de la siguiente manera.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t1/tab-2.svg', alt='La tabla evidencia cómo se llenan las celdas vacías con el valor de la mediana, la cual se obtiene al ordenar los datos. En este caso es 25.')
      .bg-6.py-4.py-md-5(titulo="Imputación con la moda" :icono="require('@/assets/curso/temas/t1/ico-tab.svg')")
        .row.align-items-center.justify-content-evenly
          .col-lg-5.mb-4.mb-lg-0
            h4 Imputación con la moda
            p Se trata de colocar el valor que más se repite, como técnica de reemplazo de los valores nulos
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/t1/tab-3.svg', alt='La tabla evidencia cómo se llenan las celdas vacías con el valor que más se repite o la moda. En este caso es 18.')
      .bg-6.py-4.py-md-5(titulo="Imputación con un valor fijo" :icono="require('@/assets/curso/temas/t1/ico-tab.svg')")
        .row.align-items-center.justify-content-evenly
          .col-lg-5.mb-4.mb-lg-0
            h4 Imputación con un valor fijo
            p Consiste en definir un valor y simplemente reemplazar todos los nulos con dicho dato; por ejemplo, si el dato definido es 50, el resultado sería el siguiente.
          .col-lg-3
            figure
              img(src='@/assets/curso/temas/t1/tab-4.svg', alt='La tabla evidencia cómo se llenan las celdas vacías con un valor definido; en este caso es el 50.')
      .bg-6.py-4.py-md-5(titulo="Imputación con k vecinos" :icono="require('@/assets/curso/temas/t1/ico-tab.svg')")
        .row.align-items-center.justify-content-evenly
          .col-lg-5.mb-4.mb-lg-0
            h4 Imputación con k vecinos 
            p Si los datos muestran mucha variabilidad, el método de valor fijo puede ser un problema. En esos casos, utilice el método de los k vecinos, que consiste en calcular la media de los datos cerca al valor nulo. En el siguiente ejemplo, se establece en 2 el número de vecinos; como se puede ver, se toman dos registros y se realiza el cálculo de la media. Para el registro 2, se suman la fila 1 con la 3, y así sucesivamente con los demás, el número de vecinos se define dependiendo del requerimiento, y entre más utilice, obtendrá un dato más cercano. 
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/t1/tab-5.svg', alt='La tabla evidencia cómo se llenan las celdas vacías con la media de los datos cerca al valor nulo. En este caso, los datos varían de acuerdo a los valores vecinos.')

    .row.align-items-center.mb-5
      .col-lg-5.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img5.png' alt='')
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")  
        img.mb-4(src='@/assets/curso/temas/t1/img6.svg' alt='' style="width: 190px")
        p Llevando estos métodos a la práctica, se debe definir cuál sería el método correcto para realizar la imputación de los valores nulos para la variable edad, que aún presenta registros inferiores con relación a las demás. 
        p Se sabe que la descripción de los datos arrojó valores máximos atípicos y realizar la imputación con las medias puede generar inconsistencias, ya que la media es muy sensible a los valores atípicos altos.
        h5 Para efectos prácticos, a continuación, se darán a conocer todos los comandos para los métodos vistos que se pueden aplicar a la variable edad, y al final, se escogerá el método definitivo que se aplicará a los datos.

    .bg-acento-contenido.br-9.bg-shadow3.w-fit.mb-4(data-aos="fade")
      .d-flex.align-items-center.px-2
        img.mb-2.mt-n2(src='@/assets/curso/temas/t1/subt.svg' alt='' style="width: 50px;")
        h3.mb-0.px-4 Comandos para cada método      

    .row.mb-3(data-aos="fade-down")
      .col-lg-4.mb-3
        .bg-acento-botones.px-3.py-2
          h4.texto-blanco.mb-0 Método media
        .bg-7.px-3.py-2  
          span.t-c6 df[‘edad’] 
            span.tc-1 = 
            | df [‘Edad’].
            span.tc-2 fillna
            | (df [‘Edad’].
            span.tc-2 mean
            | ( ))
      .col-lg-4.mb-3
        .bg-acento-botones.px-3.py-2
          h4.texto-blanco.mb-0 Método mediana
        .bg-7.px-3.py-2  
          span.t-c6 df[‘edad’]
            span.tc-1 =
            | df [‘Edad’].
            span.tc-2 fillna
            | (df [‘Edad’].
            span.tc-2 median
            | ( ))
      .col-lg-4.mb-3
        .bg-acento-botones.px-3.py-2
          h4.texto-blanco.mb-0 Método moda
        .bg-7.px-3.py-2  
          span.t-c6 df[‘edad’] 
            span.tc-1 =
            | df [‘Edad’].
            span.tc-2 fillna
            | (df [‘Edad’].
            span.tc-2 mode
            | ( ))
      .col-lg-4.mb-3
        .bg-acento-botones.px-3.py-2
          h4.texto-blanco.mb-0 Valor fijo
        .bg-7.px-3.py-2.pb-lg-4
          span.t-c6 df[‘edad’] 
            span.tc-1 =
            | df [‘Edad’].
            span.tc-2 fillna
            | (
            span.tc-3 50
            | ) 
      .col-lg-8.mb-3
        .bg-acento-botones.px-3.py-2
          h4.texto-blanco.mb-0 k vecinos
        .bg-7.px-3.py-2  
          span.t-c6
            span.tc-1 from 
            | sklearn.impute 
            span.tc-1 import 
            | KNNImputer imputar 
            span.tc-1 = 
            span.tc-2 KNNImputer
            | (
            span.tc-5 n_neighbors
            span.tc-1 =
            span.tc-3 5
            | , 
            span.tc-5 weights
            | =
            span.tc-4 “uniform”
            | ) imputar.
            span.tc-2 fit
            | (df[[“Edad”]])ndf[
            span.tc-4 “Edad”
            |] = imputar.
            span.tc-2 transform
            | (df[[
            span.tc-4 “Edad”
            | ]]).
            span.tc-2 ravel
            | ( )

    p.mb-4(data-aos="fade") Lo que realizan estos métodos es revisar, dentro de la columna edad, los valores que se encuentran vacíos y reemplazarlos con el método seleccionado; para este caso, el método que se utilizará es el de k vecinos. Después de ejecutar el método para k vecinos y visualizar los resultados con el comando df.info(), se obtiene la siguiente información.

    .row.align-items-center.justify-content-between.mb-4
      .col-lg-4.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 4.] Resultado sin valores nulos 
        img(src='@/assets/curso/temas/t1/fig4.png' alt='Captura de pantalla en la que se evidencia la no presencia de valores nulos.')
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-left")  
        p Se sigue avanzando en el perfeccionamiento de los datos y, como se puede observar, ya no se tiene presencia de valores nulos. Primeramente, se eliminaron muestras pequeñas, que no ponían en riesgo la consistencia de los datos; se descartaron columnas con valores superiores al 50 % de ausencia de datos y se realizó la imputación de los datos para así complementar los datos faltantes a la edad. Todas las columnas quedaron con un total de 2993, de los 3000 registros con que se empezó, y una columna menos, que tenía mucha información faltante.
        .tarjeta.bg-8.p-3
          .row.align-items-center 
            .col-md-2.col-3.mb-3.mb-md-0
              img(src='@/assets/curso/temas/t1/adv.svg' alt='')
            .col-md-10
              p.mb-0 #[b Recuerde que en la imputación de los datos] es importante conocer muy bien el comportamiento de las variables; no se escoge un método u otro simplemente por gusto, aquí se deben tener en cuenta factores como la variabilidad de los datos o los valores permitidos reales que se puedan asignar cuando se habla de imputación de valor fijo.  

    p(data-aos="fade") Ya terminado el proceso del tratamiento de datos nulos, como se observa en la Figura 4, en la que todas las columnas quedaron con un total de 2993, de los 3000 registros con que se empezó, y una columna menos, que tenía mucha información faltante. Ahora, se procede con la búsqueda de datos sucios.


    Separador

    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.4 Datos sucios

    .row.fondo3-t1.align-items-center.pt-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row
          .row.align-items-center.justify-content-center.mb-4
            .col-lg-3.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
              img(src='@/assets/curso/temas/t1/img7.png' alt='')
            .col-lg-9.mb-4.mb-lg-0(data-aos="fade-left")  
              .bg-9.tarjeta.bg-shadow2.p-4
                p Cuando un dato es erróneo o inconsistente se le llama dato sucio, este tipo de dato es mucho más difícil de encontrar, pues estos pueden derivar de errores generados al momento de ser registrados. Para estos casos, existen métodos preventivos, que minimizan la cantidad de datos sucios, ya que los procesos correctivos, y en especial la limpieza de datos, suelen ser muy costosos y laboriosos.
                h5 Para ahondar de manera detallada en este proceso, revise con atención el recurso propuesto:

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/qf6MR4o58cs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Datos sucios


    Separador

    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade") 
      h2 1.5 Datos atípicos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p Cuando se registra un dato cuyos valores son muy diferentes a las observaciones del mismo grupo de datos, se le llama dato atípico. Este tipo de dato se diferencia de los datos nulos y los datos sucios porque existe y no es consecuencia de un error en el registro o compilación de datos.
        p Un valor atípico puede ser indicativo de que el dato pertenece a una población diferente del resto de las muestras establecidas. Normalmente, son excluidos del análisis debido a que distorsionan los resultados. Para valores numéricos, el método más impartido académicamente, por su sencillez y resultados, es el test de Tukey, que toma como referencia la diferencia entre el primer cuartil y el tercer cuartil de los datos.
        .bg-3.tarjeta.p-4
          h5 Una forma de visualizar este test es usando el diagrama de caja, el cual se genera usando el siguiente comando:
          .br-12.bg-7.w-fit.px-4.py-2.mb-3
            span.t-c sns.
              span.tc-2 catplot
              | (
              span.tc-5 x 
              span.tc-1 = 
              | “Modelo”, 
              span.tc-5 data 
              span.tc-1 = 
              | df, 
              span.tc-5 kind 
              span.tc-1 = 
              | “box”, 
              span.tc-5 aspect 
              | = 
              span.tc-3 1.5
              | );
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img8.png' alt='')

    .row.align-items-center.justify-content-between.mb-4
      .col-lg-6.col-md-8.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 5.] Diagrama de caja y bigotes
        img(src='@/assets/curso/temas/t1/fig5.png' alt='Se presenta una columna azul sobre el año 2010 y anterior a esta fecha, aparece visualmente formas que no pertenecen, como resultado del involucramiento de datos atípicos.')
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")  
        p Tal como se muestra en la Figura 5, se selecciona la columna modelo para este ejemplo. Se puede observar que aquellos vehículos anteriores al año 1978 son muy pocos comparados con el resto de vehículos; por ende, son considerados datos atípicos.
        p Si se desea eliminar los datos atípicos de esta columna, se puede utilizar un filtro que seleccione aquellos cuyo modelo sea menor a 1978. Para realizar esa acción, ejecute el siguiente comando:
        .br-12.bg-7.w-fit.px-4.py-2.mb-3
          span.t-c seleccion
            span.tc-1 =
            | df[df[‘Modelo’]
            span.tc-1 < 
            span.tc-3 1978
            | ].index de
            span.tc-1 =
            | df.
            span.tc-2 drop
            | (seleccion, 
            span.tc-5 inplace 
            | = 
            span.tc-3 True
            | ) df.shape
        p Como se observa en la Figura 6, se realizó la selección de los registros que cumpliesen el parámetro, y posteriormente, se eliminaron, como se refleja en el total, que pasó de 2993 a 2925.

    .row.align-items-center.mb-5
      .col-lg-4.col-md-6.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 6.] Eliminación de registros atípicos
        img(src='@/assets/curso/temas/t1/fig6.png' alt='Comando en el que se muestran los registros sin datos atípico.' style="width: 295px;")
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left") 
        p Si se grafica nuevamente el resultado, se obtiene el siguiente, aquí ya no se observan aquellos valores que se han descartado.

    .row.align-items-center.mb-5
      .col-lg-6.col-md-6.mb-4.mb-lg-0(data-aos="fade")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 7.] Gráfica sin datos atípicos
        img(src='@/assets/curso/temas/t1/fig7.png' alt='Representación visual en la que ya no existen variaciones atípicas. Solo aparece la columna azul constante del Modelo.')

    p.mb-4(data-aos="fade") Para entender mejor el tema, se realizará el mismo procedimiento para las variables Edad e Hijos. Para obtener los resultados gráficos, se deben ejecutar los siguientes comandos:

    .row.justify-content-center.mb-3
      .col-lg-6.mb-4.b-p-r(data-aos="fade-right")
        h4 Comando
        .br-12.bg-7.w-fit.px-4.py-2.mb-4
          span.t-c sns.
            span.tc-2 catplot
            | (
            span.tc-5 x 
            span.tc-1 = 
            | “Edad”, 
            span.tc-5 data 
            span.tc-1 = 
            | df, 
            span.tc-5 kind 
            span.tc-1 = 
            | “box”, 
            span.tc-5 aspect 
            span.tc-1 = 
            span.tc-3 1.5
            | );
        h4 Resultado
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Figura 8.] Datos atípicos para edad
        img(src='@/assets/curso/temas/t1/fig8.png' alt='Representación visual en la que se presentan datos atípicos en la columna 160 años.')
      .col-lg-6.mb-4.ps-lg-5(data-aos="fade-left") 
        h4 Comando
        .br-12.bg-7.w-fit.px-4.py-2.mb-4
          span.t-c sns.
            span.tc-2 catplot
            | (
            span.tc-5 x 
            span.tc-1 = 
            | “Hijos”, 
            span.tc-5 data 
            span.tc-1 = 
            | df, 
            span.tc-5 kind 
            span.tc-1 = 
            | “box”, 
            span.tc-5 aspect 
            span.tc-1 = 
            span.tc-3 1.5
            | );
        h4 Resultado
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Figura 9.] Datos atípicos para edad
        img(src='@/assets/curso/temas/t1/fig9.png' alt='Representación visual en la que se presentan datos atípicos en la columna 30 hijos.')

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-lg-10
        .bg-8.tarjeta.p-4
          .row.align-items-center
            .col-lg-4
              img(src='@/assets/curso/temas/t1/img9.svg' alt='')
            .col-lg-8
              h5 Para ambos campos, se observan datos atípicos (Véanse Figuras 8 y 9), por lo que se procederá a eliminarlos, estableciendo un rango en el que solo se permiten los datos que cumplan la condición.
              p Los siguientes comandos ayudan con el procedimiento para descartar esos registros atípicos. En cuanto a la variable edad, sólo se dejarán registros que estén en el rango de 15 a 80 años, y para hijos, datos que sean menores a 5. 
              p.mb-0 También se deben quitar las columnas que no se vayan a utilizar; en este caso, la que se creó automáticamente al unificar los archivos, llamada Unnamed: 0 y la columna id. Para conocer dichos comandos, revise con atención el siguiente contenido:

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-lg-10.mb-2
        .bg-acento-botones.px-3.py-2
          h4.texto-blanco.mb-0 Comando para seleccionar y eliminar todos los registros que sean inferiores a 15 años:
        .bg-7.px-3.py-2  
          span.t-c6 seleccion
            span.tc-1 =
            | df[df[‘Edad’] 
            span.tc-1 <
            span.tc-3 15 
            | ].index de
            span.tc-1 =
            | df.
            span.tc-2 drop
            | (seleccion, 
            span.tc-5 inplace 
            span.tc-1 = 
            span.tc-3 True
            | ) df.shape
      .col-lg-10.mb-2
        .bg-acento-botones.px-3.py-2
          h4.texto-blanco.mb-0 Comando para seleccionar y eliminar todos los registros que sean superiores a 80 años:
        .bg-7.px-3.py-2  
          span.t-c6 seleccion
            span.tc-1 =
            | df[df[‘Edad’] > 
            span.tc-3 80 
            | ].index de
            span.tc-1 =
            | df.
            span.tc-2 drop
            | (seleccion, 
            span.tc-5 inplace 
            | = 
            span.tc-3 True
            | ) df.shape
      .col-lg-10.mb-2
        .bg-acento-botones.px-3.py-2
          h4.texto-blanco.mb-0 Comando para dejar solo registros de hijos menores a 5: 
        .bg-7.px-3.py-2  
          span.t-c6 seleccion
            span.tc-1 =
            | df[df[‘Hijos’] > 
            span.tc-3 5 
            | ].index de
            span.tc-1 =
            | df.
            span.tc-2 drop
            | (seleccion, 
            span.tc-5 inplace 
            | = 
            span.tc-3 True
            | ) df.shape
      .col-lg-10
        .bg-acento-botones.px-3.py-2
          h4.texto-blanco.mb-0 Comando para eliminar las columnas que no se requieren:
        .bg-7.px-3.py-2  
          span.t-c6 df
            span.tc-1 =
            | df.
            span.tc-2 drop
            | ( [‘
            span.tc-2 id
            | ’], 
            span.tc-5 axis
            span.tc-1 =
            span.tc-3 1
            | ) df=df.
            span.tc-2 drop
            | ( [‘Unnamed: 
            span.tc-3 0
            | ’], 
            span.tc-5 axis
            span.tc-1 =
            span.tc-3 1
            | )

    p.mb-4(data-aos="fade") El resultado de la ejecución de los comandos anteriores se ve reflejado en la Figura 10, donde el total de registros también va disminuyendo y ya no se visualizan las columnas que ya se han quitado.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 10.] Comandos para eliminar datos atípicos
        img(src='@/assets/curso/temas/t1/fig10.png' alt='Captura de pantalla de la ejecución de comandos para la eliminación de datos atípicos.')

    p.mb-4(data-aos="fade") Para el caso de las variables categóricas, como Marca, se puede usar un diagrama de frecuencia, el cual se puede generar usando el siguiente comando:
    
    .br-12.bg-7.w-fit.px-4.py-2.mb-5
      span.t-c6 plot 
        span.tc-1 = 
        | df[‘Marca’].
        span.tc-2 value_counts
        | ().
        span.tc-2 plot
        | (
        span.tc-5 kind
        | =‘bar’, 
        span.tc-5 figsize
        | =(
        span.tc-3 16
        | , 
        span.tc-3 6
        | ), 
        span.tc-5 title
        span.tc-1 =
        | ‘Marcas de Automovil’) 

    .row.align-items-center.mb-5
      .col-lg-7.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 11.] Histograma de frecuencias por marca
        img(src='@/assets/curso/temas/t1/fig11.png' alt='Diagrama de frecuencias o representación gráfica de barras por marcas, en este caso, de automóviles.')
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left") 
        p Como se puede ver en la Figura 11, se seleccionó la columna Marca para este ejemplo, y el resultado es que la mayoría de los autos son de la marca Ford, y muy pocos, de las marcas Foose, Daihatsu, Tesla, Citroen, entre otras.
        p Si se desean eliminar los datos atípicos de esta columna, se debe establecer una cantidad mínima de casos, para filtrar aquellas categorías que no son frecuentes. Para este filtro, se usará un mínimo de 10 repeticiones, en cuyo caso aquellas marcas que tengan un número inferior de repeticiones serán consideradas como datos atípicos.

    .row.align-items-center.mb-5
      .col-lg-6.col-md-7.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 12.] Marcas cuya frecuencia sea menor de 10
        img(src='@/assets/curso/temas/t1/fig12.png' alt='Captura de pantalla en el que se muestra la ejecución del comando para frecuencias mejores de 10.')
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left") 
        p Como se muestra en la Figura 12, haciendo uso de la función value_counts, se obtiene la frecuencia de cada valor categórico dentro de la columna Marca y se asigna el valor True a aquellas cuyo conteo es menor que 10 y False a aquellas cuyo conteo sea mayor o igual que 10. Luego, se asigna a la variable condición.
        p Ya que lo que interesa es la lista de marcas que cumplan la condición, se extraen de la lista condición aquellas marcas cuyo valor asignado fue True y se asignan a la variable filtrarmarcas.

    .row.align-items-center.mb-5
      .col-lg-6.col-md-7.mb-4.mb-lg-0(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          p.mb-0 #[b Figura 13.] Filtrado de marcas con menos de 10 registros
        img(src='@/assets/curso/temas/t1/fig13.png' alt='Resultado de las marcas que tienen menos de 10 registros. Entre estas se encuentran Honda, Lotus, Mitsubishi, entre otras.')
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left") 
        p.mb-4 Entonces, haciendo uso de la función isin, se filtran todas aquellas filas cuya marca se encuentre en lista filtrarmarcas, dejando solo aquellas que no se encuentran en la lista de filtrado, usando el comando:
        .br-12.bg-7.w-fit.px-4.py-2.mb-4
          span.t-c6 df[
            span.tc-1 ~
            | df[“Marca”].
            span.tc-2 isin
            | (filtrarmarcas)]
        p En la anterior figura se observa que el total, hasta este punto, es de 2004; todo el proceso de limpieza tuvo un costo de 996 registros menos, a pesar de que se fue cuidadoso con las exclusiones o eliminaciones, pero se presentó un gran número de datos vacíos y atípicos en la edad.  

    .row.justify-content-center(data-aos="fade-down") 
      .col-lg-10.mb-2
        .tarjeta.bg-8.p-3
          .row.align-items-center 
            .col-md-2.col-3.mb-3.mb-md-0
              img.px-lg-3(src='@/assets/curso/temas/t1/adv.svg' alt='')
            .col-md-10
              p.mb-0 Tenga en cuenta que cada caso es particular y se debe conocer muy bien el negocio para determinar qué se puede o no dejar dentro de las variables; en ocasiones, puede que solo se requiera un parte de la limpieza, lo importante es conocer muy bien el dato y darle la integridad para que sea consistente.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
