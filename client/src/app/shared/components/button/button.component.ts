import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports: [CommonModule]
})
export class ButtonComponent {
  @Input() label: string = ''; // Button text
  @Input() icon: string = ''; // Icon class (e.g., FontAwesome or custom icons)
  @Input() type: 'button' | 'submit' = 'button'; // Button type
  @Input() disabled: boolean = false; // Disable state
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary'; // Button styles
  @Output() click = new EventEmitter<void>(); // Emits click events

  onClick() {
    if (!this.disabled) {
      this.click.emit();
    }
  }
}