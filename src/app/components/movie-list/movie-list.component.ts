import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }
  movies$: Observable<Movie[]>;
  inputValue: string;
  today: Date;

  ngOnInit() {
    this.today = new Date();
    this.movies$ = this.moviesService.getMovies().pipe(
      map(movies => {
        return movies.filter(u => u.id > 2);
      })
    );
  }

  compareName(firstElement: User, secondElement: User) {
    if (firstElement.lastName < secondElement.lastName) {
      return -1;
    }
    if (firstElement.lastName > secondElement.lastName) {
      return 1;
    }
    return 0;
  }

  warnUser() {
    alert('You clicked me you bastard!');
  }

}