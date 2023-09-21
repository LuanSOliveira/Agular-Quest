import { Component, Input } from '@angular/core';
import { IHero } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-hero-token',
  templateUrl: './hero-token.component.html',
  styleUrls: ['./hero-token.component.scss']
})
export class HeroTokenComponent {
  @Input() hero!: IHero

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

}
