
function temperatureConvert() {

   let input = parseFloat(document.getElementById("input").value);
   let unit = document.getElementById("unit").value;
   let convertTo = document.getElementById("convertTo").value;

   let result;

   if (unit == 'Celsius' && convertTo == 'Fahrenheit') {
      result = input * 9/5 + 32;
   }

   else if (unit == 'Fahrenheit' && convertTo == 'Celsius') {
      result = (input - 32) * 5 / 9;
      result = result.toFixed(2);
   }
   else {
      result = input;
   }


   result = parseFloat(result);
   //result = result.toFixed(2);

   //console.log(result);

   document.getElementById("result").innerHTML = result;

   document.getElementById("degreeSymbol").innerHTML = "&deg";
   //symbol = document.getElementById("degreeSymbol").innerHTML;


   document.getElementById("resultUnit").innerHTML = convertTo.charAt(0);
   //resultUnit = document.getElementById("degreeSymbol").innerHTML;



}