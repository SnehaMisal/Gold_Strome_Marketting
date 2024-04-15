import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router,ActivationEnd, ActivatedRoute } from '@angular/router';
import { filter, Observable } from 'rxjs';
import {SettingState} from '../../../../model/setting.model';
import {theme_font_size} from '../../../../store/setting/actions';
import {themeFontSizeSelector} from '../../../../store/setting/selector';
@Component({
  selector: 'hui-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  themeFontSizeSelector$: Observable<string>;

  pageName: string = 'Dashboard'

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<{ settingObject: SettingState}>) {
    this.themeFontSizeSelector$ = store.pipe(select(themeFontSizeSelector));
    this.router.events.subscribe((val) => {
      if(val instanceof ActivationEnd) {
        const currentObj = val.snapshot.data
        if(currentObj['pageTitle'] !== undefined) {
          this.pageName = currentObj['pageTitle']
        }
      }
    });
  }

  ngOnInit(): void {
  }

  changeThemeFontSize(value: string) {
    this.store.dispatch(theme_font_size({value: value}))
  }
}
