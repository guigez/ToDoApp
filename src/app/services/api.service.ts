import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from '../../models/Board';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'http://localhost:3333';
  httpOptions = {
    headers: new HttpHeaders ({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  /* Create */
  createBoard(board: any): Observable<any>{
    return this.http.post<any>(`${this.url}/board`, board);
  }

  createTask(task: any): Observable<any>{
    return this.http.post<any>(`${this.url}/task`, task);
  }

  createUser(user: {name:string, email:string, password:string }): Observable<any>{
    console.log(user);
    return this.http.post<any>(`${this.url}/user`, user);
  }

  /* Update */
  updateBoard(board: {title: string, id:string}){
    return this.http.put(`${this.url}/board/update/${board.id}`, board, this.httpOptions);
  }

  updateStatusTask(task: any){
    return this.http.put(`${this.url}/task/status/${task._id}`, task, this.httpOptions);
  }

  /* Delete */

  deleteBoard(){

  }

  deleteTask(){

  }

  /* List */
  listBoardsByUser(userId: string) : Observable<any> {
    return this.http.get<any>(`${this.url}/user/listBoards/${userId}`)
  }

  listTasks(boardId: string): Observable<any>{
    return this.http.get<any>(`${this.url}/board/listTask/${boardId}`)
  }
}
