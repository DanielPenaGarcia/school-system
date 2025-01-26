// side-bar.component.ts
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ItemComponent } from "../item/item.component";

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  hide: boolean = false;
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        routerLink: '/',
        label: 'Inicio',
        icon: 'pi-home',
      },
      {
        routerLink: '/settings',
        label: 'Configuración',
        icon: 'pi-cog',
      },
      {
        routerLink: '/calendar',
        label: 'Calendario',
        icon: 'pi-calendar',
      },
      {
        routerLink: '/reports',
        label: 'Reportes',
        icon: 'pi-chart-line',
      },
      {
        label: 'Departamentos',
        icon: 'pi-briefcase',
        routerLink: '/departments',
      }
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    if (width < 768) {
      this.hide = true;
    } else {
      this.hide = false;
    }
  }

  toggleSidebar() {
    this.hide = !this.hide;
  }
}
