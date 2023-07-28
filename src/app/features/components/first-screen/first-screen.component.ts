import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-first-screen',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss'],
})
export class FirstScreenComponent {}
