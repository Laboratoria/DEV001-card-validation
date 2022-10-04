const onlyNumbers = /^[0-9-+()]*$/;
const onlyLetters = /^[a-zA-Z ]+$/;

const inputValidator = {
  validatornumbers: (numberinput, textError) => {
    //console.log(onlyNumbers.test("ffssaf1"));
    numberinput.addEventListener("keyup", () => {
      const validate = onlyNumbers.test(numberinput.value);
      if (validate === false) {
        textError.innerText = "Error! Only Numbers";
        textError.classList.remove("hide");
      } else {
        textError.innerText = "";
        textError.classList.add("hide");
      }
    });
  },
  validatorname: (nameinput, textErrorName, spanCardName) => {
    nameinput.addEventListener("keyup", () => {
      // console.log(onlyLetters.test("ffssaf dsfds"));
      const nameValidate = onlyLetters.test(nameinput.value);

      if (nameValidate === false) {
        textErrorName.innerText = "Error! Only Letters";
        textErrorName.classList.remove("hide");
      } else {
        textErrorName.innerText = "";
        textErrorName.classList.add("hide");
      }
      spanCardName.innerText = nameinput.value;

    });
  },
  validatorcvv: (inputCvv, textCvv, spanCardCvv) => {
    inputCvv.addEventListener("keyup", () => {
      const validateCvv = onlyNumbers.test(inputCvv.value);
      if (validateCvv === false) {
        //console.log("!faf");
        textCvv.innerText = "Error! Only Numbers";
        textCvv.classList.remove("hide");
      } else {
        textCvv.innerText = "";
        textCvv.classList.add("hide");
      }
      spanCardCvv.innerText = inputCvv.value;
    });
  },
};

export default inputValidator;
