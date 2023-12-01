import { Component, Input, OnInit } from '@angular/core';
import { BoatService } from 'src/app/_services/boat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Boat } from 'src/app/models/boat.model';

@Component({
	selector: 'app-boat-details',
	templateUrl: './boat-details.component.html',
	styleUrls: ['./boat-details.component.css'],
})
export class BoatDetailsComponent {
	@Input() viewMode = false;

	@Input() currentBoat: Boat = {
		name: '',
		description: ''
	};

	message = '';

	constructor(
		private boatService: BoatService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit(): void {
		if (!this.viewMode) {
			this.message = '';
			this.getBoat(this.route.snapshot.params['id']);
		}
	}

	getBoat(id: string): void {
		this.boatService.get(id).subscribe({
			next: (data) => {
				this.currentBoat = data;
				console.log(data);
			},
			error: (e) => console.error(e)
		});
	}

	updateBoat(): void {
		this.message = '';

		this.boatService
			.update(this.currentBoat.id, this.currentBoat)
			.subscribe({
				next: (res) => {
					console.log(this.currentBoat.name)
					console.log(res);
					this.message = res.message
						? res.message
						: 'This boat was updated successfully!';
				},
				error: (e) => console.error(e)
			});
	}

	deleteBoat(): void {
		this.boatService.delete(this.currentBoat.id).subscribe({
			next: (res) => {
				console.log(res);
				this.router.navigate(['/boats']);
			},
			error: (e) => console.error(e)
		});
	}
}
