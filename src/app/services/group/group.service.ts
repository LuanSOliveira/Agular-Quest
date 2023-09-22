import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGroup, IHero } from 'src/app/shared/interfaces/interfaces';
import { voidHero } from 'src/app/mocks/heros';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  dataStore: any = localStorage.getItem('Angular Quest - Grupo')
  newGroup: any = JSON.parse(this.dataStore)

  group: BehaviorSubject<IGroup> = new BehaviorSubject<IGroup>({
    groupList: [voidHero, voidHero, voidHero, voidHero]
  })


  constructor() {
    if(this.dataStore){
      this.newGroup.groupList.map(
        (hero: IHero) => {
          if(hero.name !== ''){
            this.group.next(this.newGroup)
          }
        }
      )
    }
  }

  setGroup(newGroup: IGroup): void{
    localStorage.setItem('Angular Quest - Grupo', JSON.stringify(newGroup))
    this.group.next(newGroup)
  }

  getGroup(): BehaviorSubject<IGroup>{
    return this.group
  }
}
