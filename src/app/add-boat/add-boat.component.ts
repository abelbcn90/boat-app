import { Component } from '@angular/core';
import { Boat } from 'src/app/models/boat.model';
import { BoatService } from 'src/app/_services/boat.service';

@Component({
	selector: 'app-add-boat',
	templateUrl: './add-boat.component.html',
	styleUrls: ['./add-boat.component.css'],
})
export class AddBoatComponent {
	boat: Boat = {
		name: '',
		description: '',
	};
	submitted = false;

	constructor(private boatService: BoatService) { }

	saveBoat(): void {
		const data = {
			name: this.boat.name,
			description: this.boat.description
		};

		this.boatService.create(data).subscribe({
			next: (res) => {
				console.log(res);
				this.submitted = true;
			},
			error: (e) => console.error(e)
		});
	}

	newBoat(): void {
		this.submitted = false;
		this.boat = {
			name: '',
			description: ''
		};
	}
}
