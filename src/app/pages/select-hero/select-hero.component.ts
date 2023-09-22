import { Component } from '@angular/core';
import { IHero } from 'src/app/shared/interfaces/interfaces';
import { HeroList } from 'src/app/mocks/heros';

@Component({
  selector: 'app-select-hero',
  templateUrl: './select-hero.component.html',
  styleUrls: ['./select-hero.component.scss']
})
export class SelectHeroComponent {

  heroList: IHero[] = HeroList

}
