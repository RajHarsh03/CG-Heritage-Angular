import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {

  posts: Post[] = [];
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.posts = [];
    this.loading = true;

    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .subscribe({
        next: data => { this.posts = data; this.loading = false; },
        error: () => { this.loading = false; }
      });
  }

  triggerNotFound(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts/9999')
      .subscribe({ error: () => {} });
  }

  triggerServerError(): void {
    this.http.get('https://httpstat.us/500')
      .subscribe({ error: () => {} });
  }

  triggerUnauthorized(): void {
    this.http.get('https://httpstat.us/401')
      .subscribe({ error: () => {} });
  }
}
