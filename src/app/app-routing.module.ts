import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

import { BoatsListComponent } from './boats-list/boats-list.component';
import { BoatDetailsComponent } from './boat-details/boat-details.component';
import { AddBoatComponent } from './add-boat/add-boat.component';

const routes: Routes = [
	{ path: 'boats', component: BoatsListComponent },
	{ path: 'boats/:id', component: BoatDetailsComponent },
	{ path: 'add', component: AddBoatComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
