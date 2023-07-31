import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input({ required: true }) text: string = '';
  @Input({ required: false }) routerLink: string | undefined;
  @Input({ required: false }) click: (() => void) | undefined;

  constructor() {}

  ngOnInit(): void {}

  handleClick(): void {
    if (this.click) {
      this.click();
    }
  }
}
