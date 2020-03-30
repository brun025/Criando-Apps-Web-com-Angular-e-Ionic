import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {

  @Input() skip = 0;
  @Input() take = 5;
  @Input() search = '';
  public clients: any[] = null;

  constructor(
    private navCtrl: NavController,
    private service: DataService
  ) { }

  ngOnInit() {
    this
      .service
      .getClients()
      .subscribe((res: any) => {
        this.clients = res;
      });
  }

  goToClient(client) {
    this.navCtrl.navigateRoot(`/clients/${client}`);
  }
}
