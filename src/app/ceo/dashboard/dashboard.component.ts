import { Component, OnInit } from '@angular/core';
import { CeoLoginService } from 'src/app/services/ceo-login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalGM: any;
  totalSM: any;
  totalDSM: any;
  totalSA: any;
  totalEmployees: any;
  constructor(private service:CeoLoginService,) { }

  ngOnInit(): void {
    this.getCEODashbaord()
  }
  getCEODashbaord(){
    this.service.getCEODashbaord().subscribe({
      next:(res)=>{
        console.log("res",res);
        this.totalGM= res.GM
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
