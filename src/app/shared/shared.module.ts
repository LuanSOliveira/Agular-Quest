import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { KnobModule } from 'primeng/knob';

import { NavButtonComponent } from './components/nav-button/nav-button.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { AddHeroButtonComponent } from './components/add-hero-button/add-hero-button.component';
import { HeroTokenComponent } from './components/hero-token/hero-token.component';
import { InfoHeroCardComponent } from './components/info-hero-card/info-hero-card.component';
import { FormsModule } from '@angular/forms';
import { SkillTokenComponent } from './components/skill-token/skill-token.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { SelectHeroGifComponent } from './components/select-hero-gif/select-hero-gif.component';



@NgModule({
  declarations: [
    SideNavbarComponent,
    NavButtonComponent,
    AddHeroButtonComponent,
    HeroTokenComponent,
    InfoHeroCardComponent,
    SkillTokenComponent,
    HeroCardComponent,
    SelectHeroGifComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ButtonModule,
    SidebarModule,
    DividerModule,
    DialogModule,
    ChartModule,
    KnobModule
  ],
  exports: [
    SideNavbarComponent,
    NavButtonComponent,
    AddHeroButtonComponent,
    HeroTokenComponent,
    InfoHeroCardComponent,
    SkillTokenComponent,
    HeroCardComponent,
    SelectHeroGifComponent
  ]
})
export class SharedModule { }
