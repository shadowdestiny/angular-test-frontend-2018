import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../../e2e/app/common/services/authentication.service';

// import { AuthenticationService } from '../../auth/project-list/services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public _authService: AuthenticationService) {
  }

  ngOnInit() {

  }

  logout() {
    // this._authService.logout();
    // this.router.navigate(['/login']);
  }

}
