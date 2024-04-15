import { Component, OnInit } from '@angular/core';
import { GmLoginService } from 'src/app/services/gm-login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalSM: any;
  totalDSM: any;
  totalSA: any;
  totalEmployees: any;
  constructor(private service:GmLoginService) { }

  ngOnInit(): void {
    this.getGMDashbaord()
  }
  getGMDashbaord(){
    this.service.getGMDashbaord().subscribe({
      next:(res)=>{
        console.log("res",res);
        this.totalSM= res.SM
        this.totalDSM= res.DSM
        this.totalSA= res.SA
        this.totalEmployees= res.totalEmployees
      },
    error:(err)=>{
      alert(err)
    }
    })
  }
}
