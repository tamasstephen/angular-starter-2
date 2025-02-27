import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServerStatus } from '../../../types/serverStatus';
@Component({
  selector: 'app-server-status',
  standalone: true,
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: ServerStatus = 'online';
  timer: ReturnType<typeof setInterval> | undefined;

  ngOnInit() {
    this.timer = setInterval(() => {
      const random = Math.random();
      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
