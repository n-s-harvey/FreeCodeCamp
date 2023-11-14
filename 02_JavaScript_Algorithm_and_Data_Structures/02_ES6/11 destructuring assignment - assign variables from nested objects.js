/* 

? WHAT IS HAPPENING BELOW?
* The destructuring is looking for the named property
* before each colon.

* When the property is an object, it can be destructed again


*/

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

// Only change code above this line