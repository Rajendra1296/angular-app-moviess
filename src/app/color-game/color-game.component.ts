import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-color-game',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './color-game.component.html',
  styleUrl: './color-game.component.scss',
})
export class ColorGameComponent {
  @Input() clr = 'pink';
}
