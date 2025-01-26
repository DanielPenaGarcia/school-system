import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  @Input() item: MenuItem;
  showChildren: boolean = false;
  
  toggleChildren() {
    this.showChildren = !this.showChildren;
  }
}
