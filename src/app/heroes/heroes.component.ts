import { Component } from '@angular/core';

import { IHero } from '../ihero.interface';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  public selectedHero?: IHero;

  public heroes: IHero[] = HEROES;
  
  public onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }

}
