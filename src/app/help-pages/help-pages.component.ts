import { Component } from '@angular/core';

import { MENU_ITEMS } from './help-pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['help-pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      Hello World
    </ngx-one-column-layout>
  `,
})
export class HelpPagesComponent {

  menu = MENU_ITEMS;
}
