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

  public heroes?: IHero[];

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  
  public getHeroes(): void {
     this.heroService.getHeroes().subscribe(hereos => this.heroes = hereos);
  }

}
