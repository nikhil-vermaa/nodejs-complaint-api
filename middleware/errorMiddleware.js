function errorHandler(error, req, res, next){
  const statusCode = res.statuscode === 200?500 : res.statusCode

  res.status(statusCode).json({
    success : false,
    message : error.message
  })
}

module.exports = errorHandler