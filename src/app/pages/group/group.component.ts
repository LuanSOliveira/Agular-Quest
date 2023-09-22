import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IHero } from 'src/app/shared/interfaces/interfaces';
import { voidHero } from 'src/app/mocks/heros';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit, OnDestroy {

  subscription!: Subscription
  myGroup!: IHero[]

  constructor (private groupService: GroupService) {}

  ngOnInit(): void {
    this.subscription = this.groupService.getGroup().subscribe({
      next: (response) => {
        this.myGroup = response.groupList
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
