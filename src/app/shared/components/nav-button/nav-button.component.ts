import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IGroup, IPlay } from 'src/app/shared/interfaces/interfaces';
import { voidHero } from 'src/app/mocks/heros';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {
  @Input() label: string = ''
  @Input() disabled: boolean = false
  @Input() navigation: string = ''
  @Input() isNewGame?: boolean

  buttonStyles: {} = {
    "width": "215px",
    "background-color": "#3e5244",
    "border": "none",
    "margin": "12px 0",
    "font-size": "22px"
  }

  newPlay: IPlay = {dungeon: 0}
  newGroup: IGroup = {
    groupList: [voidHero, voidHero, voidHero, voidHero]
  }

  constructor(private router: Router, private groupService: GroupService){}

  Navigate(): void{
    if(this.isNewGame){
      localStorage.setItem('Angular Quest - Play', JSON.stringify(this.newPlay))
      //localStorage.setItem('Angular Quest - Grupo', JSON.stringify(this.newGroup))
      this.groupService.setGroup(this.newGroup)
    }
    this.router.navigate([this.navigation])
  }
}
