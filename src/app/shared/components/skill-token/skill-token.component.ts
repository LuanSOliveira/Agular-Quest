import { Component, Input } from '@angular/core';
import { ISkill } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-skill-token',
  templateUrl: './skill-token.component.html',
  styleUrls: ['./skill-token.component.scss']
})
export class SkillTokenComponent {
  @Input() skill!: ISkill

}
