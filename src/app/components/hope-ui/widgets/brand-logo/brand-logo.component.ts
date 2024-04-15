import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hui-brand-logo',
  templateUrl: './brand-logo.component.html',
  styles: [
  ]
})
export class BrandLogoComponent implements OnInit {
  // Props for color
  @Input() color: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
