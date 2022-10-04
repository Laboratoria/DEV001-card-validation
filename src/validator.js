const validator = {
  isValid: (numberCard) => {
    // * Lógica para comprobar si la tarjeta es valida
    let arrayNumbercard = numberCard.split("");
    let newArrayNumberCard = [];

    for (let i = 0; i < arrayNumbercard.length; i++) {
      if ((i + 1) % 2 == 0) {
        let arrayElement = parseInt(arrayNumbercard[i] * 2);

        if (arrayElement > 9) {
          let elementinString = arrayElement.toString();
          let elementinArray = elementinString.split("");
          let sum = 0;

          for (let i = 0; i < elementinArray.length; i++) {
            sum += parseInt(elementinArray[i]);
          }
          newArrayNumberCard.push(sum);

        } else {
          newArrayNumberCard.push(arrayElement);
        }

      } else {
        newArrayNumberCard.push(parseInt(arrayNumbercard[i]));
      }
    }

    //console.log(newArrayNumberCard);
    let sumNewArray = 0;
    for(let i=0; i < newArrayNumberCard.length; i++){
      sumNewArray += newArrayNumberCard[i];
    }

    //console.log(sumNewArray);
    if(sumNewArray % 10 == 0){
      return true;
    }else{
      return false;
    }
  },
  maskify: (value) => {
    // * Lógica para hashear los números de la tarjeta y mostrar los últimos 4:
    let maskified = "";
    for (let i = 0; i <= value.length; i++) {
      if (i < value.length - 4) {
        maskified += value.replace(/[0-9A-Za-z]+/g, "#");
      } else {
        maskified += value.replace(/[0-9A-Za-z]+/g, value.charAt(i));
      }
    }
    return maskified;
  },
};

export default validator;
