import { Component, OnInit } from '@angular/core';
import { DateUtilService } from 'src/app/services/date-util.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  expInYears: string;

  constructor(private dateUtilService: DateUtilService) {
    this.expInYears = this.dateUtilService.getProfessionalExperienceInYears();
  }

  ngOnInit(): void {
  }

}
