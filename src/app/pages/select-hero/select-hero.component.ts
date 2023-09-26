import { Component, OnInit, OnDestroy } from '@angular/core';
import { IHero } from 'src/app/shared/interfaces/interfaces';
import { HeroList } from 'src/app/mocks/heros';
import { PlayService } from 'src/app/services/play/play.service';
import { Subscription } from 'rxjs';
import { ActiveHeroList } from 'src/app/shared/functions/common/generatingFunction';
import { UpdatePlay } from 'src/app/shared/functions/common/actionFunction';

@Component({
  selector: 'app-select-hero',
  templateUrl: './select-hero.component.html',
  styleUrls: ['./select-hero.component.scss']
})
export class SelectHeroComponent implements OnInit, OnDestroy {

  susbcription!: Subscription

  heroList!: IHero[]
  herosInPlay!: number[]

  constructor(private playService: PlayService) {}

  ngOnInit(): void {
    UpdatePlay(this.playService)
    this.susbcription = this.playService.getPlay().subscribe({
      next: (play) => {
        this.herosInPlay = play.heros
        this.heroList = ActiveHeroList(HeroList, this.herosInPlay)
      }
    })
  }

  ngOnDestroy(): void {
    this.susbcription.unsubscribe()
  }

}
