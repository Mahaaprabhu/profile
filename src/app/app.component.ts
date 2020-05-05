import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const bgVideo: HTMLVideoElement =  document.getElementById("bgVideo") as HTMLVideoElement;
    bgVideo.playbackRate = .5;
  }
}
