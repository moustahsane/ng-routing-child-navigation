import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users$: any

  constructor(private userService: UserService, private router: ActivatedRoute) {
    this.users$ = this.userService.getAllUsers().pipe(map((res: any) => res.results))
  }
  hideParent() {

    return location?.pathname != "/users"
  }


}
