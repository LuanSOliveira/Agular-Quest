import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IGroup, IHero } from 'src/app/interfaces/interfaces';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-add-hero-button',
  templateUrl: './add-hero-button.component.html',
  styleUrls: ['./add-hero-button.component.scss']
})
export class AddHeroButtonComponent {
  @Input() id: number = 0

  Hero: IHero = {
    id: 0,
    name: 'Novo',
    img: '',
    life: 0,
    maxLife: 0,
    energy: 0,
    maxEnergy: 0,
    atk: 0,
    def: 0,
    int: 0,
    spd: 0,
  }

  constructor(private groupService: GroupService, private router: Router){}

  // evento():void {
  //   const dataStore: any = localStorage.getItem('Angular Quest - Grupo')
  //   const newGroup: any = JSON.parse(dataStore)
  //   newGroup.groupList[this.id] = this.Hero
  //   console.log(this.id)
  //   console.log(newGroup)
  //   this.groupService.setGroup(newGroup)
  // }
  evento():void {
    this.router.navigate([`selecionarHeroi/${this.id}`])
  }

}
