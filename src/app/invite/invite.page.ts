import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
})
export class InvitePage implements OnInit {
   

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  invite(email: string){
    const data = {
      emailUser: email,
      boardId: JSON.parse(localStorage.getItem('boardId'))
    }

    console.log(data)
    this.api.invite(data).subscribe();
    this.router.navigate(['/to-do']);
  }
}
