import {
  Component,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  DoCheck,
  SimpleChanges,
  ViewChild,
  ElementRef
} from '@angular/core';

interface LogEntry {
  hook: string;
  time: string;
  detail: string;
}

@Component({
  selector: 'app-lifecycle-logger',
  standalone: true,
  templateUrl: './lifecycle-logger.html',
  styleUrl: './lifecycle-logger.css'
})
export class LifecycleLogger implements
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  DoCheck {

  @Input() inputValue: number = 0;

  @ViewChild('logContainer')
  logContainer!: ElementRef;

  logs: LogEntry[] = [];

  private log(hook: string, detail = '') {

    const time = new Date().toISOString();

    this.logs.push({
      hook,
      time,
      detail
    });

    console.log(`[${time}] ${hook}: ${detail}`);
  }

  ngOnChanges(changes: SimpleChanges): void {

    const detail = Object.keys(changes)
      .map(
        k =>
          `${k}: ${changes[k].previousValue} → ${changes[k].currentValue}`
      )
      .join(', ');

    this.log('ngOnChanges', detail);
  }

  ngOnInit(): void {
    this.log(
      'ngOnInit',
      `inputValue initialized to ${this.inputValue}`
    );
  }

  ngDoCheck(): void {
    this.log(
      'ngDoCheck',
      'change detection ran'
    );
  }

  ngAfterContentInit(): void {
    this.log(
      'ngAfterContentInit',
      'projected content initialized'
    );
  }

  ngAfterContentChecked(): void {
    this.log(
      'ngAfterContentChecked',
      'projected content checked'
    );
  }

  ngAfterViewInit(): void {
    this.log(
      'ngAfterViewInit',
      'view & children initialized'
    );
  }

  ngAfterViewChecked(): void {
    this.log(
      'ngAfterViewChecked',
      'view & children checked'
    );
  }

  ngOnDestroy(): void {
    this.log(
      'ngOnDestroy',
      'component about to be destroyed'
    );
  }
}