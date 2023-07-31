import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-second-screen',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.scss'],
})
export class SecondScreenComponent implements OnInit {
  private actions: string[] = [];
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {}

  increment = () => {
    this.counter++;
    this.actions.push('INCREMENT');
  };

  decrement = () => {
    this.counter--;
    this.actions.push('DECREMENT');
  };
}
