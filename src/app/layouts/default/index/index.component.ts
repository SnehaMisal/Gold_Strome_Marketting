import { AfterViewInit, Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute, ActivationEnd } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SettingState } from '../../../model/setting.model';
import { sidebarMenuStyleSelector, sidebarColorSelector, sidebarTypeSelector } from '../../../store/setting/selector';
import { ShepherdService } from 'angular-shepherd';
// import { defaultSteps, defaultStepOptions} from './steps';
@Component({
  selector: 'hui-index',
  templateUrl: './index.component.html',
  styles: [
  ]
})
export class IndexComponent implements OnInit, AfterViewInit {

  isBanner: boolean = false
  sidebarColorSelector$: Observable<string>;
  sidebarTypeSelector$: Observable<any>;
  sidebarMenuStyleSelector$: Observable<string>;

  constructor(private store: Store<{ settingObject: SettingState }>, private router: Router,private route: ActivatedRoute, private shepherdService: ShepherdService, @Inject(DOCUMENT) document: Document) {
    this.sidebarColorSelector$ = store.pipe(select(sidebarColorSelector));
    this.sidebarTypeSelector$ = store.pipe(select(sidebarTypeSelector));
    this.sidebarMenuStyleSelector$ = store.pipe(select(sidebarMenuStyleSelector));
    router.events.subscribe((event: any) => {
      if(event instanceof ActivationEnd) {
        const currentObj = event.snapshot.data
        if(currentObj['isBanner'] !== undefined) {
          this.isBanner = currentObj['isBanner']
        }
      }
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.shepherdService.defaultStepOptions = defaultStepOptions;
    // this.shepherdService.confirmCancel = false;
    // // @ts-ignore
    // this.shepherdService.addSteps(defaultSteps(this.shepherdService));
    // // check media screen
    // if (window.matchMedia('(min-width: 1198px)').matches) {
    //   setTimeout(() => {
    //     const liveCusomizer = this.route.snapshot.queryParams['live-customizer']
    //     if(liveCusomizer != 'open') {
    //       if(localStorage.getItem('tour') !== 'true') {
    //         this.shepherdService.start();
    //         document.querySelector('.shepherd-modal-overlay-container')?.classList.add('shepherd-modal-is-visible')
    //       }
    //     }
    //   }, 400)
    // }
  }
}
