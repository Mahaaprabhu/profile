import { Component, OnInit } from '@angular/core';
import { DateUtilService } from 'src/app/services/date-util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  greetingWithContext:string = 'Good Morning';

  constructor(private dateUtilService: DateUtilService) {
    this.greetingWithContext = this.dateUtilService.getGreetingWithContext();
  }

  ngOnInit(): void {
  }

}
