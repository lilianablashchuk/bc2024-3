const { program } = require('commander');
const fs = require('node:fs');

program
    .requiredOption('-i, --input <char>', 'path to file, which to read') 
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


