import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ListComponent implements OnChanges {
  @Input() items: any[] = [];
  @Input() categorySelected: any;
  @Output() itemSelected = new EventEmitter<any>();

  searchQuery: string = '';
  filteredItems: any[] = [];
  selectedItem: any = null;

  ngOnChanges(): void {
    console.log(this.items);
    this.filteredItems = [...this.items]; // Initialize with all items
  }

  filterItems(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredItems = this.items.filter((item) =>
      item.name.toLowerCase().includes(query)
    );
  }

  selectItem(item: any): void {
    this.selectedItem = item;
    this.itemSelected.emit(item);
  }
}