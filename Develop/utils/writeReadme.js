const fs = require("fs");

const writeReadMe = (filename, readmeText) => {
    fs.writeFile(filename, readmeText, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Written successfully");
        }
    });
};

module.exports = writeReadMe;