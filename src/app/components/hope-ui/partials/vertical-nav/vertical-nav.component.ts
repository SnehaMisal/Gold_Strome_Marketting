import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd, ActivationEnd  } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'hui-vertical-nav',
  templateUrl: './vertical-nav.component.html',
  styles: [
  ]
})
export class VerticalNavComponent implements OnInit {

  public menuStyles = true;
  public eCommerce = true;
  public social = true;
  public blog = true;
  public appointment = true;
  public fileManager = true;
  public specialPages = true;
  public products = true;
  public blogmain =  true;
  public sidebarAuth = true;
  public sidebarUser = true;
  public utilitiesError = true;
  public sidebarPlugins = true;
  public sidebarWidget = true;
  public sidebarMaps = true;
  public sidebarForm = true;
  public sidebarAuth1 = true;
  public sidebarAuth2 = true;
  public sidebarAuth3 = true;
  public sidebarAuth4 = true;
  public shop = true;
  public mail = true;
  public table = true;
  public icons = true;
  public friends = true;
  public profile = true;
  public event = true;
  public group = true;

  currentRoute: string = '/';
  routeName: string = '';
  accoardionCollapse: string = ''


  loginType: any;
  loginTypeString: any;
  constructor(private router: Router) {
    router.events.subscribe((event: any) => {
      if(event instanceof ActivationEnd) {
        const currentObj = event.snapshot.data
        if(currentObj['routeName'] !== undefined) {
          this.routeName = currentObj['routeName']
          this.accoardionCollapse = this.routeName
        }
      }
      if(event instanceof NavigationEnd) {
        this.currentRoute = event.url
      }
    })
  }

  ngOnInit(): void {

    //const loginType = localStorage.getItem('LoginType');
    // const loginType = storedLoginType ? parseInt(storedLoginType, 10) : environment.LoginType;
    this.loginType = <string>localStorage.getItem(environment.LoginType)
   //const loginType = this.loginTypeString ? parseInt(this.loginTypeString, 10) : null;
    // console.log("loginTypeString", storedLoginType);
    console.log("loginType.........",this.loginType);
    //this.loginType=loginType
    
    
    // switch(loginType){

    // }
  }

  checkAccording(value: string): boolean {
    return this.accoardionCollapse.includes(value)
  }

  changeAccordion(value: string): string {
   
    if (value === this.accoardionCollapse && value.includes('.')) {
      const menu = this.accoardionCollapse.split('.')
      return this.accoardionCollapse = menu[menu.length - 2]
    }
    if (value !== this.accoardionCollapse && this.accoardionCollapse.includes(value)) {
      return this.accoardionCollapse = ''
    }
    if (value !== this.accoardionCollapse) {
      return this.accoardionCollapse = value
    }
    if (value === this.accoardionCollapse) {
      return this.accoardionCollapse = ''
    }
    return this.accoardionCollapse = ''
  }
}
