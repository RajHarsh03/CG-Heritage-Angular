import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDemoService } from '../../services/error-demo';

@Component({
  selector: 'app-error-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-demo.html',
  styles: [`
    .container   { max-width: 800px; margin: 0 auto; padding: 1rem; }
    h2  { color: #333; }
    h3  { color: #555; margin-top: 2rem; border-bottom: 1px solid #eee; padding-bottom: 0.4rem; }
    .error-box   { background: #f8d7da; border: 1px solid #f5c6cb; color: #721c24;
                   border-radius: 6px; padding: 1rem; margin-top: 0.75rem; }
    .success-box { background: #d4edda; border: 1px solid #c3e6cb; color: #155724;
                   border-radius: 6px; padding: 1rem; margin-top: 0.75rem; }
    .info-box    { background: #d1ecf1; border: 1px solid #bee5eb; color: #0c5460;
                   border-radius: 6px; padding: 1rem; margin-top: 0.75rem; }
    pre { background: #eee; padding: 0.75rem; border-radius: 4px; font-size: 0.85rem; overflow-x: auto; }
    button  { padding: 0.4rem 1rem; margin-right: 0.5rem; cursor: pointer;
              border: none; border-radius: 4px; color: #fff; }
    .btn-danger  { background: #dc3545; }
    .btn-success { background: #28a745; }
    .loading { color: #888; font-style: italic; }
    .info    { color: #888; font-style: italic; }
  `]
})
export class ErrorDemoComponent {
  errorMessage: string | null = null;
  loadingBad                  = false;
  validResult: string | null  = null;
  loadingValid                = false;

  constructor(private errorService: ErrorDemoService) {}

  triggerError(): void {
    this.errorMessage = null;
    this.loadingBad   = true;
    this.errorService.fetchBadEndpoint().subscribe({
      next: (data) => { this.loadingBad = false; console.log(data); },
      error: (err: Error) => { this.errorMessage = err.message; this.loadingBad = false; }
    });
  }

  fetchValid(): void {
    this.validResult  = null;
    this.loadingValid = true;
    this.errorService.fetchValidEndpoint().subscribe({
      next: (data) => { this.validResult = JSON.stringify(data, null, 2); this.loadingValid = false; },
      error: (err: Error) => { this.validResult = 'Error: ' + err.message; this.loadingValid = false; }
    });
  }
}
