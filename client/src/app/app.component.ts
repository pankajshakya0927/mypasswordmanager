import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, SidebarComponent, ListComponent, DetailsComponent],
})
export class AppComponent implements OnInit {
  title = 'Password Manager';
  isSidebarCollapsed = false;
  categorySelected: any;
  isMobileView = false;
  showListView = true;

  categories = [
    { name: 'Credit Cards', icon: 'fas fa-credit-card' },
    { name: 'Debit Cards', icon: 'fas fa-money-check' },
    { name: 'Bank Accounts', icon: 'fas fa-university' },
    { name: 'Web Accounts', icon: 'fas fa-globe' },
    { name: 'Social Accounts', icon: 'fas fa-users' },
    { name: 'Notes', icon: 'fas fa-sticky-note' },
  ];

  selectedCategoryItems: any[] = [];
  selectedItem: any = null;

  data: Record<string, any[]> = {
    'Credit Cards': [
      { name: 'Visa', details: 'Ending in 1234' },
      { name: 'Mastercard', details: 'Ending in 5678' },
      { name: 'American Express', details: 'Ending in 9101' },
      { name: 'Discover', details: 'Ending in 1122' },
      { name: 'Capital One', details: 'Ending in 3344' },
      { name: 'Citi Double Cash', details: 'Ending in 5566' },
    ],
    'Debit Cards': [
      { name: 'Chase', details: 'Ending in 4321' },
      { name: 'Bank of America', details: 'Ending in 8765' },
      { name: 'Wells Fargo', details: 'Ending in 9988' },
      { name: 'PNC', details: 'Ending in 2233' },
    ],
    'Bank Accounts': [
      { name: 'Wells Fargo', details: 'Account #: 9999' },
      { name: 'Citibank', details: 'Account #: 1234' },
      { name: 'Chase', details: 'Account #: 5678' },
      { name: 'HSBC', details: 'Account #: 1111' },
      { name: 'Barclays', details: 'Account #: 2222' },
    ],
    'Social Accounts': [
      { name: 'Twitter', details: '@username' },
      { name: 'Facebook', details: 'facebook.com/username' },
      { name: 'Instagram', details: '@user.name' },
      { name: 'LinkedIn', details: 'linkedin.com/in/username' },
      { name: 'Snapchat', details: '@snap.username' },
      { name: 'Reddit', details: 'u/username' },
    ],
    'Web Accounts': [
      { name: 'Gmail', details: 'a.kemalakay@gmail.com' },
      { name: 'Outlook', details: 'user@outlook.com' },
      { name: 'Yahoo', details: 'user@yahoo.com' },
      { name: 'ProtonMail', details: 'user@protonmail.com' },
      { name: 'iCloud', details: 'user@icloud.com' },
    ],
    'Notes': [
      { name: 'Shopping List', details: 'Milk, Eggs, Bread' },
      { name: 'To-Do List', details: 'Buy new shoes, Call mom' },
      { name: 'Workout Plan', details: 'Push-ups, Squats, Running' },
      { name: 'Vacation Plan', details: 'Hawaii, Flights, Hotels' },
      { name: 'Meeting Notes', details: 'Discuss project, Set deadlines' },
      { name: 'Book List', details: '1984, To Kill a Mockingbird, Brave New World' },
    ],
  };

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.updateView();
    window.addEventListener('resize', this.updateView.bind(this));
  }

  onSidebarToggle(collapsed: boolean): void {
    this.isSidebarCollapsed = collapsed;
  }

  onCategorySelected(category: any): void {
    this.categorySelected = category;
    this.selectedCategoryItems = this.data[category.name] || [];
    this.selectedItem = null;
    this.showListView = true;
  }

  updateView(): void {
    this.isMobileView = window.innerWidth <= 768;
    this.cdr.detectChanges();
  }

  onBackToList(): void {
    this.showListView = true;
  }

  onItemSelected(item: any): void {
    this.selectedItem = item;
    if (this.isMobileView) {
      this.showListView = false;
    }
  }
}