import { Request, Response, NextFunction } from "express";

export class AuthenticationMiddleware {
  init(request: Request, response: Response, next: NextFunction) {
    try {
      const header = request.headers["authorization"];
      console.log(header);

      next();
    } catch {
      response.sendStatus(401);
      response.end();
    }
  }
}
