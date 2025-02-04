// side-bar.component.ts
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ItemComponent } from "../item/item.component";
import { SchoolService } from '@layouts/school/school.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  providers: [SchoolService]
})
export class SideBarComponent implements OnInit {

  hide: boolean = false;
  items: MenuItem[] = [];

  constructor(private readonly schoolService: SchoolService) {}

  ngOnInit(): void {
    this.items = [
      {
        routerLink: '/',
        label: 'Inicio',
        icon: 'pi-home',
      },
    ];
    this.settings();
  }

  private settings(): void {
    const education: MenuItem = {
      label: 'Educación',
      icon: 'pi pi-graduation-cap',
      items: [],
    };
    this.schoolService.getSchoolSettings('1').subscribe((settings: any[]) => {
      settings.forEach((setting) => {
          education.items.push({
            routerLink: setting.url,
            label: setting.educationLevel.name,
        });
      });
      this.items.push(education);
    });
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
