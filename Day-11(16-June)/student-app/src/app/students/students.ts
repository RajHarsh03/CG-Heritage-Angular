import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FormsModule, CommonModule],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students implements OnInit {
  allStudents = [
    { id: 1, name: 'Harsh Raj' },
    { id: 2, name: 'Rohan Mehta' },
    { id: 3, name: 'Arjun Singh' },
  ];

  filteredStudents = [...this.allStudents];
  searchInput = '';
  searchResult = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchResult = params['search'] ?? '';
      this.searchInput = this.searchResult;
      // Filter list — show all if no search term
      if (this.searchResult) {
        const term = this.searchResult.toLowerCase();
        this.filteredStudents = this.allStudents.filter(s =>
          s.name.toLowerCase().includes(term)
        );
      } else {
        this.filteredStudents = [...this.allStudents];
      }
    });
  }

  onSearch() {
    if (this.searchInput.trim()) {
      this.router.navigate(['/students'], {
        queryParams: { search: this.searchInput.trim() }
      });
    }
  }
}
