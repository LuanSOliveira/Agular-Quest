import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';

import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { AddHeroButtonComponent } from './components/add-hero-button/add-hero-button.component';
import { HeroTokenComponent } from './components/hero-token/hero-token.component';
import { InfoHeroCardComponent } from './components/info-hero-card/info-hero-card.component';



@NgModule({
  declarations: [
    SideNavbarComponent,
    NavButtonComponent,
    AddHeroButtonComponent,
    HeroTokenComponent,
    InfoHeroCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    SidebarModule,
    DividerModule,
    DialogModule
  ],
  exports: [
    SideNavbarComponent,
    NavButtonComponent,
    AddHeroButtonComponent,
    HeroTokenComponent
  ]
})
export class SharedModule { }
