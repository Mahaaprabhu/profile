import { Component, OnInit } from '@angular/core';
import { DateUtilService } from 'src/app/services/date-util.service';
import { AppStateService } from 'src/app/app-state.service';
import { Subscription } from 'rxjs';
import { GlobalConfigService } from 'src/app/services/global-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  greetingWithContext: string = 'Good Morning';
  displayPhonePopup: boolean = false;
  displayPhonePopupSubscription$: Subscription;
  displayEmailPopup: boolean = false;
  displayEmailPopupSubscription$: Subscription;
  assetsPathPrefix: string = '';

  constructor(
    private dateUtilService: DateUtilService, 
    private appStateService: AppStateService,
    private globalConfigService: GlobalConfigService) {
      this.assetsPathPrefix = this.globalConfigService.getAssetsPathPrefix();
      this.greetingWithContext = this.dateUtilService.getGreetingWithContext();
      this.managePopupSubscriptions();
  }

  private managePopupSubscriptions(): void {
    this.displayPhonePopupSubscription$ 
        = this.appStateService.getContactPhonePopupState().subscribe((newState: boolean) => {
          this.displayPhonePopup = newState;
        });

    this.displayEmailPopupSubscription$ 
        = this.appStateService.getContactEmailPopupState().subscribe((newState: boolean) => {
          this.displayEmailPopup = newState;
        });
  }

  ngOnInit(): void {
  }

  onDisplayPhonePopup(): void {
    this.appStateService.setContactPhonePopupState(true);
    this.displayPhonePopup = true;
  }
  
  onDisplayEmailPopup(): void {
    this.appStateService.setContactEmailPopupState(true);
    this.displayEmailPopup = true;
  }

  ngOnDestroy(): void {
    this.displayPhonePopupSubscription$.unsubscribe();
    this.displayEmailPopupSubscription$.unsubscribe();
  }

}
