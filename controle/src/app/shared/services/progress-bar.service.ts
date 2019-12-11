import { Injectable, OnInit } from '@angular/core';
import { NgProgressRef, NgProgress } from '@ngx-progressbar/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  progressRef: NgProgressRef;

  constructor(private progress: NgProgress) {
    debugger;
    this.progressRef = this.progress.ref('progressBar');

  }

  start() {
    if (this.progressRef) { this.progressRef.start(); }
  }

  complete() {
    if (this.progressRef) { this.progressRef.complete(); }
  }

}
