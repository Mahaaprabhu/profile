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
        { name: 'Angular', level: 77 },
        { name: 'Javascript', level: 82 },
        { name: 'Typescript', level: 85 },
        { name: 'HTML5', level: 91 },
        { name: 'CSS3', level: 85 }
      ]
    }, {
      skillCategory: 'Back End',
      skills: [
        { name: 'Java', level: 77 },
        { name: 'Spring Boot', level: 82 },
        { name: 'Node.js', level: 85 },
        { name: 'C#', level: 91 },
        { name: 'Socket.IO', level: 91 },
        { name: 'Apache Camel', level: 91 },
        { name: 'SSIS', level: 91 }
      ]
    }, {
      skillCategory: 'Cloud',
      skills: [
        { name: 'Azure', level: 77 },
        { name: 'AWS', level: 77 },
        { name: 'Openshift', level: 82 },

      ]
    }, {
      skillCategory: 'Database',
      skills: [
        { name: 'SQL Server', level: 77 },
        { name: 'Couchbase Server', level: 82 }
      ]
    }, {
      skillCategory: 'Others',
      skills: [
        { name: 'Unity 3D', level: 77 },
        { name: 'Socket.IO', level: 82 },
        { name: 'Blender', level: 77 },
        { name: 'SSMS', level: 82 }
      ]
    }]
  }

  ngOnInit(): void {
  }

}
