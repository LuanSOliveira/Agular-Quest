import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IGroup } from 'src/app/interfaces/interfaces';
import { voidHero } from 'src/app/mocks/heros';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  group: BehaviorSubject<IGroup> = new BehaviorSubject<IGroup>({
    groupList: [voidHero, voidHero, voidHero, voidHero]
  })

  constructor() { }

  setGroup(newGroup: IGroup): void{
    localStorage.setItem('Grupo', JSON.stringify(newGroup))
    this.group.next(newGroup)
  }

  getGroup(): BehaviorSubject<IGroup>{
    return this.group
  }
}
