import { Component, OnInit, Input } from '@angular/core';
import { SkillSet } from 'src/app/models/skillset.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() skillSet: SkillSet;

  constructor() { }

  ngOnInit(): void {
  }

}
