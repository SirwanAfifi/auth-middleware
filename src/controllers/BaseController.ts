import { Request, Response, NextFunction } from "express";

export abstract class BaseController {
  constructor(private request: Request, private response: Response) {
    this.index(request, response);
  }

  index(request: Request, response: Response) {
    return this.response.send({
      name: "Index",
    });
  }
}
