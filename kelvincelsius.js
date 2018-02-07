let kelvin = 50; //create variable with temp in kelvin
var celsius = kelvin - 273;
convertcelsius = (kelvin) => {
  const celsius = kelvin - 273;
  return celsius;
}
convertcelsius(900);
//that part of the program converts kelvin to celsius


convertfarenheit = (celsius) => {
	var farenheit = celsius * (9/5) + 32;
  console.log("The temperature is " + farenheit + " degrees farenheit"); 
  //added floor to round the number and don't get a decimal number.
}
convertfarenheit(celsius);
