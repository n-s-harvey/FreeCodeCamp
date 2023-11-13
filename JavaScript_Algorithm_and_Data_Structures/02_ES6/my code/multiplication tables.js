const X_AXIS = 17000;
const Y_AXIS = 17000;

function multiplicationTable(rows, cols) {
    
    const tableOutput = [];
    
    for (let i = 0; i < rows; i++) {

        tableOutput[i] = [];
        
        for (let j = 0; j < cols; j++) {
            tableOutput[i][j] = ((i + 1) * (j + 1));
        }
    }

    return tableOutput;
}
const startTime = Date.now();
// console.table(multiplicationTable(X_AXIS, Y_AXIS));
const output = multiplicationTable(X_AXIS, Y_AXIS);
const endTime = Date.now();
console.log(`Creating a table of ${X_AXIS} by ${Y_AXIS} took ${(endTime - startTime) / 1000} seconds.`);
// console.log(Object.keys(output).length);