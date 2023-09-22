import { Component, Input, OnInit } from '@angular/core';
import { IHero } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-hero-token',
  templateUrl: './hero-token.component.html',
  styleUrls: ['./hero-token.component.scss']
})
export class HeroTokenComponent implements OnInit {
  @Input() hero!: IHero

  visible: boolean = false
  inGroup: boolean = false

  ngOnInit(): void {
    const dataStore: any = localStorage.getItem('Angular Quest - Grupo')
    const newGroup: any = JSON.parse(dataStore)
    newGroup.groupList.map(
      (hero: IHero) => {
        if(hero.name === this.hero.name){
          this.inGroup = true
        }
      }
    )
  }

  inativeToke(): string {
    if(this.inGroup){
      return 'InativeToken'
    }
    return ''
  }

  showDialog() {
    if(!this.inGroup){
      this.visible = true;
    }
  }

  closeDialog() {
    this.visible = false;
  }

}
