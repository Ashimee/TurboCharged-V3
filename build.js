const fs = require('fs');
const { exec } = require("child_process");

console.log('Building TS');
exec('npx tsc', (err) => {
    if (err) {
        console.error('Failed to run tsc.\n', err);
        return err;
    }
    console.log('Built TS');
    console.log('Webpacking...');
    exec('npx webpack', (err) => {
        if (err) {
            console.error('Failed to run webpack.\n', err);
            return err;
        }
        console.log('Reading credits..')
        fs.readFile('./src/CREDITS.js', (err, data) => {
            if (err) {
                console.error('Failed to read "src/CREDITS.js".\n', err);
                return err;
            }
            console.log('Read credits');
            const creditString = data;
            fs.readFile('./webpack/main.bundle.js', (err, data) => {
                if (err) {
                    console.error('Failed to read "webpack/main.bundle.js".\n', err);
                    return err;
                }
                console.log('Writing comment to file..');
                const finalString = `${creditString}\n/* Last build: ${Date.now()} */\n${data}`;
                fs.writeFile('./webpack/main.bundle.js', finalString, 'utf8', () => {});
                console.log('Deleting TS build files.');
                fs.rmSync('./dist', { recursive: true, force: true });
                console.log('Build complete');
            });
        });
    });
});