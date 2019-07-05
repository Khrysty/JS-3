Task-3 https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript?fbclid=IwAR0as7Yh9cTOpASrFZeWhLqM-kmADDTyTBoCegUOs4cUuvqQCPb2Aad-CEg
function buildFun(n) {
  var res  = [];
  for (let i = 0; i< n; i++) {
    var assert = function() {
      return i;               
    };
   
   res.push(assert);
  }
 
  return res;
}


Task-1 https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript?fbclid=IwAR2CpeVXj0qAYrefPTwBH9zWCKBpot-YAvL-vhTN7a-5N1Fy3h-c5F9wQSU

function circleCircumference(circle) {
return ( 2 * 3.14159265359 * circle.radius);
}
