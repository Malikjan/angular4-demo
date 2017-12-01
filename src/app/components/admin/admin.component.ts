import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  data: string[];
  constructor(private _servicedata: AdminService) {
    this.data = this._servicedata.getData();
  }

  ngOnInit() {
  }

}
