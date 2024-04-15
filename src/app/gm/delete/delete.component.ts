import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  table: string;
  id: number;
  message: string = '';
  constructor(private toastr: ToastrService, public dialogRef: MatDialogRef<DeleteComponent>,
    @Inject (MAT_DIALOG_DATA) public data:{ table: string, id: number},private http: HttpClient
  ) { 
    this.table = data.table;
    this.id = data.id;
  }

  ngOnInit(): void {
  }
  confirmDelete(){
    if (this.table === 'gm_sm_Table') {
      this.dialogRef.close(this.id);
      this.http.delete(environment.apiUrl+ 'deleteSMandDeleteSMName/'+this.id).subscribe(
        (response:any) => {
          this.toastr.success(response.message);
          this.dialogRef.close(true);
        },
        error => {
            this.dialogRef.close(true);
        }
      );
    }else if (this.table === 'gm_dsm_Table') {
      this.dialogRef.close(this.id);
      this.http.delete(environment.apiUrl+ 'deleteDSMById/'+this.id).subscribe(
        (response:any) => {
          this.toastr.success(response.message);
          this.dialogRef.close(true);
        },
        error => {
            this.dialogRef.close(true);
        }
      );
    }else if (this.table === 'gm_sa_Table') {
      this.dialogRef.close(this.id);
      this.http.delete(environment.apiUrl+ 'deleteSAById/'+this.id).subscribe(
        (response:any) => {
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
