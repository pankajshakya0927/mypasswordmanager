import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule]
})
export class SidebarComponent {
  @Input() collapsed = false;
  @Input() categories: any[] = []; // Categories for the Vault menu
  @Input() isMobile: boolean = false;
  @Output() categorySelected = new EventEmitter<any>();
  @Output() toggle = new EventEmitter<boolean>();

  selectedMenuItem: string | null = null;
  selectedCategory: any = null;
  isVaultCollapsed = true;
  isVaultSelected = false;

  constructor(private cdr: ChangeDetectorRef) { }

  // Toggle sidebar collapse/expand
  toggleSidebar(): void {
    this.collapsed = !this.collapsed;
    this.toggle.emit(this.collapsed);
  }

  // Select a menu item, collapse the Vault and unselect any category
  selectMenuItem(item: string): void {
    this.selectedMenuItem = item;
    this.isVaultCollapsed = true;
    this.isVaultSelected = false;
    this.selectedCategory = null;
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
}