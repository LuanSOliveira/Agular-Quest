import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IHero } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-info-hero-card',
  templateUrl: './info-hero-card.component.html',
  styleUrls: ['./info-hero-card.component.scss']
})
export class InfoHeroCardComponent implements OnInit {
  @Input() hero!: IHero
  @Output() sendCloseDialog = new EventEmitter<string>()

  life!: number
  maxLife!: number
  energy!: number
  maxEnergy!: number
  data: any;
  options: any;

  ngOnInit() {
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

  CloseDialog(){
    this.sendCloseDialog.emit()
  }
}
