const axios = require("axios");
const { exec } = require("child_process");

setInterval( () => {
    exec("heroku ps:scale worker=2", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}, 1000*60);

setInterval( () => {
    axios.get("geniesbotslogin.glitch.me/testheroku")   
}, 1000*30);
