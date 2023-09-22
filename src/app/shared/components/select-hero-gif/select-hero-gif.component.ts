import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IGif, IHero } from '../../interfaces/interfaces';
import { gifList } from 'src/app/mocks/gifs';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-select-hero-gif',
  templateUrl: './select-hero-gif.component.html',
  styleUrls: ['./select-hero-gif.component.scss']
})
export class SelectHeroGifComponent implements OnInit {
  @Input() hero!: IHero
  @Input() routerId!: number
  @Output() sendCloseGifDialog = new EventEmitter<string>()

  gifs!: IGif

  constructor(private router: Router, private groupService: GroupService){
    
  }
  
  ngOnInit(): void {
    this.gifs = gifList[this.hero.id]
  }

  CloseDialog(): void {
    this.sendCloseGifDialog.emit()
  }

  SelectHero(id: number): void{
    const dataStore: any = localStorage.getItem('Angular Quest - Grupo')
    const newGroup: any = JSON.parse(dataStore)
    newGroup.groupList[this.routerId] = this.hero
    newGroup.groupList[this.routerId].name = gifList[this.hero.id].name[id]
    newGroup.groupList[this.routerId].gif = gifList[this.hero.id].gif[id]
    this.groupService.setGroup(newGroup)
    this.router.navigate(['/grupo'])
  }

}
