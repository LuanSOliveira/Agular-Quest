import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IGroup, IPlay } from 'src/app/shared/interfaces/interfaces';
import { voidHero } from 'src/app/mocks/heros';
import { GroupService } from 'src/app/services/group/group.service';
import { RandomHeros } from '../../functions/common/generatingFunction';
import { PlayService } from 'src/app/services/play/play.service';
import { UpdatePlay } from '../../functions/common/actionFunction';

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
  @Input() isContinue?: boolean

  buttonStyles: {} = {
    "width": "215px",
    "background-color": "#3e5244",
    "border": "none",
    "margin": "12px 0",
    "font-size": "22px"
  }

  newPlay: IPlay = {
    dungeon: 0,
    heros: RandomHeros(10)
  }
  newGroup: IGroup = {
    groupList: [voidHero, voidHero, voidHero, voidHero]
  }

  constructor(private router: Router, private groupService: GroupService, private playService: PlayService){}

  Navigate(): void{
    if(this.isNewGame){
      localStorage.setItem('Angular Quest - Play', JSON.stringify(this.newPlay))
      this.playService.setPlay(this.newPlay)
      this.groupService.setGroup(this.newGroup)
    }
    if(this.isContinue){
      UpdatePlay(this.playService)
    }
    this.router.navigate([this.navigation])
  }
}
