var miles = window.prompt("Please Enter the estimated number of miles per year that you drive");
var cost = window.prompt("Please Enter the current cost of a gallon of gasoline in your area");
function calculate(miles,cost,mpg) {
  var totalcost=(miles/mpg)*cost

  document.write("To drive a car with an MPG rating of $"+mpg+" for " +miles+ " miles at $"+cost+" per gallon would cost $" + totalcost+"<br>");
}
  
calculate(miles,cost,12)
calculate(miles,cost,17)
calculate(miles,cost,26)
calculate(miles,cost,29)