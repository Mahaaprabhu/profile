import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  @Input() input = 'default input';

  skillSet: {
    skillCategory: string;
    skills: {
      name: string;
      level: number;
    }[];
  }

  constructor() {
    this.skillSet = {
      skillCategory: 'Front End',
      skills: [
        {
          name: 'Angular',
          level: 77
        },
        {
          name: 'Javascript',
          level: 82
        },
        {
          name: 'Typescript',
          level: 85
        },
        {
          name: 'HTML5',
          level: 91
        },
        {
          name: 'CSS3',
          level: 85
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}
