const p = require('path');
const fs = require('fs');

//https://stackoverflow.com/questions/2663404/webpack-dev-server-running-on-https-web-sockets-secure
//https://stackoverflow.com/a/56844743/6033723
//https://github.com/FiloSottile/mkcert

module.exports = {
    "mode": "development",
    "devServer": {
        https: true,
        historyApiFallback: true,//otherwise routing wont work
        key: fs.readFileSync('private.key'),
        cert: fs.readFileSync('private.crt'),
        ca: fs.readFileSync('private.pem'),        
        contentBase: p.join(__dirname, 'dist'),
        compress: true,
        port: 5000
    }
}
