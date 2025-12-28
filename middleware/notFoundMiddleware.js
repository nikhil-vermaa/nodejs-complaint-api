function notFoundMiddleware(req, res, next){
    res.status(404)
    next(new Error("Route not found"))
}

module.exports = notFoundMiddleware