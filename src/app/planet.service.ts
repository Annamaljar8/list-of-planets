import { Injectable } from '@angular/core';
import { Planet } from './planet';
import { PLANETS } from './mock-planets';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()

export class PlanetService {

  private planetsUrl = 'https://swapi.co/api/planets/';  // URL to web api
  private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  getPlanets(): Observable<Planet[]> {
    //var data;
   return this.http.get<Planet[]>(this.planetsUrl).pipe(
      tap(data => data['results'])

    );//.subscribe(x => {console.log(x['results']);data = x['results']});
//  console.log(data);
//  return of(PLANETS);
}

getPlanetsPage(page: number): Observable<Planet[]> {
  //var data;
 return this.http.get<Planet[]>(this.planetsUrl+'?page='+page).pipe(
    tap(data => data['results'])

  );//.subscribe(x => {console.log(x['results']);data = x['results']});
//  console.log(data);
//  return of(PLANETS);
}

/** GET hero by id. Will 404 if id not found */
getPlanet(i: number): Observable<Planet> {
  const url = `${this.planetsUrl}${i}`;
  console.log(url);
  return this.http.get<Planet>(url).pipe(
    tap(data => data['results']),
  //  catchError(this.handleError<Planet>(`getPlanet id=${id}`))
  );

}

//getPlanet(id: number): Observable<Planet> {
//  this.messageService.add(`PlanetService: fetched planet i=${id}`);
//  let planets: Planet[] = [];
//  this.getPlanets()
//    .subscribe(data => {
      //console.log(planets);
//     let results = data['results'];
//      planets = results;});
//return of(planets.find(planet => planet.id === id));

  /*let x = 0;
  for (var planet in planets) {
    let resPlanet: Planet = planet;
      if(x == index){
        return of(planet);
      }
      x++;
  }*/
  //return this.planets.get(index);
}

//getPlanet(i: number): Observable<Planet> {
//this.messageService.add(`PlanetService: fetched planet i=${i}`);
  //return of(PLANETS.find(planet => i === i));
//}
//private log(message: string) {
//  this.messageService.add('PlanetService: ' + message);
//}
//}
