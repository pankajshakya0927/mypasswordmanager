import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../shared/components/button/button.component';
import { CardComponent } from "../vault/card/card.component";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [CommonModule, FormsModule, ButtonComponent, CardComponent]
})
export class DetailsComponent implements OnInit {
  @Input() item: any; // Consider typing this more specifically if possible
  @Input() isMobile: boolean = false; // Typing input
  @Output() back = new EventEmitter<void>(); // Emit back event with no value

  isEditing = false;
  @Input() categorySelected: string | null = null; // Replace with dynamic data as needed

  ngOnInit(): void {
    console.log(this.categorySelected);
  }

  isCategory(category: string): boolean {
    return this.categorySelected === category;
  }

  get isCard(): boolean {
    return this.isCategory('Credit Card') || this.isCategory('Debit Card');
  }

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