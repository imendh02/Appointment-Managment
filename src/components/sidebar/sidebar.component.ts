import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { Router } from '@angular/router';
import { SelectedItemService } from '../../app/services/selected-item.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  navData = navbarData
  constructor(
    private router: Router,
    private selectedItemService: SelectedItemService
    ) {}

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
  onItemClick(title: string) {
    this.selectedItemService.updateSelectedItem(title);
  }
}
