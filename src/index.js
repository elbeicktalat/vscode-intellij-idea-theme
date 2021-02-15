const fs = require('fs');
const colors = require('./colors.js');

// create a JSON object
let theme = {
    "name": "intellij",
    "type": "light",
    colors,
    //Todo: add token Colors for each language into separate files.
};

// convert JSON object to string
let json = JSON.stringify(theme);

// write JSON string into a file
fs.writeFile('./themes/intellij-color-theme.json', json,
    (_) => console.log("JSON file is saved.")
);
