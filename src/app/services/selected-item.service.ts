import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedItemService {
  private selectedItemSource = new BehaviorSubject<string>('');
  selectedItem$ = this.selectedItemSource.asObservable();

  updateSelectedItem(selectedItem: string) {
    this.selectedItemSource.next(selectedItem);
  }
}