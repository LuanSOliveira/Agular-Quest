import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ButtonModule } from 'primeng/button';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupComponent } from './group/group.component';
import { DungeonComponent } from './dungeon/dungeon.component';
import { SelectHeroComponent } from './select-hero/select-hero.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    GroupComponent,
    DungeonComponent,
    SelectHeroComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ButtonModule,
    SharedModule
  ]
})
export class PagesModule { }
