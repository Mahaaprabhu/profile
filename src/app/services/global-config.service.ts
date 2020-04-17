import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {

  private assetsPathPrefix = "\profile";
  //private assetsPathPrefix = "";

  constructor() { }

  public getAssetsPathPrefix() : string {
    return this.assetsPathPrefix;
  }
}
