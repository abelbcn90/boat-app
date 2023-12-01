import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	form: any = {
		username: null,
		password: null
	};
	isLoggedIn = false;
	isLoginFailed = false;
	errorMessage = '';
	username = '';

	constructor(
		private authService: AuthService,
		private storageService: StorageService,
		private router: Router
	) { }

	ngOnInit(): void {
		if (this.storageService.isLoggedIn()) {
			this.isLoggedIn = true;
			const user = this.storageService.getUser();
			this.username = user.username;
		}
	}

	onSubmit(): void {
		const { username, password } = this.form;

		this.authService.login(username, password).subscribe({
			next: data => {
				this.storageService.saveUser(data);

				this.isLoginFailed = false;
				this.isLoggedIn = true;
				this.username = username;
				this.reloadPage();
			},
			error: err => {
				this.errorMessage = err.error.message;
				this.isLoginFailed = true;
			}
		});
	}

	reloadPage(): void {
//		window.location.reload();
		this.router.navigate(['/boats']);
	}
}
