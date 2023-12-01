import { Component, OnInit } from '@angular/core';
import { Boat } from 'src/app/models/boat.model';
import { BoatService } from 'src/app/_services/boat.service';

@Component({
	selector: 'app-boats-list',
	templateUrl: './boats-list.component.html',
	styleUrls: ['./boats-list.component.css'],
})
export class BoatsListComponent {
	boats?: Boat[];
	currentBoat: Boat = {};
	currentIndex = -1;
	name = '';

	constructor(private boatService: BoatService) { }

	ngOnInit(): void {
		this.retrieveBoats();
	}

	retrieveBoats(): void {
		this.boatService.getAll().subscribe({
			next: (data) => {
				this.boats = data;
				console.log(data);
			},
			error: (e) => console.error(e)
		});
	}

	refreshList(): void {
		this.retrieveBoats();
		this.currentBoat = {};
		this.currentIndex = -1;
	}

	setActiveBoat(boat: Boat, index: number): void {
		this.currentBoat = boat;
		this.currentIndex = index;
	}

	removeAllBoats(): void {
		this.boatService.deleteAll().subscribe({
			next: (res) => {
				console.log(res);
				this.refreshList();
			},
			error: (e) => console.error(e)
		});
	}

	searchName(): void {
		this.currentBoat = {};
		this.currentIndex = -1;

		this.boatService.findByName(this.name).subscribe({
			next: (data) => {
				this.boats = data;
				console.log(data);
			},
			error: (e) => console.error(e)
		});
	}
}
