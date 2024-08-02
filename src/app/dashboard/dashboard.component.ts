import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { IHero } from '../ihero.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public heroes: IHero[] = [];

  constructor(private heroService: HeroService) { }
  
  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => this.heroes = heroes.slice(1, 5));
  }
}
