import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ModalComponent } from '../shared/components/modal/modal.component';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule, ModalComponent]
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Input() categories: any[] = []; // Categories for the Vault menu
  @Input() isMobile: boolean = false;
  @Output() categorySelected = new EventEmitter<any>();
  @Output() toggle = new EventEmitter<boolean>();
  @Output() createNewCategory = new EventEmitter<void>();
  @Output() createNewRecord = new EventEmitter<void>();

  selectedMenuItem: string | null = null;
  selectedCategory: any = null;
  isVaultCollapsed = true;
  isVaultSelected = false;
  isCreateNewDropdownVisible = false;

  isModalOpen = false;
  modalTitle = '';
  modalContent = '';

  constructor(private cdr: ChangeDetectorRef) { }

  // Toggle sidebar collapse/expand
  toggleSidebar(): void {
    this.collapsed = !this.collapsed;
    this.toggle.emit(this.collapsed);
  }

  // Select a menu item, toggle the dropdown, and collapse the Vault
  selectMenuItem(item: string): void {
    if (item === 'createNew') {
      // Toggle the Create New dropdown when 'Create New' is clicked
      this.selectedMenuItem = this.selectedMenuItem === 'createNew' ? null : 'createNew';
    } else this.selectedMenuItem = item;

    this.isVaultCollapsed = true;
    this.isVaultSelected = false;
    this.selectedCategory = null;
  }

  // Handle the selection of category or record from dropdown
  selectCreateOption(option: 'category' | 'record'): void {
    if (option === 'category') {
      this.modalTitle = 'New Category';
      this.modalContent = 'Please fill in the details for the new category.';
      this.isModalOpen = true;
      this.createNewCategory.emit(); // Emit event to create a new category
    } else if (option === 'record') {
      this.modalTitle = 'New Record';
      this.modalContent = 'Please fill in the details for the new record.';
      this.isModalOpen = true;
      this.createNewRecord.emit(); // Emit event to create a new record
    }
    this.selectedMenuItem = null; // Close the dropdown after selection
  }

  // Toggle Vault visibility and selection state
  toggleVault(): void {
    this.isVaultCollapsed = !this.isVaultCollapsed;
    this.isVaultSelected = !this.isVaultSelected;
    this.selectedMenuItem = null; // Deselect any current menu item
  }

  // Select a category and emit it
  selectCategory(category: any): void {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }

  // Handle confirmation action (called when the "Confirm" button is clicked)
  onConfirmAction() {
    // You can perform any action here, for example:
    if (this.modalTitle === 'Create New Category') {
      console.log('Creating a new category...');
      // Your logic for creating a new category
    } else if (this.modalTitle === 'Create New Record') {
      console.log('Creating a new record...');
      // Your logic for creating a new record
    }

    // Close the modal after confirming
    this.onCloseModal();
  }

  onCloseModal() {
    this.isModalOpen = false;
  }
}