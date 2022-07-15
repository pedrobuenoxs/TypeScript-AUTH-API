import jwt from "jsonwebtoken";

export default class Token {
  async auth(token:string){
    
  }
  async verify(token: string) {
    jwt.verify(token, "secret");
  }
  async sing(_id: string, email: string) {
    return jwt.sign({ user_id: _id, email }, "secret", { expiresIn: "1h" });
  }
}
