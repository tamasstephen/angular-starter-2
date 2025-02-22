import { Component, input } from '@angular/core';
import { TrafficData } from '../../../types/trafficData';
import { DashboardItemComponent } from '../../../ui/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css',
})
export class TrafficComponent {
  trafficData = input<TrafficData[]>([]);
  maxTraffic = input<number>(0);
}
