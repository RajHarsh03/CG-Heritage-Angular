import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, ToastMessage } from '../../services/toast';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast implements OnInit {

  message: ToastMessage | null = null;

  constructor(private toast: ToastService) {}

  ngOnInit(): void {
    this.toast.message$.subscribe(msg => {
      this.message = msg;
    });
  }
}
