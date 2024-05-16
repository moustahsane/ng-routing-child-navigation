import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  user$: any
  constructor(private usersSerivce: UserService, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(res => {
      const userId = res['id']
      this.user$ = this.usersSerivce.getUserById(userId).pipe(map((res: any) => res.results[0]))
    })


  }
}
