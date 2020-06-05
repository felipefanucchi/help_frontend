import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil, filter } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { AuthenticationService } from '../../../services';
import { Role, Professional, Customer, Help, Admin } from '../../../models';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { HandleUserType } from '../../../helpers';
import { Router } from '@angular/router';

@Component({
	selector: 'ngx-header',
	styleUrls: ['./header.component.scss'],
	templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

	private destroy$: Subject<void> = new Subject<void>();
	userPictureOnly: boolean = false;
	user: any;

	currentTheme = 'default';

	userMenu = [{ title: 'Meu Perfil' }, { title: 'Sair', action: () => this.logout() }];

	constructor(
		private sidebarService: NbSidebarService,
		private menuService: NbMenuService,
		private themeService: NbThemeService,
		private layoutService: LayoutService,
		private authenticationService: AuthenticationService,
		private router: Router,
		private http: HttpClient
	) { }

	ngOnInit() {
		this.setCurrentUser();

		this.menuService.onItemClick()
			.subscribe(item => item['action']());
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

	changeTheme(themeName: string) {
		this.themeService.changeTheme(themeName);
	}

	toggleSidebar(): boolean {
		this.sidebarService.toggle(true, 'menu-sidebar');
		this.layoutService.changeLayoutSize();

		return false;
	}

	navigateHome() {
		this.menuService.navigateHome();
		return false;
	}

	setCurrentUser(): void {
		let currentUser;
		const {
			role,
			email
		} = this.authenticationService.currentUserValue;
		console.log(this.authenticationService.currentUserValue);
		let endpoint: string;

		switch (role) {
			case 'admin':
				endpoint = 'admin';
				break;
			case 'profesional':
				endpoint = 'profesionals';
				break;
			case 'help':
				endpoint = 'help'
			case 'customer':
				endpoint = 'customers';
				break;
		}

		this.getCurrentUser(endpoint, email)
			.subscribe(user => this.user = user);
	}

	getCurrentUser(endpoint: string, email: string): Observable<any> {
		return this.http.get(`${environment.api}/accounts/${endpoint}/`, {
			params: { email }
		});
	}

	logout(): void {
		this.authenticationService.logout();
		this.router.navigate(['/']);
	}
}
