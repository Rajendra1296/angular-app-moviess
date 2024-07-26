import { Component } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';
import { RouterEvent, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-deletemovies',
  standalone: true,
  imports: [MoviesComponent, RouterLink, RouterOutlet],
  templateUrl: './deletemovies.component.html',
  styleUrl: './deletemovies.component.scss',
})
export class DeletemoviesComponent {}
