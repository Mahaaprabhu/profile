import { Component, OnInit } from '@angular/core';
import { SkillSet } from 'src/app/models/skillset.model';

@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss']
})
export class SkillsetsComponent implements OnInit {

  skillSets: SkillSet[];

  constructor() {
    this.skillSets = [{
      skillCategory: 'Front End',
      skills: [
        { name: 'Angular 2+', level: 77 },
        { name: 'Javascript', level: 82 },
        { name: 'Typescript', level: 85 },
        { name: 'HTML5', level: 91 },
        { name: 'CSS3', level: 85 },
        { name: 'SCSS', level: 87 },
      ]
    }, {
      skillCategory: 'Back End',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Spring Boot', level: 82 },
        { name: 'Node.js', level: 50 },
        { name: 'Socket.IO', level: 70 },
        { name: 'Apache Camel', level: 45 },
        { name: 'SSIS', level: 30 }
      ]
    }, {
      skillCategory: 'Cloud',
      skills: [
        { name: 'Azure', level: 45 },
        { name: 'AWS', level: 30 },
        { name: 'Openshift', level: 35 },

      ]
    }, {
      skillCategory: 'Database',
      skills: [
        { name: 'SQL Server', level: 60 },
        { name: 'Couchbase Server', level: 50 },
        { name: 'Redis', level: 30 }
      ]
    }, {
      skillCategory: 'Others',
      skills: [
        { name: 'Unity 3D', level: 50 },
        { name: 'Socket.IO', level: 65 },
        { name: 'Active MQ', level: 40 },
        { name: 'Blender', level: 35 },
        { name: 'SSMS', level: 30 }
      ]
    }]
  }

  ngOnInit(): void {
  }

}
