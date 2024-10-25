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

const filecontent = fs.readFileSync(filepath, 'utf-8');

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


