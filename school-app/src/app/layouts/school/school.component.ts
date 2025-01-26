import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '@components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@Component({
  selector: 'app-school',
  imports: [RouterModule, FooterComponent, SideBarComponent],
  templateUrl: './school.component.html',
  styleUrl: './school.component.scss',
})
export class SchoolComponent {

}
