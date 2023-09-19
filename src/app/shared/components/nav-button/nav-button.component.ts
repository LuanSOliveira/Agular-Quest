import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IGroup } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {
  @Input() label: string = ''
  @Input() disabled: boolean = false
  @Input() navigation: string = ''
  @Input() isNewGame?: boolean

  buttonStyles: {} = {
    "width": "150px",
    "background-color": "#3e5244",
    "border": "none",
    "margin": "12px 0"
  }

  newGroup: IGroup = {
    groupList: [null, null, null, null]
  }

  constructor(private router: Router){}

  Navigate(): void{
    if(this.isNewGame){
      localStorage.setItem('Grupo', JSON.stringify(this.newGroup))
    }
    this.router.navigate([this.navigation])
  }
}
