# Proyecto Card Validation

## Índice

* [1. Resumen del Proyecto](#1-resumen-del-proyecto)
* [2. Objetivos del Proyecto](#2-objetivos-del-proyecto)
* [3. Diseño del Proyecto](#3-diseño-del-proyecto)
* [4. Proceso](#4-proceso)
* [5. Autor del Proyecto](#5-autor-del-proyecto)

***

## 1. Resumen del Proyecto
Esta es una aplicación web que le permite al usuario validar el número de su tarjeta de crédito. Además, permite implementar funcionalidad para ocultar todos los dígitos de una tarjeta menos los últimos cuatro. La aplicación también permite ingresar el nombre, la fecha de expiración y el CVV, mientras el usuario ingresa su información este se irá definiendo en la tarjeta predefinida de la aplicación, mostrándose de esta manera más interactiva y funcional para el usuario. 

![Landing Page CardApp](https://i.imgur.com/4IUJMMz.png)



## 2. Objetivos del Proyecto

* Mostrar al inicio de la página un Landing Page conformada por un menú, un texto descriptivo sobre el objetivo de la aplicación acompañado de una imágen referida a la temática “Banco”.
* Mostrar 3 cuadros diseñados en css que sirven como link para futuras redacciones que la empresa publique.
* Añadir una tarjeta de crédito predefinida con diseño CSS, donde se podrá mostrar los datos que el usuario ingrese.
* Mostrar un formulario de petición de datos al usuario para poder validar si el número de la tarjeta ingresada es válida o no.
* Añadir un modal que mostrará mensajes de “complete your data”, “Valid”, “Invalid” dependiendo el contexto en la que el usuario realice la petición de un resultado.
* Mostrar un footer donde se mostrará información de contacto y una pequeña descripción sobre "¿Quiénes somos?".


## 3. Diseño del Proyecto

El diseño está inspirado en páginas web asociadas a bancos conocidos como BBVA, INTERBANK y BCP. Además, se utilizó figma para la maquetación y prototipado básico del proyecto:

[Link Figma "Diseño Básico"](https://www.figma.com/file/DMUBzOeUXG1tZZ7NDof6AV/GABRIELA-ZAMBRANO's-team-library?node-id=0%3A1)


## 4. Proceso

**1. Estructura HTML:**  

  `src/index.html`, es un archivo que almacena la estructura html del proyecto, se encuentra basada en contenedores padres e hijos que permiten dar funcionalidad con js.

**2. Estructura CSS:**  

  `src/style.css`, es un archivo que almacena y define los estilos genéricos que se muestran en la estructura html, diseñado para verse visualmente atractivo para el usuario.

**3. Estructura Javascript:**  

  * `src/index.js`, es un archivo javascript creado con el objetivo de importar los módulos y principales funcionalidades del DOM para el proyecto, además contiene funciones como “Mostrar números en la tarjeta predefinida de css”, “Cronómetro para modal” y “Mostrar modal según el resultado de la función isValid()”.  

  * `src/validator.js`, es un archivo javascript creado con el objetivo de realizar 2 funciones “isValid” y “maskify” del proyecto, a estás funciones se le envían valores como parámetros que tienen que ser verificados por un test exitosamente.  

  * `src/selectOptions.js`, es un archivo javascript creado con el objetivo de pasar opciones “option” en las etiquetas select de html (month and year), utilizando funciones.

  * `src/inputValidator.js`, es un archivo javascript creado con el objetivo de validar la información que el usuario ingresa en los inputs del formulario mediante REGEX (expresiones regulares) mostrándose en la tarjeta predefinida diseñada en css.

## 5. Autor del Proyecto

  <details><summary>Ruth Gabriela Paucar Zambrano.</summary><p>

***
