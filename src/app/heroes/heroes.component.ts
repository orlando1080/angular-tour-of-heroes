import { Component, OnInit } from '@angular/core';

import { IHero } from '../ihero.interface';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit {

  public heroes: IHero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  
  public getHeroes(): void {
     this.heroService.getHeroes().subscribe(hereos => this.heroes = hereos);
  }

  public add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as IHero)
     .subscribe(hero => {
        this.heroes.push(hero);
        this.messageService.add(`Hero added: ${hero.name}`);
      });
    }

    public delete(hero: IHero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
    this.messageService.add(`Hero deleted: ${hero.name}`);
  }
}
