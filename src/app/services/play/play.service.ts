import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPlay } from 'src/app/shared/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  voidPlay: IPlay = {
    dungeon: 0,
    heros: []
  }

  play: BehaviorSubject<IPlay> = new BehaviorSubject(this.voidPlay)

  constructor() { }

  setPlay(newPlay: IPlay): void {
    this.play.next(newPlay)
  }

  getPlay(): BehaviorSubject<IPlay> {
    return this.play
  }
}
