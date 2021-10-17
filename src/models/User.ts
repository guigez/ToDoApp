import { Board } from "./board";

interface User{
  _id: String;
  name: String;
  email: String;
  boards: Board[];
}

export { User }