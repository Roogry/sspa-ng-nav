import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { assetUrl } from '../single-spa/asset-url';

@Component({
  selector: 'sspa-ng-nav-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sspa-ng-nav';
  avatarPlaceholder = assetUrl("images/avatarPlaceholder.png");
}
