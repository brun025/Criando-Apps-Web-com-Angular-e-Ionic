import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.page.html',
  styleUrls: ['./client-details.page.scss'],
})
export class ClientDetailsPage implements OnInit {

  public client = null;

  constructor(
    private route: ActivatedRoute,
    private service: DataService,
    private _location: Location,
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.service
      .getClient(id)
      .subscribe((data) => {
        this.client = data;
      });
  }

  back(){
    this._location.back();
  }

}
