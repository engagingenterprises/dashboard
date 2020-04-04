import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';
@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  lists: any;
  constructor(public _appService: AppService) {

  }

  ngOnInit() {
    this.getList();
  }

  public getList() {
    this._appService.getLists()
      .subscribe((res)=> {
        if(res['status'].error_code == 0) {
          this.lists = res['data'];
          console.log("list->", this.lists);
        }
      });
  }
}
