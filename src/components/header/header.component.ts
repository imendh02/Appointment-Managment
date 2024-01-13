import { Component, OnInit } from '@angular/core';
import { SelectedItemService } from '../../app/services/selected-item.service';
import { filter, map, mergeMap, startWith } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedTitle = 'Dashboard';

  constructor(
    private selectedItemService: SelectedItemService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.selectedItemService.selectedItem$.subscribe((selectedItem) => {
      this.selectedTitle = selectedItem;
    });
  }
}
