window.addEventListener('load', () => { //Escucha cuando se carga el documento, esto para evitar que salgan errores si es que carga antes el js del html
    /*CREAMOS DOS CONSTANTES Y NOS GUARDAMOS LOS ELEMENTOS QUE NECESITAMOS*/ 
    const display = document.querySelector('.calculator-display') //busca la primera clase con la descripcion y la va a guardar por eso lleva un punto al inicio
    const keypadButtons = document.getElementsByClassName('keypad-button')//Selecciona todas las clases mencionadas, sin tener que poner un punto por delante //Si usaramos un querySelectorAll nos trae todos los botones arroja un nodeList adentro de la constante y nosotros necesitamos un HTMLCollection
    
    /*CREAMOS OTRA CONSTANTE PARA CONVERTIR EL HTMLcollection A ARRAY PARA PODER ITERARLO*/
    const keypadButtonsArray = Array.from(keypadButtons)

    /*ITERAMOS POR NUESTRO NUEVO ARRAY DE BOTONES*/
    keypadButtonsArray.forEach((button) => {
        /*A CADA BOTON LE AGREGAMOS UN LISTENER*/
     button.addEventListener('click', () => {
        // console.log(button.innerHTML)//innerHTML suele ser usado para modificar el contenido de una clase, sin embargo solo imprime el contenido del button en consola
      calculadora(button, display);  //para llamar a la funcion calculadora cuando precionamos un botón
       })
    })
})

function calculadora (button, display) {//funcion que filtra el botón precionado, si es C borra, si es = calcula y si es otro actualiza en el display
    switch  (button.innerHTML){
        case 'C':
          borrar(display)
          break;

        case '=':
            calcular(display);
            break;

    default:
          actualizar(display, button);
          break;
    }
   }

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) /*eval (parabra reservada) Tomar el string y resolverlo y guardarlo en el innerHTML del display*/
}

function actualizar(display, button){
    if(display.innerHTML == 0){
        display.innerHTML = '';//no entendí
    }
    display.innerHTML += button.innerHTML;
    /*display.innerHTML = display.innerHTML + butotn.innerHTML*/
}

function borrar(display) {
    display.innerHTML = 0;
}