import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Dashboard/home/home.component';
import { SideNavComponent } from './Dashboard/side-nav/side-nav.component';
import { HeaderComponent } from './Dashboard/header/header.component';
import { FooterComponent } from './Dashboard/footer/footer.component';

import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { DataCardsComponent } from './Dashboard/Widgets/Cards/data-cards/data-cards.component';
import { UserCardsComponent } from './Dashboard/Widgets/Cards/user-cards/user-cards.component';
import { BarChartWidgetComponent } from './Dashboard/Widgets/Charts/bar-chart-widget/bar-chart-widget.component';
import { LineChartWidgetComponent } from './Dashboard/Widgets/Charts/line-chart-widget/line-chart-widget.component';
import { RadialChartWidgetComponent } from './Dashboard/Widgets/Charts/radial-chart-widget/radial-chart-widget.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafLetMapComponent } from './Dashboard/Widgets/Maps/leaf-let-map/leaf-let-map.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginWindowComponent } from './login/login-window/login-window.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './login/carousel/carousel.component';
import { RippleModule } from 'primeng/ripple';
import { ServiceStatusComponent } from './Dashboard/service-status/service-status.component';

//NgPrime Component
import { TableModule } from 'primeng/table';
import { DashBoardScreenComponent } from './Dashboard/Board/dash-board-screen/dash-board-screen.component';
import { DeviceBoardScreenComponent } from './Dashboard/Board/device-board-screen/device-board-screen.component';
import { ServiceBoardScreenComponent } from './Dashboard/Board/service-board-screen/service-board-screen.component';
import { DataBoardScreenComponent } from './Dashboard/Board/data-board-screen/data-board-screen.component';
import { AccountBoardScreenComponent } from './Dashboard/Board/account-board-screen/account-board-screen.component';
import { MetersCardComponent } from './Dashboard/Widgets/Cards/meters-card/meters-card.component';
import { DeviceTableComponent } from './Dashboard/Widgets/Tables/device-table/device-table.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';
import { SampletableComponent } from './Dashboard/Widgets/Tables/sampletable/sampletable.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { BadgeModule } from 'primeng/badge';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { ReadServiceComponent } from './Dashboard/Board/service-board-screen/read-service/read-service.component';
import { WriteServiceComponent } from './Dashboard/Board/service-board-screen/write-service/write-service.component';
import { MeterConfigurationComponent } from './Dashboard/Board/service-board-screen/meter-configuration/meter-configuration.component';
import { RequestLogComponent } from './Dashboard/Board/service-board-screen/request-log/request-log.component';

/* Prime NG MOdules */



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    HeaderComponent,
    FooterComponent,
    DataCardsComponent,
    UserCardsComponent,
    BarChartWidgetComponent,
    LineChartWidgetComponent,
    RadialChartWidgetComponent,
    LeafLetMapComponent,
    LoginWindowComponent,
    LoginComponent,
    CarouselComponent,
    ServiceStatusComponent,
    DashBoardScreenComponent,
    DeviceBoardScreenComponent,
    ServiceBoardScreenComponent,
    DataBoardScreenComponent,
    AccountBoardScreenComponent,
    MetersCardComponent,
    DeviceTableComponent,
    SampletableComponent,
    ReadServiceComponent,
    WriteServiceComponent,
    MeterConfigurationComponent,
    RequestLogComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ChartModule,
    LeafletModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RippleModule,
    TableModule,
    MultiSelectModule,
    TagModule,
    TabMenuModule,
    BadgeModule,
    TabViewModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
