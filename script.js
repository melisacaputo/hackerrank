// Complete the 'CardNumberAnalyzer' class below. ----------------------------------------------------------------------
// Add as little or as many functions or extra code blocks as you see fit.

class CardNumberAnalyzer { 
    // Store the card number here. 
    // Validate its format and throw an error if necessary.
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }

   /*  get cardNumber(){
        return this._cardNumber;
    }

    set cardNumber(newCardNumber){
        if (/\D\S/g.test(newCardNumber)) {
            throw "Not a valid card number";
        }else if (/^3|4|5/.test(newCardNumber) == false){
            throw 'Unknown card brand';
        }else {
            this._cardNumber = newCardNumber;
        }
    } */
 
    hasValidCardNumberLength() { 
        // Return true if the card number's length is valid
        // for the card brand that was detected, otherwise false.
        if (/^3/.test(this.cardNumber) && (this.cardNumber).match(/\S/g).length == 15) {
            console.log(this.cardNumber);
            return true;
        } else if (/^4/.test(this.cardNumber) && (this.cardNumber).match(/\S/g).length == 16) {
            return true;
        } else if (/^5/.test(this.cardNumber) && (this.cardNumber).match(/\S/g).length == 16) {
            return true;
        } else {
            return false;
        }
    }

    getCardBrand() {
        if (/^3/.test(this.cardNumber)) {
            return "American Express";
        } else if (/^4/.test(this.cardNumber)) {
            return "Visa";
        } else if (/^5/.test(this.cardNumber)) {
            return "Master Card";
        }
    }

    getExpectedLength() {
        if (/^3/.test(this.cardNumber)) {
            return 15;
        } else if (/^4|5/.test(this.cardNumber)) {
            return 16;
        }
    }

    getCodeLocation() {
        if (/^3/.test(this.cardNumber)) {
            return "Front";
        } else if (/^4|5/.test(this.cardNumber)) {
            return "Back";
        }
    }

    getCodeLength() {
        if (/^3/.test(this.cardNumber)) {
            return 4;
        } else if (/^4|5/.test(this.cardNumber)) {
            return 3;
        }
    }


    getCardDetails() {
        let brand = this.getCardBrand();
        let length = this.getExpectedLength();
        let valid = this.hasValidCardNumberLength();
        let location = this.getCodeLocation();
        let codeLength = this.getCodeLength();

        return {
            card: {
                number: (this.cardNumber).match(/\S/g).join(""),
                bin: this.cardNumber.slice(0, 7),
                brand: brand,
                expectedLength: length,
                isValid: valid
            },
            securityCode: {
                location: location,
                expectedLength: codeLength
            }
        }
    };
}

const card = new CardNumberAnalyzer ("4569 4056 5996 5869");
let prueba = card.getCardDetails();
console.log(prueba);


//Fix the code below ---------------------------------------------------------------------------------------------------
function makeItBark(str) {
    function Dog(name) {
        this.name = name;
        this.bark = function () {
            return this.name + " says wuf wuf"
        };
    };

    let obj = new Dog(str);
    return obj.bark();
}

console.log(makeItBark("scooby"));