/**
 * * A mixin is a style choice for when unrelated objects can use the same methods
 */

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj) {
    obj.glide = function() {
        console.log("Flying, wooosh!");
    }
}
glideMixin(bird);
glideMixin(boat);