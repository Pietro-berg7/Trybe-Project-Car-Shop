import { Request, Response, NextFunction } from 'express';
import AppError from '../Utils/AppError';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { status = 500, message } = error as AppError;

    res.status(status).json({ message });
    
    next();
  }
}

export default ErrorHandler;
