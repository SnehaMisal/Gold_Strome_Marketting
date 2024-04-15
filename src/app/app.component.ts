import { Component, HostListener, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {update_setting} from './store/setting/actions';
import { Observable } from 'rxjs';
import {sidebar_type} from './store/setting/actions';
import * as SettingSelectors from './store/setting/selector';
import { Store, select } from '@ngrx/store';
import {SettingState} from './model/setting.model';
@Component({
  selector: 'hui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  sidebarTypeSelector$: Observable<any>;
  sidebarValue: any = []
  constructor(private store: Store<{ settingObject: SettingState}>) {
    this.store.dispatch(update_setting())
    this.sidebarTypeSelector$ = store.pipe(select(SettingSelectors.sidebarTypeSelector));
    this.sidebarTypeSelector$.subscribe((value) => this.sidebarValue = value)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const sidebarResponsive = document.querySelector('[data-sidebar="responsive"]')
    if (event.target.innerWidth < 1199) {
      this.store.dispatch(sidebar_type({value: [...this.sidebarValue,'sidebar-mini']}))
    } else {
      this.store.dispatch(sidebar_type({value: this.sidebarValue.filter((x: string) => x != 'sidebar-mini')}))
    }
  }
}
