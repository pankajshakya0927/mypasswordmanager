import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  imports: [CommonModule]
})
export class ListComponent {
  @Input() items: any[] = [];
  @Input() categorySelected: any;
  @Output() itemSelected = new EventEmitter<any>();

  selectedItem: any;

  selectItem(item: any) {
    this.selectedItem = item;
    this.itemSelected.emit(item);
  }
}