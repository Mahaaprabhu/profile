import { Injectable } from '@angular/core';
import { POPUPKEYS } from './models/popup-keys.enum';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() {
    this.initiatePopupStates();
    this.triggerSubjectPushes();
  }

  /*** POPUP STATES ***/
  private popupStates: Map<string, boolean> = new Map<string, boolean>();

  private initiatePopupStates(): void {
    this.popupStates.set(POPUPKEYS.contactPhonePopupState.toString(), false);
    this.popupStates.set(POPUPKEYS.contactEmailPopupState.toString(), false);
  }

  private triggerSubjectPushes(): void {
    this.contactPhonePopupStateSubject
        .next(this.popupStates.get(POPUPKEYS.contactPhonePopupState.toString()));
  }

  //... POPUP - Contact Phone
  private contactPhonePopupStateSubject: Subject<boolean> = new Subject<boolean>();

  setContactPhonePopupState(state: boolean): void {
    this.popupStates.set(POPUPKEYS.contactPhonePopupState.toString(), state);
    this.contactPhonePopupStateSubject
        .next(this.popupStates.get(POPUPKEYS.contactPhonePopupState.toString()));
  }

  getContactPhonePopupState(): Observable<boolean> {
    return this.contactPhonePopupStateSubject.asObservable();
  }

  //... POPUP - Contact Email
  private contactEmailPopupStateSubject: Subject<boolean> = new Subject<boolean>();

  setContactEmailPopupState(state: boolean): void {
    this.popupStates.set(POPUPKEYS.contactEmailPopupState.toString(), state);
    this.contactEmailPopupStateSubject
        .next(this.popupStates.get(POPUPKEYS.contactEmailPopupState.toString()));
  }

  getContactEmailPopupState(): Observable<boolean> {
    return this.contactEmailPopupStateSubject.asObservable();
  }

}
