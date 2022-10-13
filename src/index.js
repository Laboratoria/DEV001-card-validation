import validator from './validator.js';

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", e => {
  e.preventDefault();

  const creditCardNumber = (formulario["card-number"].value)
  const verificar = validator.isValid(creditCardNumber);
  alert(verificar);
  const tarjeta = document.getElementById("card-number")
  tarjeta.value = validator.maskify(creditCardNumber)



  if(creditCardNumber==="") {
 alert("Por favor llene todos los campos")
  }
})

 // let creditCardNumber =document.getElementById("Tarjeta").value ;
  


  
 
// if (creditCardNumber) {
//    const valida= validator.isValid(creditCardNumber)
//     if(valida===true){
//    //document.getElementById("validMessage").style.display
//    //document.getElementById("invalidMessage").style.display
//    //document.getElementById("creditCardNumber").innerHTML
//     }

//   //---------Invocar Validator
//   //validator.isValid(creditCardNumber);


//   if (creditCardNumber === "") {
//     alert("Debe llenar todos los campos")
//   }
// //else {
// //document.getElementById("invalidMessage").style.display="grid";
// //document.getElementById("validMessage").style.display="none";
// //}
//   //}
// //else {
// //alert("No es psoible validar")

//   //}
//   //mask.textContent = validator.maskify(creditCardNumber.value);
// ///}}})





//  // else {
//     //Mostrando si la tarjeta es valida
//    // alert(validator.isValid(creditCardNumber))

//   //}

  console.log(validator)