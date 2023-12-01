import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { AddBoatComponent } from './add-boat/add-boat.component';
import { BoatDetailsComponent } from './boat-details/boat-details.component';
import { BoatsListComponent } from './boats-list/boats-list.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		ProfileComponent,

		AddBoatComponent,
		BoatDetailsComponent,
		BoatsListComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [httpInterceptorProviders],
	bootstrap: [AppComponent]
})
export class AppModule { }
