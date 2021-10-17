import { Task } from "./task";

interface Board{
  _id?: String;
  title: String;
  tasks?: Task[];
}

export { Board }