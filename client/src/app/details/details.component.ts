import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../shared/components/button/button.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [CommonModule, FormsModule, ButtonComponent]
})
export class DetailsComponent {
  @Input() item: any; // Consider typing this more specifically if possible
  @Input() isMobile: boolean = false; // Typing input
  @Output() back = new EventEmitter<void>(); // Emit back event with no value

  isEditing = false;
  selectedCategory: { name: string } | null = null; // Replace with dynamic data as needed

  // Toggle between edit mode
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  // Copy the value to clipboard
  copyToClipboard(value: string): void {
    navigator.clipboard.writeText(value)
      .then(() => console.log('Copied to clipboard:', value))
      .catch((error) => console.error('Failed to copy:', error));
  }

  // Handle item deletion
  deleteItem(): void {
    console.log('Item deleted');
    // Implement item deletion logic here (e.g., emit event, etc.)
  }

  // Back event emitter
  onBack(): void {
    this.back.emit();
  }
}