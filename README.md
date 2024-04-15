# hope-ui Dashboard Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Working Steps

#### Create new Layout page
-. Create layout module `ng g m layouts/default --routing=true`
- Create module layout module `ng g m modules/e-commerce --routing=true`
-. Create default index component `ng g c layouts/default/index --export=true -s --skipTests=true --viewEncapsulation=None`
3. Add Route in `layout2-routing.module.ts` 
    ```
    const routes: Routes = [
      {
        path: '',
        component: IndexComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('../../views/views.module').then(m => m.ViewsModule),
          }
        ]
      }
    ];
    ```
4. After append routes in `app-routing.module.ts`
    ```
    const routes: Routes = [
      { path: '', loadChildren: () => import('./layouts/default/default.module').then(m => m.DefaultModule) },
    ];
    ```

#### Create new Page
2. Create page component `ng g c views/{pagename} --export=true -s --skipTests=true`
2. Create group page component `ng g c views/tables/{basic-table} --export=true -s --skipTests=true`
3. Add Route in `views-routing.module.ts` 
    ```
    import  { PageNameComponent } from './page/page.component'
    const routes: Routes = [
      {
        path: 'page-name',
        component: PageNameComponent
      }
    ];
    ```



#### Create new Component
Create component 
  
   ` ng g c components/hope-ui/component-name --export=true -s --skipTests=true`

Real example
  ` ng g c components/hope-ui/widgets/card --export=true -s --skipTests=true`

Module Component Real example   
` ng g c components/modules/e-commerce/widget/product-list --export=true -s --skipTests=true`

Export Component

    @NgModule({
      declarations: [LoaderComponent, ScrollTopComponent],
      exports: [
        LoaderComponent,
        ScrollTopComponent,
        /** --- Add Your Component -- **/
      ],
    
## Add new CSS & JS
 Append CSS in **angular.json** 

        "architect": {
                 "build": {
                   "builder": "@angular-devkit/build-angular:browser",
                   "options": {
                     .....
                     "styles": [
                       "src/styles.css",
                       /* -- ADD CSS -- */
                     ]


 ### Append JS in **angular.json**  

```
"architect": {
  "build": {
    "builder": "@angular-devkitbuild-angular:browser",
    "options": {
      .....
      "scripts": [
        "node_modules/jquery/dist/jquery.min.js",
        /* -- ADD JS -- */
      ],
```

## Create new Pipe
pipe for custom functions
  
   ` ng g p pipes/pipe-name --skipTests=true`


## Store
#### Create Action
```
export const theme_scheme = createAction(
  '[Setting] theme_scheme',
  props<{ value: string }>()
);
```

#### Create Reducer
```
import { theme_scheme } from './actions';
import { SettingState } from './interfaces'

export const SettingReducer = createReducer(
  initialState,
  on(theme_scheme, (orignalState: SettingState, { value }): any => {
    const state = cloneDeep(orignalState)
    state.setting.theme_scheme.value = value
    updateBodyClass(Choices.SchemeChoice, state.setting.theme_scheme.value)
    updateColorRootVar(state.setting.theme_scheme.value, state.setting.theme_color, Choices.ColorChoice)
    updateStorage(state.saveLocal, state.storeKey, createSettingObj(state))
    return state
  }),
);

// new function

on(theme_scheme_direction, (orignalState: SettingState, { value }): any => {
    const state = cloneDeep(orignalState)
    state.setting.theme_scheme_direction.value = value
    return state
  }),

```

#### Create Selector
```
export const saveLocal = (state: AppState): String => state.setting.saveLocal;
```
## Build App
    ng build --aot=true --extractCss=true --prod=true --serviceWorker=true --baseUrl=http://localhost:
#### After
    firebase deploy

## Plugins

https://ng-bootstrap.github.io/#/components/accordion/examples

https://apexcharts.com/angular-chart-demos/

https://www.npmjs.com/package/ng2-flatpickr

https://fullcalendar.io/docs/angular

https://www.npmjs.com/package/ngx-countup

https://www.npmjs.com/package/angular-smooth-scrollbar

https://l-lin.github.io/angular-datatables/#/getting-started

https://swiperjs.com/angular

https://www.npmjs.com/package/ngx-three
https://medium.com/geekculture/hello-cube-your-first-three-js-scene-in-angular-176c44b9c6c0

https://github.com/ng-select/ng-select

https://www.npmjs.com/package/angular-prism

https://www.npmjs.com/package/ngx-quill

https://www.npmjs.com/package/ngx-image-cropper

https://www.npmjs.com/package/angular-signature-pad

https://www.tutsmake.com/angular-13-sweetalert2-example/



