import { Component, OnInit } from '@angular/core';
import { SmLoginService } from 'src/app/services/sm-login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  DSMCount: any;
  SACount: any;
  TotalUser: any;

  constructor(private service:SmLoginService) { }

  ngOnInit(): void {
    this.getSMDashbaord()
  }
  getSMDashbaord(){
    this.service.getSMDashbaord().subscribe({
      next:(res)=>{
        console.log("res",res);
        this.DSMCount= res.data.DSMCount
        this.SACount= res.data.SACount
        this.TotalUser= res.data.TotalUser
        console.log("this.DSMCount",this.DSMCount);
      },
    error:(err)=>{
      alert(err)
    }
    })
  }
}
