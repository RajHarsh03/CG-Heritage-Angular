import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLogService, ErrorEntry } from '../../services/error-log';

@Component({
  selector: 'app-error-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-log.html',
  styleUrl: './error-log.css',
})
export class ErrorLog {

  constructor(private errorLog: ErrorLogService) {}

  get entries(): ErrorEntry[] {
    return this.errorLog.getAll();
  }

  clear(): void {
    this.errorLog.clear();
  }
}
