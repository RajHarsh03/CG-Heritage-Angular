import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Student } from '../student.service';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent implements OnInit {
  student!: Student;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Data comes from the StudentResolver — no direct service call needed
    this.student = this.route.snapshot.data['student'];
  }
}
