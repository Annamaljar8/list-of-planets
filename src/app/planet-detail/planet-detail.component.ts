import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Planet }         from '../planet';
import { PlanetService }  from '../planet.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  @Input() planet: Planet;



  constructor(
    private route: ActivatedRoute,
    private planetService: PlanetService,
    private location: Location
  ) { }

  ngOnInit(): void {
  this.getPlanet();
}


getPlanet(): void {
  const i = +this.route.snapshot.paramMap.get('i');
//  this.planet =  this.planetService.getPlanet(i);
  this.planetService.getPlanet(i)
     .subscribe(planet => {
          this.planet = planet;
          });
}
goBack(): void {
  this.location.back();
}
}
