const validator = {
    isValid: function (creditCardNumber) {
        let cardArr = creditCardNumber.split("").reverse();
        // console.log({ cardArr });
        for (let i = 0; i < cardArr.length; i++) {
            if (i % 2 === 1) {
                let acumulador = cardArr[i] * 2;
                if (acumulador > 9) {
                    cardArr[i] = acumulador.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b), 0)
                } else {
                    cardArr[i] = acumulador;
                }

            }
        }

        let suma = 0;
        for (let i = 0; i < cardArr.length; i++) {
            suma += parseInt(cardArr[i]);
        }

        //console.log({ suma })
        //console.log({ cardArr })

        if (suma % 10 === 0) {
          // alert("tarjeta Valida");
          return true;
        }else { 
            //alert("tarjeta invalida");
            return false;
        }


    
    },

    maskify: function (creditCardNumber) {
        const mask = creditCardNumber.length; 
        return((""+ creditCardNumber).slice(0, mask -4).replace(/./g, "#") + (""+ creditCardNumber).slice( mask -4)
        );
    }

}

export default validator;