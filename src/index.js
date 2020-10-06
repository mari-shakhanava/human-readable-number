module.exports = function toReadable (number) {
  var zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
      'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
      'ninety'];
  var stringOfGivenNumber = number.toString();


  if (number <20){
      return zeroToNineteen[number];
  }

  if (stringOfGivenNumber.length === 2){
      if (stringOfGivenNumber[1] === '0'){
          return  tens[stringOfGivenNumber[0]];
      } else
      return tens[stringOfGivenNumber[0]]+' '+zeroToNineteen[stringOfGivenNumber[1]];
  }

  if (stringOfGivenNumber.length === 3){
      if (stringOfGivenNumber[1] === '0' && stringOfGivenNumber[2] === '0' ) {
          return zeroToNineteen[stringOfGivenNumber[0]] + ' hundred';
      } else

      return zeroToNineteen[stringOfGivenNumber[0]]+' hundred '+ toReadable(+(stringOfGivenNumber[1]+stringOfGivenNumber[2]));

      }
  }


