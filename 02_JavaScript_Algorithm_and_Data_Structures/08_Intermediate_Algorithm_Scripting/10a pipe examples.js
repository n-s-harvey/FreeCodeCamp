pipe = (...functions) => (value) => {
  return functions.reduce((currentValue, currentFunction) => {
    return currentFunction(currentValue);
  }, value);
};

let pipe = 
  (...functions) => 
  (currentValue) => 
    functions.reduce((val, func) => func(val), currentValue);
