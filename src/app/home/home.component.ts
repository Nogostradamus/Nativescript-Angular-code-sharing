import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ApiService } from '../api.service';
import { GlobalsService } from '../globals.service';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ApiService, GlobalsService]
})
export class HomeComponent implements OnInit {
  title = 'movies';
  movies = [];
  mediaUrl: string;
  @ViewChild('moviecontainer', { read: ViewContainerRef }) tmpl: ViewContainerRef;

  constructor( private api: ApiService,
    private globals: GlobalsService,
    private resolver: ComponentFactoryResolver) {
    this.mediaUrl = this.globals.getBaseUrl() + '/media/';
  }

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.api.getAllMovies().subscribe(
      data => {
        this.movies = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  movieClicked(movie) {
    this.tmpl.clear();
    const factory = this.resolver.resolveComponentFactory(DetailComponent);
    const componentRef = this.tmpl.createComponent(factory);
    componentRef.instance.idPassed = movie.id;
  }
}
