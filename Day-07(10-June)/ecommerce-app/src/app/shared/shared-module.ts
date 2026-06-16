import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './components/button/button';
import { BadgeComponent } from './components/badge/badge';
import { SpinnerComponent } from './components/spinner/spinner';
import { HighlightDirective } from './directives/highlight';
import { TruncateTextDirective } from './directives/truncate-text';
import { TruncatePipe } from './pipes/truncate-pipe';
import { RupeePipe } from './pipes/rupee-pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    BadgeComponent,
    SpinnerComponent,
    HighlightDirective,
    TruncateTextDirective,
    TruncatePipe,
    RupeePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    BadgeComponent,
    SpinnerComponent,
    HighlightDirective,
    TruncateTextDirective,
    TruncatePipe,
    RupeePipe
  ]
})
export class SharedModule { }
