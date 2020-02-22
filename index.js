const https = require('https');

function fetch(url) {
    return new Promise((res, rej) => {
        https.get('https://timchen.tk/api/' + url, resp => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                res(JSON.parse(data));
            });

        }).on("error", (err) => {
            rej("Error: " + err.message);
        });
    })
}



module.exports = {
    async random() {
        return await fetch('random');
    },

    async all() {
        return await fetch('all')
    },

    async id(id) {
        return await fetch('id/' + id)
    }
}