const converter = require('convert-excel-to-json');
const fs = require('fs');

// Define the path to the XLSX file
const filePath = 'Design System Engineer Tokens (2).xlsx';

// Convert the XLSX file to JSON
const result = converter({
  sourceFile: filePath,
});

// Save the JSON data to a file
const jsonData = JSON.stringify(result);
fs.writeFileSync('output.json', jsonData, 'utf8');

console.log('Conversion complete.');
