import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, Subject, of, from, interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-assign1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assign1.component.html',
})
export class Assign1Component implements OnInit, OnDestroy {

  numbers: number[] = [];
  logs: string[] = [];
  unsubMsg = '';

  ofValues: string[] = [];
  fromValues: number[] = [];
  intervalValues: number[] = [];
  timerMsg = 'Waiting...';

  private sub!: Subscription;
  private destroy$ = new Subject<void>();

  ngOnInit(): void {

    const count$ = new Observable<number>(observer => {
      let n = 0;
      const id = setInterval(() => {
        n++;
        observer.next(n);
        if (n === 5) {
          clearInterval(id);
          observer.complete();
        }
      }, 400);
      return () => clearInterval(id);
    });

    this.sub = count$.subscribe({
      next: val => {
        this.numbers.push(val);
        this.logs.push('next: ' + val);
      },
      error: err => this.logs.push('error: ' + err),
      complete: () => {
        this.logs.push('complete');
        this.sub.unsubscribe();
        this.unsubMsg = 'unsubscribe() called - no more values will arrive.';
      }
    });

    of('Angular', 'RxJS', 'Observable').subscribe(v => {
      this.ofValues.push(v);
    });

    from([10, 20, 30, 40, 50]).subscribe(v => {
      this.fromValues.push(v);
    });

    interval(500).pipe(takeUntil(this.destroy$)).subscribe(v => {
      if (v < 5) {
        this.intervalValues.push(v);
      }
    });

    timer(2000).subscribe(() => {
      this.timerMsg = 'Timer fired after 2 seconds!';
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
