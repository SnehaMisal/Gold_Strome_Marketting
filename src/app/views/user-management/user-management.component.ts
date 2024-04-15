import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UserListService } from 'src/app/services/user-list.service';
import { ToastrService } from 'ngx-toastr';
import { DeleteModelComponent } from '../delete-model/delete-model.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TableUtil } from 'src/app/services/table';
export interface PeriodicElement {
  referralId: string;
  id: number;
  joinDate: string;
  fName:string;
  email:string;
  mobno:string;
  level:string;
  totalIncome:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, fName: 'Angelica Ramos',joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',level:'Level 1', totalIncome: 1050, referralId: '#tnst18', },
  {id: 2, fName: 'Airi Satou', joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',level:'Level 1', totalIncome: 1050, referralId: '#tnst348',},
  {id: 3, fName: 'Francis Mitcham	', joinDate:'2023-08-25T11:07:44.327Z	',email:'demo@gmail.com',mobno:'9999999999',level:'Level 1', totalIncome: 1050, referralId: '#tnst98' },
  {id: 4, fName: 'Jhon Michle', joinDate:'2023-08-25T11:07:44.327Z',email:'demo@gmail.com',mobno:'9999999999',level:'Level 1', totalIncome: 1050, referralId: '#tnst18' }
];


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
    currentPage = 0;
  // displayedColumns: string[] = ['id','referralId','joinDate', 'fName', 'email', 'mobno','level','totalIncome','status','action'];
  // dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['srNo','referralId','joinDate', 'fName', 'email', 'mobno','level','totalIncome','status','action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private service: UserListService, 
    private toastr: ToastrService, 
    private dialog: MatDialog,
    private route: ActivatedRoute,) {
   
   }
   options = [
    { id: '0', name: 'All Level' },
    { id: '1', name: 'Level 1' },
    { id: '2', name: 'Level 2' },
    { id: '3', name: 'Level 3' },
    { id: '4', name: 'Level 4' },
    { id: '5', name: 'Level 5' },
    { id: '6', name: 'Level 6' },
    { id: '7', name: 'Crown Level ' },
    // Add more options as needed
  ];
  selectedOption: any;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('Filter Value:', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
   // this.getUserList();
   this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    console.log("id",id);
    this.selectedOption = this.options.find(option => option.id === id);
  });

  }

  getUserList(){
      this.service.getUserList().subscribe({
        next:(res)=>{
        this.dataSource = new MatTableDataSource(res.reverse());
         this.dataSource.paginator = this.paginator;
      },
    error:(err)=>{
      alert(err)
    }
    })

  }

  toggleUser(user: any): void {
    user.active = !user.active;
    this.service.updateUser(user.id, user).subscribe(
      (res) => {
        this.toastr.success('User Status is Changed  Successfully!');
        // console.log('User updated successfully', res);
      },
      (error) => {
        // Reset the user's active status if the update fails
        user.active = !user.active;
      }
    );
  }
  // toggleUser(user: any): void {
  //   const dialogRef = this.dialog.open(ConfirmBoxComponent, {
  //     width: '250px',
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       // User clicked 'OK', proceed with the change
  //       user.active = !user.active;
  //       this.service.updateUser(user.id, user).subscribe(
  //         (res) => {
  //           // Display success message
  //           console.log('User updated successfully', res);
  //         },
  //         (error) => {
  //           // Reset the user's active status if the update fails
  //           user.active = !user.active;
  //           console.error('Error updating user', error);
  //         }
  //       );
  //     } else {
  //       // User clicked 'Cancel', do nothing
  //     }
  //   });
  // }
  deleteUser(table:string, id:number){
    console.log("delete id",id)
    const dialogRef= this.dialog.open(DeleteModelComponent,{
      width: '400px',
     // data:{data}
    });
    dialogRef.componentInstance.table = table;
    dialogRef.componentInstance.id = id;
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          console.log("val",val)
          // this.getProductList();
        }
      }
    })
  }
  exportToExcel(): void {
    
    TableUtil.exportTableToExcel("export_Excel", 'User List');
  }
  onChangeValue(event: any): void {
    console.log('Selected Value:', event.value);
    // You can perform any additional actions here based on the selected value
  }
}