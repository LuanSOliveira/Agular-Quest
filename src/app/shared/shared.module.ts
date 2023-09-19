import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';

import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';



@NgModule({
  declarations: [
    SideNavbarComponent,
    NavButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    DividerModule
  ],
  exports: [
    SideNavbarComponent,
    NavButtonComponent
  ]
})
export class SharedModule { }
