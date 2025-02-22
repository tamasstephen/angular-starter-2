import { Component } from '@angular/core';
import { ServerStatus } from '../../../types/serverStatus';
import { DashboardItemComponent } from '../../../ui/dashboard-item/dashboard-item.component';
@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  currentStatus: ServerStatus = 'online';
}
