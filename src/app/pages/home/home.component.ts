import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  buttonStyles: {} = {
    "width": "150px",
    "background-color": "#3e5244",
    "border": "none",
    "margin": "12px 0"
  }
  continue: boolean = false

  ngOnInit(): void {
      if(localStorage.getItem('Angular Quest - Play')){
        this.continue = true
      }
  }

}
