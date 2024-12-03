import { Component, OnInit } from '@angular/core';
import { RacesService } from 'src/app/races/races.service';

@Component({
  selector: 'app-races-list',
  templateUrl: './races-list.page.html',
  styleUrls: ['./races-list.page.scss'],
})
export class RacesListPage implements OnInit {
  races: any[] = []; // Variabel untuk menyimpan data balapan

  constructor(private racesService: RacesService) {}

  ngOnInit() {
    this.fetchRaces();
  }

  fetchRaces() {
    this.racesService.getRaces().subscribe(
      (data) => {
        this.races = data; // Assign data dari API ke variabel races
      },
      (error) => {
        console.error('Failed to fetch races:', error);
      }
    );
  }
}
