export const errorHandler = (err, req, res, next) => {
    if(req.headersSent){
        return next(err)
    }

    const statusCode = err.statusCode || 500

    if(statusCode >= 500){
        console.error(err)
    }

    res.status(statusCode).json({
        success: false,
        error: {
            message: 
                statusCode >= 500 
                ? "Error interno del servidor"
                : err.message
        }
    })
}