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

  displayTooltip: boolean = false;
  displaySpecialColor: boolean = false;
  tooltip: string = '';

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
    this.tooltip = '';
  }

  public onContentCopy(): void  {
    this.onDisplayToolTip();
    this.executeClipboardCopy();
  }

  private onDisplayToolTip(): void {
    this.tooltip = `Coppied '${this.popupData}'`;
    this.displayTooltip = true;
    this.displaySpecialColor = true;
    setTimeout(()=>{
      this.displayTooltip = false;
      this.displaySpecialColor = false;
      this.tooltip = '';
    }, 1000);
  }

  private executeClipboardCopy(): void {
    const dynamicElement: HTMLTextAreaElement = document.createElement('textarea');
    dynamicElement.value = this.popupData;
    dynamicElement.style.height = '0';
    dynamicElement.style.width = '0';
    dynamicElement.style.opacity = '0';
    document.body.appendChild(dynamicElement);
    dynamicElement.select();
    document.execCommand('copy');
    document.body.removeChild(dynamicElement);
  }

}
