const { program } = require('commander');
const fs = require('node:fs');

program
    .option('-i, --input <char>', 'path to file, which to read') 
    .option('-o, --output <char>', 'path to file, where result will be') 
    .option('-d, --display', 'show result in console'); 

program.parse();

const options = program.opts();
const filepath = options.input;

if (!filepath) {
    console.error('Please, specify input file');
    process.exit(1);
}

if (!fs.existsSync(filepath)) {
    console.error('Cannot find input file');
    process.exit(1);
}

const filecontent = fs.readFileSync(filepath, 'utf-8');

let jsonData;
try {
    jsonData = JSON.parse(filecontent);
} catch (err) {
    console.error('Error parsing JSON:', err.message);
    process.exit(1);
}

const outputData = jsonData
    .filter(element => element.ku > 13 && element.value > 5) 
    .map(element => element.value); 

if (options.output && options.display) {
        fs.writeFileSync(options.output, outputData.join("\n")); 
        console.log(outputData.join("\n"));
    } else {
        if (options.output) {
            fs.writeFileSync(options.output, outputData.join("\n")); 
        }
        if (options.display) {
            console.log(outputData.join("\n")); 
        }
    }