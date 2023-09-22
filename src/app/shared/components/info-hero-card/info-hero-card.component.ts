import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHero } from 'src/app/shared/interfaces/interfaces';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-info-hero-card',
  templateUrl: './info-hero-card.component.html',
  styleUrls: ['./info-hero-card.component.scss']
})
export class InfoHeroCardComponent implements OnInit {
  @Input() hero!: IHero
  @Output() sendCloseDialog = new EventEmitter<string>()

  visibleGif: boolean = false

  life!: number
  maxLife!: number
  energy!: number
  maxEnergy!: number
  data: any;
  options: any;
  routeId!: number

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private groupService: GroupService
  ){}

  ngOnInit() {
    this.routeId = this.route.snapshot.params["id"]
    this.life = this.hero.life
    this.maxLife = this.hero.maxLife
    this.energy = this.hero.energy
    this.maxEnergy = this.hero.maxEnergy
    const documentStyle = getComputedStyle(document.documentElement);

    this.data = {
        labels: ['Ataque', 'Defesa', 'Inteligência', 'Velocidade'],
        datasets: [
            {
                label: 'Atributos',
                backgroundColor: documentStyle.getPropertyValue('--teal-400'),
                borderColor: documentStyle.getPropertyValue('--teal-400'),
                data: [this.hero.atk, this.hero.def, this.hero.int, this.hero.spd, 10]
            }
        ]
    };

    this.options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: { color: '#fff' }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#fff',
                    font: { weight: 500 }
                },
                grid: { color: '#5c7262', drawBorder: false }
            },
            y: {
                ticks: { color: '#fff', font: { weight: 500 } },
                grid: { color: '#5c7262', drawBorder: false }
            }
        }
    };
  }

  CloseDialog():void {
    this.sendCloseDialog.emit()
  }

  CloseGifDialog(): void {
    this.visibleGif = false
  }

  SelectHero(): void{
    this.visibleGif = true
  }
  // SelectHero(): void{
  //   const dataStore: any = localStorage.getItem('Angular Quest - Grupo')
  //   const newGroup: any = JSON.parse(dataStore)
  //   newGroup.groupList[this.routeId] = this.hero
  //   this.groupService.setGroup(newGroup)
  //   this.router.navigate(['/grupo'])
  // }
}
