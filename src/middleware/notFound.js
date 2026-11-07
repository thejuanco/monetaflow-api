import ApiError from "../utils/apiError.js";

export const notFound = () => {
    next(
        new ApiError(
            404,
            `Ruta no encontrada: ${req.method} ${req.originalUrl}`
        )
    )
}