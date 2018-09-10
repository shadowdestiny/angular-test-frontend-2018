import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menutop.component.html',
  styleUrls: ['./menutop.component.scss']
})
export class MenuTopComponent implements OnInit {

  public _type_menu: string;

  constructor(public router: Router) { }

  @Input()
  set type_menu(type_menu: string) {
    this._type_menu = (type_menu && type_menu.trim()) || '<no type_menu set>';
  }

  ngOnInit() {
  }

  clickHome() {
    this.router.navigate(['/home'])
  }

  clickAbout() {
    this.router.navigate(['/about'])
  }

  clickContact() {
    this.router.navigate(['/contact'])
  }

}
