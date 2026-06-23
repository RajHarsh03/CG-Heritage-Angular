import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-a1-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './a1-test.html',
  styles: [`
    .section { margin-bottom: 2rem; }
    .label { font-weight: bold; color: #444; margin-bottom: 0.3rem; }
    pre { background: #eee; padding: 0.75rem; border-radius: 4px; font-size: 0.85rem; overflow-x: auto; }
    .badge { display: inline-block; padding: 0.1rem 0.5rem; border-radius: 3px; font-size: 0.75rem; margin-left: 0.5rem; }
    .green { background:#d4edda; color:#155724; }
  `]
})
export class A1TestComponent implements OnInit {
  getResult: string    = '';
  postResult: string   = '';
  putResult: string    = '';
  deleteResult: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTodos().subscribe(todos => {
      console.log('[GET] All Todos:', todos);
      this.getResult = JSON.stringify(todos.slice(0, 3), null, 2) + '\n... (200 total)';
    });

    this.dataService.createTodo({ userId: 1, title: 'Learn Angular HTTP', completed: false })
      .subscribe(created => {
        console.log('[POST] Created Todo:', created);
        this.postResult = JSON.stringify(created, null, 2);
      });

    this.dataService.updateTodo(1, { userId: 1, title: 'Updated Todo Title', completed: true })
      .subscribe(updated => {
        console.log('[PUT] Updated Todo:', updated);
        this.putResult = JSON.stringify(updated, null, 2);
      });

    this.dataService.deleteTodo(1).subscribe(res => {
      console.log('[DELETE] Response:', res);
      this.deleteResult = JSON.stringify(res, null, 2) + '  ← empty object = success';
    });
  }
}
