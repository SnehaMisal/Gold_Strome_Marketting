import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  currentYearLong(): number {
    return new Date().getFullYear();
    }
@Input() appName! : string;
  constructor() { }

  ngOnInit(): void {
  }

}
