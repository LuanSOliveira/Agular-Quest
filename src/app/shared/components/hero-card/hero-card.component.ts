import { Component, Input } from '@angular/core';
import { IHero } from '../../interfaces/interfaces';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent {
  @Input() hero!: IHero

  visible: boolean = false

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }
  
}
