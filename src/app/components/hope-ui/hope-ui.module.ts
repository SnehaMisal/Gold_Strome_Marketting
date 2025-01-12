// Core Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Plugin Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Partials Components
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { VerticalNavComponent } from './partials/vertical-nav/vertical-nav.component';
import { HeaderComponent } from './partials/header/header.component';
import { SubHeaderComponent } from './partials/sub-header/sub-header.component';

// Widgets Components
import { BrandLogoComponent } from './widgets/brand-logo/brand-logo.component';
import { BrandNameComponent } from './widgets/brand-name/brand-name.component';

// Elements Components
// import { RadioInputComponent } from './elements/radio-input/radio-input.component';
// import { CheckboxInputComponent } from './elements/checkbox-input/checkbox-input.component';
// import { HorizontalMenuComponent } from './navbar/horizontal-menu/horizontal-menu.component';
import { DefaultNavbarComponent } from './navbar/default-navbar/default-navbar.component';
// import { SectionTitleComponent } from './pages/design-system/section-title/section-title.component';
// import { SectionContentComponent } from './pages/design-system/section-content/section-content.component';
// import { ShareOffcanvasComponent } from './widgets/share-offcanvas/share-offcanvas.component';
// import { QuantityButtonComponent } from './elements/quantity-button/quantity-button.component';
import { LoaderComponent } from './loader/loader.component';
// import { AuthEffectComponent } from './widgets/auth-effect/auth-effect.component';
import { CardChartComponent } from './widgets/card-chart/card-chart.component';
// import { NouisliderComponent } from './elements/nouislider/nouislider.component';
// import { HorizontalListComponent } from './horizontal-liHorizontalListComponentst/horizontal-list.component';
// import { DualHorizontalMenuComponent } from './navbar/dual-horizontal-menu/dual-horizontal-menu.component';
import { FooterComponent } from './partials/footer/footer.component';
// import { DualCompactMenuComponent } from './navbar/dual-compact-menu/dual-compact-menu.component';
// import { SubNavbarComponent } from './navbar/sub-navbar/sub-navbar.component';




@NgModule({
  declarations: [
    SidebarComponent,
    BrandLogoComponent,
    BrandNameComponent,
    VerticalNavComponent,
    HeaderComponent,
    SubHeaderComponent,
    // RadioInputComponent,
    // CheckboxInputComponent,
    // HorizontalMenuComponent,
    DefaultNavbarComponent,
    // SectionTitleComponent,
    // SectionContentComponent,
    // ShareOffcanvasComponent,
    // QuantityButtonComponent,
    LoaderComponent,
    // AuthEffectComponent,
    CardChartComponent,
    // NouisliderComponent,
    // HorizontalListComponent,
    // DualHorizontalMenuComponent,
    FooterComponent,
    // DualCompactMenuComponent,
    // SubNavbarComponent
  ],
  exports: [
    SidebarComponent,
    BrandLogoComponent,
    BrandNameComponent,
    VerticalNavComponent,
    HeaderComponent,
    SubHeaderComponent,
    // RadioInputComponent,
    // CheckboxInputComponent,
    // SectionTitleComponent,
    // SectionContentComponent,
    // ShareOffcanvasComponent,
    // QuantityButtonComponent,
    LoaderComponent,
    // AuthEffectComponent,
    CardChartComponent,
    // HorizontalMenuComponent,
    // NouisliderComponent,
    // HorizontalListComponent,
    // DualHorizontalMenuComponent,
    FooterComponent,
    // DualCompactMenuComponent,
    // SubNavbarComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class HopeUiModule { }
