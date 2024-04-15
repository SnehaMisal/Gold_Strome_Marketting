import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { DeleteModelComponent } from '../delete-model/delete-model.component';
import { ProductService } from 'src/app/services/product.service';
import { Table } from '@fullcalendar/daygrid';
import { DescriptionComponent } from '../description/description.component';
import * as FSLightbox from 'fslightbox';
import { AdminListService } from 'src/app/services/admin-list.service';
import { MatSort } from '@angular/material/sort';
import { ToastrService } from 'ngx-toastr';
// declare const FSLightbox: any;

export interface PeriodicElement {
  prodPrice: number;
  id: number;
  prodName:string;
  prodImage:string;
  prodDesc:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, prodName: 'Angelica Ramos', prodPrice: 20 ,prodImage:'http://localhost:4200/assets/images/avatars/01.png',prodDesc:' simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard '},
  {id: 2, prodName: 'Airi Satou', prodPrice: 30,prodImage:'',prodDesc:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard'},
  {id: 3, prodName: 'Francis Mitcham	',  prodPrice: 70,prodImage:'',prodDesc:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard' },
  {id: 4, prodName: 'Jhon Michle',  prodPrice: 200,prodImage:'',prodDesc:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard'}
];

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  message: string = '';
  dataSourceLength: any;
  displayedColumns: string[] = ['id', 'prodName', 'prodPrice', 'prodImage','prodDesc','status','action'];
  // dataSource!: MatTableDataSource<Table>;
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  VoucherList: any;

  constructor(private toastr: ToastrService, private dialog: MatDialog, private service: AdminListService, private zone: NgZone) { }

  ngOnInit(): void {
    this.getVoucherList();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openLightbox(imageUrl: string) {
    const lightbox = FSLightbox();
    lightbox.open([imageUrl]);
  }
  getVoucherList(){
    this.service.getVoucherList().subscribe({
      next:(res)=>{
        if(res.error_code === 200){
          this.dataSource = new MatTableDataSource(res.data);
         this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator;
         this.dataSourceLength = this.dataSource.data.length 
          }
        else if(res.error_code === 404){
          this.VoucherList = []; // Ensure customers array is empty
          this.dataSource = new MatTableDataSource(this.VoucherList);
          this.dataSource.paginator = this.paginator;
          this.dataSourceLength = this.dataSource.data.length 
        }
        console.log("res",res);
        
        this.dataSource = new MatTableDataSource(res.data.reverse());
         this.dataSource.paginator = this.paginator;
      },
    error:(err)=>{
      alert(err)
    }
    })
  }
  addProduct(){
    const dialogRef = this.dialog.open( AddEditProductComponent, {
      width: '50%'
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getVoucherList();
      }
    })
  }
  editVoucher(data:any){
    const dialogRef = this.dialog.open( AddEditProductComponent, {
      width: '50%',
      data,
    })
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getVoucherList();
      }
    })
  }
  deleteVoucher(table:string, id:number){
    console.log("table",table)
    const dialogRef= this.dialog.open(DeleteModelComponent,{
      width: '400px',
     data: { table, id }
    });
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        this.getVoucherList();
      }
    })
  }
  toggleVoucher(data: any): void {
    //data.active = !data.active;
   
   data.status = data.status === 'Active' ? 'Inactive' : 'Active';
   this.service.updateVoucherStatus(data.VoucherId).subscribe({
     next:(res)=>{
       this.toastr.success(res.message);
     },
   error:(err)=>{
     console.log(err);
     // alert(err)
   }
   })
 }
  viewDescription(description: string){
    const dialogConfig = new MatDialogConfig();

    // Configure the position to be at the top
    dialogConfig.position = {
      top: '10%',
      //left: '0', // You can adjust this value as needed
    };
    const dialogRef = this.dialog.open( DescriptionComponent, {
      ...dialogConfig,
      width: '30%',
      data: { description },
    })
  }
}
