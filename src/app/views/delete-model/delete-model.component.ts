import { HttpClient } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AdminListService } from 'src/app/services/admin-list.service';
import { LevelService } from 'src/app/services/level.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delete-model',
  templateUrl: './delete-model.component.html',
  styleUrls: ['./delete-model.component.scss']
})

export class  DeleteModelComponent implements OnInit {
  table: string;
  id: number;
  message: string = ''; 
  constructor(private service: AdminListService, private levelService: LevelService,public dialogRef: MatDialogRef<DeleteModelComponent>,
    @Inject (MAT_DIALOG_DATA) public data:{ table: string, id: number},private toastr: ToastrService,private http: HttpClient) { 
      this.table = data.table;
    this.id = data.id;
    }

  ngOnInit(): void {
  }
  confirmDelete(){
    console.log("id",this.id);
    
    if (this.table === 'ceoTable') {
      this.http.delete(environment.apiUrl+ 'deleteCEOandDeleteCEOName/'+this.id).subscribe(
        (response:any) => {
          console.log("delete res",response);
          this.toastr.success(response.message);
          this.dialogRef.close(true);
        },
        error => {
            this.dialogRef.close(true);
        }
      );
    } else if (this.table === 'GMTable') {
      this.http.delete(environment.apiUrl+ 'deleteGMandDeleteGMName/'+this.id).subscribe(
        (response:any) => {
          console.log("delete res",response);
          this.toastr.success(response.message);
          this.dialogRef.close(true);
        },
        error => {
            this.dialogRef.close(true);
        }
      );
    }else if (this.table === 'smTable') {
      this.http.delete(environment.apiUrl+ 'deleteSMandDeleteSMName/'+this.id).subscribe(
        (response:any) => {
          console.log("delete res",response);
          this.toastr.success(response.message);
          this.dialogRef.close(true);
        },
        error => {
            this.dialogRef.close(true);
        }
      );
    }else if (this.table === 'dsmTable') {
      this.http.delete(environment.apiUrl+ 'deleteDSMById/'+this.id).subscribe(
        (response:any) => {
          console.log("delete res",response);
          this.toastr.success(response.message);
          this.dialogRef.close(true);
        },
        error => {
            this.dialogRef.close(true);
        }
      );
    }else if (this.table === 'saTable') {
      this.http.delete(environment.apiUrl+ 'deleteSAById/'+this.id).subscribe(
        (response:any) => {
          console.log("delete res",response);
          this.toastr.success(response.message);
          this.dialogRef.close(true);
        },
        error => {
            this.dialogRef.close(true);
        }
      );
    }
    else if (this.table === 'levelTable') {
      console.log("this.data.id",this.id)
      this.levelService.deleteLevel(this.id).subscribe(() => {
       // this.activeModal.close('deleted');
         this.dialogRef.close(this.id);
         this.toastr.success('Level Deleted Successfully!');
      });
    }
     else if(this.table === 'voucherTable'){
      this.http.delete(environment.apiUrl+ 'deleteVoucher/'+this.id).subscribe(
        (response:any) => {
          console.log("delete res",response);
          this.toastr.success(response.message);
          this.dialogRef.close(true);
        },
        error => {
            this.dialogRef.close(true);
        }
      );
    }
    else if(this.table === 'approvalTable'){
      this.toastr.success('Approval Deleted Successfully!');
    }
    else if(this.table === 'userTable'){
      this.toastr.success('User Deleted Successfully!');
    }
     else if(this.table === 'revenueTable' ){
      console.log("this.data.id",this.id);
      this.toastr.success('Revenue Deleted Successfully!');
    }
    else if(this.table === 'bannerTable'){
      this.http.delete(environment.apiUrl+ 'deleteBanner/'+this.id).subscribe(
        (response:any) => {
          console.log("delete res",response);
          this.toastr.success(response.message);
          this.dialogRef.close(true);
        },
        error => {
            this.dialogRef.close(true);
        }
      );

      
    }
  }
}
