import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { of, from, Subject } from 'rxjs';
import { map, filter, tap, switchMap, mergeMap, takeUntil } from 'rxjs/operators';

interface Post {
  id: number;
  userId: number;
  title: string;
}

@Component({
  selector: 'app-assign2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assign2.component.html',
})
export class Assign2Component implements OnInit, OnDestroy {

  squared: number[] = [];
  tapLog: string[] = [];

  post: Post | null = null;
  postLoading = false;

  userPosts: Post[] = [];

  bonusPost: Post | null = null;
  bonusTapLog: string[] = [];

  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      map(n => n * n),
      tap(n => {
        this.tapLog.push('tap: ' + n);
      }),
      filter(n => n > 25)
    ).subscribe(n => {
      this.squared.push(n);
    });

    from([1, 2, 3]).pipe(
      mergeMap(uid => this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${uid}`)),
      takeUntil(this.destroy$)
    ).subscribe(posts => {
      this.userPosts.push(posts[0]);
    });
  }

  onFetchClick(): void {
    this.post = null;
    this.postLoading = true;
    const id = Math.floor(Math.random() * 10) + 1;

    of(id).pipe(
      switchMap(n => this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${n}`)),
      takeUntil(this.destroy$)
    ).subscribe({
      next: p => { this.post = p; this.postLoading = false; },
      error: () => { this.postLoading = false; }
    });
  }

  onBonusClick(): void {
    this.bonusPost = null;
    this.bonusTapLog = [];
    const id = Math.floor(Math.random() * 10) + 1;

    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      map(n => n * n),
      tap(n => this.bonusTapLog.push('tap: ' + n)),
      filter(n => n > 25),
      switchMap(() => this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)),
      takeUntil(this.destroy$)
    ).subscribe(p => {
      this.bonusPost = p;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
