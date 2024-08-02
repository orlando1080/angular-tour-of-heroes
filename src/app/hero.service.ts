import { Injectable } from '@angular/core';

import { catchError, Observable, of, tap } from 'rxjs';

import { IHero } from './ihero.interface';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  public getHeroes(): Observable<IHero[]> {
    return this.http.get<IHero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<IHero[]>('getHeroes', []))
    );
  }

  public getHero(id: number): Observable<IHero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<IHero>(url).pipe(
      tap(_ => this.log('fetched hero id=${id}')),
      catchError(this.handleError<IHero>(`getHero id=${id}`,))
    );
  }

  public addHero(hero: IHero): Observable<IHero> {
    return this.http.post<IHero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: IHero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<IHero>('addHero'))
    );
  }

  public updateHero(hero: IHero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<IHero>(`updateHero id=${hero.id}`))
    );
  }

  public deleteHero(id: number): Observable<IHero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<IHero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<IHero>(`deleteHero id=${id}`))
    );
  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
     
      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
