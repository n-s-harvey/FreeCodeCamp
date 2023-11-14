/**
 * * Closure: a function always has access to the context in which it was created
 * * In the below example, weight is not accessible to the outside sceope
 * * However, getWeight is within the same scope
 */

function Bird() {
    let weight = 15;

    this.getWeight = function() {
        return weight;
    }
    
}