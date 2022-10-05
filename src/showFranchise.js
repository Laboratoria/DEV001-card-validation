const imgBank = {
  visa: "https://i.imgur.com/kANuxSk.png",
  mastercard: "https://i.imgur.com/PHPH4Kx.jpg",
  dinersclub: "https://i.imgur.com/phf08kP.png",
  americanexpress: "https://i.imgur.com/99bn97r.png",
};

const showFranchise = {
  validateFranchise: (inputNumbervalue, labelFranchiseBank) => {
    inputNumbervalue.addEventListener("keyup", () => {
      let numberCardValue = inputNumbervalue.value;
      let firstTwoNumbers = numberCardValue.substring(0, 2);

      if (numberCardValue == "") {
        labelFranchiseBank.innerHTML = "LOGO";
      }

      if (numberCardValue[0] == "4") {
        labelFranchiseBank.innerHTML = `<img src="${imgBank.visa}"
                alt="symbol-card"/>`;
      }

      if (
        firstTwoNumbers == "51" ||
        firstTwoNumbers == "52" ||
        firstTwoNumbers == "53" ||
        firstTwoNumbers == "54" ||
        firstTwoNumbers == "55"
      ) {
        labelFranchiseBank.innerHTML = `<img src="${imgBank.mastercard}"
                alt="symbol-card"/>`;
      }

      if (firstTwoNumbers == "36" || firstTwoNumbers == "38") {
        labelFranchiseBank.innerHTML = `<img src="${imgBank.dinersclub}"
                alt="symbol-card"/>`;
      }

      if (firstTwoNumbers == "34" || firstTwoNumbers == "37") {
        labelFranchiseBank.innerHTML = `<img src="${imgBank.americanexpress}"
                alt="symbol-card"/>`;
      }
    });
  },
};

export default showFranchise;
