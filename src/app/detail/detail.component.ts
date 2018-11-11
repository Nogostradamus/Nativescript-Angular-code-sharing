import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { GlobalsService } from '../globals.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ApiService, GlobalsService]
})
export class DetailComponent implements OnInit {

  movie;
  mediaUrl: string;

  constructor(private route: ActivatedRoute,
    private api: ApiService,
    private globals: GlobalsService,
    private location: Location) {
      this.mediaUrl = this.globals.getBaseUrl() + '/media/';
    }

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
    );
  }
  backClicked() {
    this.location.back();
  }

}
