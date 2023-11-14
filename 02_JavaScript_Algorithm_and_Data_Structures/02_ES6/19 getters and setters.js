/* 
? WHAT ARE WE LOOKING AT HERE?
* We are defining a class Thermostat (UpperCamelCase)
* It can be constructed with a temperature in Fahrenheit
* and we can also get and set the temperature

! GETTERS AND SETTERS
* get and set have different syntax in their 
* in-class definitions and access
* When they are called, they are written with dot notation
* and do not have parentheses
 */

// Only change code below this line
class Thermostat {
    constructor(tempInFahrenheit) {
        this._temperature = 
            5 / 9 * (tempInFahrenheit - 32);
    }

    get temperature() {
        return this._temperature;
    }

    set temperature(tempInCelsius) {
        this._temperature = tempInCelsius;
    }
    
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius