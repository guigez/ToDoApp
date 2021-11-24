import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private url: string = 'http://localhost:3333';
  private token: string;
  httpOptions: any = {};
  
  constructor(private http: HttpClient, private auth: AuthService) { 
  }

  /* Create */
  createBoard(board: any): Observable<any>{
    this.token = this.auth.getToken();

    this.httpOptions = {
      Headers: new Headers({
        'Content-Type': 'application/json'
      }),
      'Authorization':  `Bearer ${this.token.substr(1,this.token.length -2)}`
    }
    
    return this.http.post<any>(`${this.url}/board`, board, {headers: this.httpOptions});
  }

  createTask(task: any): Observable<any>{
    this.token = this.auth.getToken();

    this.httpOptions = {
      Headers: new Headers({
        'Content-Type': 'application/json'
      }),
      'Authorization':  `Bearer ${this.token.substr(1,this.token.length -2)}`
    }
    
    return this.http.post<any>(`${this.url}/task`, task, {headers: this.httpOptions});
  }

  createUser(user: {name:string, email:string, password:string }): Observable<any>{
    return this.http.post<any>(`${this.url}/user`, user);
  }

  /* Update */
  updateBoard(board: {title: string, id:string}){
    this.token = this.auth.getToken();

    this.httpOptions = {
      Headers: new Headers({
        'Content-Type': 'application/json'
      }),
      'Authorization':  `Bearer ${this.token.substr(1,this.token.length -2)}`
    }
    
    return this.http.put(`${this.url}/board/update/${board.id}`, board, {headers: this.httpOptions});
  }

  updateStatusTask(task: any){
    this.token = this.auth.getToken();

    this.httpOptions = {
      Headers: new Headers({
        'Content-Type': 'application/json'
      }),
      'Authorization':  `Bearer ${this.token.substr(1,this.token.length -2)}`
    }
    
    return this.http.put(`${this.url}/task/status/${task._id}`, task, {headers: this.httpOptions});
  }

  updateTask(task: any): Observable<any>{
    const authtoken = this.auth.getToken();

    this.httpOptions = {
      Headers: new Headers({
        'Content-Type': 'application/json'
      }),
    }
    
    return this.http.put(`${this.url}/task/update/${task.taskId}`, task);
  }
  /* Delete */

  deleteBoard(board: any){
    this.token = this.auth.getToken();

    this.httpOptions = {
      Headers: new Headers({
        'Content-Type': 'application/json'
      }),
      'Authorization':  `Bearer ${this.token.substr(1,this.token.length -2)}`
    }
    
    this.http.delete(`${this.url}/board/delete/${board._id}`, {headers: this.httpOptions})
  
  }

  deleteTask(task: any){
    this.token = this.auth.getToken();

    this.httpOptions = {
      Headers: new Headers({
        'Content-Type': 'application/json'
      }),
      'Authorization':  `Bearer ${this.token.substr(1,this.token.length -2)}`
    }

    return this.http.delete(`${this.url}/task/delete/${task._id}/${task.board_id}`, {headers: this.httpOptions});

  }

  /* List */
  listBoardsByUser(userId: string) : Observable<any> {
    this.token = this.auth.getToken();

    this.httpOptions = {
      Headers: new Headers({
        'Content-Type': 'application/json'
      }),
      'Authorization':  `Bearer ${this.token.substr(1,this.token.length -2)}`
    }
    
    return this.http.get<any>(`${this.url}/user/listBoards/${userId}`, {headers: this.httpOptions});

  }

  listTasks(boardId: string): Observable<any>{

    this.token = this.auth.getToken();

    this.httpOptions = {
      Headers: new Headers({
        'Content-Type': 'application/json'
      }),
      'Authorization':  `Bearer ${this.token.substr(1,this.token.length -2)}`
    }
    
    return this.http.get<any>(`${this.url}/board/listTask/${boardId}`, {headers: this.httpOptions})
  }
}
