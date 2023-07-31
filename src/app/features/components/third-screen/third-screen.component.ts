import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-third-screen',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './third-screen.component.html',
  styleUrls: ['./third-screen.component.scss'],
})
export class ThirdScreenComponent {}
