import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlay } from 'src/app/shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  play: BehaviorSubject<IPlay> = new BehaviorSubject({dungeon: 0})

  constructor() { }

  setPlay(newPlay: any): void {
    this.play.next(newPlay)
  }

  getPlay(): BehaviorSubject<IPlay> {
    return this.play
  }
}
