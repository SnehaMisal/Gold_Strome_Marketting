import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditBannerComponent } from '../add-edit-banner/add-edit-banner.component';
import { DeleteModelComponent } from '../delete-model/delete-model.component';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'bannerImage','status','action'];
  dataSource!: MatTableDataSource<any>;
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  bannerList: any;


  constructor(private dialog: MatDialog,private toastr: ToastrService,private http: HttpClient,) { }

  ngOnInit(): void {
    this.getBanner()
  }
  getBanner(){
    this.http.get(environment.apiUrl + 'getBanner', {}).subscribe(
      (response: any) => {
        console.log("response",response);
        
        this.bannerList = response.result;
        this.dataSource = new MatTableDataSource(this.bannerList.reverse());
        this.dataSource.paginator = this.paginator;
      },
      (error: any) => console.log(error)
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  toggleBanner(data:any){
    data.Status = data.Status === 'Active' ? 'Inactive' : 'Active';
    // user.Status = !user.Status;
    var formData: any = new FormData();
    formData.append("bannerId", data.bannerId);
    formData.append("status", data.Status);
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }
    this.http.put(environment.apiUrl + 'updateBannerStatus',formData).subscribe(
      (response: any) => {
        console.log("response",response);
        this.toastr.success(response.message);
      },
      (error: any) => console.log(error)
    );

  }
  addBanner(){
    const dialogRef = this.dialog.open(AddEditBannerComponent , {
      width: '30%'
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getBanner();
      }
    })
  }
  editBanner(data:any){
    console.log("data",data);
    
    const dialogRef = this.dialog.open( AddEditBannerComponent, {
      width: '50%',
      data,
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getBanner();
      }
    })
  }
  deleteBanner(table:string, id:number){
    console.log("table",id)
    const dialogRef= this.dialog.open(DeleteModelComponent,{
      width: '400px',
      data: { table, id }
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getBanner();
      }
    })
  }
}
