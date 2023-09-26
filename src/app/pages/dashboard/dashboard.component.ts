import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GroupService } from 'src/app/services/group/group.service';
import { IHero } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  subscription!: Subscription
  group!: IHero[]

  constructor(private groupService: GroupService){}

  ngOnInit(): void {
    this.subscription = this.groupService.getGroup().subscribe({
      next: (response) => {
        this.group = response.groupList
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  indexClass(index:number): string{
    if(index === 0){
      return 'HeroImage0'
    }
    else if(index === 1){
      return 'HeroImage1'
    }
    else if(index === 2){
      return 'HeroImage2'
    }
    else if(index === 3){
      return 'HeroImage3'
    }
    else{
      return ''
    }
  }

}
