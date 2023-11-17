// Asynchronous
const fs = require('fs');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Failed to read File')
        return;
    }
    console.log(data)
}
fs.readFile('todo.txt', 'UTF-8', fileReadCallback);

// Synchronous
const fs = require('fs');
 
const data = fs.readFileSync('todo.txt', 'UTF-8');
console.log(data);