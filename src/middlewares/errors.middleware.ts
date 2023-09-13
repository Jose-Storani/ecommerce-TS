import { IError } from "../interfaces/Error.interface";
import { Response,NextFunction } from "express";

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack); // Log the error for debugging purposes.

  // Define an error response format.
  const errorResponse = {
    message: err.message || "Internal Server Error",
    statusCode: 500,
  };

  // Send the error response as JSON.
  res.status(500).json(errorResponse);
}
