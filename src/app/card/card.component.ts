import { CommonModule } from '@angular/common';

import { DeletemovieComponent } from '../deletemovie/deletemovie.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type Movie = {
  Title: string;
  rating: number;
  discription: string;
  imageURL: string;
};
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, DeletemovieComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  like = 0;
  dislike = 0;
  likeIncreament() {
    this.like += 1;
  }
  disLikeIncreament() {
    this.dislike += 1;
  }
  showDes: boolean = false;

  toggleDesMovie() {
    this.showDes = !this.showDes;
  }
  @Output() delete: EventEmitter<Movie> = new EventEmitter<Movie>();
  @Input() Movies = {
    Title: 'Love Today',
    rating: 9.1,
    discription:
      'Love Today is a 2022 Indian Tamil-language romantic comedy film directed by Pradeep Ranganathan and produced by AGS Entertainment. The film stars Pradeep (in his acting debut), alongside Ivana, Raveena Ravi, Yogi Babu, Sathyaraj, Radhika Sarathkumar, Akshaya Udayakumar, Prathana Nathan, Adithya Kathir and Aajeedh Khalique.',
    imageURL:
      'https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg',
  };
  deleteMovie() {
    this.delete.emit(this.Movies);
  }
}
