import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IHero } from '../ihero.interface';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input()
  hero?: IHero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  public getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
    }
  }
}
