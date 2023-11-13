/**
 * * This "packs" all the mixin functions as properties of an object
 * * Seems irrelevant given that you can export modules...
 */

let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();