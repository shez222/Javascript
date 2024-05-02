function checkFloat(input) {
    return /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/.test(input);
  }
  
  function checkDigit(input) {
    return /^\d+$/.test(input);
  }
  
  function checkVar(input) {
    return /^[a-zA-Z_]+[a-zA-Z0-9_]*$/.test(input);
  }
  
  // Example usage
  console.log(checkFloat("3.14e-123")); // true
  console.log(checkDigit("42")); // true
  console.log(checkVar("answer")); // true
  