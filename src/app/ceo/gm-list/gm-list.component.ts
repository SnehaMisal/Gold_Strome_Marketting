import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-gm-list',
  templateUrl: './gm-list.component.html',
  styleUrls: ['./gm-list.component.scss']
})
export class GmListComponent implements OnInit {
  loginType: any;
  userId!: string;
  GMList: any;
  constructor(private toastr: ToastrService, private http: HttpClient,private activatedRoute: ActivatedRoute) { }
  displayedColumns: string[] = ['srNo','joinDate', 'fName', 'email', 'mobno','status','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit(): void {
    this.loginType = <string>localStorage.getItem(environment.LoginType)
   
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
    });
     this.getGMList()
  }
  getGMList(){
  console.log("userId",this.userId);
  
    this.http.get(environment.apiUrl + `getCEOwithId/${this.userId}`, {}).subscribe(
      (response: any) => {
       console.log("response",response);
       
        this.GMList = response.CEO.GM_Id;
        this.dataSource = new MatTableDataSource(this.GMList.reverse());
         this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;
      },
      (error: any) => console.log(error)
    );
  }
  deleteGM(table: string,id: number){}
  toggleGM(user: any): void {
    user.active = !user.active;
    this.toastr.success('Admin Status is Changed  uccessfully!');
    
  }
}
