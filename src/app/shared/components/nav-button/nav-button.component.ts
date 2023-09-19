import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent {
  @Input() label: string = ''
  @Input() disabled: boolean = false
  @Input() navigation: string = ''

  buttonStyles: {} = {
    "width": "150px",
    "background-color": "#3e5244",
    "border": "none",
    "margin": "12px 0"
  }

  constructor(private router: Router){}

  Navigate(): void{
    this.router.navigate([this.navigation])
  }
}
