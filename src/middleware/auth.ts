import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export default class Token {
  async auth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    try {
      if (!authHeader || !req || !req.headers.authorization) {
        throw new Error("Token inválido");
      }
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }

    try {
      const [, token] = authHeader.split(" ");
      await jwt.verify(token, "secret");
      next();
    } catch (err) {
      return res.json({ message: "Token inválido" });
    }
  }
  async sing(_id: string, email: string) {
    return jwt.sign({ user_id: _id, email }, "secret", { expiresIn: "1h" });
  }
}
