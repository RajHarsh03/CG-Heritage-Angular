import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EnvironmentService {
  getConfig() {
    return environment;
  }

  get apiUrl(): string {
    return environment.apiUrl;
  }

  get appName(): string {
    return environment.appName;
  }

  get logLevel(): string {
    return environment.logLevel;
  }

  get isProduction(): boolean {
    return environment.production;
  }
}
