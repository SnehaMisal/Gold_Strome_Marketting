import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditLevelComponent } from '../add-edit-level/add-edit-level.component';
import { LevelService } from 'src/app/services/level.service';
import { DeleteModelComponent } from '../delete-model/delete-model.component';
import { ToastrService } from 'ngx-toastr';


export interface PeriodicElement {
  minUser: string;
  id: number;
  l1Commission: number;
  levelName:string;
  l2Commission:number;
  downlineRefComm:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, levelName: 'Level 1',l1Commission:20, l2Commission:5, downlineRefComm: 0, minUser: "0 To 250" },
  {id: 2, levelName: 'Level 2', l1Commission:20, l2Commission:0, downlineRefComm: 1.2, minUser: "251 To 1000",},
  {id: 3, levelName: 'Level 3', l1Commission:20, l2Commission:0, downlineRefComm: 1.5, minUser: "1001 To 2500" },
  {id: 4, levelName: 'Level 4', l1Commission:20, l2Commission:0, downlineRefComm: 1.8, minUser: "2501 To 5000"},
  {id: 5, levelName: 'Level 5', l1Commission:20, l2Commission:0, downlineRefComm: 2, minUser: "5001 To 10000"},
  {id: 6, levelName: 'Level 6', l1Commission:20, l2Commission:0, downlineRefComm: 2.5, minUser: "10001 To 15000"},
  {id: 7, levelName: 'Crown Level', l1Commission:20, l2Commission:0, downlineRefComm: 3, minUser: "15001+"}
];


@Component({
  selector: 'app-manage-level',
  templateUrl: './manage-level.component.html',
  styleUrls: ['./manage-level.component.scss']
})
export class ManageLevelComponent implements OnInit {
  displayedColumns: string[] = ['id','levelName','minUser', 'allowCommission'];
  //dataSource!: MatTableDataSource<any>;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private service:LevelService,private dialog: MatDialog,private toastr: ToastrService) { }

  ngOnInit(): void {
   // this.getLevelList()
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getLevelList(){
    this.service.getLevelList().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res.reverse());
         this.dataSource.paginator = this.paginator;
      },
    error:(err)=>{
      alert(err)
    }
    })
  }
  addLevel(){
    const dialogRef = this.dialog.open( AddEditLevelComponent, {
      width: '400px'
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
         // this.getLevelList();
        }
      }
    })
  }
  editLevel(data:any){
    const dialogRef= this.dialog.open(AddEditLevelComponent,{
      width: '400px',
      data,
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
        //  this.getLevelList();
        }
      }
    })
  }
  deleteLevel(table: string,id: number){
    const dialogRef= this.dialog.open(DeleteModelComponent,{
      width: '400px',
     // data:{data}
    });
    dialogRef.componentInstance.table = table;
    dialogRef.componentInstance.id = id;
    
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
      //    this.getLevelList();
        }
      }
    })
  }
  toggleLevel(user: any): void {
    user.active = !user.active;

    this.service.updateLevel(user.id, user).subscribe(
      (res) => {
        this.toastr.success('Admin Status is Changed  Successfully!');
       // console.log('User updated successfully', res);
      },
      (error) => {
        // Reset the user's active status if the update fails
        user.active = !user.active;
      }
    );
  }
}
