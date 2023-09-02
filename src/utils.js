function errorHandler(err, req, res, next) {
    const statusCode = err.status || 500;
    err.message = err.message ? err.message : "Empty error message";

    console.log(err, {
        status: statusCode,
        method: req.method,
        route: req.path,
    });

    if (err.data) {
        res.status(statusCode).send(err.data);
        return;
    }

    res.status(statusCode).json(err);
}

module.exports = {
    errorHandler,
};