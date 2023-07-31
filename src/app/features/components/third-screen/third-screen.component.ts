import { Component, OnInit, computed, effect } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { signal } from '@angular/core';

@Component({
  selector: 'app-third-screen',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './third-screen.component.html',
  styleUrls: ['./third-screen.component.scss'],
})
export class ThirdScreenComponent implements OnInit {
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);
  actions = signal<string[]>([]);

  constructor() {
    effect(() => {
      console.log('COUNTER: ', this.counter());
      console.log('DOUBLE COUNTER: ', this.doubleCounter());
      console.log('ACTIONS: ', this.actions());
    });
  }

  ngOnInit(): void {}

  increment = () => {
    this.counter.set(this.counter() + 1);
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
  };

  decrement = () => {
    this.counter.update((currentCounter) => currentCounter - 1);
    this.actions.mutate((oldActions) => oldActions.push('DECREMENT'));
  };
}
