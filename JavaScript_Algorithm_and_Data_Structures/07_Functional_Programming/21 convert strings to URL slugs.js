// Only change code below this line
function urlSlug(title) {

    const wordList = ((string) => {
        return string.match(/\w+/g);
    })(title);

    const lowerCaseList = (list => {
        return list.map(
            (element, index, array) => {
                return element.toLowerCase();
            }
        );
    })(wordList);

    const slug = (list => {
        return list.join("-");
    })(lowerCaseList);

    return slug;

}
// Only change code above this line
let output = urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
console.log(output);
console.log(urlSlug(" Winter Is Coming"));