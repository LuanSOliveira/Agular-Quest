import { Component, OnInit } from '@angular/core';
import { IGroup } from 'src/app/interfaces/interfaces';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  myGroup!: IGroup

  constructor (private groupService: GroupService) {}

  ngOnInit(): void {
    this.groupService.getGroup().subscribe({
      next: (response) => {this.myGroup = response}
    })      
  }

}
