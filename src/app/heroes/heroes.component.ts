import { Component } from '@angular/core';
import { IHero } from '../ihero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: IHero = {
    id: 1,
    name: 'Windstrom'
  };

}
