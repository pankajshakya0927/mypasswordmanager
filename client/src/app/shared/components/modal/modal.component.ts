import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component'; // Import the button component

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [CommonModule, ButtonComponent], // Import the ButtonComponent
})
export class ModalComponent {
  @Input() title: string = ''; // Modal title
  @Input() body: string = ''; // Modal body content
  @Input() isOpen: boolean = false; // Modal open state
  @Input() showCancelButton: boolean = true; // Show cancel button
  @Input() showConfirmButton: boolean = true; // Show confirm button
  @Output() confirmAction = new EventEmitter<void>(); // Emits on confirm
  @Output() cancelAction = new EventEmitter<void>(); // Emits on cancel
  @Output() closeModalEvent = new EventEmitter<void>(); // Emits when modal is closed

  closeModal() {
    this.closeModalEvent.emit();
  }

  cancel() {
    this.cancelAction.emit();
    this.closeModal();
  }

  confirm() {
    this.confirmAction.emit();
    this.closeModal();
  }
}