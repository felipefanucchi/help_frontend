import { Component, OnInit } from '@angular/core';
import { ADMIN_MENU_ITEMS } from './admin/admin-menu';
import { PROFESSIONAL_MENU_ITEMS } from './professional/professional-menu';
import { AuthenticationService } from '../services';
import { NbMenuItem } from '@nebular/theme';
import { User } from '../models/User';
import { HELP_MENU_ITEMS } from './help-crew/help-crew-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['dashboard.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class DashboardComponent implements OnInit {
  menu: NbMenuItem[];
  currentUser: User;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.currentUser = this.authenticationService.currentUserValue;
    
    if (!this.currentUser) return;

    switch(this.currentUser.role) {
      case 'admin':
        this.menu = ADMIN_MENU_ITEMS;
        break;
      case 'profesional':
        this.menu = PROFESSIONAL_MENU_ITEMS;
        break;
      case 'help':
        this.menu = HELP_MENU_ITEMS;
        break;
      default:
        this.menu = [];
    }
  }
}
