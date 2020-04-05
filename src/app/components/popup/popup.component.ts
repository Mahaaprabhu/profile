import { Component, OnInit, Input } from '@angular/core';
import { AppStateService } from 'src/app/app-state.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input()
  popupType: string = '';

  @Input()
  popupData: string = '';

  @Input()
  displayPopup: boolean = false;

  constructor(private appStateService: AppStateService) { 

  }

  ngOnInit(): void {

  }

  onClosePopup(): void {
    this.resetState();
  }

  private resetState(): void {
    switch(this.popupType) {
      case 'PHONE':
        this.appStateService.setContactPhonePopupState(false);
        break;
      case 'EMAIL':
        this.appStateService.setContactEmailPopupState(false);
        break;
    }
    this.displayPopup = false;
    this.popupData = '';
    this.popupType = '';
  }

}
