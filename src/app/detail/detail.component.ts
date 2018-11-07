import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ApiService]
})
export class DetailComponent implements OnInit {

  movie;

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.getMovie(id);
  }
  getMovie(id: number) {
    this.api.getDetailsMovie(id).subscribe(
      data => {
        this.movie = data;
        console.log(this.movie);
      },
      error => {
        console.log(error);
      }
    )
  }

}
