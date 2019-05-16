import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {


  selectedPlanet: Planet;
  planets: Planet[];
  countEl: number;
  currentPage: number = 1;


  constructor(private planetService: PlanetService) { }

  ngOnInit() {
  this.getPlanets();
}

  getPlanets(): void {
  this.planetService.getPlanets()
  .subscribe(planets => {
    let results = planets['results'];
    this.countEl = planets['count'];
    this.planets = results;});
}

nextPage(): void {
  this.currentPage++;
  this.planetService.getPlanetsPage(this.currentPage)
  .subscribe(planets => {
    let results = planets['results'];
    this.countEl = planets['count'];
    this.planets = results;});
}

prevPage(): void {
  this.currentPage--;
  if (this.currentPage <= 0){
    this.currentPage = 1;
  }
  this.planetService.getPlanetsPage(this.currentPage)
  .subscribe(planets => {
    let results = planets['results'];
    this.countEl = planets['count'];
    this.planets = results;});
}

goToPage(pageNum: number): void {
   this.currentPage = pageNum;
  this.planetService.getPlanetsPage(this.currentPage)
  .subscribe(planets => {
    let results = planets['results'];
    this.countEl = planets['count'];
    this.planets = results;});
}

passIndexValue(i){
   console.log(i);//clicked index

}
}
