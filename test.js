const timchen = require('./index.js');

async function get() {
    console.log(await timchen.all(-1));
}

get();