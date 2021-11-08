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

  /* Update */
  updateBoard(){

  }

  updateTask(task: any){
    return this.http.put(`${this.url}/task/${task._id}`, JSON.stringify(task), this.httpOptions);
  }

  /* Delete */

  deleteBoard(){

  }

  deleteTask(){

  }

  /* List */
  listBoards() : Observable<Board[]> {
    return this.http.get<Board[]>(`${this.url}/listBoards`)
  }

  listTasks(boardId: string): Observable<any>{
    return this.http.get<any>(`${this.url}/${boardId}`)
  }
}
