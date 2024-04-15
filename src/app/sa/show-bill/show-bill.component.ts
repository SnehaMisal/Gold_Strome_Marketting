import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GenrateBillComponent } from '../genrate-bill/genrate-bill.component';

@Component({
  selector: 'app-show-bill',
  templateUrl: './show-bill.component.html',
  styleUrls: ['./show-bill.component.scss']
})
export class ShowBillComponent implements OnInit {
  @ViewChild('printableSection') printableSection!: ElementRef ;
  constructor() { }

  ngOnInit(): void {
    
  }
  printCard() {
    const printableContent = this.printableSection.nativeElement.innerHTML;
    const originalContent = document.body.innerHTML;

    // Replace the entire content of the body with the content of the card
    document.body.innerHTML = printableContent;

    // Print the card
    window.print();

    // Restore the original content of the body
    document.body.innerHTML = originalContent;
  }
}


