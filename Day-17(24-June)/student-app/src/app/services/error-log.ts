import { Injectable } from '@angular/core';

export interface ErrorEntry {
  status: number;
  message: string;
  url: string;
  time: string;
}

@Injectable({ providedIn: 'root' })
export class ErrorLogService {
  private entries: ErrorEntry[] = [];

  add(status: number, message: string, url: string) {
    this.entries.push({
      status,
      message,
      url,
      time: new Date().toLocaleTimeString(),
    });
  }

  getAll(): ErrorEntry[] {
    return this.entries;
  }

  clear() {
    this.entries = [];
  }
}
