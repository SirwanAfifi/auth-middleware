import { Request, Response, NextFunction } from "express";

export class AuthenticationMiddleware {
  init(request: Request, response: Response, next: NextFunction) {
    try {
      const header = request.headers["authorization"];
      const token = header.split(" ")[0];
      if (!token) {
        return response.sendStatus(401);
      }

      // Handle token

      next();
    } catch {
      return response.sendStatus(401);
    }
  }
}
