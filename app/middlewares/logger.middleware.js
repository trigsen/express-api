const { finished } = require('stream');

const logger = (req, res, next) => {
    const { method, url } = req;
    const start = Date.now();
    next();

    finished(res, () => {
        const ms = Date.now() - start;
        const { statusCode } = res;
        console.log(`${method} ${url} ${statusCode} [${ms} ms]`);
    });
}

module.exports = { logger };