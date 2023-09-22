import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IHero } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-add-hero-button',
  templateUrl: './add-hero-button.component.html',
  styleUrls: ['./add-hero-button.component.scss']
})
export class AddHeroButtonComponent {
  @Input() id: number = 0

  Hero: IHero = {
    id: 0,
    status: 'ativo',
    name: 'Novo',
    img: '',
    gif: '',
    life: 0,
    maxLife: 0,
    energy: 0,
    maxEnergy: 0,
    atk: 0,
    def: 0,
    int: 0,
    spd: 0,
    skills: []
  }

  constructor(private router: Router){}

  evento():void {
    this.router.navigate([`selecionarHeroi/${this.id}`])
  }

}
