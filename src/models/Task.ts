import { Board } from "./board";

interface Task{
  _id?: String;
  title: String;
  status: String;
  createdAt?: Date;
  board?: String;
}

export { Task }