import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentService } from '../../services/environment';

@Component({
  selector: 'app-config-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './config-dashboard.html',
  styleUrl: './config-dashboard.css',
})
export class ConfigDashboardComponent {
  config: ReturnType<EnvironmentService['getConfig']>;

  constructor(private envService: EnvironmentService) {
    this.config = this.envService.getConfig();
  }
}
