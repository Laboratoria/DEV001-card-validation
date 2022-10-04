import validator from "./validator.js";
import selectOptions from "./selectOptions.js";
import inputValidator from "./inputValidator.js";

//?Traer los elementos o etiquetas de HTML

//Expiry Date Card:
const monthSelect = document.getElementById("month-card");
const yearSelect = document.getElementById("year-card");

selectOptions.optionsMonths(monthSelect);
selectOptions.optionsYears(yearSelect);

//---Cambiando valores del mes y año de la tarjeta---//

//Month card:
const labelMonthDate = document.getElementById("expiry-month");
selectOptions.changeMonth(monthSelect, labelMonthDate);

//Year Card:
const LabelYearDate = document.getElementById("expiry-year");
selectOptions.changeYear(yearSelect, LabelYearDate);

//*Validar los inputs de html

///numbers Card:
const numberCardInput = document.getElementById("input-number-card");
const textErrorNumberCard = document.getElementById("number-card-error");

inputValidator.validatornumbers(numberCardInput, textErrorNumberCard);
validator.maskify(numberCardInput.value); //* llamamos a la función maskify de Validator.js

///name Card:
const nameCardInput = document.getElementById("input-name-card");
const textErrorNameCard = document.getElementById("name-card-error");
const labelCardName = document.getElementById("name");

inputValidator.validatorname(nameCardInput, textErrorNameCard, labelCardName);

//CVV Card:
const inputCvv = document.getElementById("security-code");
const textCvv = document.getElementById("text-security");
const spanCardCvv = document.getElementById("cvv-number");

inputValidator.validatorcvv(inputCvv, textCvv, spanCardCvv);

//? Función mostrar los números en la tarjeta:

const labelNumberCard = document.getElementById("number-card");

numberCardInput.addEventListener("keyup", () => {
  const maskifyValue = validator.maskify(numberCardInput.value); //almaceno en esta variable lo que retorna la funcion del maskify.
  labelNumberCard.innerText = maskifyValue.replace(/(.{4})/g, "$1 ").trim();
});


//? Función Temporizador para mostrar el modal:


const showcountdown = document.getElementById("countdown");

// Cuenta Regresiva
const mostrarCuentaRegresiva = () => {
  //inicializo el contador en 5 y lo muestro en el innerhtml de mi input.
  let contador = 5;
  showcountdown.innerHTML = `⏰: ${contador}s`

	let cuentaRegresiva = setInterval(() => {
		contador--;
		showcountdown.innerHTML = `⏰: ${contador}s`;
    //cuando esta en 0 la cuenta se detiene
		if(contador == 0) {
			clearInterval(cuentaRegresiva);
			document.querySelector("#modal").style.display = "none";
		}
	}, 1000);
};




//? Función validar Tarjeta mediante un evento y mostrar el modal:

//const modal = document.getElementById("modal");
const titleModal = document.getElementById("title-modal");
const buttonCardValidation = document.getElementById("button-card-Validation");

buttonCardValidation.addEventListener("click", (event) => {
  event.preventDefault();
  //--- Función Validar números de tarjeta ---//
  let functionValue = validator.isValid(numberCardInput.value); //* llamo a la función isValid de Validator.js

  if(numberCardInput.value.trim() !== "" && nameCardInput.value.trim() !== ""){
    if (functionValue == true) {
      titleModal.innerText = "✔ VALID!!";
      document.getElementById("enteredCard").style.display = "flex";
      document.querySelector("#modal").style.display = "flex";
      mostrarCuentaRegresiva();
      //modal.classList.remove("modalHide");
      //alert("VALID CARD!!");

    } else {
      titleModal.innerText = "❌ INVALID!!";
      document.getElementById("enteredCard").style.display = "flex";
      document.querySelector("#modal").style.display = "flex";
      mostrarCuentaRegresiva();
      //modal.classList.remove("modalHide");
      //alert("INVALID CARD");
    }
  }else{
  
    titleModal.innerText = "Error! Complete your data";
    document.getElementById("enteredCard").style.display = "none";
    document.querySelector("#modal").style.display = "flex";
    mostrarCuentaRegresiva();
    //alert("Complete your data");
  }
    
});

