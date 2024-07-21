import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HEROES } from './mock-heroes';
import { IHero } from './ihero.interface';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageService: MessageService) { }

  public getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
