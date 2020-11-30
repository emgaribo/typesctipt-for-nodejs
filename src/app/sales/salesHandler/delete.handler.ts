import { Request, RequestHandler, Response } from "express";

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    res.json({ message: "delete selling" });
  },
];
