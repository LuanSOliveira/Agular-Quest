import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent {

  sidebarVisible: boolean = false;
  sidebarStyles: {} = {
    'background-color': '#1f3225'
  }
  iconSidebar: string = "https://img.icons8.com/fluency/48/magical-scroll.png"

  constructor(){}
}
