import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-deletemovie',
  standalone: true,
  imports: [FormsModule, AppComponent],
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.scss'],
})
export class DeletemovieComponent {
  @Input() movieData: {
    Title: string;
    rating: number;
    discription: string;
    imageURL: string;
  }[] = [];
  deleteTitle: string = '';

  deleteMovie() {
    const index = this.movieData.findIndex(
      (movie) => movie.Title === this.deleteTitle
    );
    if (index !== -1) {
      this.movieData.splice(index, 1);
    }
    this.deleteTitle = '';
  }
}
