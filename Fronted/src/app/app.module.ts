import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './accueil/accueil.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { SanitizeHtmlPipe } from './shared/SynitizeHtmlPipe';
import { AppRoutingModule } from './app-routing.module';
import { ProcessingComponent } from './processing/processing.component';
import { AdvancedOpComponent } from './advanced-op/advanced-op.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { GuideComponent } from './guide/guide.component';
import { JipComponent } from './jip/jip.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    AccueilComponent,
    SearchComponent,
    LeftPanelComponent,
    RightPanelComponent,
    FileUploadComponent,
    SanitizeHtmlPipe,
    ProcessingComponent,
    AdvancedOpComponent,
    WelcomeComponent,
    AboutUsComponent,
    GuideComponent,
    JipComponent
  ],
  imports: [
    ShareButtonsModule,
    ShareIconsModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
